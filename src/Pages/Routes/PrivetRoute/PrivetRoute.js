import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { AuthContext } from '../../../Contexts/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='flex justify-center mt-8'>
                <FadeLoader color="#FF0000" />
            </div>
        )
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;