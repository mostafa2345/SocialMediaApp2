import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requird: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requird: true,
    },
    message: {
      type: String,
      requird: true,
    },
  },
  { timestapms: true }
);
const Message = mongoose.model("Message", messageSchema);
export default Message;
