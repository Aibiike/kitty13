import React, {useState, useEffect} from 'react';
import axios from "axios";
import Spinner from "../components/Spinner";
import BreedCard from "../components/BreedCard";

const Breeds = () => {
    const [breeds, setBreeds] = useState([])
    const [search, setSearch] = useState('')
    const [isLoading,setIsLoading] = useState(true)
    const filteredBreeds = breeds.filter(el => el.name.includes(search))

    useEffect(() => {
        axios('https://api.thecatapi.com/v1/breeds')
            .then(res => {
                setBreeds(res.data)
                setIsLoading(false)
            })
    }, [])

 if (isLoading) return <Spinner />
    return (
        <div className='container mx-auto my-3'>
            <div className="relative my-2 mx-auto">
                <input type="search" className="bg-yellow-100 shadow rounded border-0 p-3 w-full mt-10 "
                       placeholder="Search by name..." onChange={(e) => setSearch(e.target.value)}/>
                <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter  right-12 top-1/2 ">
                    <svg version="1.1" className="h-4 text-yellow-800"
                         viewBox="0 0 52.966 52.966">
                        <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
        S32.459,40,21.983,40z"/>
                    </svg>
                </div>
            </div>
                    <div className='flex flex-wrap items-center -mx-12 mt-20'>
                        {
                            filteredBreeds.map(item => <BreedCard item={item}/>
                            )
                        }
                    </div>
        </div>
    );
};

export default Breeds;

