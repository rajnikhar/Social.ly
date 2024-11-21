import { message } from "../utils/message.js";
import { Response } from "../utils/response.js"
import cloudinary from "cloudinary"
import Post from "../models/postModel.js"
import User from "../models/userModel.js";

export const createPost = async (req, res) => {
    try {
         // importing post model
       const {image,caption,location,owner,mentions}=req.body; 
       
       if(!caption){
        return Response(res,400,false,message.missingFieldMessage);
       }
       if(!image){
        return Response(res,400,false,message.imageMissingMessage);
    }
    //    if(!owner){
    //        return Response(res,400,false,message.notOwner);
    //    }
        
       const newPost= new Post({
           image,caption,location,owner,mentions,
       });
    //    Set owner details
    post.owner=req.user._id;
    await post.save();

    // set post in user
    let user=await User.findById(req.user._id);
    user.posts.unshift
   
       const savedPost=await newPost.save();
       return Response(res,201,true,)
       
    } 
    catch (error) {
        Response(res, 500, false, error.message);
    }
}
