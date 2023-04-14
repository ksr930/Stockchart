const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors= require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
mongoose.connect('mongodb://localhost/NIFTY',{ useNewUrlParser: true ,useUnifiedTopology: true },(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log('database connected')
    }
})

let niftyschema= new mongoose.Schema({
    Open:Number,
    High:Number,
    Low:Number,
    Close:Number,
Time:Date

})

let DataNifty = mongoose.model('DataNifty',niftyschema);


// Arjun
app.get('/data',(req,res)=>{
    DataNifty.find({},(err,d)=>{
        if(err)
        {
            console.log(err)
        } 
        else{
      
         res.send(d);
        }
    })
   
})



app.listen(5000,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('server connected')
    }
})
