import User from "../schema/user-schema.js";

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const userFound = await User.findOne({ _id: id });
    if (!userFound) {
      return res.status(400).json({
        success: false,
        message: "No such user exists",
      });
    }

    await User.deleteOne({ _id: id });
    console.log(res);
    return res.status(200).json({
      success: true,
      message: "User Delete",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Cannot delete user !!",
    });
  }
};

export default deleteUser;
