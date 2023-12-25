import express from "express"
import { login, register } from "../controller/authController.js"

export const AuthRoutes = express.Router()

AuthRoutes.post("/register",register)
AuthRoutes.post("/login",login)