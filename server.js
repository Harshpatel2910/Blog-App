const http = require('http');

const fs = require('fs');

const _ = require('lodash');


//lodash


const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);
  const num = _.random(0, 20);

  console.log(num);

  const greet = _.once(() => {

    console.log("hello");
  });
  // set header content type
 greet();
 greet();
  res.setHeader('Content-Type', 'text/html');
  // send the html file

  let path = './views/';


  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;

    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-us':

      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;

    default:
      path += '404.html';
      res.statusCode = 404;
      break;

  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    else {
      // res.write(data);
      // res.end();


      res.end(data);
    }
  });

});

// localhost is the default value for 2nd argument
server.listen(4000, 'localhost', () => {
  console.log('listening for requests on port 4000');
});

/*
status code describe the type of the response sent to the browser

200 - ok
301 - Resource moves
404 - Not found
500 - Internal server error


=>

100 Range - informational responses
200 Range - success codes
300 Range - codes for redirects
400 Range - user or client error codes
500 Range - server error codes



*/
/*
we don't upload load module
in github

we just write npm install that look all the dependencies and download it



Express
-> this is framework for handling request and all kind of stuff


->middle ware basically function that are run between request and response

*/