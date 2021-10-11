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

  function getNextGameId (gameId) {
    return bracket.find(x => x.id === gameId).next_id.slice(0, -1);
  }

  function getGameIndex (gameId) {
    return bracket.findIndex(x => x.id === gameId);
  }

  function updateGameInfo (id, fromIndex, toIndex) {
    let fromGame = bracket[fromIndex]
    let toGame = bracket[toIndex]
    let teamIndex = fromGame.next_id.slice(-1) == 'T' ? 0 : 1
    
    //Need to find the index of the team that was clicked!!!
    //Then use that to get the values that the next 2 lines should be using to update their values.
    toGame.teams[teamIndex].seed = 1
    toGame.teams[teamIndex].team = 'North Carolina'

    return toGame
  }
  //Update the Location
  const selectWinner = (id) => {
    let gameId = id.toString().slice(0, -1)
    let toGameId = getNextGameId(gameId);
    let fromGameIndex = getGameIndex(gameId)
    let toGameIndex = getGameIndex(toGameId)
    updateGameInfo(id, fromGameIndex, toGameIndex)
    console.log(toGameIndex)
    /*setBracket(bracket.map((game) => game.id === 'G1'
      ? { ...game, location: 'Atlanta, GA', teams: {...game.teams, seed: 1}} : game))
      */
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
