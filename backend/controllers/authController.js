const User = require('../models/user');
const cloudinary = require('cloudinary');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
//Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req,res,next)=>{

	const {name,email,password} = req.body;
	const user = await User.create({
		name,
		email,
		password,
		avatar:{
			public_id: 'avatar/sakjfkalwjfwkalmwfal',
			url: 'https://lh3.googleusercontent.com/proxy/EHeALnHIuVX-eJe8lDEqcohdMQ2R9g0UrqepLSmus6wRKAjpwWSZnWzgNaSlMCvGO2fgAmHK6B7K2BZaueJ-UMJ92f16f4r5HKUtJw'
		}
	})
	sendToken(user, 200, res)

})

//Login User => /api/v1/login
exports.loginUser = catchAsyncErrors(async(req,res,next)=>{
 	const { email, password } = req.body;

    // Checks if email and password is entered by user
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400))
    }

    // Finding user in database
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    // Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

 
	sendToken(user, 200, res)

})

//Forgot Password => /api/v1/password/forgot
exports.forgotPassword = catchAsyncErrors(async(req,res,next)=>{
	const user = await User.findOne({email: req.body.email});

	if(!user){
		return next(new ErrorHandler('User not found with this email', 404))
	}

	//get Reset token
	const resetToken = user.getResetPasswordToken();

	await user.save({validateBeforeSave:false})

	//Create reset password url
	const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/reset/${resetToken}`;

	const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`

	try{
		await sendEmail({
			email:user.email,
			subject: 'Wei Shop password Recovery',
			message
		})
		res.status(200).json({
			success:true,
			message: `email sent to: ${user.email}`
		})

	}catch(error){
		user.resetPasswordToken = undefined
		user.resetPasswordExpired = undefined

		await user.save({valiudateBeforeSave: false});

		return next(new ErrorHandler(error.message, 500))
	}
})

//Reset Password => /api/v1/password/reset/:token
exports.resetPassword = catchAsyncErrors(async(req,res,next)=>{

	//Hash URL token

	const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
	console.log(resetPasswordToken)
	const user = await User.findOne({
		resetPasswordToken,
		resetPasswordExpired: { $gt: Date.now()}
	})
	console.log(user)
	if(!user){
		return next(new ErrorHandler('Password reset token is invalid or has been expired', 400))
	}
	if(req.body.password !== req.body.confirmPassword){
		return next(new ErrorHandler('Password does not match', 400))
	}

	//Setup new password
	user.password = req.body.password;
	user.resetPasswordToken = undefined;
	user.resetPasswordExpired = undefined;


	await user.save();
	sendToken(user, 200, res);

})


//Get Currently logged in user details => /api/v1/me
exports.getUserProfile = catchAsyncErrors(async(req,res,next)=>{
	const user = await (await User.findById(req.user.id));

	res.status(200).json({
		success: true,
		user
	})

})


// Update / Change password   =>  /api/v1/password/update
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');

    // Check previous user password
    const isMatched = await user.comparePassword(req.body.oldPassword)
    if (!isMatched) {
        return next(new ErrorHandler('Old password is incorrect'));
    }

    user.password = req.body.password;
    await user.save();

    sendToken(user, 200, res)

})

//Update user profile => /api/v1/me/update
exports.updateProfile = catchAsyncErrors(async(req,res,next)=>{
	const newUserData ={
		name: req.body.name,
		email: req.body.email
	}

	//Update avatar: TODO
	const user = await User.findByIdAndUpdate(req.user.id, newUserData,{
		new:true,
		runValidators:true,
		useFindAndModify:false
	})


	res.status(200).json({
		success:true
	})
})

//Logout User => /api/v1/logout
exports.logoutUser = catchAsyncErrors(async(req,res,next)=>{
	res.cookie('token', null, {
		expires: new Date(Date.now()),
		httpOnly:true,
	})

	res.status(200).json({
		success:true,
		message: 'Logged out'
	})

})




//ADMIN ROUTES

//GET ALL USERS => /api/v1/admin/users
exports.allUsers = catchAsyncErrors(async(req,res,next)=>{
	
	const users = await User.find();

	res.status(200).json({
		success:true,
		users
	})

})

//GET user details => /api/v1/admin/user/:id
exports.getUserDetails = catchAsyncErrors(async(req,res,next)=>{
	
	const user = await User.findById(req.params.id);
	if(!user){
		return next(new ErrorHandler('Invalid user ID', 400))
	}
	res.status(200).json({
		success:true,
		user
	})

})


//UPDATE user details => /api/v1/admin/user/:id
exports.updateUserDetails = catchAsyncErrors(async(req,res,next)=>{
	
	const newUserData ={
		name: req.body.name,
		email: req.body.email,
		role: req.body.role
	}

	//Update avatar: TODO
	const user = await User.findByIdAndUpdate(req.user.id, newUserData,{
		new:true,
		runValidators:true,
		useFindAndModify:false
	})
	
	res.status(200).json({
		success:true
	})

})


// Delete user   =>   /api/v1/admin/user/:id
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`User does not found with id: ${req.params.id}`))
    }

    // Remove avatar from cloudinary
    // const image_id = user.avatar.public_id;
    // await cloudinary.v2.uploader.destroy(image_id);

    await user.remove();

    res.status(200).json({
        success: true,
    })
})