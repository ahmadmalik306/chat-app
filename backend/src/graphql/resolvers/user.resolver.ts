import { getUser, createNewUser, getAllUser } from "../../controller";
export const resolvers = {
  Query: {
    hello: () => "Hello, world!",
    getUser: async (_, { id }) => {
      console.log("HERE");
      try {
        const user = await getUser(id); // Replace with actual DB logic
        console.log("Entering resolver", user);
        return user;
      } catch (error) {
        console.error("Error in resolver:", error);
        throw new Error("Failed to fetch user");
      }
    },
    getAllUser: async () => {
      console.log("HERE");
      try {
        const user = await getAllUser(); // Replace with actual DB logic
        console.log("Entering resolver", user);
        return user;
      } catch (error) {
        console.error("Error in resolver:", error);
        throw new Error("Failed to fetch user");
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        return await createNewUser(input);
      } catch (error) {
        console.error("Error in resolver:", error);
        throw new Error("Failed to add user");
      }
    },
    loginUser: async (_, { input }) => {
      try {
        const user = await createNewUser(input); // Replace with actual DB logic
        console.log("Entering resolver", user);
        return user;
      } catch (error) {
        console.error("Error in resolver:", error);
        throw new Error("Failed to add user");
      }
    },
  },
};
