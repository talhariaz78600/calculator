let mongoose = require('mongoose');
let MLSSchema=mongoose.Schema({
    AsIsvalue:{
        type:String
    },
    MLSprofit:{
        type:String
    },
    RealtorFee:{
        type:String
    },
    Amount:{
        type:String
    },
    AttorneyFee:{
        type:String
    },
    TitleInsurance:{
        type:String
    },
    EFileFee:{
        type:String
    },
    RecordingFee:{
        type:String
    },
    StateTax:{
        type:String
    },
    ProfessionalPhotos:{
        type:String
    },
    OtherExpenses:{
        type:String
    },
    TotalCost:{
        type:String
    },
    MaxStrategyOffer:{
        type:String
    },
    MaxWholesaleOffer:{
        type:String
    },
    date:{
        type:Date,

    }
    
})

module.exports=MLSSchema;