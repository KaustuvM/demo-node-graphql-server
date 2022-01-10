/*
 * Class - Application
 */
'use strict'
const winston = require('../config/winston')
const { ApolloServer, gql } = require('apollo-server')
const fruits = require('../data/data')

const typeDefs = gql`

    type Fruit {
        id: ID! 
        title: String
        headline: String
        image: String
        gradientColors: [String]
        description: String
        sectionHeaders: [String]
        sectionContents: [String]
        nutrition: [String]
    }

    type Query {
        fruits: [Fruit],
        fruit(id: ID!): Fruit
    }
`

const resolvers = {
    Query: {
        fruits: () => fruits,
        fruit: (_, { id }, context, info) => fruits.find(fruit => fruit.id == id)
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

class Application {
    static run() {
        server.listen().then(({ url }) => {
            console.log(`Server is running at ${url}`)
        })
    }
}

module.exports = Application