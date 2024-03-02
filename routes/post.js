const express =require('express');
const router=express.Router();
const Post = require('../models/post');

router.post('/addPost', async (req,res)=>{
    try{
        data= req.body;
        post= new Post(data);
        savedPost = await post.save();
        res.send(savedPost);

    }catch (error){
        res.send(error)
    }
})


router.get('/getallPosts',async (req,res)=>{
    try{
        posts= await Post.find();
        res.send(posts)
    }catch(error){
        res.send(error)
    }
})


router.get('/getbyID/:id',async (req,res)=>{
    try{
        id=req.params.id;
        post= await Post.findById({_id: id})
        res.send(post)
    }catch(error){
        res.send(error)
    }
})

router.put('/updatePost/:id',async(req,res)=>{
    try{
        id=req.params.id;
        newData= req.body;
        updatedpost= await Post.findByIdAndUpdate({_id:id},newData);
        res.send(updatedpost);
    }catch(error){
        res.send(error)
    }
})


router.delete('/deletePost/:id',async(req,res)=>{
    try{
        id=req.params.id;
        delpost= await Post.findByIdAndDelete({_id:id});
        res.send(delpost);
    }catch(error){
        res.send(error)
    }
})
module.exports= router ;