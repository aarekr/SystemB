import { useState } from 'react'
import AllDrinks from './components/AllDrinks'
import Beers from './components/Beers'
import Whiskeys from './components/Whiskeys'

const App = () => {
  const [ page, setPage ] = useState('all')

  return (
    <div>
      <h1>System B</h1>
      <div>
        <button onClick={() => setPage("all")}>ALL</button>
        <button onClick={() => setPage("beers")}>BEERS</button>
        <button onClick={() => setPage("whiskeys")}>WHISKEYS</button>
      </div>
      <hr />
      <AllDrinks show={page === "all"} />
      <Beers show={page === "beers"} />
      <Whiskeys show={page == "whiskeys"} />
    </div>
  )
}

export default App
