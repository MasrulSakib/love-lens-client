import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import toast from 'react-hot-toast';


const ServicesItems = ({ service }) => {

    const { _id, image, description, title, price } = service;

    const handleAddToCart = () => {
        // Check if item is already in localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (!cartItems.find(item => item._id === _id)) {
            toast.success('Service added successfully')
            cartItems.push({ _id, title, price, image, description });
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
        else {
            toast.error('Service already exist')
        }
    };

    return (

        <div className="card lg:card-side bg-base-100 shadow-xl">

            <PhotoProvider>
                <PhotoView src={image}>
                    <figure className='w-1/2'><img src={image} alt="Album" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body w-1/2">
                <div className='flex justify-between'>
                    <h2 className="card-title font-bold text-xl">{title}</h2>
                    {/* <h2 className='card-title text-base flex text-red-500'>Rating:{rating}/5</h2> */}
                </div>
                <p className=' text-left'>{description.slice(0, 150)}...</p>
                <div className='flex items-center justify-between'>
                    <button onClick={handleAddToCart} className=' font-semibold btn btn-ghost btn-outline btn-sm'>Price:{price}</button>
                    <Link to={`/services/${_id}`}><button className="btn btn-error btn-outline btn-sm">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesItems;