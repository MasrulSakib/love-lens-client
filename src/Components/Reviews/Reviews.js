import React from 'react';

const Reviews = ({ userReview }) => {

    const { reviewer_image, review_title, review, rating } = userReview;
    return (
        <div className='mx-auto'>
            <div className="card w-96 h-[650px] bg-base-100 shadow-xl">
                <figure><img src={reviewer_image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{review_title}</h2>
                    <p className="divider divider-error"></p>
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