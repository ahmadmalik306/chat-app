import { resolvers } from "./user.resolver";
import { messageResolvers } from "./message.resolver";
import { userRoomResolvers } from "./user-room.resolver";
import { roomResolvers } from "./room.resolver";
export default [resolvers, messageResolvers, roomResolvers, userRoomResolvers];
