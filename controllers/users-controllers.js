const { faker, Faker } = require("@faker-js/faker");
const HttpError = require("../models/http-error");
const User = require("../models/user-model");

//Get All Users
const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find().exec();
  } catch (error) {
    return next(new HttpError("Something went wrong.", 500));
  }

  res.json({
    users: users.map((users) => users.toObject({ getters: true })),
  });
};

// Sign up
const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    return next(new HttpError("Something went wrong during user check.", 500));
  }

  if (existingUser) return next(new HttpError("User already exists.", 422));

  const newUser = new User({
    username,
    email,
    password,
    places: [],
    imageUlr: faker.image.avatar(),
  });

  try {
    await newUser.save();
  } catch (error) {
    console.log("🚀 ~ signup ~ error:", error);
    return next(new HttpError("Something went wrong.", 500));
  }

  res.status(201).json({ user: newUser.toObject({ getters: true }) });
};

//Get User By ID
const getUserById = async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.uid);
  } catch (error) {
    return next(
      new HttpError("Something went wrong, could not load user.", 500)
    );
  }
  if (!user) {
    return next(new HttpError("No user found.", 404));
  }
  res.json({ user: user.toObject({ getters: true }) });
};

// Login
const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    return next(new HttpError("Something went wrong.", 500));
  }

  if (!existingUser || existingUser.password !== password)
    return next(new HttpError("Invalid credentials.", 401));

  res.json({
    message: "Logged in!",
    user: existingUser.toObject({ getters: true }),
  });
};

exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.signup = signup;
exports.login = login;
