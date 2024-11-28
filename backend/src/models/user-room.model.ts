import mongoose, { Schema, Document } from "mongoose";

export interface IUserRoom extends Document {
  name: string;
  user: mongoose.Schema.Types.ObjectId; // Reference to User
  room: mongoose.Schema.Types.ObjectId; // Reference to Room
  joinedAt: Date;
}

const userRoomSchema = new Schema<IUserRoom>({
  name: {
    type: String,
    required: [true, "Room name is required"],
    default: "Unnamed Room",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

const UserRoom = mongoose.model<IUserRoom>("UserRoom", userRoomSchema);

export default UserRoom;
