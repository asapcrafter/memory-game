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
        if (streak === highScore) {
            incrementHighScore();
            const audio = document.querySelector('#levelup-sound');
            audio.volume = 0.18;
            if (audio.paused) {
                audio.play();
            }else {
                audio.currentTime = 0
                audio.play();
            }      
        }
    }

    const handleLost = () => {
        resetStreak();
        resetCard();
    }
  
    let cardArray = [
        <Card name='Grass Block' key='Grass'  image='./img/GrassNew.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Stone Block' key='Stone' image='./img/Stone_JE4_BE3.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Amethyst' key='Amethyst' image='./img/Amethyst_Cluster_(U)_JE1.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Barrel' key='Barrel' image='./img/Barrel_(U)_JE1_BE1.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Beacon'key='Beacon' image='./img/Beacon_JE6_BE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Bedrock' key='Bedrock' image='./img/Bedrock_JE2_BE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Birch' key='Birch' image='./img/Birch_Log_(UD)_JE5_BE3.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Bookshelf' key='Bookshelf' image='./img/Bookshelf_JE4_BE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Anvil' key='Anvil' image='./img/Broken_Anvil_(N)_BE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Cactus' key='Cactus' image='./img/Cactus_JE4.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Cake' key='Cake' image='./img/Cake_JE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Pumpkin' key='Pumpkin' image='./img/Carved_Pumpkin_(S)_JE4.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Copper Ore' key='Copper Ore' image='./img/Copper_Ore_JE2_BE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Diamond Ore' key='Diamond Ore' image='./img/Diamond_Ore_JE5_BE5.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Emerald Ore' key='Emerald Ore' image='./img/Emerald_Ore_JE4_BE3.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Gold Ore' key='Gold Ore' image='./img/Gold_Ore_JE7_BE4.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Gravel' key='Gravel' image='./img/Gravel_JE5_BE4.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Hay Bale' key='Hay Bale' image='./img/Hay_Bale_(UD)_JE2_BE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Iron Ore' key='Iron Ore' image='./img/Iron_Ore_JE6_BE4.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Lapis Lazuli' key='Lapis Lazuli Ore' image='./img/Lapis_Lazuli_Ore_JE4_BE4.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Mycelium' key='Mycelium' image='./img/Mycelium_JE2_BE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Packed Ice' key='Packed Ice' image='./img/Packed_Ice_JE2_BE3.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Prismarine' key='Prismarine' image='./img/Prismarine_JE2_BE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Redstone Ore' key='Redstone Ore' image='./img/Redstone_Ore_JE4_BE3.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Sandstone' key='Sandstone' image='./img/Sandstone_JE6_BE3.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Slime Block' key='Slime Block' image='./img/Slime_Block_JE2_BE3.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Sponge' key='Sponge' image='./img/Sponge_JE3_BE3.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Sugar Cane' key='Sugar Cane' image='./img/Sugar_Cane_JE2_BE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='TNT Block' key='TNT Block' image='./img/TNT_JE3_BE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Bee Nest' key='Bee' image='./img/Bee_Nest_(N)_JE1_BE1.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Bell' key='Bell' image='./img/Bell_JE3.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Brick Block' key='Brick' image='./img/Bricks_JE5_BE3.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Composter' key='Composter' image='./img/Composter.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Glass Block' key='Glass' image='./img/Glass_JE4_BE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Hopper' key='Hopper' image='./img/Hopper_(S)_JE4.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Grass' key='Fern' image='./img/Jungle_Grass.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Redstone Lamp' key='Red Lamp' image='./img/Lit_Redstone_Lamp_JE3_BE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Nether Wart' key='Wart' image='./img/Nether_Wart_Age_2_JE2_BE3.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Red Mushroom' key='Red Shroom' image='./img/Red_Mushroom_JE2_BE2.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Berry Bush' key='Berry' image='./img/Sweet_Berry_Bush_Age_2_JE1_BE1.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
        <Card name='Leaves' key='Leaves' image='./img/Oak_Leaves_BE5.webp' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,

        // <Card name='' key='' image='.' win={handleWin} lose={handleLost} reset={reset} setReset={setReset}/>,
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

    const resetCard = () => {
        setReset(!reset)
    }

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

export default Gameboard;
