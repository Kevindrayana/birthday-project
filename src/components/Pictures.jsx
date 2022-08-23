import { useState, useEffect } from "react"

export default function Pictures(){
    const [pic, setPic] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const apikey='39DGhZRBN9p8JmQfqDtEbG-jkWPqX0R3TfCOdpTfKUo'
        const url=`https://api.unsplash.com/search/photos?page=1&query=birthday&client_id=${apikey}`
        fetch(url)
            .then(response => response.json())
            .then(data => setPic(data.results[index].urls.raw))
            .catch(err => console.error(err));
    }, [index])

    function handleClick(){
        setIndex(Math.floor(Math.random() * 10)) //random number from 0-9
    }

    return(
        <div>
            <button type="button" onClick={handleClick}><img src={`${pic}`} alt="birthday pic" width={400}/></button>
        </div>
    )
}