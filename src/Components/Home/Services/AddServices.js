import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AddServices = () => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from localStorage on component mount
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const handleDelete = (_id) => {
        // Filter out the item with the specified _id
        const updatedCart = cartItems.filter(item => item._id !== _id);
        // Update localStorage and state with the updated cart items
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        setCartItems(updatedCart); // Update state to reflect the removal
    };

    return (
        <div className='container mx-auto my-20 min-h-screen'>
            <h2 className='my-10 font-bold text-3xl'>Your Selected Services</h2>
            {cartItems.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th></th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item._id}>
                                <td>
                                    <label>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </label>
                                </td>


                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded w-24 h-24">
                                                <img src={item.image} alt="Reviewer" />
                                            </div>
                                        </div>
                                    </div>
                                </td>


                                <td>
                                    {item.title}
                                </td>


                                <td>{item.price}</td>
                                <td>
                                    <p className="text-left font-normal w-1/2">{item.description.slice(0, 100)} ...</p>
                                </td>

                                <th>
                                    <button className="btn btn-ghost">Purchase</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className='my-10 font-bold text-3xl'>No services selected</p>
            )}
        </div>
    );
};

export default AddServices;
