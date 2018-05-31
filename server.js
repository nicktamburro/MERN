const express = require('express');
//importing the npm express


const app = express();
app.use(express.static('static'));
//this 'static' parameter is referring to the directory names static, 
//that's where it will find the index.html

app.listen(3000, function() {
	console.log("App started on port 3000");
})
