import PostMessage from "../models/postMessage.js"

export const getPost = async (req, res) => {
    try{
        const postMessages =  await PostMessage.find();

        res.status(200).json(postMessages)
    } catch(err){
        res.status(404).json({message: err.message})
    }
}

export const createPost = (req, res) => {
    const body = req.body;
    try {
        
    } catch (error) {
        
    }
}