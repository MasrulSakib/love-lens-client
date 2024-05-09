import React, { useContext } from 'react';
import { AuthProvider } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { users, loader } = useContext(AuthProvider)
    const loaction = useLocation()

    if (loader) {
        return <p className='flex justify-center items-center text-center'><span className='loading loading-spinner text-error'></span></p>
    }

    if (!users) {
        return <Navigate to={`/login`} state={{ from: loaction }} replace></Navigate>
    }

    return children;
};

export default PrivateRoutes;