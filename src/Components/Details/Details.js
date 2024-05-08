import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const serviceDetails = useLoaderData();
    const { image, description, title, price, rating } = serviceDetails;
    return (
        <div className='container mx-auto my-20'>
            <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure className='w-1/2'><img src={image} alt="Album" /></figure>
                <div className="card-body w-1/2">
                    <div className='flex justify-between'>
                        <h2 className="card-title font-bold text-xl">{title}</h2>

                    </div>
                    <p className=' text-left'>{description}</p>
                    <div className='flex items-center justify-between'>
                        <span className=' font-semibold text-xl'>Price:{price}</span>
                        <h2 className='card-title text-xl flex text-red-500'>Rating:{rating}/5</h2>
                        {/* <Link to={`/services/${_id}`}><button className="btn btn-error">Details</button></Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;