import User, { IUser } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config({});
export const getUser = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};
export const getAllUser = async (): Promise<Array<IUser> | null> => {
  return await User.find();
};
export const createNewUser = async (input: any): Promise<IUser | null> => {
  const hashedPassword = await bcrypt.hash(input.password, 10);
  const newUser = {
    ...input,
    password: hashedPassword,
  };
  return await User.create(newUser);
};
export const loginUser = async (input: any): Promise<{ message: string; token?: string }> => {
  const user = await User.findOne({ email: input.email });
  if (user) {
    const match = await bcrypt.compare(input.password, user.password);
    if (match) {
      const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET || "");
      return { message: "Login Successful", token: accessToken };
    }
    return { message: "Login failed. Incorrect password." };
  }
  throw new Error("Login failed. Incorrect email.");
};
