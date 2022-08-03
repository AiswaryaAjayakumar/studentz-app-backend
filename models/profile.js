var mongoose=require('mongoose')

var profileSchema= new mongoose.Schema(

    {
        name:{
            type:String,
            required:true
        },
        roll:{
            type:Number,
            required:true
        },
        adm:{
            type:Number,
            required:true

        },
        col:{
          type:String,
          required:true
        }
    }
)

var profileModel = mongoose.model('profiles',profileSchema)

module.exports={profileModel}