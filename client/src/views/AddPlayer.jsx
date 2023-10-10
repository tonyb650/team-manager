import { useState } from "react";
import Form from "../components/Form";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function AddPlayer() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    
    function createPlayer(playerObj) {
        // console.log('entered createPlayer')
        // console.log(playerObj)
        playerObj.status = [0,0,0] // Add default status of undecided
        axios.post('http://localhost:8000/api/player', playerObj)
        .then(res => { 
            console.log(res);
            navigate('/')
        })
        .catch(err => {
          const errorArray=[];
          const responseErrors = err.response.data.errors;
          for(const key of Object.keys(responseErrors)) {
            errorArray.push(responseErrors[key].message);
          }
          setErrors(errorArray);
        })
    } 

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col border">
            <h2>
              <Link to="/">List</Link> |<Link to="/player/add">Add Player</Link>
            </h2>
            <Form initialPlayerName="" initialPosition="" submitCallBack={createPlayer} errors={errors} setErrors={setErrors}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPlayer;