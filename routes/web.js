import express from "express"
import userController from "../controller/userController.js"


const router = express.Router()

router.get('/', userController.home)
router.get('/signup', userController.userSignUp)
router.post('/signup', userController.createUserDoc)
router.get('/login', userController.userLogIn)
router.post('/login', userController.verifyUser)

export default router;