import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    return (
        <div className='flex mt-8 md:mt-0 justify-center'>
            <div className="w-10/12 z-0 p-4 rounded-md shadow-md">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <h2 className="mb-0 capitalize text-3xl font-semibold dark:text-sky-700">{service.title}</h2>
                    </div>
                </div>

                <div className="space-y-1">
                    <div className="space-y-2">
                        <img src={service.img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex p-2 border-t-2 border-sky-700">
                            <div className="flex items-center space-x-1">
                                <TbCurrencyTaka className='text-green-500'></TbCurrencyTaka>
                                <span className='text-orange-600'>{service.price}</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 space-y-1">
                        <div className="block">
                            <h1 className="text-xl text-start font-semibold text-sky-700">Description :</h1>
                            <p className="leading-snug text-start text-gray-700">{service.description}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceDetails;