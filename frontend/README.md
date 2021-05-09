# Introductory Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
This project also uses [Google Maps API](https://developers.google.com/maps/gmp-get-started) & [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview) in order for users to create and visualise their trips.

## Prerequisites

1. [Node.js](https://nodejs.org/en/): v14.15.1 was used during development.

# Running the Frontend

1. In a second terminal (currently in Are-We-There-Yet directory), move to the frontend folder of this project by running the following command: `cd frontend`
2. Execute `npm ci` or `npm install` to install all the dependencies (Note: If there is an error message, go the the Error in Running Frontend section below).
3. To run the frontend, enter the following command: `npm start`
4. If successful, you should see this in your terminal

![image](https://user-images.githubusercontent.com/55341679/117530782-24abed80-b033-11eb-87f5-1674b2ef6658.png)

4a. You should also be able to see this on your browser if you are at following URL: `http://localhost:3000`

<img src="https://user-images.githubusercontent.com/55341679/117530909-d6e3b500-b033-11eb-9450-a33fb8f347c9.png" width="500" height="600">

# Logging In

If you do not wish to create an account or you have forgotten your login credentials, you can use the following account:  
Email: `abc1234@testing.com`  
Password: `Testing334`

# Error in Running Frontend

If you see an error message similar to the one shown below, then run the command `npm update --force`. This should solve the problem.
![image](https://user-images.githubusercontent.com/55341679/117530319-946ca900-b030-11eb-993e-4d086abe1dfc.png)

# Testing

Testing is done using the [Jest](https://jestjs.io/) framework.

## Running tests

1. If you haven't already, move the current working directory to the frontend folder using the following command: `cd frontend`
2. Execute `npm test`
