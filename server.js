const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

//create the express app

const app = express()

//create middleware to handle serving the app
app.use("/",serveStatic(path.join(__dirname, '/public')))

//serve index by default
app.get('/',function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

//create default port to serv the app
const port = process.env.PORT || 5000
app.listen(port)

//log feedback that this is running
console.log('server started on port' + port)
