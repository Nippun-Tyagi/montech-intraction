const catchAsyncError = require("../middleware/catchAsyncError");
const Articals = require("../modles/Articles");
const User = require("../modles/Users");
const ErrorHandler = require("../utils/errorHandler");

exports.createArtical = catchAsyncError(async (req, res, next) => {
    const { title, body, keywords, createdBy } = req.body;
    const Artical = await Articals.create({
        title,
        body,
        keywords,
        createdBy
    });
    return res.status(200).json({
        success: true,
        Artical,
    });
});

exports.getArtical = catchAsyncError(async (req, res, next) => {
    const getArtical = await Articals.findById(req.params.id);
    if (!getArtical) {
        return next(new ErrorHandler(`Artical not found on this particular id ${req.params.id}`))
    }
    return res.status(200).json({
        success: true,
        getArtical,
    });
});

exports.getAllArtical = catchAsyncError(async (req, res, next) => {
    const getallArtical = await Articals.find();
    return res.status(200).json({
        success: true,
        getallArtical,
    });
});


exports.updateArtical = catchAsyncError(async (req, res, next) => {
    const newArticalData = {
        title: req.body.title,
        body: req.body.body,
        keywords: req.body.keywords,
        updatedBy: req.body.updatedBy,
        articalId:req.body.articalId
    }
    const getUserDetails = await User.findById(req.body.updatedBy);
    if (!getUserDetails) {
        return next(new ErrorHandler(`User is not found on this particular id ${req.body.updatedBy}`))
    }
    if(getUserDetails.type==="Editor"){
        const updatedArticals = await Articals.findByIdAndUpdate(req.body.articalId, newArticalData, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        if (!updatedArticals) {
            return next(new ErrorHandler(`Artical is not found on this particular id ${req.body.articalId}`))
        }
        return res.status(200).json({
            success: true,
            updatedArticals,
        });
    }else{
        return next(new ErrorHandler("Author is not Capable for Update the artical"));
    }

    
});


exports.ApproveStatus = catchAsyncError(async (req, res, next) => {
    const newArticalData = {
        status: req.body.status,
        approvedBy:req.body.approvedBy,
        articalId:req.body.articalId
    }
    const getUserDetails = await User.findById(req.body.approvedBy);
    if (!getUserDetails) {
        return next(new ErrorHandler(`User is not found on this particular id ${req.body.approvedBy}`))
    }
    if(getUserDetails.type==="Editor"){
        const updatedArticals = await Articals.findByIdAndUpdate(req.body.articalId, newArticalData, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        if (!updatedArticals) {
            return next(new ErrorHandler(`Artical is not found on this particular id ${req.body.articalId}`))
        }
        return res.status(200).json({
            success: true,
            message:`Status ${req.body.status}`
        });
    }else{
        return next(new ErrorHandler("Author is not Capable for Update the artical"));
    }

    
});
