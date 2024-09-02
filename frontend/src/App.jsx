import { useState } from 'react'
import AllDrinks from './components/AllDrinks'

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

const App = () => {
  const [ page, setPage ] = useState('all')

  return (
    <div>
      <h1>System B</h1>
      <div>
        <button onClick={() => setPage("all")}>ALL</button>
      </div>
      <hr />
      <AllDrinks show={page === "all"} />
      
    </div>
  )
}

export default App
