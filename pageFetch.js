const request = require('request');
const fs = require('fs');

const arg = process.argv.slice(2);
const url = arg[0];
const path = arg[1];

const pageFetch = function(url) {

  request(url, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    fs.writeFile(path, body, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Downloaded and saved to ${path}`);
      }
    });
  });
};

pageFetch(url);




