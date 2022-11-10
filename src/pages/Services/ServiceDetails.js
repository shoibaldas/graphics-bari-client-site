import React, { useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useLoaderData } from 'react-router-dom';
import TitleHeader from '../../titleHeader/TitleHeader';
import AddReviews from '../Reviews/AddReviews/AddReviews';
import AllReviews from '../Reviews/AllReviews/AllReviews';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceDetails = () => {
    TitleHeader('Service Details');
    const service = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const [fill, setFill] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('service-user-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                setReviews(data)
                if (reviews) {
                    const reviewAll = reviews.filter(rev => rev.serviceId === service._id)
                    setFill(reviewAll);
                    setSpinner(false);
                }

            })
    }, [reviews, spinner, service._id])

    return (
        <div className=''>
            <div className="max-w-screen-lg mx-auto p-4 rounded-md shadow-md">
                <div className="pb-4">
                    <h2 className="mb-0 capitalize text-3xl font-semibold dark:text-sky-700">{service.title}</h2>
                </div>
                <div className="space-y-1">
                    <div className="space-y-2">
                        <PhotoProvider>
                            <PhotoView src={service.img}>
                                <img src={service.img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            </PhotoView>
                        </PhotoProvider>

                        <div className="p-2 border-t-2 border-sky-700">
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
                <h3 className='text-3xl font-semibold mt-12'>Reviews</h3>
                <div className='border-t-2 border-gray-400'></div>
                <div>
                    {
                        fill.map(feed => <AllReviews key={feed._id} feed={feed}></AllReviews>)
                    }
                </div>
                <AddReviews></AddReviews>
            </div>

        </div>

    );
};

export default ServiceDetails;