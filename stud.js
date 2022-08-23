var express = require('express')

var bodyParser = require('body-parser')

var mongoose=require('mongoose')
const { loginModel } = require('./models/login')
const { profileModel } = require('./models/profile')


mongoose.connect("mongodb+srv://Aiswarya:aishumongodb123@cluster0.1btyusi.mongodb.net/students?retryWrites=true&w=majority",{useNewUrlParser:true})

 

var app= express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("STUDENTS APP")
})
app.post('/login',(req,res)=>{

    var loginObject=new loginModel(req.body)

    loginObject.save(
        (error)=>{
            if(error){
                res.send(error)
            }else{
                res.json({'ststus':"success"})
            }
        }
    )
})
app.post('/profile',(req,res)=>{
    var profileObject=new profileModel(req.body)
   
    profileObject.save(
        (error)=>{
            if(error){
                res.send(error)
            }else{
                res.json({'status':"success"})
            }
        }
    )
})

app.get('/viewlogin',async(req,res)=>{
 
try{
    var result= await loginModel.find()
    res.json(result)
}
catch(error){
    res.send(error)
}

})

app.get('/viewprofile',async(req,res)=>{
    try{
        var result= await profileModel.find()
        res.json(result)
    }
    catch(error){
        res.send(error)
    }
})


app.listen(process.env.PORT||3002,()=>{

    console.log("Server started at http://localhost:3002/")
})