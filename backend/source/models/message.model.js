import mongoose from "mongoose";

// creating schema
const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        text: {
            type: String,

        },
        image: {
            type: String,
        },
        
    },
    { timestamps: true}
);

// creating model
const Message = mongoose.model("Message", messageSchema);

export default Message;