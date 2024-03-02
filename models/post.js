const mongoose = require("mongoose");

const Post = mongoose.model('Post', {
    content:{
        type: String
    },
    likes:{
        type: Number
    },
    shares:{
        type: Number
    },
    media:{
        type: String
    }
})
module.exports = Post;