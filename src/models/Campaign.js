const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    recipients : {
        type : [String] ,
        required : true
    }, 
    content : {
        type : String,
        required : true
    },
    sentAt : { 
        type : Date ,
        default : null
    }
}, timestamps = true);


const model = mongoose.model('Campaign', campaignSchema);


 module.exports = model;