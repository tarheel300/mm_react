//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Games from './components/Games'

function App() {
  const [games] = useState(
    [{
      id: 'G1'
      , location: null
      , teams: [{id: 'G1T', seed: null, team: null}
              , {id: 'G1B', seed: null, team: null}]
      , next_id: 'G0T'
    }
    , {
      id: 'G2'
      , location: 'Chapel Hill, NC'
      , teams: [{id: 'G2T', seed: 1, team: 'North Carolina'}
              , {id: 'G2B', seed: 4, team: 'Duke'}]
      , next_id: 'G1T'
    }
    , {
      id: 'G3'
      , location: 'Roanoke, VA'
      , teams: [{id: 'G3T', seed: 2, team: 'Virigina'}
              , {id: 'G3B', seed: 3, team: 'Florida State'}]
      , next_id: 'G1B'
    }]
    )

  //pick winner
  const selectWinner = (id) => {
    console.log('Selected', id)
  }

  return (
    <div className="container">
      <Header />
      <Games games={games} selectWinner={selectWinner}/>
    </div>
  );
}

export default App;
