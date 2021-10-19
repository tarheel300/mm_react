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
      , teams: [{team_id: '4T', seed: 1, team: 'North Carolina'}
              , {team_id: '4B', seed: 8, team: 'Duke'}]
      , round: 'R3'
      , next_id: '2T'
      , selected: false
    }
    , {
      id: 5
      , location: 'Greensboro, NC'
      , teams: [{team_id: '5T', seed: 4, team: 'Syracuse'}
              , {team_id: '5B', seed: 5, team: 'Boston College'}]
      , round: 'R3'
      , next_id: '2B'
      , selected: false
    }
    , {
      id: 6
      , location: 'Roanoke, VA'
      , teams: [{team_id: '6T', seed: 2, team: 'Virginia'}
              , {team_id: '6B', seed: 7, team: 'Notre Dame'}]
      , round: 'R3'
      , next_id: '3T'
      , selected: false
    }
    , {
      id: 7
      , location: 'Greensboro, NC'
      , teams: [{team_id: '7T', seed: 3, team: 'Florida State'}
              , {team_id: '7B', seed: 6, team: 'Miami'}]
      , round: 'R3'
      , next_id: '3B'
      , selected: false
    }
    , {
      id: 2
      , location: 'Greensboro, NC'
      , teams: [{team_id: '2T', seed: null, team: null}
              , {team_id: '2B', seed: null, team: null}]
      , round: 'R2'
      , next_id: '1T'
      , selected: false
    }
    , {
      id: 3
      , location: 'Greensboro, NC'
      , teams: [{team_id: '3T', seed: null, team: null}
              , {team_id: '3B', seed: null, team: null}]
      , round: 'R2'
      , next_id: '1B'
      , selected: false
    }
    , {
      id: 1
      , location: null
      , teams: [{team_id: '1T', seed: null, team: null}
              , {team_id: '1B', seed: null, team: null}]
      , round: 'R1'
      , next_id: '0T'
      , selected: false
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

  function toggleIndicator (id) {
    setBracket(bracket.map((game) => game.id === id ? {...game, selected: !game.selected} : game))
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

    //making the main update around the selected team advancing to the next round
    console.log(toGameId)
    setBracket(bracket.map((game) => game.id === toGameId
      ? newGame : game)
      )

    console.log('Test')

    //toggleIndicator(id)
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
