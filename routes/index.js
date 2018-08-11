const express = require('express');
const router = express.Router();
const Client = require("node-rest-client").Client;

let client = new Client();

router.get('/', function(req, res, next) {
	res.render("index.ejs");
});


router.get('/:ifsc', function(req, res, next) {
	let searchedIfcs = req.params.ifsc; 
	let fetchUrl = `https://ifsc.razorpay.com/${searchedIfcs}`;
	client.get(fetchUrl,function (data) {
	if(data==="Not Found"){
		res.render("error.ejs");
	}
	else
  	res.render("result.ejs",{"data":data});
  })
});


module.exports = router;
