const express = require('express')

const app =  express()

const {adminAuth} = require('./middlewares/auth')

app.use("/admin",adminAuth)


app.get("/admin/getAllData",(req,res)=>{
    res.send("all data send")
})
app.listen(7777,()=>{
    console.log('server is listening on port 7777')
})