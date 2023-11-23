const express = require('express');
const apiroute = express.Router();
const ApiController = require('../controller/api/APiController'); // Assuming the correct file name is ApiController

apiroute.all('/', ApiController.Index);

apiroute.all('/create', ApiController.Create);

module.exports = apiroute;
