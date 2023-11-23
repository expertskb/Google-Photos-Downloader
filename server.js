const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const path = require('path');
const routing = require('./shakib/router');
const apirouter = require('./shakib/api');
dotenv.config();
const app = express();
const router = express.Router();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routing);
app.use('/download', routing);
app.use('/api', apirouter);


const PORT = process.env.PORT ? process.env.PORT : 3000;
app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});