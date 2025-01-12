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
            <audio ref={audioPlayer} src="https://strangefm.out.airtime.pro/strangefm_a" preload="metadata"></audio>
            {/* Remove "disabled" from the button tag below. */}
            <button className="play-btn" onClick={togglePlayPause}>{ isPlaying ? <FaStop /> : <FaPlay /> }</button>
            {/* http://radio.rainycityradio.live:8000/radio.mp3 */}
        </div>
    )
}

export default Player;
