//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Bracket from './components/Bracket'

function App() {
  const selectTeam = (id) => {
    console.log('test')
  }

  return (
    <div className="container">
      <Header />
      <Bracket onSelect={selectTeam}/>
    </div>
  );
}

export default App;
