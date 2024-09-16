const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { v1: uuid } = require('uuid')

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const Drink = require('./models/drink')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

let drinks = []
/* template for new drinks
{
        name: "",
        type: "",
        producer: "",
        year: ,
        country: "",
    },
*/

const typeDefs = `
  type Drink {
    name: String!
    type: String
    producer: String!
    year: Int! 
    country: String!
  }

  type Query {
    drinkCount: Int!
    allDrinks: [Drink!]!
    findDrink(name: String!): Drink
  }

  type Mutation {
    addDrink(
      name: String!
      type: String
      producer: String!
      year: Int
      country: String!
    ): Drink
  }
`

const resolvers = {
  Query: {
    //drinkCount: () => drinks.length,
    drinkCount: async () => await Drink.collection.countDocuments(),
    //allDrinks: () => drinks,
    allDrinks: async (root, args) => await Drink.find({}),
    //findDrink: (root, args) => drinks.find(d => d.name === args.name)
    findDrink: async (root, args) => await Drink.findOne({ name: args.name })
  },
  Drink: {
    name: (root) => root.name,
    type: (root) => root.type,
    producer: (root) => root.producer,
    year: (root) => root.year,
    country: (root) => root.country,
  },
  Mutation: {
    addDrink: (root, args) => {
      /*if (drinks.find(d => d.name === args.name)) {
        throw new GraphQLError('Drink name must be unique', {
          extensions: {
            code: 'BAD_USER_INPUT',
            invalidArgs: args.name
          }
        })
      }*/
      const drink = { ...args }  // , id: uuid()
      drinks = drinks.concat(drink)
      console.log("drink: ", drink)
      return drink//.save()
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
