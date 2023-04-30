require("dotenv").config()
const  express=require('express')
const mongoose = require('mongoose')
const User = require('./models/users')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const cors=require('cors')
const generateAuthToken = require("./jwtTokenGen")

// const jwt = require('jsonwebtoken')
const authorization = require("./utils/middleware")

const app = express()

app.use(cors())
app.use(bodyParser.json(),bodyParser.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database connected")
}).catch((e)=>{
    console.log(e)
})

app.get('/',(req,res)=>{
    res.send("hello")
})


app.post('/signup',async (req,res)=>{
    const {FirstName,LastName,Email,Password} = req.body;
    const user = await User.find({Email})
    if(user.Email ){
        return res.send(false)
    }
    const saltRounds = 10
    const pwdHash = await bcrypt.hash(Password,saltRounds)
    const newUser = new User({
        FirstName,
        LastName,
        Email,
        Password : pwdHash
    })
    const savedUser = await newUser.save()
    res.send(true)
})

app.post('/login', async (req,res) => {
    const userInfo = req.body
    console.log(userInfo)
    let userData
    try{
        userData = await User.findOne({Email:userInfo.Email})
        console.log(userData)
    }
    catch(err){
        console.log(err)
    }
    if(!userData){
        res.status(401).send({msg:"User not found"})
    }
    else{
        const validPassword = await bcrypt.compare(userInfo.Password,userData.Password).catch((err)=>{
            console.log(err,"err while matching pwd")
            res.status(500).send({msg:"Internal Server Error"})
        })
        console.log(validPassword)
        if(!validPassword){
            res.send({msg:"Invalid Password"})
        }

        const token = generateAuthToken(userData)
        res.status(200).json({
            token,
            userData,
            msg:"Logged in successfully"
        })
    }
})

app.get('/login',authorization, async (req,res,next)=>{
    const {authData} = req
    const {authStatus,user,err} = authData
    if(!authStatus){
        res.json({authStatus, user:null,err})
    }
    else{
        res.json({authStatus,user,err})
    }
})

// app.post('/login', async (req,res)=>{
//     const {Email,Password} = req.body;
//     const user = await User.findOne({Email})
//     console.log(user)
//     if(user !== null){
//         const checkPwd = await bcrypt.compare(password,user.password)
//         const tokenForUser = {
//             username : user.username,
//             id:user._id
//         }
//         const token = jwt.sign(tokenForUser, process.env.SECRET)
//         if(checkPwd){
//             return res.send({token,user})
//         }
//         else{
//             return res.status(401).json({
//                 error:"Username or password not valid"
//             })
//         }
//     }
//     else{
//         return res.status(401).json({
//             error:"Username or password not valid"
//         })
//     }
// })

app.listen(5090,()=>{
    console.log('Server running on port 5090')
})