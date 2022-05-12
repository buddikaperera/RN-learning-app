const express = require("express");

const router = express.Router();

//controller

const { postLink } = require("../controllers/link");
const { requiresSignIn } = require("../controllers/auth");

router.post("/post-link", requiresSignIn, postLink);
//router.get("/read", read);
//router.put("/update", requiresSignIn, update);
//router.delete("/remove", requiresSignIn, remove);
module.exports = router;
