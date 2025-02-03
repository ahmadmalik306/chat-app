import {
  createNewContact,
  createNewGroup,
  getCurrentUserRooms,
  getRoom,
} from "../../controller/room.controller";

export const roomResolvers = {
  Query: {
    getRoom: async (_, { id }) => {
      try {
        return await getRoom(id);
      } catch (error) {
        console.error("Error in resolver:", error);
        throw new Error("Failed to fetch room");
      }
    },
    getAllRoomsForUser: async (_, { userId }: { userId: string }) => {
      const rooms = await getCurrentUserRooms(userId);
      return rooms;
    },
  },
  Mutation: {
    createNewContact: async (_: any, { input }: any) => {
      try {
        return await createNewContact(input);
      } catch (error) {
        console.error("Error in resolver:", error);
        throw new Error("Failed to add a room");
      }
    },
    createNewGroup: async (_: any, { input }: any) => {
      try {
        return await createNewGroup(input);
      } catch (error) {
        console.error("Error in resolver:", error);
        throw new Error("Failed to add a room");
      }
    },
  },
};
