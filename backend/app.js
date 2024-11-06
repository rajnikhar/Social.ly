import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import postRouter from "./routes/postRoute.js";


dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from the server!");
});

app.use(express.json());


// Create routes for
// 1. Verify Login Otp ✅
// 2. Create auth middleware ✅
// 3. Get My profile ✅
// 4. Update profile ✅
// 5. Logout User ✅
// 6. Create post controller

// Complete middleware auth.js

app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);


export default app;