import React from 'react';

const Header = () => {
    const backgroundAudio = document.getElementById("background-audio");
    backgroundAudio.volume = 0.3;

    window.onload=function(){
        backgroundAudio.play();
      }
    
    return (
        <div className="header-wrapper">
            <div className='header'>
                Minecraft Memory Game
            </div>
        </div>
    );
}

export default Header;
