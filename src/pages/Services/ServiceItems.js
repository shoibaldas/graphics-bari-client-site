import React from 'react';
import { Link } from 'react-router-dom';


const ServicesItems = ({ service }) => {
    const { _id, img, title, price, description } = service;
    return (
        <div className="relative card w-80 h-60 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h6 className='font-semibold text-orange-400'>${price}</h6>
                <p className='text-sm text-gray-50'>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}/details`} className="absolute bottom-4 -right-1 rounded px-10 py-2 outline outline-offset-2 outline-1 outline-orange-600 text-orange-600 hover:text-gray-100 font-semibold hover:bg-orange-600 hover:outline-none ease-in duration-200 mr-5"><i className="fa-solid fa-eye"></i></Link>
                </div>
            </div>
        </div >
    );
};

export default ServicesItems;