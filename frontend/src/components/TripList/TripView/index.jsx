import { IconButton, makeStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react';
import { deleteTrip } from '../../../api/crudOperations';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  summary: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
}));

export const TripView = ({ trip, userID, setVersion }) => {
  const classes = useStyles();

  const handleTripDelete = async () => {
    await deleteTrip(userID, trip._id);
    setVersion((prev) => prev + 1);
  };

  return (
    <div className={classes.root} onClick={() => console.log('trip clicked')}>
      <Accordion>
        <AccordionSummary aria-controls='panel1a-content' id='panel1a-header'>
          <div className={classes.summary}>
            <Typography className={classes.heading}>{trip.title}</Typography>
            <span style={{ flexGrow: 1 }} />
            <IconButton aria-label='delete' color='secondary' onClick={() => handleTripDelete()}>
              <DeleteForeverIcon />
            </IconButton>
          </div>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};
