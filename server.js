// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
var express = require('express');

// Start up an instance of app
const app = express();

/*Dependencies*/
var bodyParser = require('body-parser');
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('Website'));

// Setup Server
 const port = 8080;
 const server = app.listen (port,listening);
 function listening (){
    console.log('Server is Running');
    console.log('Server in running on port'+ port);
 }

 const data =[];
//GET Route
// Respond with JS object when a GET request is made to the homepage
app.get('/all', function (req, res) {
  res.send(data);
  console.log("Server get request");
})

//POST Route
app.post('/dataon', dataon);
function dataon(req,res){
data.push(req.body);
console.log(data);
}