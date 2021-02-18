const express = require('express');
const router = express.Router();
const users = require('../database/users.js');

router.get('/', (req, res) => {
    res.json({
        users:users
    })
    return;
  });

  router.get('/:id', (req, res) => {
    users.forEach(user => {
        if(user.id.toString()=== req.params.id.toString()){
            res.json({user : user});
            return;
        }        
    });  

  });


module.exports = router;