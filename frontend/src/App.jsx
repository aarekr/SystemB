import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import AllDrinks from './components/AllDrinks'
import Beers from './components/Beers'
import Ciders from './components/Ciders'
import Vodkas from './components/Vodkas'
import Whiskeys from './components/Whiskeys'
import { Container, AppBar, Toolbar, IconButton, Button } from '@mui/material'
import AddNewDrink from './components/AddNewDrink'
import DrinkInfoPage from './components/DrinkInfoPage'

const App = () => {
  return (
    <Container>
      <Router>
        <AppBar color="secondary" position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">System B</IconButton>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/beers">Beers</Button>
            <Button color="inherit" component={Link} to="/ciders">Ciders</Button>
            <Button color="inherit" component={Link} to="/vodkas">Vodkas</Button>
            <Button color="inherit" component={Link} to="/whiskeys">Whiskeys</Button>
            <Button color="inherit" component={Link} to="/addnewdrink">ADD</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<AllDrinks />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/ciders" element={<Ciders />} />
          <Route path="/vodkas" element={<Vodkas />} />
          <Route path="/whiskeys" element={<Whiskeys />} />
          <Route path="/addnewdrink" element={<AddNewDrink />} />
          <Route path="/drinkinfopage" element={<DrinkInfoPage />} />
          <Route path="/drinks/:name" element={<AllDrinks name={name} />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
