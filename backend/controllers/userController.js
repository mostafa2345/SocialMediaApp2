import User from "../models/User.js";

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filterdUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("username profilePic");
  
    res.status(200).json(filterdUsers);
  } catch (error) {
    console.log("Error in userController", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export { getUsersForSidebar };
