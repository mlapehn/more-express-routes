var express = require('express')
var app = express();

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco",
                "Ultra Taco"
               ];

// create an array to make the colors the real color
// var color = [
//                 "green",
//                 "blue",
//                 "orange",
//                 "yellow",
//                 ];

app.get("/pick_a_color/:color", function (req, res) {
    var color = req.params.color;
        res.send("Your color is " + color);
})

app.get("/pickanumber", function (req, res) {
   var number = parseInt(req.query.number);
   var correctAnswer = 7;
   if (number === correctAnswer) {
       res.send("Nailed it!");
   } else if (number < correctAnswer) {
       res.send("Too Low");
   } else {
       res.send("Too High");
   }

   res.send("You picked " + number + "!");
   
});

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/burgers/:index", function (req, res) {
    // need var for the index of the params
    var index = req.params.index;
    // need var to push 
    var selection = burgers[index];
    // send selection
    res.send(selection);
    //send all the burgers     
    res.send(burgers.join(", "));
});

app.get("/tacos/:index", function (req, res) {
    var index = req.params.index;
    var choices = tacos[index];
    //send all the tacos       
    res.send(choices);    
    //res.send(tacos.join(", "));
});

// app add crashes server
// app.get("/add", function(req, res){
//    var x = req.query.x;
//    var y = req.query.y;
//    var total = x+y;
//   res.send( total );
// });

app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});