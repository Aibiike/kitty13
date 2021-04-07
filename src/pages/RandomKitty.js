import React, {useState, useEffect} from 'react';
import axios from "axios";
import Spiner from "../components/Spinner";

const RandomKitty = () => {
    const [kitty, setKitty] = useState({})
    const [isLoading, setLoading] = useState(true)


    const getKitty = () => {
        axios('https://api.thecatapi.com/v1/images/search')
            .then(res => {
                setKitty(res.data[0])
                setLoading(false)
            })

    }

    useEffect(() => {
        getKitty()
    }, [])
    if (isLoading) return <Spiner/>
    return (
        <div className=" container mx-auto my-16 ">
            <img src={kitty.url} alt="" className='h-56 mx-auto'/>
            <button
                onClick={getKitty}
                className="bg-yellow-700 px-5 py-2 font-semibold tracking-wider text-white rounded-full hover:bg-yellow-200 hover:text-yellow-800 block mx-auto mt-16">Get
                random
            </button>
        </div>
    );
};

export default RandomKitty;