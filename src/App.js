//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Bracket from './components/Bracket'

function App() {
  //assumed to be sorted by round desc, game id asc
  const [bracket, setBracket] = useState(
    [{
      id: 2
      , location: 'Chapel Hill, NC'
      , teams: [{team_id: '2T', seed: 1, team: 'North Carolina'}
              , {team_id: '2B', seed: 4, team: 'Duke'}]
      , round: 'R2'
      , next_id: '1T'
    }
    , {
      id: 3
      , location: 'Roanoke, VA'
      , teams: [{team_id: '3T', seed: 2, team: 'Virigina'}
              , {team_id: '3B', seed: 3, team: 'Florida State'}]
      , round: 'R2'
      , next_id: '1B'
    }
    , {
      id: 1
      , location: 'Greensboro, NC'
      , teams: [{team_id: '1T', seed: null, team: null}
              , {team_id: '1B', seed: null, team: null}]
      , round: 'R1'
      , next_id: '0T'
    }]
    )

  function getNextGameId (gameId) {
    return bracket.find(x => x.id === +gameId).next_id.slice(0, -1);
  }

  function getGameIndex (gameId) {
    return bracket.findIndex(x => x.id === +gameId);
  }

  function updateGameInfo (id, fromIndex, toIndex) {
    let fromGame = JSON.parse(JSON.stringify(bracket[fromIndex]))
    let toGame = JSON.parse(JSON.stringify(bracket[toIndex]))
    let teamIndex = fromGame.next_id.slice(-1) === 'T' ? 0 : 1
    let fromTeam = JSON.parse(JSON.stringify(fromGame.teams.find(x => x.team_id === id)))
    let seed = fromTeam.seed
    let team = fromTeam.team
   
    toGame.teams[teamIndex].seed = seed
    toGame.teams[teamIndex].team = team

    return toGame
  }

  const selectWinner = (id) => {
    let gameId = id.toString().slice(0, -1)
    let toGameId = +getNextGameId(gameId);
    let fromGameIndex = getGameIndex(gameId)
    let toGameIndex = getGameIndex(toGameId)
    //if no game to update, stop the function
    if (toGameIndex < 0) {
      return
    }

    let newGame = updateGameInfo(id, fromGameIndex, toGameIndex)

    setBracket(bracket.map((game) => game.id === toGameId
      ? newGame : game)
      )
  }

  return (
    <div className="container">
      <Header />
      <Bracket bracket={bracket} selectWinner={selectWinner}/>
    </div>
  );
}

export default App;
//selectWinner={selectWinner}
