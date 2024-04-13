const express = require('express');
var bodyParser = require('body-parser');
var url = require("url");
var mysql = require('mysql');

var conn=mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "tours"
});

const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', urlencodedParser, (req, res) => {
	var name=req.body.fullName;
	var email=req.body.fullEmail;
	var op=req.body.size;
    res.writeHead(200, {"Content-Type": "text/html"});

    if(op=="smallTour"){
        var queryString="insert into users values('"+name+"','"+email+"','"+op+"')";
        conn.query(queryString, function(error,data){
            if(error){
                throw error;
            }
            else{
                console.log("Add Success");
            }
        })
    }

    else if(op=="largeTour"){
        var queryString="insert into users values('"+name+"','"+email+"','"+op+"')";
        conn.query(queryString, function(error,data){
            if(error){
                throw error;
            }
            else{
                console.log("Add Success");
            }
        })
    }
});app.listen(3000);