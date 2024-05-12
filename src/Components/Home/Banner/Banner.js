import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import headerImg1 from '../../../Assets/NavImg/wedding-trends-01.jpg'
import headerImg2 from '../../../Assets/NavImg/wedding-trends-02.jpg'
import headerImg3 from '../../../Assets/NavImg/wedding-trends-03.jpg'
import headerImg4 from '../../../Assets/NavImg/wedding-trends-04.jpg'
import useTitle from '../../../Hooks/useTitle';

const Banner = () => {
    useTitle('Home');

    return (
        <Carousel>
            <div className='h-[1000px]'>
                <img src={headerImg1} alt='' />

            </div>
            <div className='h-[1000px]'>
                <img src={headerImg2} alt='' />

            </div>
            <div className='h-[1000px]'>
                <img src={headerImg3} alt='' />

            </div>
            <div className='h-[1000px]'>
                <img src={headerImg4} alt='' />

            </div>
        </Carousel>

    );

};

export default Banner;