import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function PlayerList() {
    const [playersList, setPlayersList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/player`)
        .then(res => {
            setPlayersList(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    function handleDelete(id) {
        if(id){
            axios.delete(`http://localhost:8000/api/player/${id}`)
            .then(res => console.log("successfully deleted player"))
            .catch(err => console.log(err))
            setPlayersList (playersList.filter((player) => player._id !=id))
        }
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col border">
                <h2> 
                    <Link to="/">List</Link> |
                    <Link to="/player/add">Add Player</Link>
                </h2>        
                <table className="table border">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Preferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playersList.map((player) => { return (
                            <tr key={player._id}>
                                <td>{player.playerName}</td>
                                <td>{player.position}{/*  | {player.status[0]} | {player.status[1]} | {player.status[2]} */}</td>
                                <td><button className='btn btn-secondary delete-button' onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) handleDelete(player._id)}}>Delete</button></td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default PlayerList