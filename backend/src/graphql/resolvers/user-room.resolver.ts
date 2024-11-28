export const userRoomResolvers = {
  Query: {
    getUserRoom: async (_, { id }) => {
      try {
        return id;
      } catch (error) {
        console.error("Error in resolver:", error);
        throw new Error("Failed to fetch user room");
      }
    },
  },
};
