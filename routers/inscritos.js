const express = require('express');
const router  = express.Router();

router.get("/", function (req, res) {

    res.send("get all success");
})
router.get("/:id", function (req, res) {

    res.send("get this id sucess")
})
router.post("/", function (req, res) {

    res.send("post success")
})
router.patch("/:id", function (req, res) {

    res.send("update this id success")
})
router.delete("/:id", function (req, res) {

    res.send("delete this id success")
})

module.exports = router;