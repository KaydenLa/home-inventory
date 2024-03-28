const express = require("express");

const app = express();

//console.log(app);
app.use((req, res) => {
    console.log("We got a new request!");
    //console.dir(req)
    //res.send({school: 'University of Houston'})
    res.send('<h1 style="color: purple">This is a test page!<h1>')
}

)

app.listen(3000, () => 
    console.log(`Hello world app listening on port 3000!`)
);

//npm instal express
//npm install -g nodemon
//%appdata% -> npm -> remove nodemon.ps1
//nodemon -v
