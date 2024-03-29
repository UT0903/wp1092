const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
});

const messageSchema = new Schema({
  sender: { type: mongoose.Types.ObjectId, ref: "User" },
  body: { type: String, required: true },
});

const chatBoxSchema = new Schema({
  name: { type: String, required: true },
  users: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  messages: [{ type: mongoose.Types.ObjectId, ref: "Message" }],
}); 

export const UserModel = mongoose.model("User", userSchema);
export const ChatBoxModel = mongoose.model("ChatBox", chatBoxSchema);
export const MessageModel = mongoose.model("Message", messageSchema);
