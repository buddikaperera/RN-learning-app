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

exports.links = async (req, res) => {
    console.log("HIT POST links");

    try {
        const allLinks = await Link.find().sort({ createdAt: -1 }).limit(0, 5);
        res.status(200).json(allLinks); ///latest one on top
    } catch (error) {
        console.log(error);
    }
};

exports.viewCount = async (req, res) => {
    console.log(req.params.linkId);

    try {
        const link = await Link.findByIdAndUpdate(
            req.params.linkId,
            { $inc: { views: 1 } },
            //{ upsert: true }
            { new: true }
        );
        console.log("Link View", link);
        res.status(200).json({ ok: true });
    } catch (error) {
        console.log(error);
    }
};
