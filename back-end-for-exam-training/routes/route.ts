import login from "../anonymous/login"
import signup from "../anonymous/signup"
import express from "express"
import { appendFile } from "fs"
const router = express.Router()

router.route('/login').post(login)
router.route('/register').post(signup);
export default router;