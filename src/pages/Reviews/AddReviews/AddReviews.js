import React, { useContext, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};

const AddReviews = () => {
    const { user } = useContext(AuthContext);
    const { _id, title } = useLoaderData();
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0);
    const navigate = useNavigate();


    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


    const handleReview = (event) => {
        event.preventDefault();
        if (user && user?.uid) {
            const currDate = new Date().toLocaleDateString();
            const currTime = new Date().toLocaleTimeString();
            const time = `${currDate} ${currTime}`;
            const message = event.target.message.value;
            const email = user?.email || 'unregistered';
            const userId = user?.uid;
            const userName = user?.displayName;

            const userImage = user?.photoURL;

            const addReview = {
                serviceId: _id,
                serviceName: title,
                userId,
                userName,
                userImage,
                email,
                message,
                time

            }
            fetch('https://graphics-service-app-server.vercel.app/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addReview)
            })
                .then(response => response.json())
                .then(data => {
                    toast.success("Your Feedback is successfully submitted.");

                    event.target.reset();
                })
                .catch(error => (error.message));
        }
        else {
            navigate('/login');
        }

    }

    return (
        <div className='p-6'>
            <div className="flex flex-col max-w-xl p-8 border-2 rounded lg:p-10 text-gray-800">
                <form onSubmit={handleReview} className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">How was your experience?</span>
                        <div className="flex space-x-3">
                            {stars.map((_, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        size={24}
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                        style={{
                                            marginRight: 10,
                                            cursor: "pointer"
                                        }}
                                    ></FaStar>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <textarea className='input input-bordered p-3 h-32' name='message' placeholder='Your Feedback' required></textarea>
                        <div className="form-control mt-4">
                            <button type="submit" className="bg-sky-700 text-gray-50 font-semibold hover:bg-sky-800 py-3 rounded-md">Add Review</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReviews;