import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { createComment } from "../controllers/comment.js";

const router = express.Router();

router.route("/create").patch(verifyToken, createComment);
// router.route("/remove").patch(verifyToken);

export default router;
