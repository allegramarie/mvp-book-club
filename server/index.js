var express = require('express');
var parse = require('body-parser');
var db = require('../database');
var path = require('path')
const {fetch, add} = require('../database/index.js');
var goodReadsJSONResponse = require('../helpers/goodreads.js')

let app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(parse.json())

app.post('/books', function(req, res){
	//get request from the user
	console.log(req.body.title)
	goodReadsJSONResponse(req.body.title, function andThenSend(data){
		add(data);
		res.status(201).send(data);
		})
	//sending a post request to the express server
	
})

app.get('/books', function(req, res){
		fetch().then((data) => {
		console.log("Request data on app.post", data)
		res.status(200).send(data);
	})
})

let port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log(`listening on ${port}!`)
})