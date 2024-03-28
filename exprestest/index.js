const express = require("express");

const app = express();

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
    const {subdir} = req.params;
    res.send(`<h1>In the ${subdir} directory</h1>`)
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
