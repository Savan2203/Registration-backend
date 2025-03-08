const { userDataService, verifyAdmin } = require("../Service/userData");

const createUserData = async (req, res) => {
  try {
    const user = await userDataService(req.body);
    if (user.error) {
      return res.status(400).send({ msg: user.error });
    }
    return res
      .status(201)
      .send({ msg: "SuccessFully created Account.", data: user });
  } catch (error) {
    console.log("Error creating user data", error);
    return res
      .status(400)
      .send({ msg: "Error creating Account.", error: error.message });
  }
};

const verifyAdminController = async (req, res) => {
  try {
    const response = await verifyAdmin(req.body);

    if (!response.success) {
      return res.status(401).json({ message: response.message });
    }

    return res.status(200).json({ message: response.message });
  } catch (error) {
    console.log("Error logging in admin", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createUserData,
  verifyAdminController,
};
