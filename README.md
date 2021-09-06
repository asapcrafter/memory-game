# Minecraft Memory Game
Players select any game cards to build a streak. Pressing a previously-selected card does not count towards this streak and resets the current score. A high score counter keeps track of the longest streak. 
### Description
This memory game was made by using ReactJS with the main features of ES6 modules, React functional components, and basic CSS styling with SASS. 
### Components

```javascript 
///Game Card Component
import React, { useState } from 'react';

const Card = (props) => {
    const [selected, setSelected] = useState(false);

    return (
        <div className='card' onClick={handleClick}>
            <div className="card-image">
                <img draggable="false" src={props.image} alt="#" />
            </div>
            <div className="card-name">
                {props.name} 
            </div>
            {/* {`${selected}`} */}
        </div>
    );
}
```
Each game card renders a simple div that is given an image, name, and key prop.

```javascript
//Gameboard Component (main controller)
import React, {useState} from 'react';
import Card from './Card.js'

const Gameboard = () => {
    const [streak, setStreak] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [reset, setReset] = useState(false)

    const incrementStreak = () => setStreak(streak + 1)
    const resetStreak = () => setStreak(0)
    const incrementHighScore = () => setHighScore(streak + 1)

    return (
        <div>
            <div id="score-wrapper">
                <div id="score-container">
                    <div className="instructions">
                        <div>How to score: Choose any card to build your streak!</div>
                        <div>Selecting an old card will break the streak. </div>
                    </div>
                    <div className="score">
                        <div id="streak">Streak: {streak}</div>
                        <div id="highscore">Best score: {highScore}</div>
                    </div>
                </div>
            </div>
            <div id="gameboard-wrapper">
                <div className="gameboard">
                    {cardArray}
                </div>
            </div>
        </div>
    );
}
```
The gameboard displays the current score and passes down props to each card. 
