import mongoose from "mongoose";

const ConversationSchema = mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestapms: true }
);
const Conversation = mongoose.model("Conversation", ConversationSchema);
export default Conversation;
