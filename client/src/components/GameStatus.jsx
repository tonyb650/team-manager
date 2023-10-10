import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'

function GameStatus(props) {
    const gameNumber = useParams().id;
    const [playersList, setPlayersList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/player`)
        .then(res => {
            // console.log(res.data);
            setPlayersList(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    const setStatus = (player ,newStatus) => {
        const newStatusArray = player.status
        newStatusArray[gameNumber-1] = newStatus
        let newStatusObj = { "status": newStatusArray}
        axios.patch(`http://localhost:8000/api/player/${player._id}`, newStatusObj)
        .then(res => {
            // console.log(res.data);
            // Pretty sure this is not the best way to do this...
            const targetIndex = playersList.findIndex((element) => element._id == player._id)
            const tempPlayersList = [...playersList]
            tempPlayersList[targetIndex] = res.data
            setPlayersList(tempPlayersList)
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='container border'>
        <div className="row">
            <div className="col">
                <h2>Player Status - Game {gameNumber}</h2>
                <h4>
                    {gameNumber==1 ? `Game 1` : <Link to="/status/game/1">Game 1</Link> } |
                    {gameNumber==2 ? `Game 2` : <Link to="/status/game/2">Game 2</Link> } |
                    {gameNumber==3 ? `Game 3` : <Link to="/status/game/3">Game 3</Link> } 
                </h4>
                <table className="table border">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Status for Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playersList.map((player) => {
                            return (
                                <tr key={player._id}>
                                    <td>{player.playerName}</td>
                                    <td>
                                        <button className={"btn " + (player.status[gameNumber-1]==2 ? "btn-success" : "btn-secondary")} onClick={(e) => setStatus(player,2)}>Playing</button>
                                        <button className={"btn " + (player.status[gameNumber-1]==1 ? "btn-danger" : "btn-secondary")} onClick={(e) => setStatus(player,1)}>Not Playing</button>
                                        <button className={"btn " + (player.status[gameNumber-1]==0 ? "btn-warning" : "btn-secondary")} onClick={(e) => setStatus(player,0)}>Undecided</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default GameStatus