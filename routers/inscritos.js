const express = require('express');
const router  = express.Router();

router.get("/", function (req, res) {

    res.send("try")
})
router.get("/:id", function (req, res) {

    res.send("try")
})
router.post("/", function (req, res) {

    res.send("try")
})
router.patch("/:id", function (req, res) {

    res.send("try")
})
router.delete("/:id", function (req, res) {

    res.send("try")
})

module.exports = router;