const adminAuth = (req,res,next)=>{
    const token = 'abcd'
    const isAuthorised = token === 'abcd'
    if(!isAuthorised){
        res.status(401).send('unauthorised')
    }
    else{
        next()
    }

}

module.exports = {
    adminAuth,
}