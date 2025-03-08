const {
  createUserData,
  verifyAdminController,
} = require("./Controller/userData");

module.exports = (app) => {
  app.post("/registerUser", createUserData);

  app.post("/verifyAdmin", verifyAdminController);
};
