import React from 'react';

import arrow_fall from '../../assets/arrow/ArrowFall.png';
import arrow_fall_yellow from '../../assets/arrow/ArrowFall_yellow.png';
import arrow_rise from '../../assets/arrow/ArrowRise.png';
import arrow_rise_yellow from '../../assets/arrow/ArrowRise_yellow.png';

const Activity = () => {
    return (
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className="card w-52 h-28 bg-[#F8F988] text-neutral-content">
                <div className="card-body p-6 items-start text-center">
                    <div className='flex justify-start content-start items-start'>
                        <p className='text-black text-md font-semibold'>Total Sales</p>
                    </div>
                    <div className='flex gap-16 md:gap-8 sm:gap-4'>
                        <p className='text-black text-2xl font-semibold'>721K</p>
                        <div className='text-black flex items-center '>
                            <p className='text-sm mr-1'>+11.01% </p>
                            <img src={arrow_rise} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-52 h-28 bg-black text-neutral-content">
                <div className="card-body p-6 items-start text-center">
                    <div className='flex justify-start content-start items-start'>
                        <p className='text-[#F8F988] text-md font-semibold'>Visits</p>
                    </div>
                    <div className='flex gap-16 md:gap-8 sm:gap-4'>
                        <p className='text-[#F8F988] text-2xl font-semibold'>367K</p>
                        <div className='text-[#F8F988] flex items-center '>
                            <p className='text-sm mr-1'>+9.15% </p>
                            <img src={arrow_rise_yellow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-52 h-28 bg-[#F8F988] text-neutral-content">
                <div className="card-body p-6 items-start text-center">
                    <div className='flex justify-start content-start items-start'>
                        <p className='text-black text-md font-semibold'>New Users</p>
                    </div>
                    <div className='flex gap-16 md:gap-8 sm:gap-4'>
                        <p className='text-black text-2xl font-semibold'>1156</p>
                        <div className='text-black flex items-center '>
                            <p className='text-sm mr-1'>-0.56% </p>
                            <img src={arrow_fall} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-52 h-28 bg-black text-neutral-content">
                <div className="card-body p-6 items-start text-center">
                    <div className='flex justify-start content-start items-start'>
                        <p className='text-[#F8F988] text-md font-semibold'>Active Users</p>
                    </div>
                    <div className='flex gap-16 md:gap-8 sm:gap-4'>
                        <p className='text-[#F8F988] text-2xl font-semibold'>239K</p>
                        <div className='text-[#F8F988] flex items-center '>
                            <p className='text-sm mr-1'>-1.48% </p>
                            <img src={arrow_fall_yellow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;