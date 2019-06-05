const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false,
        unique: false
    },

    password: String,
    verifyPassword: String,

    BlogCreated: [{type: mongoose.Schema.Types.ObjectId, ref: "Blog"}]
})

const User = mongoose.model('User', authSchema);

module.exports = User;

