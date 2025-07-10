const express = require('express')

const app = express()


app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params)
    res.send({firstName:'hari',lastName:'krishna'})
})


app.listen(7777,()=>{
    console.log('succussfully listening in port 7777...')
})