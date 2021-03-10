const request = require('request');
const fs = require('fs');

const arg = process.argv.slice(2);
const url = arg[0];
const path = arg[1];

const pageFetch = function(url) {

  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    fs.writeFile(path, body, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('done!');
      }
    });
  });
};

pageFetch(url);




