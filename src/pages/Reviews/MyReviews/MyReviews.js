import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import ReviewData from './ReviewData';
import toast from 'react-hot-toast';
import TitleHeader from '../../../titleHeader/TitleHeader';

const MyReviews = () => {
    TitleHeader('My Reviews');
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`https://graphics-service-app-server.vercel.app/reviews`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('service-user-token')}`,
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => setMyReviews(data))
    }, [logOut])

    const reviewGet = myReviews.filter(rev => rev.userId === user?.uid)

    const handleDelete = id => {
        const procceed = window.confirm('Are you sure?');
        if (procceed) {
            fetch(`https://graphics-service-app-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Review deletation is success.');
                        const remain = reviewGet.filter(reviewItem => reviewItem._id !== id);
                        setMyReviews(remain);
                    }
                })
        }
    }

    const handleEdit = () => {



    }
    return (
        <div className='md:max-w-4xl p-6 max-w-screen-xl h-screen mx-auto'>
            <div className="my-6 overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Service Name</th>
                            <th>User</th>
                            <th>Time</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviewGet.map(review =>
                                <ReviewData
                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                ></ReviewData>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyReviews;