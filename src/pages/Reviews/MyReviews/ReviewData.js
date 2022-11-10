import React from 'react';
import { Link } from 'react-router-dom';

const ReviewData = ({ review, handleDelete, handleEdit }) => {

    const { _id, userName, email, serviceName, time, message } = review;

    return (
        <tr>
            <th className='w-8 h-8'>
                <div className='flex justify-center'>
                    <button title='Delete' onClick={() => handleDelete(_id)} className='w-full'>
                        <i className="fa-solid fa-trash text-red-600 mr-2"></i>
                    </button>
                    <Link to={`/reviews/${_id}/update`} title='Edit' className='w-full'>
                        <i title='Edit' className="cursor-pointer fa-solid fa-pen-to-square text-sky-700"></i>
                    </Link>
                </div>
            </th >
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{time}</div>
                    </div>
                </div>
            </td>
            <td>
                {userName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>
                {time}
            </td>
            <td>
                {message}
            </td>

        </tr >

    );
};

export default ReviewData;

