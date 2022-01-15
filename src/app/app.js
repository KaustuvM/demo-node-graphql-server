/*
 * Class - Application
 */
'use strict'
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')


const server = new ApolloServer({ typeDefs, resolvers })

class Application {
    static run() {
        // server.use(function(req,res,next){setTimeout(next,1000)})
        server.listen().then(({ url }) => {
            console.log(`Server is running at ${url}`)
        })
    }
}

module.exports = Application