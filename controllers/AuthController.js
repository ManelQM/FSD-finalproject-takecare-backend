const models = require("../models/index");

const {
  assertValidPasswordService,
  assertEmailIsValidService,
  assertEmailIsUniqueService,
  createUserService,
  bcryptCompare,
} = require("../services/AuthServices");
require("dotenv").config();

const jsonwebtoken = require("jsonwebtoken");


const authLoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const resultado = await models.User.findOne({ where: { email: email } });

    if (!resultado) {
      res.status(401).json({ message: "Email or Password incorrects" });
      return;
    }

    if (resultado.deleted == true) {
      res.status(401).json({ message: "Access Denied" });
      return;
    }

    // bcryptCompare

    const respBcryptCompare = await bcryptCompare(
      password, 
      resultado.password
    );

    if (respBcryptCompare == false) {
      res.status(400).json({ message: "Password or Email incorrect!" });
    } else {


      const secret = process.env.ACCESS_TOKEN_SECRET;
 

      const jwt = jsonwebtoken.sign(
        {
          name: resultado.name,
          id: resultado.id,
          email: resultado.email,
          nickname: resultado.nickname,
          role: resultado.idrole,
        },
        secret
      );
      res.status(200).json({
        message: "Login with success",
        jwt: jwt,
      });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  authLoginController
};
