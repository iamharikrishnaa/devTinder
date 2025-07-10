const express = require('express')

const app =  express()

app.use("/admin",(req,res,next)=>{
    const token = 'abcd'
    const isAuthorised = token === 'abc'
    if(!isAuthorised){
        res.status(401).send('unauthorised')
    }
    else{
        next()
    }

})


app.get("/admin/getAllData",(req,res)=>{
    res.send("all data send")
})
app.listen(7777,()=>{
    console.log('server is listening on port 7777')
})