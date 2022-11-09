import React from 'react';
import img from '../../assets/service/add_files.svg';

const AddService = () => {

    const handleAddService = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const image = event.target.file.value;
        const price = event.target.price.value;
        const message = event.target.message.value;

        const service = {
            title,
            image,
            price,
            message
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => (error.message));
    }

    return (
        <div className='max-w-md md:max-w-2xl lg:max-w-4xl p-6 md:p-2 min-h-screen mx-auto'>
            <div className='flex justify-center'>
                <div className='card flex-shrink-0 w-full max-w-4xl shadow-2xl bg-base-200'>
                    <form onSubmit={handleAddService} className='card-body'>
                        <div className='w-full flex items-center justify-between'>
                            <h1 className='text-sky-700 text-xl md:text-4xl font-bold'>Add your service</h1>
                            <img src={img} className='w-1/6' alt="" />
                        </div>
                        <div className='flex flex-col md:grid grid-cols-2 gap-6 mb-4'>
                            <input type="text" placeholder="Service Title" name='title' required className="input input-bordered" />
                            <input type="text" placeholder="$Price" name='price' required className="input input-bordered" />
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">Add Image Link</label>
                                <input type="url" name='file' placeholder='Paste the image link here' className="block w-full text-sm rounded-md px-2 py-2 cursor-pointer text-gray-300 focus:outline-none bg-gray-700 " required />
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <textarea className='input input-bordered p-3 h-32' name='message' placeholder='Description' required></textarea>
                        </div>
                        <div className="form-control mt-4">
                            <button type="submit" className="bg-sky-700 text-gray-50 font-semibold hover:bg-sky-800 py-3 rounded-md">Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;