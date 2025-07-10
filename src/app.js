const express = require('express')

const app = express()

app.use("/test",(req,res)=>{
    res.send("hello world from the server")
})

app.listen(7777,()=>{
    console.log('succussfully listening in port 7777...')
})