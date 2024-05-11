import React, { useContext, useEffect, useState } from 'react';
import ServicesItems from './ServicesItems';
import { AuthProvider } from '../../AuthContext/AuthContext';
import video from '../../../Assets/Video/87806-601467089_small.mp4'

const ShowAllServices = () => {
    const [allServices, setAllServices] = useState([]);
    const { setLoader } = useContext(AuthProvider);

    useEffect(() => {
        fetch('https://love-lens-server.vercel.app/allServices')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
                setLoader(false);
            })
            .catch(error => {
                console.error('Error fetching all services:', error);
                setLoader(false);
            });
    }, [setLoader]);

    return (
        <div>
            {/* Video Background Banner */}
            <div
                className="video-background-banner"
                style={{
                    position: 'relative',
                    height: '750px',
                    overflow: 'hidden'
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>

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
