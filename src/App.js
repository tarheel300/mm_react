//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Games from './components/Games'

function App() {
  const [games, setGames] = useState(
    [{
      id: 4
      , seed: 1
      , team: 'North Carolina'
    }
    , {
      id: 5
      , seed: 4
      , team: 'Duke'
    }
    , {
      id: 6
      , seed: 2
      , team: 'Viriginia'
    }
    , {
      id: 7
      , seed: 3
      , team: 'Florida State'
    }]
    )

  return (
    <div className="container">
      <Header />
      <Games games={games}/>
    </div>
  );
}

export default App;
