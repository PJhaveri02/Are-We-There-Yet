import React, { useState, useContext } from 'react';
import Searchbar from './Searchbar';
import DestinationList from './DestinationList';
import moment from 'moment';
import { Button, TextField } from '@material-ui/core';
import { AuthContext } from '../../../App';
import { createTrip } from '../../../api/crudOperations';
import { ResourceContext } from '../../../pages/Homepage';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function NewTripModal(props) {
  const { open, onCancel } = props;
  const currentDate = moment().format('YYYY-MM-DD');
  const [user] = useContext(AuthContext);
  const { setVersion } = useContext(ResourceContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [destinations, setDestinations] = useState([]);

  const onDestinationSelect = (destination, lat, lng) => {
    setDestinations([
      ...destinations,
      {
        startDate: selectedDate,
        locationName: destination,
        timeSpent: 1,
        lat: lat,
        lng: lng,
      },
    ]);
  };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setSelectedDate(currentDate);
    setDestinations([]);
    onCancel();
  };

  const handleConfirm = async () => {
    if (title.length === 0) {
      alert('Please enter a title');
      return;
    }
    if (destinations.length === 0) {
      alert('Please enter at least one destination');
      return;
    }

    await createTrip(user.id, {
      title: title,
      description: description,
      stops: destinations,
      userID: user.id,
    });

    setVersion((prev) => prev + 1);
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>New Trip</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='title'
            label='Title'
            type='title'
            fullWidth
            autoComplete='off'
            defaultValue={title}
            onInput={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='description'
            label='Description'
            type='description'
            fullWidth
            autoComplete='off'
            defaultValue={description}
            onInput={(e) => setDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='date'
            variant='outlined'
            label='Date'
            type='date'
            defaultValue={currentDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          <Searchbar onDestinationSelect={onDestinationSelect} />
          <DestinationList destinations={destinations} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleConfirm} color='primary'>
            confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewTripModal;
