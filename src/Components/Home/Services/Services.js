import React, { useContext, useEffect, useState } from 'react';
import ServicesItems from './ServicesItems';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../AuthContext/AuthContext';

const Services = () => {

    const [services, setServices] = useState([]);
    const { setLoader } = useContext(AuthProvider)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .finally(() => setLoader(false))

    }, [setLoader])

    return (
        <div className='container mx-auto mt-[300px]'>
            <div>
                <h2 className='text-4xl font-semibold text-center mb-6'>My Services</h2>
                <p className='w-1/2 mx-auto text-justify mb-12'>we offer a range of services tailored to meet your unique needs and vision for your special day. Our goal is to provide you with a seamless and stress-free experience, allowing you to focus on creating unforgettable memories while we take care of capturing them.</p>
                <div className='grid md:grid-cols-2 grid-cols-1 container mx-auto gap-10'>
                    {
                        services.map(service => <ServicesItems
                            key={service._id}
                            service={service}
                        ></ServicesItems>)
                    }
                </div>
                <Link to={'/services'}><button className='btn btn-outline btn-error mx-auto my-12'>See All Services</button></Link>
            </div>
        </div>
    );
};

export default Services;