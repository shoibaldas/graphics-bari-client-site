import React from 'react';
import logo from '../../../assets/faq/faq.svg';
const FaqPage = () => {
    return (
        <div id="faq" className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-lg lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <img src={logo}

                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                alt='' />

                            <span className="relative text-sky-900">Frequently</span>
                        </span>{' '}
                        <span className='text-sky-900'>asked</span>, <span className='text-sky-900'>Questions</span>?
                    </h2>
                    <p className="text-nd text-sky-700">
                        Some FAQ has been given below, as they have been asked to us frequently...
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Do you have any physical Store?
                            </p>
                            <p className="text-gray-700">
                                No, We don't have any physical store right now. We are doing our operation from home only.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Do you work as a team?
                            </p>
                            <p className="text-gray-700">
                                No, we as in, I am an individual person doing designing work all alone.
                            </p>
                        </div>

                    </div>
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Do you work on inovation related work?
                            </p>
                            <p className="text-gray-700">
                                Yes, this kind of work is done by Graphics Bari and we are best at it.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Do you design Gaming Visual?
                            </p>
                            <p className="text-gray-700">
                                No, currently we are not doing this kind of work. But we have plan for it in future, hope so.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;