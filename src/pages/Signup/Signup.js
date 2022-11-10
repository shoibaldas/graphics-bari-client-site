import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GrGooglePlus } from "react-icons/gr";
import { DiGithubAlt } from "react-icons/di";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../context/AuthProvider';
import img from '../../assets/signUp/sign_in.svg';
import toast from 'react-hot-toast';
import TitleHeader from '../../titleHeader/TitleHeader';

const Signup = () => {
    TitleHeader('Sign up')
    const [hidePassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { createUser, providerLogin, updateUserProfile, setSignIn, logOut } = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => { })
            .catch(error => (error.message))
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const url = event.target.photoUrl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPwrd = event.target.confirmPwrd.value;

        if (password.length < 6) {
            setError('Password needs to be atleast 6 characters!')
        }

        if (password !== confirmPwrd) {
            setError('Your Password did not matched!')
        }

        createUser(email, password)
            .then(() => {
                event.target.reset();
                setError('');
                handleUpdateUserProfile(name, url);
                toast.success("Account successfully created. Please Verify your email.")
                navigate(from, { replace: true });
                logOut();

            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleUpdateUserProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url

        }
        updateUserProfile(profile)
            .then(() => {
                setSignIn(profile)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleClickShowPassword = () => {
        setShowPassword(!hidePassword);
    }

    return (
        <div className="hero my-20 md:my-16 md:py-10 md:-mt-10 min-h-screen">
            <div className="hero-content flex-col gap-28 lg:flex-row">
                <div className='w-2/5'>
                    <div className="text-center lg:text-left">
                        <img className='w-full' src={img} alt="" />
                    </div>
                </div>
                <div className='md:w-1/2 md:mt-0 -mt-20'>
                    <div className="card flex-shrink-0 max-w-md md:max-w-lg shadow-2xl bg-base-200">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className='mb-4 text-center'>
                                <h1 className="text-4xl font-bold">Sign up now!</h1>
                            </div>
                            <div className='md:flex gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="full name" name='name' required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="url link" name='photoUrl' required className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className='md:flex gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className='relative z-0'>
                                        <input type={hidePassword ? 'text' : 'password'} placeholder="password" name='password' required className="input input-bordered" />
                                        <div onClick={handleClickShowPassword} className='absolute text-gray-700 flex items-center cursor-pointer inset-y-0 right-0 pr-3'>
                                            {hidePassword ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                            ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="confirm password" name='confirmPwrd' required className="input input-bordered" />
                                </div>
                            </div>
                            <p className='text-red-700 text-sm'>{error}</p>
                            <div className="form-control mt-4">
                                <button type="submit" className="bg-violet-600 font-semibold text-gray-50 hover:bg-violet-700 py-2 rounded-md">Sign up</button>
                            </div>
                            <div>
                                <h5 className='label-text-alt'>Already have an account?<Link to='/login' className='text-violet-600 link link-hover font-semibold hover:text-violet-700'> Sign in</Link></h5>
                            </div>
                            <div className='text-center mt-4'>
                                <div className='flex items-center space-x-3'>
                                    <div className="flex-1 h-px sm:w-16 dark:bg-violet-600"></div>
                                    <h4 className='label-text-alt font-semibold text-gray-500'>or Sign up with</h4>
                                    <div className="flex-1 h-px sm:w-16 dark:bg-violet-600"></div>
                                </div>
                                <div className='mt-2 flex justify-center'>
                                    <GrGooglePlus onClick={googleSignIn} className='w-8 h-8 mr-3 text-gray-700 cursor-pointer bg-gray-300 p-1 rounded-full'></GrGooglePlus>
                                    <DiGithubAlt className='w-8 h-8 text-gray-700 cursor-pointer bg-gray-300 p-1 rounded-full'></DiGithubAlt>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;