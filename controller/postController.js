const express = require('express');
const router = express.Router();
const posts = require('../database/posts.js');

router.get('/', (req, res) => {
    res.json({
        posts:posts
    })
    return;
  });

  router.get('/:id', (req, res) => {
    posts.forEach(post => {
        if(post.id.toString()=== req.params.id.toString()){
            res.json({post : post});
            return;
        }        
    });  
  });

  router.get('/user/:user_id', (req, res) => {
    const userPosts = [];
    posts.forEach(post => {
        if(post.userId.toString()=== req.params.user_id.toString()){
            userPosts.push(post);
        }        
    });  
    res.json({posts : userPosts});
    return;
  });
  
module.exports = router;