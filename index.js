const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())
// truyền trưc tiếp thông qua biến
// app.get('/:name/:age', function (req, res) {
//     res.send(req.params.name)
// })

// truyền tư params
// app.get('/', function (req, res) {
   
// })
 
app.post('/cong' , (req , res) => {
    console.log(req.body)
})
 
app.listen(3000)