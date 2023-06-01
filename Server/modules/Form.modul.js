import mongoose from 'mongoose'

const {Schema} = monggose

const monggose=require('mongoose')

const schema =monggose.Schema

const formSchema = new schema({

    username:{
        type:String,
        require:true
    },
    emai:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    }




},{

    timestamps:true
})


const form = monggose.model('formData',formSchema);
module.exports=form;