const express = require ('express'),
    dotenv = require('dotenv'),
    mongoose = require('mongoose'),
    compression = require('compression'),
    { ApolloServer } = require('apollo-server-express'),
    { makeExecutableSchema } = require('@graphql-tools/schema'),
    typeDefs = require('./graphql/typeDefs'),
    resolvers = require('./graphql/resolvers')

dotenv.config()

const schema = makeExecutableSchema({typeDefs, resolvers})
const server = new ApolloServer({
    schema
})

const app = express()
const port = process.env.PORT || 8001
app.use(compression())
// const app = express(),
//     server = HttpServer.createServer(app),
//     port = process.env.PORT || 8001

const start = async () => {
    try {
        await server.start()

        server.applyMiddleware({
            app,
            path: '/graphql'
        })
        
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })   

        app.get('/', (req, res) => {
            res.status(200).send('Welcome')
        })
        // server.listen(port, () => console.log(`Listen on port ${port}`))

        await new Promise((resolve) => app.listen({ port : port}, resolve))
        console.log(`Server running at ${port} `)
    } catch (error) {
        console.log(error)
        console.log('server crash!!')
    }

}

start()

