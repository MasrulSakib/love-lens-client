import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Details = () => {
    const [reviews, setReviews] = useState([]);
    const serviceDetails = useLoaderData();
    const { image, description, title, price, rating } = serviceDetails;

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='container mx-auto my-20'>
            <div className="card lg:card-side bg-base-100 shadow-xl ">
                <PhotoProvider>
                    <PhotoView src={image}>
                        <figure className='w-1/2'><img src={image} alt="Album" /></figure>
                    </PhotoView>
                </PhotoProvider>
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

            <div>
                <div className='w-1/2 mx-auto mt-20'>
                    <h2 className='text-5xl font-bold text-center my-5'>Reviews</h2>
                    <p className=' font-light'>Welcome to the heartwarming world of cherished memories and satisfied smiles! My review section is a testament to the exceptional experiences our clients have had with us at Love Lens. Dive into the stories of couples who entrusted me to capture their most precious moments and left with memories they'll treasure forever.</p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10 my-20'>
                    {
                        reviews.map(userReview => <Reviews
                            key={userReview._id}
                            userReview={userReview}
                        ></Reviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;