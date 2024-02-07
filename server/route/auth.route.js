const { Router } = require("express");
const UserModel = require("../model/auth.model");

const authRouter = Router();

// Middleware to validate required fields
const validateFields = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: "Missing required fields" });
  }

  next();
};

// Middleware to check if a user with the same email already exists
const checkExistingUser = async (req, res, next) => {
  const { email } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .send({ message: "User with the same email already exists" });
    }

    next();
  } catch (error) {
    console.error("Error checking existing user:", error);
    res.status(500).send({ message: "Error, please try again" });
  }
};

authRouter.post(
  "/signup",
  validateFields,
  checkExistingUser,
  async (req, res) => {
    try {
      const { email, password } = req.body;

      // Create a new user
      const newUser = await UserModel.create({
        email,
        password,
      });

      res.status(200).send({ message: "Successfully registered", newUser });
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).send({ message: "Error, please try again" });
    }
  }
);

authRouter.post("/login", validateFields, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await UserModel.findOne({ email });

    if (user && user.password === password) {
      // User found and password matches
      let { email, _id } = user;

      let payload = {
        email,
        _id,
        token: 54321,
      };
      res.send({ message: "Login successful", payload });
    } else {
      res.status(401).send({ message: "Wrong credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ message: "Error during login, please try again" });
  }
});

module.exports = authRouter;
