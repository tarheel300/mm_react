//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Bracket from './components/Bracket'

function App() {
  //assumed to be sorted by round desc, game id asc
  const [bracket, setBracket] = useState(
    [{
      id: 4
      , location: 'Chapel Hill, NC'
      , teams: [{team_id: '4T', seed: 1, team: 'North Carolina', selected: false}
              , {team_id: '4B', seed: 8, team: 'Duke', selected: false}]
      , round: 'R3'
      , next_id: '2T'
    }
    , {
      id: 5
      , location: 'Greensboro, NC'
      , teams: [{team_id: '5T', seed: 4, team: 'Syracuse', selected: false}
              , {team_id: '5B', seed: 5, team: 'Boston College', selected: false}]
      , round: 'R3'
      , next_id: '2B'
    }
    , {
      id: 6
      , location: 'Roanoke, VA'
      , teams: [{team_id: '6T', seed: 2, team: 'Virginia', selected: false}
              , {team_id: '6B', seed: 7, team: 'Notre Dame', selected: false}]
      , round: 'R3'
      , next_id: '3T'
    }
    , {
      id: 7
      , location: 'Greensboro, NC'
      , teams: [{team_id: '7T', seed: 3, team: 'Florida State', selected: false}
              , {team_id: '7B', seed: 6, team: 'Miami', selected: false}]
      , round: 'R3'
      , next_id: '3B'
    }
    , {
      id: 2
      , location: 'Greensboro, NC'
      , teams: [{team_id: '2T', seed: null, team: null, selected: false}
              , {team_id: '2B', seed: null, team: null, selected: false}]
      , round: 'R2'
      , next_id: '1T'
    }
    , {
      id: 3
      , location: 'Greensboro, NC'
      , teams: [{team_id: '3T', seed: null, team: null, selected: false}
              , {team_id: '3B', seed: null, team: null, selected: false}]
      , round: 'R2'
      , next_id: '1B'
    }
    , {
      id: 1
      , location: null
      , teams: [{team_id: '1T', seed: null, team: null, selected: false}
              , {team_id: '1B', seed: null, team: null, selected: false}]
      , round: 'R1'
      , next_id: '0T'
    }
    , {
      id: 0
      , location: null
      , teams: [{team_id: '0T', seed: 1, team: 'North Carolina', selected: false}]
      , round: 'R0'
    }]
    )

  function getNextGameId (gameId) {
    return bracket.find(x => x.id === +gameId).next_id.slice(0, -1);
  }

  function getGameIndex (gameId) {
    return bracket.findIndex(x => x.id === +gameId);
  }

  //adding a comment here
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

  function toggleIndicator (id) {
    let oppId = id.toString().slice(0, -1) + (id.toString().slice(-1) === 'T' ? 'B' : 'T')
    
    //Need to revisit and make this something more efficient by doing both operations in a single .map() call.
    setBracket(bracket.map((game) => game.teams = game.teams.map((team) => team.team_id === oppId ? {...team, selected: false} : team)))
    setBracket(bracket.map((game) => game.teams = game.teams.map((team) => team.team_id === id ? {...team, selected: true} : team)))
    
  }

  const selectWinner = (id) => {
    let gameId = id.toString().slice(0, -1)
    let toGameId = +getNextGameId(gameId);
    let fromGameIndex = getGameIndex(gameId)
    let toGameIndex = getGameIndex(toGameId)
    //if no game to update, stop the function

    //Need to revisit to figure out how to make game 1 winner bold with / without Champion component.
    if (toGameIndex < 0) {
      return
    }
    let newGame = updateGameInfo(id, fromGameIndex, toGameIndex)


    toggleIndicator(id)

    //making the main update around the selected team advancing to the next round
    setBracket(bracket.map((game) => game.id === toGameId ? newGame : game))
    
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
