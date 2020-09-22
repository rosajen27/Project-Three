
const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    title: { type: String },
    author: { type: Array },
    snippet: { type: String },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;