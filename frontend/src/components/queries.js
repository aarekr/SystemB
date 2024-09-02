import { gql } from "@apollo/client"

export const ALL_DRINKS = gql`
    query {
        allDrinks {
            name
            type
            producer
            year
            country
        }
    }
`

/*const FIND_DRINK = gql`
  query findDrinkByName($nameToSearch: String!) {
    findDrink(name: $nameToSeacrh) {
      name
      type
      producer
      year
      country
    }
  }
`*/
