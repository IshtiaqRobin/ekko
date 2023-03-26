import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

import photo from '../../assets/Avatar.png';

const DashboardNav = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="flex items-center gap-3 cursor-pointer">
                    <div className="w-6 h-6 sm:w-10 sm:h-10 bg-white rounded-full overflow-hidden">
                        <img src={photo} alt='' />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#000000] text-slate-200 rounded-box w-60 ">
                    <li>
                        <p>{user?.displayName}</p>
                        <span>{user?.email}</span>
                    </li>
                    <li>
                        <span>My Profile</span>
                    </li>
                    <li>
                        <span>Account Settings</span>
                    </li>
                    <li>
                        <span>My Likes</span>
                    </li>
                    <li>
                        <span>My Collections</span>
                    </li>
                    <li>
                        <span>Go Pro</span>
                    </li>
                    <li>
                        <Link to='/dashboard' className='items-center'>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className='mb-3'>
                        <button onClick={handleLogOut} className='items-center'>
                            <span>Sign Out</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardNav;