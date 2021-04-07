import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import Spinner from "../components/Spinner";

const BreedDetails = () => {
    const {id} = useParams()
    const [breed,setBreed]= useState({})
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        axios('https://api.thecatapi.com/v1/breeds')
            .then(res => {
                setBreed(res.data.find(el=> el.id === id))
                setIsLoading(false)
            })
    },[id])

    if (isLoading) return <Spinner />
    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-yellow-100">
                            <img alt="ecommerce"
                                 className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 p-5"
                                 src={breed?.image?.url}/>
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-10">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest text-purple-900 mt-10 ">CATS NAME</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 text-indigo-900">{breed.name}</h1>
                                <p className="leading-relaxed text-indigo-700"><b>Description</b>: {breed.description}</p>

                                <h3 className='md:text-xl title-font mt-5'> Dog friendly : {breed.dog_friendly}</h3>
                                <h3 className='md:text-xl title-font'> Energy level : {breed.energy_level}</h3>
                                <h3 className='md:text-xl title-font'> Life span : {breed.life_span}</h3>
                            </div>
                        </div>
                    </div>
        </section>
    );
};

export default BreedDetails;

