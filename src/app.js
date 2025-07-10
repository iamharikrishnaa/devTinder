const express = require('express')

const app =  express()

app.use("/user",(req,res,next)=>{
    //route handler
    console.log('handling the route user 1')
    next();
    res.send("route handler 1")
    
},
(req,res)=>{
    //route handler
    console.log('handling the route user 2')
    res.send("route handler 2")}

)

app.listen(7777,()=>{
    console.log('server is listening on port 7777')
})