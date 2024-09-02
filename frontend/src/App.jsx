import { gql, useQuery } from '@apollo/client'

const ALL_DRINKS = gql`
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

const App = () => {
  const result = useQuery(ALL_DRINKS)
  console.log("result: ", result)

  if (result.loading)  {
    return <div>loading...</div>
  }

  return (
    <div>
      {result.data.allDrinks.map(d => <li>{d.name}</li>)}
    </div>
  )
}

export default App
