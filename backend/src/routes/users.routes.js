import { Router } from "express";
import { setUser } from "../controllers/users.controller.js";

const router = Router()

router.post("/users", setUser)

export default router