const { graphql, buildSchema } = require('graphql');

const db = {users : [
    {id: '1', email: 'faruq@gmail.com', name: 'faruq'},
    {id: '2', email: 'saharukh@gmail.com', name: 'saharukh'},
    {id: '3', email: 'rinku@gmail.com', name: 'rinku'}
]}

const schema = buildSchema(`
    type Query{
        users: [Users!]!
    }
    
    type Users{
        id: ID!
        email: String!
        name: String
        avatarURL: String
    }
    `
)

const rootValue = {
    //message: () => 'GraphQL is working'
    users: () => db.users
}

const query = `{users {id, name}}`;

graphql(schema, query, rootValue)
.then(res => console.dir(res, {depth: null}) )
.catch(e => console.error(e))