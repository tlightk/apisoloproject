const { gql } = require("apollo-server");
const { ApolloServer } = require("apollo-server");
const { DEFAULT_DEPRECATION_REASON } = require("graphql");
const knexfile = require("./knexfile");
const knex = require('knex')({
    client: 'postgres',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'wordpass1',
        database: 'solo_api'
    }
});

const typeDefs = gql`
  type FamilyMembers {
    id: Int
    first_name: String
    middle_name: String
    age: Int
    birthday: String
    birthplace: String
    likes: String
    dislikes: String
  }

  type ReturnMessage {
      message: String
  }

  input FamilyMembersInput {
    id: Int
    first_name: String
    middle_name: String
    age: Int
    birthday: String
    birthplace: String
    likes: String
    dislikes: String
  }

  type Query {
    member(first_name: String): FamilyMembers
    family: [FamilyMembers]
  }

  type Mutation {
    addMember(input: FamilyMembersInput): ReturnMessage
    deleteMember(first_name: String): ReturnMessage
    updateMember(first_name: String, update: FamilyMembersInput): ReturnMessage
  }
`;

resolvers = {
    Query: {
        member: (parent, args) => {
            return knex
                .select()
                .table("xiong_family")
                .then((members) => {
                    let name;
                    [name] = members.filter((member) => member.first_name === args.first_name);
                    return name;
                });
        },
        family: (parent, args) => {
            return knex
                .select()
                .table("xiong_family")
                .then((members) => {
                    return members;
                })
        }
    },
    Mutation: {
        addMember: async (parent, args) => {
            await knex("xiong_family")
                .insert(args.input)
            return { message: "Successfully added a member!" }
        },
        deleteMember: async (parent, args) => {
            await knex('xiong_family')
                .where({first_name: args.first_name})
                .del()
                return { message: "Successfully deleted!"}
        },
        updateMember: async (parent, args) => {
            await knex('xiong_family')
            .where({first_name: args.first_name})
            .update(args.update)
            return { message: "Successfully updated!"}
        }
    }
}


const server = new ApolloServer({ typeDefs, resolvers });
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(
        `Running a GraphQL API server with Apollo at localhost:${PORT}/graphql`
    );
});