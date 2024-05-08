import React, { useEffect, useState } from 'react';
import ServicesItems from './ServicesItems';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container mx-auto mt-[300px]'>
            <div>
                <h2 className='text-4xl font-semibold text-center'>My Services</h2>
                <p className='w-1/2 mx-auto text-justify'>we offer a range of services tailored to meet your unique needs and vision for your special day. Our goal is to provide you with a seamless and stress-free experience, allowing you to focus on creating unforgettable memories while we take care of capturing them.</p>
                <div className='my-10'>
                    {
                        services.map(service => <ServicesItems
                            key={service._id}
                            service={service}
                        ></ServicesItems>)
                    }
                </div>
                <button className='btn btn-outline btn-error mx-auto my-12'>See All Services</button>
            </div>
        </div>
    );
};

export default Services;