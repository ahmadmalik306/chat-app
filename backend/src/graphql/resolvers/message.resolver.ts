import { getMessage, getRoomConversation, sendMessage } from "../../controller/message.controller";
export const messageResolvers = {
  Query: {
    getMessage: async (_, { id }) => {
      try {
        return await getMessage(id); // Replace with actual DB logic
      } catch (error) {
        console.error("Error in resolver:", error);
        throw new Error("Failed to fetch message");
      }
    },
    getRoomConversation: async (_, { roomId }: { roomId: string }) => {
      try {
        return await getRoomConversation(roomId); // Replace with actual DB logic
      } catch (error) {
        console.error("Error in resolver:", error);
        throw new Error("Failed to fetch message");
      }
    },
  },
  Mutation: {
    sendMessage: async (_, { input }) => {
      try {
        return await sendMessage(input);
      } catch (error) {
        console.error("Error in resolver:", error);
        throw new Error("Failed to send message");
      }
    },
  },
};
