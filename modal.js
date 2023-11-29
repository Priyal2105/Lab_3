const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const FileSchema = new Schema(
    {
        fullname: {
            type: String,
        },
        path: {
            type: String
        },
        email: {
            type: String
        }
    },
);
module.exports = mongoose.model('filesuploads', FileSchema);


