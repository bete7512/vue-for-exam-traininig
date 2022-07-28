import { Express } from 'express'
import user from './database/checkquery/findeuser'
var express = require('express')
import bodyParser from 'body-parser'
import router from './routes/route'
import sth from './anonymous/forgothandle/forgot'
import signup from './anonymous/signup'
const app:Express = express();
app.use(express.json())
app.use(bodyParser.json())
// app.use('/',router)
app.post('/login',async (req,res)=>{
    const {username,password} = req.body.input
    console.log(req.body);
    console.log(username)
    await signup(req,res);
    // res.status(200).json({
    //     token:"here"
    // })
})
app.listen(3000, () => {
    console.log("hello wow typescript starts its work");

})