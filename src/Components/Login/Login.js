import React, { useContext } from 'react';
import Header from '../Shared/Header/Header';
import login from '../../Assets/Authentication/login.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import Footer from '../Footer/Footer';
import { verifyJwt } from '../../VerifyJWT/VerifyJwt';
import useTitle from '../../Hooks/useTitle';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const { userLogin, googleLogin, setLoader } = useContext(AuthProvider)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    useTitle('Login');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user.email,
                }

                fetch('https://love-lens-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('Lens-Token', data.token);
                        navigate(from, { replace: true })
                        form.reset()
                    })

                    .catch(error => console.error(error))
            })
            .catch(error => console.error(error))
            .finally(() => { setLoader(false) })

    }

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                verifyJwt(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-3 my-20 justify-center container mx-auto'>
                <div className='grid col-span-1 items-center justify-end'>
                    <img className='h-[750px]' src={login} alt="" />
                </div>
                <div className="grid col-span-2 hero bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <p className='mb-6'>Didn't Registered? Please<Link className='underline text-red-500' to='/register' type='submit'> sign up</Link></p>
                                    <button className="btn btn-outline btn-error">Sign in</button>
                                </div>
                                <div className="divider">OR</div>
                                <button onClick={handleGoogleLogin} className='btn btn-success' type='submit'>Login Via Google</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;