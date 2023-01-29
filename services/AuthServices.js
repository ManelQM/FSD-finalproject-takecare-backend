const models = require("../models/index");
const bcrypt = require("bcrypt");
const auth = require("../config/auth");

// Service to assert if the structure of the password is ok
const assertValidPasswordService = (pass) => {
  if (pass.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }

  if (!pass.match(/[a-z]/)) {
    throw new Error("Password must contain at least one lower case letter");
  }

  if (!pass.match(/[A-Z]/)) {
    throw new Error("Password must contain at least one upper case letter");
  }

  if (!pass.match(/[0-9]/)) {
    throw new Error("Password must contain at least one number");
  }
};

// Service to assert if the email structure is valid
const assertEmailIsValidService = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = email.match(emailRegex);
  if (!isValid) {
    throw new Error("Email is invalid");
  }
};

// Service to assert if the email is already registered
const assertEmailIsUniqueService = async (email) => {
  const user = await models.User.findOne({
    where: { email: email },
  });
  if (user && user.deleted == false) {
  
    throw new Error("Email is already registered");
  }
};

// Service to encrypt a password and create a hash password

const encryptPasswordService = async (password) => {
  let hashedPassword = bcrypt.hashSync(
    req.body.password,
    Number.parseInt(authConfig.rounds)
  );
  return hashedPassword;
};

// Service to create a new user in the database
const createUserService = async (userBody) => {
  // const hash = encryptPasswordService(userBody.password);
  let hashedPassword = bcrypt.hashSync(
    userBody.password,
    Number.parseInt(auth.rounds)
  );
  // userBody.password = hash;

  const user = await models.User.create({
    name: userBody.name,
    surname: userBody.surname,
    nickname: userBody.nickname,
    email: userBody.email,
    password: hashedPassword,
    idrole: 2,
  });
  return user;
};

const bcryptCompare = async (password, hashedPassword) => {
  const passCompare = await bcrypt.compare(password, hashedPassword);
  return passCompare;
};

module.exports = {
  assertValidPasswordService,
  assertEmailIsValidService,
  assertEmailIsUniqueService,
  encryptPasswordService,
  createUserService,
  bcryptCompare,
};
