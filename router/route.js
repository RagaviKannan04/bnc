const Con = require('../controller/userCon')

const express = require('express')


const router = express.Router();

router.get('/getdata',Con.getdata)
router.post('/sendata',Con.postdata)

module.exports = router;