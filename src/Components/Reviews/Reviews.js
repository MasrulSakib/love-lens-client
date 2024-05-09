import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Reviews = ({ userReview }) => {

    const { reviewer_image, review_title, review, rating, couple } = userReview;
    return (
        <div className='mx-auto'>
            <div className="card w-96 h-[700px] bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={reviewer_image}>
                        <figure><img src={reviewer_image} alt="Album" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{review_title}</h2>
                    <p className="divider divider-error"></p>
                    <span className='text-left font-semibold text-red-500 divider divider-start text-lg'>Couple: {couple}</span>
                    <p className=' text-justify font-extralight'>"{review}"</p>
                    <div className="flex justify-end text-end text-lg text-red-500 font-semibold divider divider-end">
                        <p>Rating: {rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;