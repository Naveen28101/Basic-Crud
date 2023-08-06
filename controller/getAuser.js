import User from "../schema/user-schema.js";

let { log } = console;

const getUser = async (req, res) => {
  try {
    let id = req.params.id;
    let response = await User.findOne({ _id: id });
    log(response);
    return res.status(200).json({
      success: true,
      message: "User fethed successfully",
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

export default getUser;
