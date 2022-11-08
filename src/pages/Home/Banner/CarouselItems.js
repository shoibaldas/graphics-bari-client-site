import React from 'react';
import '../Banner/Banner.css';

const CarouselItems = ({ slide }) => {
    const { image, title, info, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-rgblayer'>
                <img src={image} className='rounded-md w-full' alt='' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="rounded-full w-8 h-8 md:w-12 md:h-12 p-2 bg-gray-700 flex justify-center items-center text-white hover:bg-orange-700 mr-4">❮</a>
                <a href={`#slide${next}`} className="rounded-full w-8 h-8 md:w-12 md:h-12 p-2 bg-gray-700 flex justify-center items-center text-white hover:bg-orange-700">❯</a>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 md:left-10 top-1/4">
                <h1 className='text-2xl md:text-4xl lg:text-6xl text-gray-100 font-bold leading-6 w-4/6 md:w-4/6'>{title}</h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 md:translate-y-full mt-2 md:mt-0 lg:mt-8 left-5 md:left-10 top-2/4 md:top-1/3">
                <p className='text-sm text-gray-200 w-full md:w-3/5'>{info}</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 mt-2 md:mt-0 md:left-10 top-3/4 md:top-2/3">
                <button className="rounded px-2 py-1 md:px-4 md:py-2 border-orange-600 text-gray-100 font-semibold bg-orange-600 hover:bg-orange-700 ease-in duration-200 mr-5">Discover More</button>
            </div>
        </div >
    );
};

export default CarouselItems;