import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesItems = ({ service }) => {
    const { _id, img, title, price, description } = service;
    return (

        <div className="max-w-sm rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <PhotoProvider>
                <PhotoView src={service.img} >
                    <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-40 dark:bg-gray-500" />
                </PhotoView>
            </PhotoProvider>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-wide">{title}</h2>
                    <h6 className='font-semibold text-orange-400'>${price}</h6>
                    <p className="text-sm text-gray-100">{description.slice(0, 100)}...</p>
                </div>
                <div className=''>
                    <Link to={`/services/${_id}/details`} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 hover:bg-sky-800 text-gray-100">View</Link>
                </div>
            </div>

        </div>
    );
};

export default ServicesItems;