import { IconButton, makeStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react';

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

export const TripView = ({ trip }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary aria-controls='panel1a-content' id='panel1a-header'>
          <div className={classes.summary}>
            <Typography className={classes.heading}>{trip.title}</Typography>
            <span style={{ flexGrow: 1 }} />
            <IconButton aria-label='delete' color='secondary'>
              <DeleteForeverIcon />
            </IconButton>
          </div>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};
