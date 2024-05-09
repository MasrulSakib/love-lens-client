import React, { useContext } from 'react';
import register from '../../Assets/Authentication/Register.jpg'
import Header from '../Shared/Header/Header';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext';

const Register = () => {
    const { userSignUp } = useContext(AuthProvider)

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const photo = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;

        userSignUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))

        form.reset()
    }


    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-20 justify-center container mx-auto'>
                <div className='grid col-span-1 items-center justify-end'>
                    <img className='h-[750px]' src={register} alt="" />
                </div>
                <div className="grid col-span-2 hero bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Username</span>
                                    </label>
                                    <input type="text" placeholder="username" name='username' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="photo url" name='photourl' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <p className='mb-6'>Already registerd? Please<Link className='underline text-red-500' to='/login'> login</Link></p>
                                    <button className="btn btn-outline btn-error">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;