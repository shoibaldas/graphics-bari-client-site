import React, { useEffect, useState } from 'react';
import ServicesItems from '../../Services/ServiceItems';
import { Link } from 'react-router-dom';

const ServicesDemo = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='flex flex-col items-center'>
                <h5 className='text-xl font-bold text-sky-700'>Services</h5>
                <h2 className='text-3xl font-bold'>Our Service Categories</h2>
                <p className='w-3/5 text-center text-gray-600'>The kind of services, Graphics Bari are providing right now with integrity and in appropriate way. Graphicsh Bari provides the best.</p>
            </div>
            <div className='grid place-items-center md:max-w-screen-lg md:mx-auto py-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6'>
                    {
                        services.slice(0, 3).map(service => <ServicesItems key={service._id}
                            service={service}></ServicesItems>)
                    }
                </div>
                <div className='my-8'>
                    <Link to='/allservices' className='outline outline-offset-2 outline-1 rounded px-6 py-2 border-sky-700 text-sky-700 font-semibold hover:bg-sky-700 hover:text-gray-100 hover:outline-none ease-in duration-300'>See All</Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDemo;