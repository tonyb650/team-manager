import React, { useState } from 'react'


function Form (props) {
    const { initialPlayerName, initialPosition, submitCallBack, errors, setErrors } = props;
    const [playerName, setPlayerName] = useState(initialPlayerName)
    const [position, setPosition] = useState(initialPosition)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("entered handleSubmit on Form.jsx")
        const playerObj = { playerName, position};
        submitCallBack(playerObj)
    }

  return (
    <div className="container border">
        <form onSubmit={handleSubmit}>
            <div>
                <label className="form-label" htmlFor="playerName">Player name:</label>
                <input className='form-control' id="playerName" type="text" value={playerName} onChange={(e) => {setPlayerName(e.target.value)}}/>
                { errors.length > 0 ? errors.map((error, index) => ( <p className='alert alert-danger' key={index}>{error}</p>)) : null }
                { errors.length > 0 && playerName.length < 3 ?  (<p className='alert alert-danger'>Player name must be longer</p>) : null }
                {/* Note: I'm using errors.length as a 'flag' that an validation error has already been encountered. Probably a better practice to create an independent
                'flag' boolean so that front-end and back-end validations are independent? */}
            </div>
            <div>
                <label className="form-label" htmlFor="position">Preferred position:</label>
                <input className='form-control' id="position" type="text"  value={position} onChange={(e) => {setPosition(e.target.value)}} />
            </div>
            <input className="btn btn-secondary" type="submit" value="Add" />
        </form>
    </div>
  )
}

export default Form