import { IconButton, makeStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useContext } from 'react';
import { deleteTrip } from '../../../api/crudOperations';
import { ResourceContext } from '../../../pages/Homepage';

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
  const { setTrip, setSliderPosition } = useContext(ResourceContext);

  const handleTripDelete = async () => {
    await deleteTrip(userID, trip._id);
    setVersion((prev) => prev + 1);
  };

  const handleClickTrip = () => {
    setSliderPosition(1);
    setTrip(trip);
  }

  return (
    <Accordion className={classes.root} onClick={() => handleClickTrip()}>
      <AccordionSummary
        aria-controls='panel1a-content'
        id='panel1a-header'
        expandIcon={<ExpandMoreIcon />}
      >
        <div className={classes.summary}>
          <Typography className={classes.heading}>{trip.title}</Typography>
          <span style={{ flexGrow: 1 }} />
          <IconButton aria-label='delete' color='primary' onClick={() => handleTripDelete()}>
            <DeleteForeverIcon />
          </IconButton>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{trip.description ? trip.description : 'No trip description'}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
