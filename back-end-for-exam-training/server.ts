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
app.use('/',router)

app.listen(3000, () => {
    console.log("hello wow typescript starts its work");

})