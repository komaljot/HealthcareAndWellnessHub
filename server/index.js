const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/users')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json(),bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://gurmehar1553:gunnu123@cluster0.d5dls2w.mongodb.net/db_user').then(()=>{
    console.log("Database connected")
}).catch((e)=>{
    console.log(e)
})

app.get('/',(req,res)=>{
    res.send("hello")
})

app.post('/signup',async (req,res)=>{
    const user = req.body
    const check = await User.findOne({email:user.email})
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