import axios from 'axios';

const baseURL = 'http://localhost:3001/api/trips';

export const retrieveAllTrips = async (userID, setLoading, setTrips) => {
  setLoading(true);
  const response = await axios({
    method: 'GET',
    url: baseURL,
    params: {
      userID: userID,
    },
  });
  setTrips(response.data);
  setLoading(false);
};

export const deleteTrip = async (userID, tripID) => {
  return await axios({
    method: 'DELETE',
    url: `${baseURL}/${tripID}`,
    data: {
      userID: userID,
    },
  });
};

export const createTrip = async (userID, trip) => {
  return await axios({
    method: 'POST',
    url: baseURL,
    data: {
      userID: userID,
      trip: trip,
    },
  });
};

export const updateTrip = async (userID, trip, tripID) => {
  return await axios({
    method: 'PUT',
    url: `${baseURL}/${tripID}`,
    data: {
      userID: userID,
      trip: trip,
    },
  });
};
