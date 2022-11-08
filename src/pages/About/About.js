import React from 'react';
import img from '../../assets/about/about_me.svg'

const About = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-center items-center p-10 gap-16 lg:p-20 flex-col md:flex-row">
                <div className='md:w-1/2'>
                    <img src={img} className="w-full lg:max-w-md rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='md:w-1/2'>
                    <h1 className="text-5xl text-sky-700 font-bold">About us</h1>
                    <p className="py-6">We live in a visual society so images, packaging, signage, illustrations, websites, apps and social media all vie for our attention, making it very challenging to become noticeable let alone memorable amongst the overload of visual stimuli. In a nutshell, the most important mission that graphic design plays is communication. And, we as "Graphics Bari" are here to make that communication.</p>
                </div>
            </div>
        </div>
    );
};

export default About;