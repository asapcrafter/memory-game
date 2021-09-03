import React, {useState} from 'react';
import Card from './Card.js'

const Gameboard = () => {
    const [streak, setStreak] = useState(0);
    const [highScore, setHighScore] = useState(0);

    
    return (
        <div>
            <Card id='Grass' />
        </div>
    );
}

export default Gameboard;
