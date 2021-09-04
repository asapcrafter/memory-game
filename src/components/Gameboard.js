import React, {useState} from 'react';
import Card from './Card.js'

const Gameboard = () => {
    const [streak, setStreak] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [reset, setReset] = useState(false)

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
        setReset(true);
    }
    
    let cardArray = [
        <Card name='Grass' key='Grass'  image='./img/GrassNew.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Stone' key='Stone' image='./img/Stone_JE4_BE3.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Amethyst' key='Amethyst' image='./img/Amethyst_Cluster_(U)_JE1.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Barrel' key='Barrel' image='./img/Barrel_(U)_JE1_BE1.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Beacon'key='Beacon' image='./img/Beacon_JE6_BE2.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Bedrock' key='Bedrock' image='./img/Bedrock_JE2_BE2.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Birch' key='Birch' image='./img/Birch_Log_(UD)_JE5_BE3.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Bookshelf' key='Bookshelf' image='./img/Bookshelf_JE4_BE2.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Anvil' key='Anvil' image='./img/Broken_Anvil_(N)_BE2.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Cactus' key='Cactus' image='./img/Cactus_JE4.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Cake' key='Cake' image='./img/Cake_JE2.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Pumpkin' key='Pumpkin' image='./img/Carved_Pumpkin_(S)_JE4.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Copper Ore' key='Copper Ore' image='./img/Copper_Ore_JE2_BE2.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Diamond Ore' key='Diamond Ore' image='./img/Diamond_Ore_JE5_BE5.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Emerald Ore' key='Emerald Ore' image='./img/Emerald_Ore_JE4_BE3.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Gold Ore' key='Gold Ore' image='./img/Gold_Ore_JE7_BE4.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Gravel' key='Gravel' image='./img/Gravel_JE5_BE4.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Hay Bale' key='Hay Bale' image='./img/Hay_Bale_(UD)_JE2_BE2.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Iron Ore' key='Iron Ore' image='./img/Iron_Ore_JE6_BE4.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Lapis Lazuli Ore' key='Lapis Lazuli Ore' image='./img/Lapis_Lazuli_Ore_JE4_BE4.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Mycelium' key='Mycelium' image='./img/Mycelium_JE2_BE2.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Packed Ice' key='Packed Ice' image='./img/Packed_Ice_JE2_BE3.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Prismarine' key='Prismarine' image='./img/Prismarine_JE2_BE2.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Redstone Ore' key='Redstone Ore' image='./img/Redstone_Ore_JE4_BE3.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Sandstone' key='Sandstone' image='./img/Sandstone_JE6_BE3.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Slime Block' key='Slime Block' image='./img/Slime_Block_JE2_BE3.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Sponge' key='Sponge' image='./img/Sponge_JE3_BE3.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='Sugar Cane' key='Sugar Cane' image='./img/Sugar_Cane_JE2_BE2.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        <Card name='TNT Block' key='TNT Block' image='./img/TNT_JE3_BE2.webp' win={handleWin} lose={handleLost} reset={reset}/>,
        // <Card key='' image='.' win={handleWin} lose={handleLost}/>,
    ];

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        //Returns the 'n' amount of items from the array to display.
        return array.slice(0, 14)
    }  

    shuffleArray(cardArray)

    return (
        <div>
            <div id="score-wrapper">
                <div className="score">
                    <p>Streak: {streak}</p>
                    <p>Best score: {highScore}</p>
                    {/* <button onClick={resetCards}>RESETT  </button> */}
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

export default Gameboard;
