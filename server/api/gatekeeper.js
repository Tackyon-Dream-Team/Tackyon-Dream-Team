const User = require("../db/models/User");

//making sure its a user
const requireToken = async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

//making sure user is an admin
const isAdmin = (req, res, next) => {
  try {
    if (!req.user.admin) {
      return res.status(403).send("Chill out! you cant pass!");
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { requireToken, isAdmin };
