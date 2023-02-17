import express from "express"

const router = express.Router()


//import controllers
import { FIND_STUDENT,CREATE_STUDENT } from "../controllers/student.controller.js"

router.get("/find-student/:id", FIND_STUDENT);

router.post("/create-student", CREATE_STUDENT);

export default router