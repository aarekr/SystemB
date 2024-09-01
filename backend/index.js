const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

let drinks = [
    {
        name: "Gambrinus",
        type: "Beer",
        producer: "Plzensky Prazdroj",
        year: 1869,
        country: "Czechia",
    },
    {
        name: "Starobrno",
        type: "Beer",
        producer: "Pivovar Starobrno",
        year: 1325,
        country: "Czechia",
    },
    {
        name: "Krusovice",
        type: "Beer",
        producer: "Kralovsky pivovar Krusovice",
        year: 1581,
        country: "Czechia",
    },
    {
        name: "Hefeweissbier",
        type: "Beer",
        producer: "Bayerische Staatsbrauerei Weihenstephan",
        year: 1040,
        country: "Germany",
    },
    {
        name: "Jameson",
        type: "Whiskey",
        producer: "Jameson Distillery",
        year: 1780,
        country: "Ireland",
    },
    {
        name: "Ballantine's Finest",
        type: "Whiskey",
        producer: "George Ballantine and Son",
        year: 1827,
        country: "Scotland",
    },
]

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
`

const resolvers = {
  Query: {
    drinkCount: () => drinks.length,
    allDrinks: () => drinks,
    findDrink: (root, args) => drinks.find(d => d.name === args.name)
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
