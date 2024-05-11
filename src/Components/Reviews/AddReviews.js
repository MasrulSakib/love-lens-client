import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext';
import toast from 'react-hot-toast';

const AddReviews = () => {
    const AllReviews = useLoaderData()
    const { _id } = AllReviews;
    const { users } = useContext(AuthProvider)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const reviewer_image = form.photoURL.value;
        const title = AllReviews.title;
        const couple = `${form.coupleMale.value} & ${form.coupleFemale.value}`;
        const rating = form.rating.value;
        const email = users?.email || 'unregistered';
        const review = form.review.value;
        const review_title = form.reviewTitle.value;

        const userReview = {
            reviewsId: _id,
            couple: couple,
            reviewer_image,
            title,
            rating,
            review_title,
            review,
            email,

        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userReview),
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Your Review added successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='container mx-auto my-20'>
            <h2 className='text-center text-3xl font-semibold mb-6'>{AllReviews.title}</h2>
            <p className='mx-auto mb-20 text-justify'>{AllReviews.description}</p>
            <form onSubmit={handleSubmit} className='flex flex-col items-center border border-red-500 rounded-2xl p-20 shadow-xl shadow-red-300 bg-transparent'>
                <div className='grid grid-cols-2 gap-5 w-full'>
                    <input type="text" name='photoURL' placeholder="your photo url" className="input input-bordered input-error" />
                    <input type="text" name='title' placeholder="title" className="input input-bordered input-error" readOnly defaultValue={AllReviews.title} />
                    <input type="text" name='coupleMale' placeholder="husband" className="input input-bordered input-error" />
                    <input type="text" name='coupleFemale' placeholder="wife" className="input input-bordered input-error" />
                    <input type="text" name='rating' placeholder="rating my service out of 5" className="input input-bordered input-error" />
                    <input type="email" name='email' placeholder="email" className="input input-bordered input-error" defaultValue={users?.email} readOnly />
                </div>
                <div className='devider'></div>
                <div className='grid w-full mt-6'>
                    <input type="text" name='reviewTitle' placeholder="your review title" className="input input-bordered input-error" />
                    <textarea name='review' className="textarea textarea-error my-5" placeholder="tell me something about my service"></textarea>
                </div>

                <button type='submit' className='btn btn-outline btn-error'>Add Review</button>
            </form>
        </div>
    );
};

export default AddReviews;