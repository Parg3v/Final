var express = require("express");
var app = express();

app.use(express.static("public"))

app.get("/", function(req, res){
    res.redirect("index.html");
})

app.get("/*", function(req,res){
    res.send("<h1>Error: Not Found &#128546	</h1>")
})

app.listen(3000, function(){
    console.log("Started");
})