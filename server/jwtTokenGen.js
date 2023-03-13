const jwt = require('jsonwebtoken')

const generateAuthToken=(data)=>{
    data=JSON.stringify(data)
    const token = jwt.sign(data,"dfyguhijo")
    return token
}

module.exports=generateAuthToken