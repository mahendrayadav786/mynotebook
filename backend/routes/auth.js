const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{

obj = {

    name : "mahendra",
    age: 19
}


  res.json(obj)


});

module.exports = router