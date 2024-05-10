import React from 'react';

const MyReviewsItems = ({ reviewItem }) => {

    const { couple, email, review_title, reviewer_image, title, review, rating } = reviewItem;

    return (

        <tr>
            <th>
                <label>
                    <button className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={reviewer_image} alt="reviewer_image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{couple}</div>
                        <div className="text-sm opacity-50">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                {review_title}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{rating}</td>
            <th>
                <p className="text-left font-normal">{review.slice(0, 100)}...</p>
            </th>
        </tr>

    );
};

export default MyReviewsItems;