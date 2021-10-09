//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Bracket from './components/Bracket'

function App() {
  const [bracket, setBracket] = useState(
    [{
      id: 'G1'
      , location: null
      , teams: [{team_id: 'G1T', seed: null, team: null}
              , {team_id: 'G1B', seed: null, team: null}]
      , next_id: 'G0T'
    }
    , {
      id: 'G2'
      , location: 'Chapel Hill, NC'
      , teams: [{team_id: 'G2T', seed: 1, team: 'North Carolina'}
              , {team_id: 'G2B', seed: 4, team: 'Duke'}]
      , next_id: 'G1T'
    }
    , {
      id: 'G3'
      , location: 'Roanoke, VA'
      , teams: [{team_id: 'G3T', seed: 2, team: 'Virigina'}
              , {team_id: 'G3B', seed: 3, team: 'Florida State'}]
      , next_id: 'G1B'
    }]
    )

    /*
  //pick winner
  const selectWinner = (team_id) => {
    //currently using string lengths, worth looking at using JSON searching later
    let gameID = team_id.slice(0,-1)
    setGames(
      games.map((game) => game.location = 'Atlanta, GA')
    )

    console.log('Selected', team_id)
  }
  */
  //Update the Location
  const selectWinner = (id) => {
    console.log("I Ran")
    setBracket(bracket.map((game) => game.id === 'G1' 
      ? { ...game, location: 'Atlanta, GA'} : game))
  }

  return (
    <div className="container">
      <Header />
      <Bracket bracket={bracket} selectWinner={selectWinner}/>
      <button id="clickme" onClick={selectWinner}>Test</button>
    </div>
  );
}

export default App;
//selectWinner={selectWinner}
