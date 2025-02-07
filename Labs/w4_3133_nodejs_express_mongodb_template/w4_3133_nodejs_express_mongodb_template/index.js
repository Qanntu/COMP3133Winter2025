const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
const DB_NAME = "db_comp3133_employee"
const DB_USER_NAME = "lizzarbsch"
const DB_PASSWORD = 'CalidezCa30@@'
const CLUSTER_ID = 'zpjpx'
const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.${CLUSTER_ID}.mongodb.net/?retryWrites=true&w=majority`




mongoose.connect(DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(employeeRouter);

app.listen(8081, () => { console.log('Server is running...') });
