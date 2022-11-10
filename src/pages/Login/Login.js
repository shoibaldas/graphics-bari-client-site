import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import img from '../../assets/login/login.svg';
import { GrGooglePlus } from "react-icons/gr";
import { DiGithubAlt } from "react-icons/di";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [hidePassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { signInUser, providerSignin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        providerSignin(googleProvider)
            .then(data => {
                toast.success('Login Successfully!');
                localStorage.setItem("service-user-token", data.token);
                navigate(from, { replace: true });

            })
            .catch(error => { setError(error.message) })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email, password)
            .then(result => {
                event.target.reset();
                setError('');
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("service-user-token", data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => { setError(error.message) })
    }

    const handleClickShowPassword = () => {
        setShowPassword(!hidePassword);
    }

    return (
        <div>
            <div className="hero my-8 md:my-0 md:-mt-16 min-h-screen">
                <div className="hero-content flex-col gap-20 lg:flex-row">
                    <div className='w-1/2'>
                        <div className="text-center lg:text-left">
                            <img className='w-full' src={img} alt="" />
                        </div>
                    </div>
                    <div className='md:w-1/2 md:mt-0 -mt-20'>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className='mb-4 text-center'>
                                    <h1 className="text-4xl font-bold">Login now!</h1>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className='relative z-0'>
                                        <input type={hidePassword ? 'text' : 'password'} placeholder="password" name='password' required className="input w-full input-bordered" />
                                        <div onClick={handleClickShowPassword} className='text-gray-700 flex items-center  cursor-pointer absolute inset-y-0 right-0 pr-3'>
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
                                    <label className="label">
                                        <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <p className='text-red-700 text-sm'>{error}</p>
                                </div>
                                <div className="form-control mt-4">
                                    <button type="submit" className="bg-violet-600 font-semibold text-gray-50 hover:bg-violet-700 py-2 rounded-md">Sign in</button>
                                </div>
                                <div>
                                    <h5 className='label-text-alt'>Don't have any account?<Link to='/signup' className='text-violet-600 link link-hover font-semibold hover:text-violet-700'> Signup</Link></h5>
                                </div>
                                <div className='text-center mt-4'>
                                    <div className='flex items-center space-x-3'>
                                        <div className="flex-1 h-px sm:w-16 dark:bg-violet-600"></div>
                                        <h4 className='label-text-alt font-semibold text-gray-500'>or Sign in with</h4>
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
        </div>
    );
};

export default Login;