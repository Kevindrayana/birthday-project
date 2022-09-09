import { useState } from 'react'

export default function Countdown(props){
    const [countdown, setCountdown] = useState({
        days: "-",
        minutes: "-",
        hours: "-",
        seconds: "-" 
    });

    setInterval(function(){ 
        //this code runs every second 
        let birthday = new Date(`${props.birthdate}, 2023 0:0:0`).getTime();
        let now = new Date().getTime();
        let distance = birthday - now;

        setCountdown({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)  
        })
    }, 1000);
    
    return(
        <div>
            {countdown.days != 0 ? <h3>{countdown.days} : {countdown.hours} : {countdown.minutes} : {countdown.seconds} Until Birthday</h3> : <h1>HAPPY BIRTHDAY !!!</h1>}
        </div>
    )
}