import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import DashboardSearchBar from '../../DashBoard/DashboardSearchBar';
import notification from '../../../assets/Notification.png';
import DashboardNav from '../../DashboardNav/DashboardNav';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const menuItems =
        <>
            <li><Link to='/'>Home</Link></li>
            {
                user?.uid ?
                    <>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><button onClick={handleLogOut} to='/signup'>Log out</button></li>
                    </>
                    : <li><Link to='/login'>Login</Link></li>
            }
        </>


    return (
        <div className="navbar flex m-0 justify-between ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label htmlFor="dashboard-drawer" tabIndex={2} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2  rounded-box w-52">
                        {/* {menuItems} */}
                    </ul>
                </div>
                <div className='flex justify-between'>
                    <DashboardSearchBar
                        title='Search'
                    />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {/* {menuItems} */}
                </ul>
            </div>
            <label >
                <div className='flex gap-2 mt-[-10px] w-14 h-14'>
                    <div>
                        <img src={notification} alt="" className='hidden lg:block' />
                    </div>
                </div>
                <DashboardNav></DashboardNav>
            </label>
        </div>
    );
};

export default Navbar;