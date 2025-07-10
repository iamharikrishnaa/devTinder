const express = require('express')

const app =  express()

app.get("/getUserData",(req,res)=>{
    throw new Error('gfghfhg')
    res.send('user data sent')
})

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send('something went wrong');
    }
})

app.listen(7777,()=>{
    console.log('server is listening on port 7777')
})