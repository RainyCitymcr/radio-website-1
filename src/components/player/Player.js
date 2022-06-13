import React, { useState, useRef } from 'react';
import './Player.css';
import { FaPlay, FaStop } from 'react-icons/fa';

const Player = () => {

    // state
    const [isPlaying, setIsPlaying] = useState(false);

    // references
    const audioPlayer = useRef();

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }

    return (
        <div className="player-wrapper">
            <audio ref={audioPlayer} src="https://l.facebook.com/l.php?u=https%3A%2F%2Frainycityradio.out.airtime.pro%2Frainycityradio_a%3Ffbclid%3DIwAR2wo7KmyaoW0dQ_xMXG0_7k5fQI4OoaeD4T4xpqZjElmwWgcRNBy0gPFFg&h=AT0EbrDtsY3y_bpZKT1H-YfQr6uuh9ewu0Y97fejdiUGMgiooKuvwLQRo-VlqVge7sGaGh-lomnw9R77IQxhvFzTbQgktuxs3Lp4ablLbyn3fc4PtW-gmZfgaenRPR8kOy_DO9qQZpzwQzuKpYI" preload="metadata"></audio>
            {/* Remove "disabled" from the button tag below. */}
            <button className="play-btn" onClick={togglePlayPause}>{ isPlaying ? <FaStop /> : <FaPlay /> }</button>
        </div>
    )
}

export default Player;
