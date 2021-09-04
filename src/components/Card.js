import React, { useState } from 'react';

const Card = (props) => {
    const [selected, setSelected] = useState(false);

    const audio = document.querySelector('#xp-sound');
    audio.volume = 0.18;

    const handleClick = () => {
        if (selected === false) {
            audio.play();
            setTimeout(setWin(), 100);
        } else {
            setTimeout(setLost(), 100)
        }
    }

    const setWin = () => {
        setSelected(true);
        props.win();
    }

    const setLost = () => {
        props.lose();
    }

    if (props.reset === true) {
        setSelected(false)
    }

    return (
        <div className='card' onClick={handleClick}>
            <div className="card-image">
                <img src={props.image} alt="#" />
            </div>
            <div className="card-name">
                {props.name} 
            </div>
            {`${selected}`}
        </div>
    );
}

export default Card;
