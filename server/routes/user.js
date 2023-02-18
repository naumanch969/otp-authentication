import express from "express"
const router = express.Router()
import {
    getAllUsers,
    register,
    sendRegisterOTP,
    sendForgetPasswordOTP,
    changePassword,
    login,
    deleteAllUsers
} from "../controllers/user.js"


router.get('/get-all-users', getAllUsers)

router.post('/send-register-otp', sendRegisterOTP)
router.post('/register', register)

router.put('/login', login)

router.post('/send-forget-pass-otp', sendForgetPasswordOTP)
router.put('/change-password', changePassword)

router.delete('/delete_all_users', deleteAllUsers)


export default router