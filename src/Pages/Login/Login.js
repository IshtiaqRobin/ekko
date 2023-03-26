import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FadeLoader } from 'react-spinners';
import '../../Pages/SignUp/SignUp.css'
import SignUpAnimation from '../Others/Lottiefiles/SignUpAnimation/SignUpAnimation';
import { AuthContext } from '../../Contexts/AuthProvider';
import LoginAnimation from '../Others/Lottiefiles/LoginAnimation/LoginAnimation';
// import background from "../../assets/Vector.png";

const Login = () => {
    const { logIn, googleSignIn, loading } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/dashboard';
    // useTitle('Login');

    if (loading) {
        return (
            <div className='flex justify-center mt-8'>
                <FadeLoader color="#FF0000" />
            </div>
        )
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)
                if (user) {
                    toast('🦄 Successfully Login!', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            });
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                if (user.uid) {
                    toast('🦄 Successfully Login!', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="hero text-black lg:my-20">
                <div className="hero-content flex-col lg:flex-row lg:gap-36">
                    <div className="text-center lg:text-left hidden lg:block">
                        <LoginAnimation />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className='text-2xl font-bold text-center mb-4'>Login Now</h1>
                            <div className="form-control">
                                <input type="text" name='fastName' placeholder="First name" className="input input-bordered rounded-xl " required />
                            </div>
                            <div className="form-control">
                                <input type="text" name='lastName' placeholder="Last name" className="input input-bordered rounded-xl " required />
                            </div>
                            <div className="form-control">
                                <input type="email" name='email' placeholder="Email Address" className="input input-bordered rounded-xl " required />
                            </div>
                            <div className="form-control">
                                <input type="password" name='password' placeholder="Password" className="input input-bordered rounded-xl " required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-hover color-9">LogIn</button>
                            </div>
                            <p>Create an account? <Link to='/signup' className='text-red-600 font-semibold'>Sign Up</Link></p>
                        </form>
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-hover mx-auto lg:w-80 mb-8 mt-[-20px]">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;