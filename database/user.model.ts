import { Document, model, models, Schema } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  email: string;
  image?: string;
  iteneraryCreated: number;
  status: "user" | "admin";
}

export interface IUserDoc extends IUser, Document {}

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, requried: true },
    image: { type: String },
    iteneraryCreated: { type: Number, default: 0 },
    status: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

const User = models?.User || model<IUser>("User", userSchema);

export default User;
