const Link = require("../models/link");

//const User = require("../models/user");

exports.postLink = async (req, res) => {
    console.log("HIT POST LINK");
    try {
        // validation
        const { title, setUrlPreview, link } = req.body;
        if (!title) {
            return res.json({
                error: "Title is required",
            });
        }
        if (!link) {
            return res.json({
                error: "Link  is required",
            });
        }

        try {
            const link = await Link({
                ...req.body,
                postedBy: req.user._id,
            }).save();
            res.json(link);
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
};
