import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import '../Layout/Dashboard.css'

import avatar from '../../assets/avatar/avatar.png';
import settings from '../../assets/Group 210.png';
import theme from '../../assets/Group 211.png';
import facebook from '../../assets/social_icon/facebook.png';
import dribble from '../../assets/social_icon/dribble.png';
import linkedin from '../../assets/social_icon/linkedin.png';
import discord from '../../assets/social_icon/discord.png';
import google from '../../assets/social_icon/google.png';
import DashboardSideItems from './DashboardSideItems';

import personal from '../../assets/UserCircle.png';
import price from '../../assets/icon/Sale Price Tag.png';
import bag from '../../assets/icon/Shopping Bag.png';
import packing from '../../assets/icon/Packing.png';
import icon from '../../assets/icon/User Account.png';
import cart from '../../assets/icon/Shopping Cart With Money (1).png';
import DashboardSideItems2 from './DashboardSideItems2';

const DashboardLayout = () => {
    // const { user } = useContext(AuthContext);

    return (
        <div className='mt-8 '>
            <div className="drawer drawer-mobile ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle peer" />
                <div className="drawer-content py-1 lg:ml-[400px] mx-auto h-auto">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side  fixed h-full w-0 lg:w-[320px] peer-checked:w-full 
                lg:peer-checked:w-[320px] overflow-y-auto">
                    <label htmlFor="dashboard-drawer" className="bg-transparent drawer-overlay "></label>
                    <ul className="menu bg-[#F8F988] lg:rounded-3xl sm:rounded-none text-base-content font-semibold lg:w-80 pb-5 sm:w-full mb-20">

                        <div className=''>
                            <div className=''>
                                <div className='w-30 h-30 mt-0 flex justify-center items-center mb-[-80px]'>
                                    <img src={avatar} alt="" />
                                </div>
                                <div className=" bg-gradient card bg-neutral text-neutral-content m-6 w-72 mx-auto h-52 mb-4 ">
                                    <div className="card-body items-center text-center">
                                        <div className='mt-[40px] '>
                                            <h2 className="card-title justify-center text-3xl font-extrabold">Ekko</h2>
                                            <p className='text-xs mt-[-5px]'>www.ekko.network</p>
                                        </div>
                                        <div className='flex justify-around mt-2'>
                                            <img src={facebook} alt="" className='mr-5' />
                                            <img src={dribble} alt="" className='mr-5' />
                                            <img src={linkedin} alt="" className='mr-5' />
                                            <img src={discord} alt="" className='mr-5' />
                                            <img src={google} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <DashboardSideItems
                            icon={cart}
                            title='Orders' />
                        <DashboardSideItems2
                            icon={icon}
                            title='Customers' />
                        <DashboardSideItems2
                            icon={packing}
                            title='Products' />
                        <DashboardSideItems2
                            icon={bag}
                            title='Marketing' />
                        <DashboardSideItems2
                            icon={price}
                            title='Discounts' />

                        <div className="card mt-8 border-solid border-black border-2 bg-white text-neutral-content w-52 mx-auto h-22">
                            <div className="card-body text-center flex items-center justify-center content-center p-4">
                                <div className='flex gap-2'>
                                    <div className='flex items-center justify-center content-center'>
                                        <img src={personal} alt="" className='text-[#F2FF93]' />
                                    </div>
                                    <div className='text-black leading-none '>
                                        <p className='font-xs font-semibold'>Personal Account</p>
                                        <p className='font-xs font-semibold'>Switch to pro plan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default DashboardLayout;