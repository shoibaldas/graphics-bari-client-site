import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import TitleHeader from '../../../titleHeader/TitleHeader';
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};

const UpdateReviews = () => {
    TitleHeader('Update Feeback');
    const navigate = useNavigate();

    const { id } = useParams();
    const [myReviews, setMyReviews] = useState([]);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('service-user-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [id])

    const { _id } = myReviews;
    const handleReview = (event) => {
        event.preventDefault();
        const currDate = new Date().toLocaleDateString();
        const currTime = new Date().toLocaleTimeString();
        const time = `${currDate} ${currTime}`;
        const message = event.target.message.value;


        const update = {
            message,
            time
        }
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('You have successfull updated your previous feedback.');
                    event.target.reset();
                    navigate('/myreviews');
                }
            })
            .catch(error => (error.message));
    }

    return (
        <div className='max-w-screen-sm mx-auto h-screen p-6'>
            <div className="flex flex-col max-w-xl p-8 border-2 rounded lg:p-10 text-gray-800">
                <form onSubmit={handleReview} className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-sky-800 text-center">Update your Feedback!</h2>
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
                        <textarea className='input input-bordered p-3 h-32 text-gray-800' name='message' defaultValue={myReviews.message} required></textarea>
                        <div className="form-control mt-4">
                            <button type="submit" className="bg-sky-700 text-gray-50 font-semibold hover:bg-sky-800 py-3 rounded-md">Add Review</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateReviews;