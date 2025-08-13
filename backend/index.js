
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const dotenv = require('dotenv')



dotenv.config()

mongoose.connect("mongodb+srv://mapbox:Hems1234@cluster0.cxqqiy9.mongodb.net/mapbox?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
  console.log("conected to mongodb successfuly")
  
}).catch((err) => console.log(" error in conning to mongodb", err))




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
