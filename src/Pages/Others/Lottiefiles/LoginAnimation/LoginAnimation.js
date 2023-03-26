import React from 'react';
import Lottie from 'react-lottie';
import coding_laptop from '../Lottie_all_files/log_women.json'

const LoginAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: coding_laptop,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div>
            <Lottie
                className="lg:w-full bg-transparent"
                options={defaultOptions}
            />
        </div>
    );
};

export default LoginAnimation;
