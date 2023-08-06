import User from "../schema/user-schema.js";

let { log } = console;

const getAllUser = async (req, res) => {
  try {
    let response = await User.find();
    log(response);
    return res.status(200).json({
      success: true,
      message: "Users fethed successfully",
      users: response,
    });
  } catch (error) {
    log(error);
    return res.status(204).json({
      succes: false,
      message: "something went wrong",
    });
  }
};

export default getAllUser;
