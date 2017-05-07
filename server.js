var express = require("express")

var app = express()

app.get('/:time', function(req, res) {
    var input = req.params.time
    //determine whether input is an integer
    var date = (input == +input) ? new Date(+input) : new Date(input)
      var options = {year: 'numeric', month: 'long', day: 'numeric' };
      var dateObject = {
          'unix': date ? date.getTime() : null,
          'natural': date == "Invalid Date" ? null : date.toLocaleDateString('en-US', options)
      }
      res.send(dateObject)
})

app.get('/', function(req, res) {
    var html = '<h1>Welcome to my timestamp microservice</h1>'
    + '<p>Just append a date or unix timestamp in the url and hit enter.\n'
    + 'Then see the result of your query!</p>'
    + '<br>'
    + '<h2>Example usage:</h2>'
    + '<p>https://timestamp-ms-williambowen.c9users.io/May%207,%202017<p>'
    + '<p>https://timestamp-ms-williambowen.c9users.io/1494115200000<p>'
    + '<h2>Example output:</h2>'
    + '{"unix": 1494115200000, "natural": "May 7, 2017"}'
    
    res.send(html)
})

app.listen(process.env.PORT || 8080, function() {
    console.log("app listening on port 8080")
})