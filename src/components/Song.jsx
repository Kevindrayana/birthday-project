import song from '/song.mp4'
import { useState } from "react"

export default function Song(){
    const [label, setLabel] = useState("play me")
    
    function playSong(){
        let audio = new Audio(song);
        setLabel("playing happy birthday");
        audio.play();
    }

    return(
        <button onClick={playSong} >{label} 🎵</button>
    )
}
    