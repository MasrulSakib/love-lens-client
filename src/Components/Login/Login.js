import React from 'react';
import Header from '../Shared/Header/Header';
import login from '../../Assets/Authentication/login.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-20 justify-center container mx-auto'>
                <div className='grid col-span-1 items-center justify-end'>
                    <img className='h-[750px]' src={login} alt="" />
                </div>
                <div className="grid col-span-2 hero bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <p className='mb-6'>Didn't Registered? Please<Link className='underline text-red-500' to='/register'> sign up</Link></p>
                                    <button className="btn btn-outline btn-error">Sign in</button>
                                </div>
                                <div className="divider">OR</div>
                                <button className='btn btn-success'>Login Via Google</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;