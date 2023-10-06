import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {
  let [url, setUrl] = useState('//www.balldontlie.io/api/v1/players')
  let [players, setPlayers] = useState('')

  let getPlayerId = () => {
    axios.get(url + "?search=lebron").then(async res => {
      console.log(res.data.data)
    }).catch(e => {
      console.log(e)
    })
  }

  let getPlayerStats = () => {
    axios.get("//www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=237").then(async res => {
      console.log(res.data.data, "YERR")
    }).catch(e => {
      console.log(e)
    })
  }

  useEffect(() => {
    getPlayerId()
    getPlayerStats()
  }, [])
  return (
    <div className="App">
      NBA
    </div>
  );
}

export default App;
