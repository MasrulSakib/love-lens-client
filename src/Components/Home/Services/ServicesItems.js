import React from 'react';

const ServicesItems = ({ service }) => {

    const { _id, image, description, title, price, rating } = service;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-10">
            <figure className='w-1/2'><img src={image} alt="Album" /></figure>
            <div className="card-body w-1/2">
                <h2 className="card-title">{title}</h2>
                <p className=' text-left'>{description}</p>
                <div className='flex items-center justify-between'>
                    <span className=' font-semibold text-xl'>Price:{price}</span>
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesItems;