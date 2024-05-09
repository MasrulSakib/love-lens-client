import React, { useContext, useEffect, useState } from 'react';
import ServicesItems from './ServicesItems';
import Banner from '../Banner/Banner';
import { AuthProvider } from '../../AuthContext/AuthContext';

const ShowAllServices = () => {

    const [allServices, setAllServices] = useState([]);
    const { setLoader } = useContext(AuthProvider)

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
            .finally(() => {
                setLoader(false)
            })

    }, [setLoader])
    return (
        <div>
            <Banner></Banner>
            <div className='grid md:grid-cols-2 grid-cols-1 container mx-auto gap-10 my-20'>
                {
                    allServices.map(service => <ServicesItems
                        key={service._id}
                        service={service}
                    ></ServicesItems>)
                }
            </div>
        </div>
    );
};

export default ShowAllServices;