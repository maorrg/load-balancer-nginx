var express = require('express') //llamamos a Express
var app = express()               

var port = process.argv[2] || 8080  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})

app.get('/health', function(req, res) {
  res.json({ mensaje: `API corriendo en el puerto ${port} respondiendo.` })   
})

app.listen(port)
console.log('API escuchando en el puerto ' + port)