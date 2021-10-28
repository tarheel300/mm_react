//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Bracket from './components/Bracket'

function App() {
  //assumed to be sorted by round desc, game id asc
  const [bracket, setBracket] = useState(
    [{
      id: 8
      , location: 'Chapel Hill, NC'
      , teams: [{team_id: '8T', seed: 1, team: 'North Carolina', selected: false}
              , {team_id: '8B', seed: 16, team: 'Duke', selected: false}]
      , round: 'R4'
      , next_id: '4T'
    }
    , {
      id: 9
      , location: 'Greensboro, NC'
      , teams: [{team_id: '9T', seed: 8, team: 'Syracuse', selected: false}
              , {team_id: '9B', seed: 9, team: 'Boston College', selected: false}]
      , round: 'R4'
      , next_id: '4B'
    }
    , {
      id: 10
      , location: 'Roanoke, VA'
      , teams: [{team_id: '10T', seed: 5, team: 'Virginia', selected: false}
              , {team_id: '10B', seed: 12, team: 'Notre Dame', selected: false}]
      , round: 'R4'
      , next_id: '5T'
    }
    , {
      id: 11
      , location: 'Greensboro, NC'
      , teams: [{team_id: '11T', seed: 4, team: 'Florida State', selected: false}
              , {team_id: '11B', seed: 13, team: 'Miami', selected: false}]
      , round: 'R4'
      , next_id: '5B'
    }
    , {
      id: 12
      , location: 'Greensboro, NC'
      , teams: [{team_id: '12T', seed: 6, team: 'Kansas', selected: false}
              , {team_id: '12B', seed: 11, team: 'UCLA', selected: false}]
      , round: 'R4'
      , next_id: '6T'
    }
    , {
      id: 13
      , location: 'Greensboro, NC'
      , teams: [{team_id: '13T', seed: 3, team: 'Baylor', selected: false}
              , {team_id: '13B', seed: 14, team: 'Michigan', selected: false}]
      , round: 'R4'
      , next_id: '6B'
    }
    , {
      id: 14
      , location: null
      , teams: [{team_id: '14T', seed: 7, team: 'UMBC', selected: false}
              , {team_id: '14B', seed: 10, team: 'UConn', selected: false}]
      , round: 'R4'
      , next_id: '7T'
    }
    , {
      id: 15
      , location: null
      , teams: [{team_id: '15T', seed: 2, team: 'Maryland', selected: false}
              , {team_id: '15B', seed: 15, team: 'Loyola-Chicago', selected: false}]
      , round: 'R4'
      , next_id: '7B'
    }
      
    , {
      id: 4
      , location: 'Chapel Hill, NC'
      , teams: [{team_id: '4T', seed: null, team: null, selected: false}
              , {team_id: '4B', seed: null, team: null, selected: false}]
      , round: 'R3'
      , next_id: '2T'
    }
    , {
      id: 5
      , location: 'Greensboro, NC'
      , teams: [{team_id: '5T', seed: null, team: null, selected: false}
              , {team_id: '5B', seed: null, team: null, selected: false}]
      , round: 'R3'
      , next_id: '2B'
    }
    , {
      id: 6
      , location: 'Roanoke, VA'
      , teams: [{team_id: '6T', seed: null, team: null, selected: false}
              , {team_id: '6B', seed: null, team: null, selected: false}]
      , round: 'R3'
      , next_id: '3T'
    }
    , {
      id: 7
      , location: 'Greensboro, NC'
      , teams: [{team_id: '7T', seed: null, team: null, selected: false}
              , {team_id: '7B', seed: null, team: null, selected: false}]
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
      , teams: [{team_id: '0T', seed: null, team: null, selected: false}]
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
    let teamIndex = fromGame.next_id.slice(-1) === 'T' ? 0 : 1 //assumption of order from T to B
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

  function cascadeRemoval (gameId, teamId, gameIndex) {

    let gameMap = {}
    let gameCascade = []

    let nextId = bracket.find(x => x.id === +gameId).next_id
    let teamName = bracket[gameIndex].teams[teamId.slice(-1) === 'T' ? 0 : 1].team

    //Find Parent / Child (Immediate) Relationship
    bracket.map((game) => 
      game.teams.map((team) => 
        game.next_id ? gameMap[team.team_id] = game.next_id : null
      )
    )

    while (gameMap[nextId]) {
      gameCascade.push(gameMap[nextId])
      nextId = gameMap[nextId]
    }

    //So close, but this is failing now - probably need to rename "team" property within teams key to be able to debug any further
    //Probably shouldn't have name it that to begin with....
    setBracket(bracket.map((game) => game.teams = game.teams.map((team) => (gameCascade.includes(team.team_id) && team.team != teamName) ? {...team, team: null} : team)))

    //test  
    console.log(gameId)
    console.log(nextId)
    console.log(gameMap)
    console.log(gameCascade)
    console.log(teamName)



    /*
    while (toId) {
      console.log()
    }
    */

    /*
    //Too Broad - Need to focus in on only the chain of games of interest
    bracket.forEach(function (game) {
      if (game.next_id) {
        //gameDependencies[game.id] = game.next_id.slice(0, -1)
        console.log('Game:', game.id, ' Next Game:', game.next_id)
        if( !(game.id in gameDependencies)) {
          gameDependencies[game.id] = [game.next_id.slice(0, -1)]
        } else {
          gameDependencies[game.id].push(game.next_id.slice(0, -1))
        }
      }
    })
    */

    //console.log(gameDependencies)
  }

  const selectWinner = (id) => {
    //need to refactor this, the various features are getting too inefficient / noticeable from front end.
    let gameId = id.toString().slice(0, -1)
    let toGameId = +getNextGameId(gameId);
    let fromGameIndex = getGameIndex(gameId)
    let toGameIndex = getGameIndex(toGameId)
    //if no game to update, stop the function

    //Initially created to make sure there is no error for picking champ game picks
    //Now is just to make sure that no potentially bad data will effect function of app
    if (toGameIndex < 0) {
      return
    }
    let newGame = updateGameInfo(id, fromGameIndex, toGameIndex)


    toggleIndicator(id)

    //making the main update around the selected team advancing to the next round
    setBracket(bracket.map((game) => game.id === toGameId ? newGame : game))
    
    //removing until I can get it working
    //cascadeRemoval(gameId, id, fromGameIndex)
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
