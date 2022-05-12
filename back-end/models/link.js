const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const linkSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        link: {
            type: String,
            required: true,
            trim: true,
        },
        urlPreview: {},
        postedBy: {
            type: ObjectId,
            ref: "User",
        },
        views: { type: Number, default: 0 },
        likes: [{ type: ObjectId, ref: "User" }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Link", linkSchema);
