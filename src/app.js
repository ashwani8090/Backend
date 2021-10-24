const express = require('express');
const mongoose = require('mongoose');
const app = express();
let router = require('./router');
var path = require('path')
const keys = require('./keys.js');
const cors = require("cors");
const cookiesSession = require('cookie-session');
const port = process.env.PORT || 8086;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

mongoose.connect('mongodb://localhost:27017/users',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { console.log('connected to db') }).catch(err => { console.log(err) });


app.use(cookiesSession({
    maxAge: 20 * 60 * 60 * 1000,
    keys: [keys.session.cookiesSession]

}));


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));
app.use("/", router);

app.listen(port, function (req, res) {

    console.log("connected");

});
