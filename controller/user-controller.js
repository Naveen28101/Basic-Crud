import User from "../schema/user-schema.js";

const addUser = async (request, response) => {
  try {
    const { name, username, email, phone } = request.body;

    if (!name || !username || !email || !phone) {
      return response
        .status(400)
        .json({ success: false, message: "All filds are required" });
    }

    const userFound = await User.findOne({ email });

    if (userFound) {
      return response
        .status(202)
        .json({ success: false, message: "User already exists" });
    }

    const newUser = new User({ name, username, email, phone });

    newUser.save();
    return response.status(201).json({
      success: true,
      user: newUser,
      message: "User Added Successfully",
    });
  } catch (error) {
    console.log(error);
    return response.status(409).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
export default addUser;
