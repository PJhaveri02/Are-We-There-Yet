# Introductory Information
The Are-We-There-Yet backend server runs on the [Express](https://expressjs.com/) framework which is based on [Node.js](https://nodejs.org/en/). We used [MongoDB](https://www.mongodb.com/) to store the trips and we used [Mongoose](https://mongoosejs.com/) to access and modify the database.

# Prerequisites
1. [Node.js](https://nodejs.org/en/): v14.15.1 was used during development.
2. [MongoDB](https://www.mongodb.com/)

# Running the backend
1. In your terminal, move to the backend folder of this project by running the following command: `cd backend`
2. Execute `npm ci` or `npm install` to install all the dependencies
3. To run the backend, enter the following command: `npm start`
4. If successful, you should see this on your terminal

![image](https://user-images.githubusercontent.com/55341679/117530190-eb25b300-b02f-11eb-9a25-ac369fad602f.png)

# Error in Running backend
If you see an error message similar to the one shown below, then run the command `npm update --force`. This should solve the problem.
![image](https://user-images.githubusercontent.com/55341679/117530319-946ca900-b030-11eb-993e-4d086abe1dfc.png)

# Testing
Testing is done using the [Jest](https://jestjs.io/) framework combined with an in-memory MongoDB instance ([mongodb-memory-server](https://github.com/nodkz/mongodb-memory-server)).

## Running tests
1. Ensure that a local MongoDB instance is **NOT** running (use `Ctrl` + `C` at the command line to stop)
2. `cd` to `backend`
3. Execute `npm test`

# Documentation
1. [Database Schema](https://github.com/PJhaveri02/Are-We-There-Yet/wiki/Database-Schema)
2. [API Endpoints](https://github.com/PJhaveri02/Are-We-There-Yet/wiki/API-Endpoints)
