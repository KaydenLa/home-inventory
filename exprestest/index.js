const express = require("express");

const app = express();

var cors = require('cors')

const bodyParser = require('body-parser');
const { randomInt } = require("crypto");
// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//console.log(app);
//app.use((req, res) => {
//    console.log("We got a new request!");
//console.dir(req)
//res.send({school: 'University of Houston'})
//res.send('<h1 style="color: purple">This is a test page!<h1>')
//})

app.get('/', (req, res) => {
    console.log("We got a new request on /!");
    res.send('<h1>This is a test page</h1>')
})

app.get('/red', (req, res) => {
    console.log("We got a new request on /red!");
    res.send('<h1 style="color: red">This page is red</h1>')
})


app.post('/text', (req, res) => {
    console.log("we got a new post on /text")
    res.send('<h1>Post request is received!')
})

app.get('/sub/:subdir', (req, res) => {
    console.log((req.params));
    const { subdir } = req.params;
    res.send(`<h1>In the ${subdir} directory</h1>`)
})

// This is a test GET method that is going to be used by the front end.
// When the front end calls this GET method, eventually, this backend component will talk to the MongoDB server to access the real data base.
//For now, this snippet will pretend to be the database by sending a hard-coded JSPON object response.
app.get('/ingredients', cors(), (req, res) => {
    console.log("GET /ingredients requested.")
    res.json(
        [{ id: '1', item: "Sandwich Bread", status: "full" }, { id: '2', item: "Tortila", status: "Low" }, { id: '3', item: "Elbow noodles", status: "Half" }, { id: '4', item: "Rice", status: "Half" }]

    );
})

app.post('/ingredients', cors(), (req, res) => {
    console.log("POST /ingredients requested.")
    const { itemName, itemStatus } = req.query;
    var itemId = req.query.itemId;

    //Aisgn an ID if not provided by query
    if (itemId === ""){
        itemId = randomInt(1000)
    }
    

  // Output the item ID and name to the console
  console.log(`Item ID: ${itemId}, Item Name: ${itemName}, Item Status: ${itemStatus}`);
  console.log(req.query);
    res.json(
        {
            data: {
                id: itemId,
                item: itemName,
                status: itemStatus
            }
        }
    );
})

app.get('*', (req, res) => {
    console.log("We got a new request that failed on page /??")
    res.send('<h1 style="color: red">Error 404, not a valid path.</h1>')
})
app.listen(3000, () =>
    console.log(`App listening on port 3000!`)
);

//npm instal express
//npm install -g nodemon
//%appdata% -> npm -> remove nodemon.ps1
//nodemon -v
