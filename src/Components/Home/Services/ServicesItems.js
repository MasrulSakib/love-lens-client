import React from 'react';
import { Link } from 'react-router-dom';

const ServicesItems = ({ service }) => {

    const { _id, image, description, title, price, rating } = service;
    return (

        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='w-1/2'><img src={image} alt="Album" /></figure>
            <div className="card-body w-1/2">
                <div className='flex justify-between'>
                    <h2 className="card-title font-bold text-xl">{title}</h2>
                    {/* <h2 className='card-title text-base flex text-red-500'>Rating:{rating}/5</h2> */}
                </div>
                <p className=' text-left'>{description.slice(0, 150)}...</p>
                <div className='flex items-center justify-between'>
                    <span className=' font-semibold text-xl'>Price:{price}</span>
                    <Link to={`/services/${_id}`}><button className="btn btn-error">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesItems;