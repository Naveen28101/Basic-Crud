import User from "../schema/user-schema.js";

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, username, phone, email } = req.body;

    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No such user exists",
      });
    }

    if (name) user.name = name;
    if (username) user.username = username;
    if (email) user.email = email;
    if (phone) user.phone = phone;

    await user.save();

    return res.status(201).json({
      success: true,
      message: "Update Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};

export default updateUser;
