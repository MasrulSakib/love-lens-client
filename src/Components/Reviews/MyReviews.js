import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../AuthContext/AuthContext';
import MyReviewsItems from './MyReviewsItems';
import toast from 'react-hot-toast';

const MyReviews = () => {
    const { users, userLogout } = useContext(AuthProvider)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${users?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('Lens-Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return userLogout()
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [users?.email, userLogout])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review?')
        if (proceed) {
            fetch(`http://localhost:5000/myReviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('Lens-Token')}`
                }

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>

            {
                reviews?.length === 0 ?

                    <h2 className="text-3xl font-semibold my-20">No reviews were added.</h2>
                    :
                    <h2 className="text-3xl font-semibold my-20">Total reviews added: {reviews.length}</h2>
            }

            <div className="container mx-auto my-20 min-h-screen">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Remove</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Rating</th>
                            <th>Reviews</th>
                            <th>Edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <MyReviewsItems
                                key={review._id}
                                reviewItem={review}
                                handleDelete={handleDelete}
                            ></MyReviewsItems>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyReviews;