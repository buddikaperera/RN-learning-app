const express = require("express");

const router = express.Router();

// controllers
const {
    signup,
    signin,
    forgotPassword,
    resetPassword,
    uploadImage,
    requiresSignIn,
    updatePassword,
} = require("../controllers/auth");

router.get("/", (req, res) => {
    return res.json({
        data: "hello world from kaloraat auth API",
    });
});
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/upload-image", requiresSignIn, uploadImage);
router.post("/update-password", requiresSignIn, updatePassword);

module.exports = router;
