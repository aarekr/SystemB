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

export const ADD_DRINK = gql`
  mutation createDrink($name: String!, $type: String, $producer: String!, $year: Int!, $country: String!) {
    addDrink(
      name: $name
      type: $type
      producer: $producer
      year: $year
      country: $country
    )
  }
`

export const FIND_DRINK = gql`
  query findDrinkByName($nameToSearch: String!) {
    findDrink(name: $nameToSeacrh) {
      name
      type
      producer
      year
      country
    }
  }
`
