import React, {useState} from 'react';
import Card from './Card.js'

const Gameboard = () => {
    const [streak, setStreak] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const incrementStreak = () => setStreak(streak + 1)
    const resetStreak = () => setStreak(0)
    const incrementHighScore = () => setHighScore(streak + 1)

    const handleWin = () => {
        incrementStreak();
        if (streak === highScore) incrementHighScore();
    }

    const handleLost = () => {
        resetStreak();
    }

    const resetCards = () => {

    }
    
    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        //Returns the first few items from the array to display.
        const shuffledArray = array.slice(0, 14)
        return shuffledArray;
    }

    const cardArray = [
        <Card id='Grass' image='./img/GrassNew.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Dirt' image='./img/Gravel_JE5_BE4.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Stone' image='./img/Stone_JE4_BE3.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Sugarcane' image='./img/Sugar_Cane_JE2_BE2.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Amethyst' image='./img/Amethyst_Cluster_(U)_JE1.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Barrel' image='./img/Barrel_(U)_JE1_BE1.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Beacon' image='./img/Beacon_JE6_BE2.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Bedrock' image='./img/Bedrock_JE2_BE2.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Birch' image='./img/Birch_Log_(UD)_JE5_BE3.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Bookshelf' image='./img/Bookshelf_JE4_BE2.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Anvil' image='./img/Broken_Anvil_(N)_BE2.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Cactus' image='./img/Cactus_JE4.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Cake' image='./img/Cake_JE2.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Pumpkin' image='./img/Carved_Pumpkin_(S)_JE4.webp' win={handleWin} lose={handleLost}/>,
        <Card id='Copper Ore' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='Diamond Ore' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='Emerald Ore' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='Gold Ore' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='Grass' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='Gravel' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='Hay Bale' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='Iron Ore' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='Lapis Lazuli Ore' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='' image='.' win={handleWin} lose={handleLost}/>,
        <Card id='' image='.' win={handleWin} lose={handleLost}/>,
    ]

    return (
        <div>
            <div id="score-wrapper">
                <div className="score">
                    <p>Streak: {streak}</p>
                    <p>Best score: {highScore}</p>
                </div>
            </div>
            <div id="gameboard-wrapper">
                <div className="gameboard">
                    {shuffleArray(cardArray)}
                </div>
            </div>
        </div>
    );
}

export default Gameboard;
