var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
<<<<<<< HEAD
  response.send('Hello World! test321')
=======
  response.send('Hello World! test 123')
>>>>>>> 63455d412fe54e7b7f7d907a6259d4dc90d014bf
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
