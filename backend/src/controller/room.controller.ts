import Room, { IRoom } from "../models/room.model";
import UserRoom from "../models/user-room.model";
export const getRoom = async (id: string): Promise<IRoom | null> => {
  return await Room.findById(id);
};
export const createNewContact = async (data: any): Promise<IRoom | null> => {
  const newRoom = {
    ...data,
    createdAt: new Date(),
    type: "private",
  };
  const room = await Room.create(newRoom);

  await createUserRoom(data.participants, room);
  return room;
};
export const createNewGroup = async (data: any): Promise<IRoom | null> => {
  const newRoom = {
    ...data,
    createdAt: new Date(),
    type: "private",
  };
  const room = await Room.create(newRoom);
  await createUserRoom(data.participants, room);
  return room;
};
const createUserRoom = async (participants, room) => {
  await Promise.all(
    participants.map(async (participant) => await UserRoom.create({ room, participant }))
  );
};
