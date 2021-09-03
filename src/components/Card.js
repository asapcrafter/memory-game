import React, { useState } from 'react';

const Card = (props) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        selected === false ? setWin() : setLost();
    }

    const setWin = () => {
        setSelected(true);
        props.win();
    }

    const setLost = () => {
        props.lose();
    }

    return (
        <div className='card' onClick={handleClick}>
            <div className="card-image">
                <img src={props.image} alt="#" />
            </div>
            <div className="card-name">
                {props.id} 
            </div>
            {`${selected}`}
        </div>
    );
}

export default Card;
