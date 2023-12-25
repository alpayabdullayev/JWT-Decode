import express from "express"
import { createUser, deleteUser, getAllUsers, getUserById } from "../controller/userController.js"
import verifyToken from "../middleware/verifyToken.js"

export const UserRoutes = express.Router()

UserRoutes.get("/users",getAllUsers)
UserRoutes.get("/users/:id",getUserById)
UserRoutes.post("/users",verifyToken,createUser)
UserRoutes.delete("/users/:id",verifyToken,deleteUser)
