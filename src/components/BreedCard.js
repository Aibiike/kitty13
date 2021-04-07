import React from 'react';
import {Link} from "react-router-dom";

const BreedCard = ({item}) => {
    return (
        <div className='w-1/4 px-12 mb-5'>
            <Link to={`/breeds/${item.id}`}>
                <div className=" bg-yellow-700 flex justify-center items-center rounded-md">
                    <div
                        className="flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer"
                        style={{background: `url(${item?.image?.url}) no-repeat center/contain`}}>
                        <div className="flex justify-between items-center ml-4 pr-8">
                            <div
                                className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Some
                                information
                            </div>
                            <div
                                className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">%
                            </div>
                        </div>
                        <div
                            className="bg-yellow-200 bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                            <h3 className="text-xl font-bold pb-2">{item.name}</h3>
                            <p className="truncate text-black text-sm">{item.description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BreedCard;