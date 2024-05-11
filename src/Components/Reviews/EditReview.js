import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const updateReview = useLoaderData()
    const { _id } = updateReview;

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const review = form.review.value;
        const review_title = form.reviewTitle.value;

        const updatedReview = {
            review_title,
            review,
        }

        fetch(`http://localhost:5000/updateReview/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedReview),
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Your Review updated successfully')
                }
            })
            .catch(error => console.error(error))
    }


    return (
        <div className='container mx-auto my-20 min-h-screen'>
            <h2 className='text-center text-3xl font-semibold mb-6'>Update Review</h2>
            <form onSubmit={handleSubmit} className='flex flex-col items-center border border-red-500 rounded-2xl p-20 shadow-xl shadow-red-300 bg-transparent'>
                <div className='grid w-full mt-6'>
                    <input type="text" name='reviewTitle' placeholder="your review title" className="input input-bordered input-error" defaultValue={updateReview.review_title} />
                    <textarea name='review' className="textarea textarea-error my-5 h-40" placeholder="tell me something about my service" defaultValue={updateReview.review}></textarea>
                </div>

                <button type='submit' className='btn btn-outline btn-error'>Update Review</button>
            </form>
        </div>
    );
};

export default EditReview;