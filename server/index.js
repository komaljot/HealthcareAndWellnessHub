require("dotenv").config()
const  express=require('express')
const mongoose = require('mongoose')
const User = require('./models/users')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const generateAuthToken=require('./jwtTokenGen')
const app = express()

app.use(bodyParser.json(),bodyParser.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database connected")
}).catch((e)=>{
    console.log(e)
})

app.get('/',(req,res)=>{
    res.send("hello")
})

app.post('/login', async (req,res) => {
    const userInfo = req.body
    let userData
    try{
        userData = await User.findOne({email:userInfo.email})
    }
    catch(err){
        console.log(err)
    }
    if(!userData){
        res.status(401).send({msg:"User not found"})
    }
    else{
        const validPassword = await bcrypt.compare(userData.Password,userInfo.Password).catch((err)=>{
            console.log(err,"err while matching pwd")
            res.status(500).send({msg:"Internal Server Error"})
        })
        if(!validPassword){
            res.send({msg:"Invalid Password"})
        }

        const token = generateAuthToken(userData)
        res.status(200).send({
            data:{
                token:token,
                userData
            },
            msg:"Logged in successfully"
        })
    }
})

app.post('/signup',async (req,res)=>{
    const user = req.body
    const cnt = await User.count({email:user.email})
    console.log("count : ",cnt)
    const check = await User.findOne({email:user.email})
    console.log(check)
    if(check){
        res.send('User already exists')
    }
    else{
        user.Password = await bcrypt.hash(req.body.Password,10)
        const dbUser = new User({
            FirstName : user.FirstName,
            LastName : user.LastName,
            Email : user.Email.toLowerCase(),
            Password: user.Password
        })
        await dbUser.save()
        res.send({message:"Done"})
    }
})

app.listen(5090,()=>{
    console.log('Server running on port 5090')
})