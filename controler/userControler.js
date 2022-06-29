const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../modles/Users");
const ErrorHandler = require("../utils/errorHandler");

exports.User = catchAsyncError(async (req, res, next) => {
  const { name, email, type } = req.body;
  const user = await User.create({
    name,
    email,
    type,
  });
  return res.status(200).json({
    success: true,
    user,
  });
});

exports.getUser = catchAsyncError(async (req, res, next) => {
  const getParticularUser = await User.findById(req.params.id);
  if(!getParticularUser){
    return next(new ErrorHandler(`User is not found on this Particular id ${req.params.id}`))
  }
  return res.status(200).json({
    success: true,
    getParticularUser,
  });
});

exports.getAllUser = catchAsyncError(async (req, res, next) => {
  const allUser = await User.find();
  return res.status(200).json({
    success: true,
    allUser,
  });
});
