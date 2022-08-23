import wishList from '/wishes.js'
import { useState } from 'react'

export default function Wishes(){
    const [wish, setWish] = useState(wishList[0])
    
    function generateRandomNumber(){
        let randomNumber = Math.floor(Math.random() * 117); //random number from 0-116
        return randomNumber;
    }

    function handleClick(){
        setWish(wishList[generateRandomNumber()])
    }

    return(
        <div>
            {wish}
            <br />
            <button onClick={handleClick} className="round-button">AMEN !</button>
        </div>
    )
}