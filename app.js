var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
	{name: "Salmon", image:"https://pixabay.com/get/e136b80728f31c2ad65a5854ee4d459fe270e7c818b4134197f1c17aafef_340.jpg"},
	{name: "Granite", image:"https://pixabay.com/get/eb35b70b2df6033ed95c4518b7444795ea76e5d004b0144395f2c079a4e5b7_340.jpg"},
	{name: "Random", image:"https://pixabay.com/get/ea34b20d29fc013ed95c4518b7444795ea76e5d004b0144395f2c079a4e5b7_340.jpg"},
		{name: "Salmon", image:"https://pixabay.com/get/e136b80728f31c2ad65a5854ee4d459fe270e7c818b4134197f1c17aafef_340.jpg"},
	{name: "Granite", image:"https://pixabay.com/get/eb35b70b2df6033ed95c4518b7444795ea76e5d004b0144395f2c079a4e5b7_340.jpg"},
	{name: "Random", image:"https://pixabay.com/get/ea34b20d29fc013ed95c4518b7444795ea76e5d004b0144395f2c079a4e5b7_340.jpg"},
		{name: "Salmon", image:"https://pixabay.com/get/e136b80728f31c2ad65a5854ee4d459fe270e7c818b4134197f1c17aafef_340.jpg"},
	{name: "Granite", image:"https://pixabay.com/get/eb35b70b2df6033ed95c4518b7444795ea76e5d004b0144395f2c079a4e5b7_340.jpg"},
	{name: "Random", image:"https://pixabay.com/get/ea34b20d29fc013ed95c4518b7444795ea76e5d004b0144395f2c079a4e5b7_340.jpg"},
		{name: "Salmon", image:"https://pixabay.com/get/e136b80728f31c2ad65a5854ee4d459fe270e7c818b4134197f1c17aafef_340.jpg"},
	{name: "Granite", image:"https://pixabay.com/get/eb35b70b2df6033ed95c4518b7444795ea76e5d004b0144395f2c079a4e5b7_340.jpg"},
	{name: "Random", image:"https://pixabay.com/get/ea34b20d29fc013ed95c4518b7444795ea76e5d004b0144395f2c079a4e5b7_340.jpg"}
]

app.get("/", function(req, res){
	res.render('landing');
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds: campgrounds})
});

app.post("/campgrounds", function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;

	var newCampground = {name: name, image: image}

	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.listen(5000, function(){
	console.log("The YelpCamp server has started!");
});