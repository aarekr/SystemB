import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import AllDrinks from './components/AllDrinks'
import Beers from './components/Beers'
import Ciders from './components/Ciders'
import Vodkas from './components/Vodkas'
import Whiskeys from './components/Whiskeys'

const App = () => {
  const padding = { padding: 7}
  return (
    <Router>
      <div>
        <h1>System B</h1>
        <Link style={padding} to="/"><button>Home</button></Link>
        <Link style={padding} to="/beers"><button>Beers</button></Link>
        <Link style={padding} to="/ciders"><button>Ciders</button></Link>
        <Link style={padding} to="/vodkas"><button>Vodkas</button></Link>
        <Link style={padding} to="/whiskeys"><button>Whiskeys</button></Link>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<AllDrinks />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/ciders" element={<Ciders />} />
        <Route path="/vodkas" element={<Vodkas />} />
        <Route path="/whiskeys" element={<Whiskeys />} />
      </Routes>
    </Router>
  )
}

export default App
