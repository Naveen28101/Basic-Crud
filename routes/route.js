import express from "express";
import addUser from "../controller/user-controller.js";
import getAllUser from "../controller/get-all-user.js";
import deleteUser from "../controller/delete-user.js";
import getUser from "../controller/getAuser.js";
import updateUser from "../controller/update-user.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/getallusers", getAllUser);
router.delete("/delete/:id", deleteUser);
router.get("/user/:id", getUser);
router.put("/update/:id", updateUser);

export default router;
