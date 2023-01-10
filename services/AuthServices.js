const models = require("../models/index");
const crypto = require("node:crypto");
const bcrypt = require('bcrypt');

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
    console.log("Hola 1");
    throw new Error("Email is already registered");
  }
};

// Service to encrypt a password and create a hash of said password
const encryptPasswordService = (pass) => {
  const hash = crypto.createHmac("sha512", "").update(pass).digest("base64");
  return hash;
};

// Service to create a new user in the database
const createUserService = async (userBody) => {
  const hash = encryptPasswordService(userBody.password);
  userBody.password = hash;

  const user = await models.User.create({
    name: userBody.name,
    surname: userBody.surname,
    nickname: userBody.nickname,
    email: userBody.email,
    password: userBody.password,
    idrole: userBody.role,
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
  bcryptCompare
};
