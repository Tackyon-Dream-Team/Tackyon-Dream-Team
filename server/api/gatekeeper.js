const User = require("../db/models/User");

//making sure its a user
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

//making sure user is an admin
const isAdmin = (req, res, next) => {
  if (!req.user.admin) {
    return res.status(403).send("Chill out! you cant pass!");
  } else {
    next();
  }
};

module.exports = { requireToken, isAdmin };
