var express = require('express')

var bodyParser = require('body-parser')

var mongoose=require('mongoose')
const { loginModel } = require('./models/login')
const { profileModel } = require('./models/profile')

 

var app= express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("STUDENTS APP")
})
app.post('/login',(req,res)=>{

    var loginObject=new loginModel(req.body)
    res.json(loginObject)


    
})
app.post('/profile',(req,res)=>{
    var profileObject=new profileModel(req.body)
    res.json(profileObject)


})
app.listen(process.env.POST||3002,()=>{

    console.log("Server started at http://localhost:3002/")
})