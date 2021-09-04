import React, { useState } from 'react';

const Card = (props) => {
    const [selected, setSelected] = useState(false);

    const wonAudio = document.querySelector('#xp-sound');
    wonAudio.volume = 0.18;
    const lostAudio = document.querySelector('#lose-sound');
    lostAudio.volume = 0.15;

    const handleClick = () => {
        if (selected === false) {
            if (wonAudio.paused) {
                wonAudio.play();
            }else {
                wonAudio.currentTime = 0
                wonAudio.play();
            }
            setTimeout(setWin(), 200);
        } else {
            if (lostAudio.paused) {
                lostAudio.play();
            } else {
                lostAudio.currentTime = 0
                lostAudio.play();
            }
            setTimeout(setLost(), 200);
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
        setTimeout(() => {
            props.setReset(false);
            setSelected(false);
        }, 1
        );
    }

    return (
        <div className='card' onClick={handleClick}>
            <div className="card-image">
                <img src={props.image} alt="#" />
            </div>
            <div className="card-name">
                {props.name} 
            </div>
            {/* {`${selected}`} */}
        </div>
    );
}

export default Card;
