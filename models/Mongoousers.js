let mongoose = require('mongoose');
const MLSSchema=require('./MLSModel')
const FlipSchema=require('./FlipModel')
const SqftSchema=require('./SqftRepairModel')
const UnitsSchema=require('./UnitsRepairModel')
let userSchema = mongoose.Schema({
    userName:{
        type:String,
    },
    email: {
        type: String,
    },
    mobileNumber: {
        type: String,
    },
    password: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false
    },
    MLSCalculator:[MLSSchema],
    FlipCalculator:[FlipSchema],
    SqftRepairCalculator:[SqftSchema],
    UnitsRepairCalculator:[UnitsSchema],
    token: {
        type: String,
    },
    sessionExpiration: {
        type: String,
    },
    jwttoken: {
        type: String,
    },
    lastLogin: {
        type: Date,

    },

}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);




