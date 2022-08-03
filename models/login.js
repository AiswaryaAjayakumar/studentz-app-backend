var mongoose=require('mongoose')

var loginSchema=new mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    password:{
        type:String,Number,
        required:true
    }


}

    
)


var loginModel= mongoose.model('logins',loginSchema)

module.exports={loginModel}