var mongoose = require("mongoose")

var ReturnShcema = new mongoose.Schema({
    author: {
        id: {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        },
        name: String,
        surname: String
    },
    itemID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "item"
    }],
    itemName: [],
    pic: [],
    limit: [],
    ID: [],
    qty: [],
    approve:Boolean,
    date:Date
})
module.exports = mongoose.model("Return", ReturnShcema)