import express from "express";
import { createPost, deletePost, getAllPosts, getPost, updatePost } from "../controllers/postController.js";
import { isAuthenticated } from "../middleware/auth.js";

const postRouter = express.Router();

postRouter.post("/create", isAuthenticated, createPost);

postRouter.route("/:id")
    .get(isAuthenticated, getPost)
    .patch(isAuthenticated, updatePost)
    .delete(isAuthenticated, deletePost);

postRouter.get("/all", isAuthenticated, getAllPosts);



export default postRouter;