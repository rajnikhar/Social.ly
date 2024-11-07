import Post from "../models/postModel.js";
import User from "../models/userModel.js";
import { Response } from "../utils/response.js"

export const createPost = async (req, res) => {
    try {
        // Parsing body data
        const { caption, mentions, image, location } = req.body

        // Checking body data
        if(!caption || !mentions || !image) {
            return Response(res, 400, false, message.missingFieldsMessage);
        }

        // Create post
        const post = await Post.create({
            caption,
            image,
            location
        })

        // Adding all the mentioned users
        let user;
        for (const user_name of mentions) {
            user = await User.findOne({ username: user_name });
            post.mentions.push(user._id);
        }

        // Adding owner of the post
        post.owner = req.user._id;
        await post.save();

        user = await User.findById(req.user._id);
        user.posts.push(post._id);
        await user.save();

        Response(res, 200, true, message.postCreatedMessage, post);
        
    } catch (error) {
        Response(res, 500, false, error.message);
    }
}

export const getPost = async (req, res) => {
    try {
        // Parsing id
        const { id } = req.params;

        // Finding & checking post
        const post = await Post.findById(id);
        if(!post) {
            return Response(res, 404, false, message.postNotFoundMessage);
        }

        // Checking user
        if(post.owner.toString() !== req.user._id.toString()) {
            return Response(res, 403, false, message.unAuthorizedMessage);
        }

        // Sending Response
        Response(res, 200, true, message.userProfileFoundMessage, post);
        
    } catch (error) {
        Response(res, 500, false, error.message);
    }
}

export const updatePost = async (req, res) => {
    try {
        
    } catch (error) {
        Response(res, 500, false, error.message);
    }
}

export const deletePost = async (req, res) => {
    try {
        
    } catch (error) {
        Response(res, 500, false, error.message);
    }
}

export const getAllPosts = async (req, res) => {
    try {
        
    } catch (error) {
        Response(res, 500, false, error.message);
    }
}