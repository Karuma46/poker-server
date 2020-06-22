var express = require('express')
var router = express.Router()

var insert = require('../config/ops')
var selectAll = require('../config/ops') 

router.get('/users', (req, res) => {
    users = selectAll('user')
    // console.log(users)
})

router.post('/users', (req, res) => {
    var vals = Object.values(req.body)
    var keys = Object.keys(req.body)

    console.log(vals,keys)
    if(insert('user', keys, vals)){
        res.send("success")
    } else {
        res.send("fail")
    }
})

module.exports = router