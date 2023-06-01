const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors')
require('dotenv').config();

const form = require('./modules/Form.modul')

const Form = express();

const url=process.env.ATLAS_URL;

Form.use(cors())

Form.use(express.json())

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("Database connection successful");
  
})
.catch((error) => {
  console.error("Database connection error:", error);
});
Form.get('/',(req,res)=>{

    res.json({"msg":"Hi Am Json"})
})

Form.post('./form',(req,res)=>{

  const {username,email,password}=req.body;

  const formData = new form({username,email,password});

  formData.save();


})

Form.listen('8001',()=>{

    console.log("app running Successfuy")
})