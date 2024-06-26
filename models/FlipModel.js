let mongoose = require('mongoose');
let FlipSchema=mongoose.Schema({
    ARV:{
        type:String
    },
    FlipperProfit:{
        type:String
    },
    HoldTime:{
        type:String
    },
    RepairCosts:{
        type:String
    },
    Realtor:{
        type:String
    },
    RealtorAmount:{
        type:String
    },
    ClosingCost:{
        type:String
    },
    ClosingAmount:{
        type:String
    },
    Taxes:{
        type:String
    },
    TaxesAmount:{
        type:String
    },
    MonthlyHQA:{
        type:String
    },
    MonthlyAmount:{
        type:String
    },
    TotalPropertyCosts:{
        type:String
    },
    LoanAmount:{
        type:String
    },
    InterestRate:{
        type:String
    },
    TotalInterest:{
        type:String
    },
    Points:{
        type:String
    },
    PointsAmount:{
        type:String
    },
    TotalMoneyCost:{
        type:String
    },
    Wholesale:{
        type:String
    },
    TotalCosts:{
        type:String
    },
    MaxFlipperOffer:{
        type:String
    },
    WholesalePrice:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
    
})

module.exports=FlipSchema;