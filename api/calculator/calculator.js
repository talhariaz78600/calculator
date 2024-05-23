const express = require('express');
const router = express.Router();
const User = require("../../models/Mongoousers")    

/////////////////////////////// /api/calculate/createMLS/:userId //////////////////////////
router.put('/createMLS/:userId', async (req, res) => {
    const { userId } = req.params;
    const {
        AsIsvalue,
        MLSprofit,
        RealtorFee,
        Amount,
        AttorneyFee,
        TitleInsurance,
        EFileFee,   
        RecordingFee,
        StateTax,
        ProfessionalPhotos,
        OtherExpenses,
        TotalCost,
        MaxStrategyOffer,
        MaxWholesaleOffer } = req.body;
    try {
        const user= await User.findOne({_id:userId})
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        
        user.MLSCalculator.push({
            AsIsvalue,
            MLSprofit,
            RealtorFee,
            Amount,
            AttorneyFee,
            TitleInsurance,
            EFileFee,   
            RecordingFee,
            StateTax,
            ProfessionalPhotos,
            OtherExpenses,
            TotalCost,
            MaxStrategyOffer,
            MaxWholesaleOffer
        })
         await user.save();
         res.status(200).json({message:"data successfully added",user})
    } catch (error) {
        res.status(500).json({message:"Internal server error",errors:error.message})
    }

})
/////////////////////////////// /api/calculate/deleteMLS/:userId/:calculateId //////////////////////////
router.put('/deleteMLS/:userId/:calculateId', async (req,res)=>{
    const {userId,calculateId}=req.params;
    try {
        let user= await User.findOne({_id:userId});
        if(!user){
            return res.status(400).json({message:"user not found"})
        }

       user=user.MLSCalculator.filter((item)=>item._id.toString()!=calculateId);

       await user.save();
       res.status(200).json({message:"data successfully deleted",user})

    } catch (error) {
        res.status(500).json({message:"Internal server error",errors:error.message})
    }
})
////////////////////////// /api/calculate/getsingleMLS/:userId/:calculatedId ///////////////////
router.get('/getsingleMLS/:userId/:calculatedId', async(req,res)=>{
    const {userId,calculatedId}=req.params;
    console.log(calculatedId);
    try {
        let user= await User.findOne({_id:userId});
        if(!user){
            return res.status(400).json({message:"user not found"})
        }

       const data=user.MLSCalculator.find((item)=>item._id.toString()===calculatedId);
       console.log(data);
       res.status(200).json({message:"data fetch successfully",data})

    } catch (error) {
        res.status(500).json({message:"Internal server error",errors:error.message})
    }
})

/////////////////////////////// /api/calculate/createFlip/:userId //////////////////////////
router.put('/createFlip/:userId', async (req, res) => {
    const { userId } = req.params;
    const {
        ARV,
        FlipperProfit,
        HoldTime,
        RepairCosts,
        Realtor,
        RealtorAmount,
        ClosingCost,
        ClosingAmount,
        Taxes,
        TaxesAmount,
        MonthlyHQA,
        MonthlyAmount,
        TotalPropertyCosts,
        LoanAmount,
        InterestRate,
        TotalInterest,
        Points,
        PointsAmount,
        TotalMoneyCost,
        Wholesale,
        TotalCosts,
        MaxFlipperOffer,
        WholesalePrice
         } = req.body;
    try {
        const user= await User.findOne({_id:userId})
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        user.FlipCalculator.push({
            ARV,
            FlipperProfit,
            HoldTime,
            RepairCosts,
            Realtor,
            RealtorAmount,
            ClosingCost,
            ClosingAmount,
            Taxes,
            TaxesAmount,
            MonthlyHQA,
            MonthlyAmount,
            TotalPropertyCosts,
            LoanAmount,
            InterestRate,
            TotalInterest,
            Points,
            PointsAmount,
            TotalMoneyCost,
            Wholesale,
            TotalCosts,
            MaxFlipperOffer,
            WholesalePrice
             })
         await user.save();
         res.status(200).json({message:"data successfully added",user})
    } catch (error) {
        res.status(500).json({message:"Internal server error",errors:error.message})
    }

})
/////////////////////////////// /api/calculate/deleteFlip/:userId/:calculateId //////////////////////////
router.put('/deleteFlip/:userId/:calculateId', async (req,res)=>{
    const {userId,calculateId}=req.params;
    try {
        let user= await User.findOne({_id:userId});
        if(!user){
            return res.status(400).json({message:"user not found"})
        }
       user=user.FlipCalculator.filter((item)=>item._id.toString()!=calculateId);

       await user.save();
       res.status(200).json({message:"data successfully deleted",user})

    } catch (error) {
        res.status(500).json({message:"Internal server error",errors:error.message})
    }
})
////////////////////////// /api/calculate/getsingleFlip/:userId/:calculatedId ///////////////////
router.get('/getsingleFlip/:userId/:calculatedId', async(req,res)=>{
    const {userId,calculateId}=req.params;
    try {
        let user= await User.findOne({_id:userId});
        if(!user){
            return res.status(400).json({message:"user not found"})
        }

       user=user.FlipCalculator.find((item)=>item._id.toString()===calculateId);

       res.status(200).json({message:"data fetch successfully",user})

    } catch (error) {
        res.status(500).json({message:"Internal server error",errors:error.message})
    }
})


/////////////////////////////// /api/calculate/createSqf/:userId //////////////////////////
router.put('/createSqf/:userId', async (req, res) => {
    const { userId } = req.params;
    const {
        DeckCost,
        DeckSqft,
        DeckTotal,
        FlooringCost,
        FlooringSqft,
        FlooringTotal,
        InteriorCost,
        InteriorSqft,
        InteriorTotal,
        ExteriorCost,
        ExteriorSqft,
        ExteriorTotal,
        TotalCost}=req.body;
    try {
        const user= await User.findOne({_id:userId})
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        user.SqftRepairCalculator.push( {
            DeckCost,
            DeckSqft,
            DeckTotal,
            FlooringCost,
            FlooringSqft,
            FlooringTotal,
            InteriorCost,
            InteriorSqft,
            InteriorTotal,
            ExteriorCost,
            ExteriorSqft,
            ExteriorTotal,
            TotalCost})
         await user.save();
         res.status(200).json({message:"data successfully added",user})
    } catch (error) {
        res.status(500).json({message:"Internal server error",errors:error.message})
    }

})
/////////////////////////////// /api/calculate/deleteSqft/:userId/:calculateId //////////////////////////
router.put('/deleteSqft/:userId/:calculateId', async (req,res)=>{
    const {userId,calculateId}=req.params;
    try {
        let user= await User.findOne({_id:userId});
        if(!user){
            return res.status(400).json({message:"user not found"})
        }

       user=user.SqftRepairCalculator.filter((item)=>item._id.toString()!=calculateId);

       await user.save();
       res.status(200).json({message:"data successfully deleted",user})

    } catch (error) {
        res.status(500).json({message:"Internal server error",errors:error.message})
    }
})
////////////////////////// /api/calculate/getsingleSqft/:userId/:calculatedId ///////////////////
router.get('/getsingleSqft/:userId/:calculatedId', async(req,res)=>{
    const {userId,calculateId}=req.params;
    try {
        let user= await User.findOne({_id:userId});
        if(!user){
            return res.status(400).json({message:"user not found"})
        }

       user=user.SqftRepairCalculator.find((item)=>item._id.toString()===calculateId);

       res.status(200).json({message:"data fetch successfully",user})

    } catch (error) {
        res.status(500).json({message:"Internal server error",errors:error.message})
    }
})

/////////////////////////////// /api/calculate/createUnits/:userId //////////////////////////
router.put('/createUnits/:userId', async (req, res) => {
    const { userId } = req.params;
    const {
        
            FoundationCost,
            FoundationUnits,
            FoundationTotal,
            RoofCost,
            RoofUnits,
            RoofTotal,
            HVACCost,
            HVACUnits,
            HVACTotal,
            WaterCost,
            WaterUnits,
            WaterTotal,
            KitchenCost,
            KitchenUnits,
            KitchenTotal,
            BathroomsCost,
            BathroomsUnits,
            BathroomsTotal,
            TotalCost
        
        }=req.body;
    try {
        const user= await User.findOne({_id:userId})
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        user.UnitsRepairCalculator.push( {
            FoundationCost,
            FoundationUnits,
            FoundationTotal,
            RoofCost,
            RoofUnits,
            RoofTotal,
            HVACCost,
            HVACUnits,
            HVACTotal,
            WaterCost,
            WaterUnits,
            WaterTotal,
            KitchenCost,
            KitchenUnits,
            KitchenTotal,
            BathroomsCost,
            BathroomsUnits,
            BathroomsTotal,
            TotalCost})
         await user.save();
         res.status(200).json({message:"data successfully added",user})
    } catch (error) {
        res.status(500).json({message:"Internal server error",errors:error.message})
    }

})
/////////////////////////////// /api/calculate/deleteUnits/:userId/:calculateId //////////////////////////
router.put('/deleteUnits/:userId/:calculateId', async (req,res)=>{
    const {userId,calculateId}=req.params;
    try {
        let user= await User.findOne({_id:userId});
        if(!user){
            return res.status(400).json({message:"user not found"})
        }

       user=user.UnitsRepairCalculator.filter((item)=>item._id.toString()!=calculateId);

       await user.save();
       res.status(200).json({message:"data successfully deleted",user})

    } catch (error) {
        res.status(500).json({message:"Internal server error",errors:error.message})
    }
})
////////////////////////// /api/calculate/getsingleUnits/:userId/:calculatedId ///////////////////
router.get('/getsingleUnits/:userId/:calculatedId', async(req,res)=>{
    const {userId,calculateId}=req.params;
    try {
        let user= await User.findOne({_id:userId});
        if(!user){
            return res.status(400).json({message:"user not found"})
        }

       user=user.UnitsRepairCalculator.find((item)=>item._id.toString()===calculateId);

       res.status(200).json({message:"data fetch successfully",user})

    } catch (error) {
        res.status(500).json({message:"Internal server error",errors:error.message})
    }
})

module.exports = router;