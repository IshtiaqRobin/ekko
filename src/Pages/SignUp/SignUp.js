import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FadeLoader } from 'react-spinners';
import { AuthContext } from '../../Contexts/AuthProvider';
import '../../Pages/SignUp/SignUp.css'
import SignUpAnimation from '../Others/Lottiefiles/SignUpAnimation/SignUpAnimation';
// import background from "../../assets/Vector.png";

const SignUp = () => {
    const { createUser, googleSignIn, loading } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/dashboard';
    // useTitle('SignUp');

    if (loading) {
        return (
            <div className='flex justify-center mt-8'>
                <FadeLoader color="#FF0000" />
            </div>
        )
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                if (user.uid) {
                    toast.success("User Created Successfully.");
                }
                navigate(from, { replace: true })
                console.log(user);
                form.reset();
                // setAuthToken(user);
            })
            .catch(error => console.error(error))
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
                navigate(from, { replace: true })
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="hero text-black lg:my-20">
                <div className="hero-content flex-col lg:flex-row lg:gap-36">
                    <div className="hidden lg:block">
                        <SignUpAnimation />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className='text-2xl font-bold text-center mb-4'>Create Account</h1>
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
                                <button className="btn btn-hover color-9">Sign Up</button>
                            </div>
                            <p>Already have an account? <Link className='text-red-600 font-semibold' to='/login'>Login</Link></p>
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

export default SignUp;