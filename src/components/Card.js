import React, { useState } from 'react';

const Card = (props) => {
    const [selected, setSelected] = useState(false);

    function handleClick() {
        selected === false ? setWin() : setLost();
    }

    function setWin() {
        setSelected(true);
    }

    function setLost() {
        return
    }

    return (
        <div className='card' onClick={handleClick()}>
            {props.id} HI
        </div>
    );
}

export default Card;
