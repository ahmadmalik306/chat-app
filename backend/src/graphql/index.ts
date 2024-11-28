import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import mergedResolvers from "./resolvers";
/* The line `import { resolvers } from "../resolvers";` is importing the `resolvers` object from a file
located in the "../resolvers" directory. This allows the code in the current file to access and use
the resolvers defined in that external file. */

// // Load and merge the schema
const typeDefs = mergeTypeDefs(loadFilesSync(__dirname + "/**/*.graphql"));
const resolvers = mergeResolvers(mergedResolvers);

export { typeDefs, resolvers };
