const userModel = require("../Model/userModel");

const userDataService = async (user) => {
  try {
    console.log("userData----------->", user);

    const userAlreadyExist = await userModel.findOne({ email: user.email });
    if (userAlreadyExist) {
      console.log("User with this email already exists.");
      return { error: "User with this email already exists." };
    } else {
      const newUser = new userModel(user);

      const saveUser = await newUser.save();
      console.log("saved user----------->", saveUser);
      return { msg: "SuccessFully created Account.", data: saveUser };
    }
  } catch (error) {
    console.log("Error creating user data", error);
  }
};

const verifyAdmin = async (admin) => {
  try {
    const adminData = await userModel.findOne({
      email: admin.email,
      role: "admin",
    });

    if (!adminData) {
      return {
        success: false,
        message: "You are not allowed to login from here",
      };
    }

    if (admin.password !== adminData.password) {
      return { success: false, message: "Invalid password" };
    }

    return { success: true, message: "Welcome" };
  } catch (error) {
    console.log("Error verifying Admin", error);
    return { success: false, message: "Server error" };
  }
};

module.exports = {
  userDataService,
  verifyAdmin,
};
