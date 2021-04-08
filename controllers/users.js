const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const db = require("../db/connection");
const Listing = require("../models/listing")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const SALT_ROUNDS = 11;
const TOKEN_KEY = "areallylonggoodkey";

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      email,
      password_digest,
    });

    await user.save();

    const payload = {
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(payload, TOKEN_KEY);

    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username: username });

    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        username: user.username,
        email: user.email,
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (e) {
    res.status(401).send("Not Authorized");
  }
};

const addFavorite = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.listingId);
    const user = await User.findById(req.params.id);
    user.favorites.push(listing);
    await user.save();
    res.json({ status: "Favorite Added!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const getuser = async User.findById()
module.exports = {
  signUp,
  signIn,
  verify,
  addFavorite,
  // getUser
};
