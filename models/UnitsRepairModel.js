const mongoose=require('mongoose');
const UnitsSchema=mongoose.Schema({
    FoundationCost:{
        type:Number
    },
    FoundationUnits:{
        type:Number
    },
    FoundationTotal:{
        type:Number
    },
    RoofCost:{
        type:Number
    },
    RoofUnits:{
        type:Number
    },
    RoofTotal:{
        type:Number
    },
    HVACCost:{
        type:Number
    },
    HVACUnits:{
        type:Number
    },
    HVACTotal:{
        type:Number
    },
    WaterCost:{
        type:Number
    },
    WaterUnits:{
        type:Number
    },
    WaterTotal:{
        type:Number
    },
    KitchenCost:{
        type:Number
    },
    KitchenUnits:{
        type:Number
    },
    KitchenTotal:{
        type:Number
    },
    BathroomsCost:{
        type:Number
    },
    BathroomsUnits:{
        type:Number
    },
    BathroomsTotal:{
        type:Number
    },
    TotalCost:{
        type:Number
    },date:{
        type:Date,
        default:Date.now
    }

})
module.exports=UnitsSchema;