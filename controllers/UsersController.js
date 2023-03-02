const models = require("../models/index");
const { encryptPasswordService } = require("../services/AuthServices");
require("dotenv").config();

const {
  assertValidPasswordService,
  assertEmailIsValidService,
  assertEmailIsUniqueService,
  createUserService,
} = require("../services/AuthServices");

const getAllUsers = async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.json({ message: "Founded Users", users });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

// Role:User-My data Profile
const getMyProfile = async (req, res) => {
  let { email } = req.params;
  let resp = await models.User.findOne({
    where: { email: email },
  });
  res.send(resp);
};

const updateUser = async (req, res) => {
  try {
    const user = req.body;
    console.log(user, "holasss");
    await models.User.update(
      {
        nickname: user.nickname,
        name: user.name,
        surname: user.surname,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.json({
      message: "User updated!!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

const destroyUser = async (req, res) => {
  let id = req.params.id;
  try {
    const users = await models.User.destroy({
      where: {
        id: id,
      },
    });
    if (users === 1) {
      res.send("Deleted user");
    } else {
      res.send("Cant delete user");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

const userRegister = async (req, res) => {
  const body = req.body;
  try {
    assertValidPasswordService(body.password); //esto valida el password
  } catch (error) {
    console.error(error);
    res.status(400).send(`Invalid Password Format, ${error.message}`);
    return;
  }

  try {
    assertEmailIsValidService(body.email);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Invalid Email Format, ${error.message}`);
    return;
  }

  try {
    await assertEmailIsUniqueService(body.email);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send(`Registered Email, please try another one, ${error.message}`);
    return;
  }

  try {
    const UserCreated = await createUserService(body);
    res.status(201).json(UserCreated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  destroyUser,
  getMyProfile,
  updateUser,
  userRegister,
};
