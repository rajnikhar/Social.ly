import express from "express";
import { getMyPosts, getMyProfile, loginUser, logoutUser, registerUser, resendLoginOtp, resendOtp, updateUser, verifyLoginOtp, verifyUser } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/verify/:id", verifyUser);

userRouter.get("/resend/:id", resendOtp);

userRouter.post("/login", loginUser);

userRouter.post("/login/verify/:id", verifyLoginOtp);

userRouter.get("/login/resend/:id", resendLoginOtp);

userRouter.get("/logout", isAuthenticated, logoutUser);

userRouter.get("/my/profile", isAuthenticated, getMyProfile);

userRouter.patch("/update/profile", isAuthenticated, updateUser);

userRouter.get("/my/posts", isAuthenticated, getMyPosts);

export default userRouter