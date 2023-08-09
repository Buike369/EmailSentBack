const express = require('express')
const router = express.Router()
const { formSubmit } = require("../controller/post.js")


router.post("/form", formSubmit)

module.exports = router