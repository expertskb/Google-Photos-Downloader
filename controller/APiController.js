const request = require("request");

const APiController = {
  Index: (req, res) => {
    res.send('Hello API INDEX');
  },
  Create: (req, res) => {
    const _API_URL = process.env.API_URL || "https://gkit.eu.org/api/";
    const _APP_URL = process.env.APP_URL || "http://localhost:300";
    const url = req.query.link;

    if (url) {
      // Make a GET request to the API with the provided link parameter
      request.get(`${_API_URL}link?url=${url}`, (error, response, body) => {
        if (error) {
          // console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          // Handle the API response here
          var ssss = JSON.parse(body);
          if(ssss.status === 200) {
            res.send(`${_APP_URL}download?file=${btoa(url)}`);
          }
        }
      });
    } else {
      res.status(400).json({ error: 'Missing link parameter in the request' });
    }
  }
};

module.exports = APiController;

  
