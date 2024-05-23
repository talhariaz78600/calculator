let mongoose = require('mongoose');
let MLSSchema=mongoose.Schema({
    AsIsvalue:{
        type:Number
    },
    MLSprofit:{
        type:Number
    },
    RealtorFee:{
        type:Number
    },
    Amount:{
        type:Number
    },
    AttorneyFee:{
        type:Number
    },
    TitleInsurance:{
        type:Number
    },
    EFileFee:{
        type:Number
    },
    RecordingFee:{
        type:Number
    },
    StateTax:{
        type:Number
    },
    ProfessionalPhotos:{
        type:Number
    },
    OtherExpenses:{
        type:Number
    },
    TotalCost:{
        type:Number
    },
    MaxStrategyOffer:{
        type:Number
    },
    MaxWholesaleOffer:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now

    }
    
})

module.exports=MLSSchema;