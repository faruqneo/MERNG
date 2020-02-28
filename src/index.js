import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
// import { typeDefs, resolvers } from './schema';

const {
    APP_PORT = 4000,
    NODE_ENV = 'development'
} = process.env;

const IN_PORD = NODE_ENV === 'production'

const app = express();

app.disable('x-powered-by')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: !IN_PORD
});

server.applyMiddleware({ app });

app.listen({ port: APP_PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`)
)