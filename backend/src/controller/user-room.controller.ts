import UserRoom, { IUserRoom } from "../models/user-room.model";
/* GetUser is a function that takes an id as a parameter and returns a promise that
resolves to the user object with the matching id from the database using the findOne
method of the User model. */
export const getUserRoom = async (id: string): Promise<IUserRoom | null> => {
  return await UserRoom.findById(id);
};
