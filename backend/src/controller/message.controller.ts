import Message, { IMessage } from "../models/message.model";

export const getMessage = async (id: string): Promise<IMessage | null> => {
  return await Message.findById(id);
};
export const sendMessage = async (input: any): Promise<IMessage | null> => {
  return await Message.create(input);
};
export const getRoomConversation = async (roomId: string): Promise<Array<IMessage> | null> => {
  return await Message.find({ room: roomId }).populate("sender");
};
