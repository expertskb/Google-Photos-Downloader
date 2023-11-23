const express = require('express');
const route = express.Router();
const ViewController = require('../controller/ViewController');

route.all('/',  ViewController.Index);
route.all('/download',  ViewController.Download);

module.exports = route;