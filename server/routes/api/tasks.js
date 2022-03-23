const express = require("express");
const router = express.Router();
const taskCtrl = require("../../controllers/tasks");

// GET all tasks
router.get("/", taskCtrl.index);

// POST new tasks
router.post("/", taskCtrl.create);

module.exports = router;
