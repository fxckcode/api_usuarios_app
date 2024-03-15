import { Router } from "express";
import { getUsers, setUser } from "../controllers/users.controller.js";

const router = Router()
router.get("/users", getUsers)
router.post("/users", setUser)

export default router