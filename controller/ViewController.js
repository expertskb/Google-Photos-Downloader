const request = require('request');

const ViewController = {
    Index: (req, res) => {
            const _NAME = process.env.APP_NAME ? process.env.APP_NAME : "Google Photos Downloader";
            const _URL= process.env.APP_URL ? process.env.APP_URL: "http://localhost:3000/";
            res.render('index', {
                "_NAME": _NAME,
                "_URL": _URL
            });
        },
        Download: (req, res) => {
            const _NAME = process.env.APP_NAME ? process.env.APP_NAME : "Google Photos Downloader";
            const _URL = process.env.APP_URL ? process.env.APP_URL : "http://localhost:3000/";
            const _API_URL = process.env.API_URL || "https://gkit.eu.org/api/";
            const file = atob(req.query.file);
        
            if (file) {
                request.get(`${_API_URL}link?url=${file}`, (error, response, body) => {
                    if (error) {
                        res.status(500).send('Internal Server Error');
                    } else {
                        try {
                            var ssss = JSON.parse(body);
                            let skb = ssss.url;
                            let eskb = ssss.eurl;
        
                            if (ssss.status === 200 || ssss.url !== null) {
                                res.render('download', {
                                    "_NAME": _NAME,
                                    "_URL": _URL,
                                    "_D_URL": skb,
                                    "_E_URL": eskb
                                });
                            } else {
                                // Handle the case where the API returns an error
                                res.status(500).send('Error in API response');
                            }
                        } catch (parseError) {
                            // Handle the case where the API response is not a valid JSON
                            res.status(500).send('Error parsing API response');
                        }
                    }
                });
            } else {
                res.status(400).send("File Not Found");
            }
        }
        
}

module.exports = ViewController;
