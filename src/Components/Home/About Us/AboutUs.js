import React from 'react';
import aboutPic from '../../../Assets/AboutUs/about 1.jpg'
import iconPic from '../../../Assets/AboutUs/Icon.jpeg'


const AboutUs = () => {
    return (
        <div className='container mx-auto mt-20 mb-20'>
            <div className='w-1/2 text-center mx-auto'>
                <h2 className='text-4xl font-semibold mb-6'>About Me</h2>
                <p>Welcome to Love Lens, where I specialize in capturing the moments that make your heart skip a beat. With a passion for storytelling through the lens, I am dedicated to immortalizing the essence of love and joy that surrounds your special day.</p>
                <br />
                <p>At Love lens, I understand the significance of every smile, every tear, and every tender embrace. With an artful eye and a commitment to excellence, I ensure that each photograph is a timeless reflection of your unique love story.</p>
            </div>
            <div className='mt-5 mb-10'>
                <div className='relative'>
                    <img className=' rounded-lg h-3/4' src={aboutPic} alt="" />
                    <img className='absolute right-[42%] top-[82%] w-[300px] rounded-full' src={iconPic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;