import React from 'react';
import img1 from '../../assets/Team/1.png';
import img2 from '../../assets/Team/2.png';
import img3 from '../../assets/Team/4.png';
import img4 from '../../assets/Team/5.png';
import chat from '../../assets/Team/Chat_Circle_Dots.png';
import phone from '../../assets/Team/Phone.png';

const Team = () => {
    return (
        <div>
            <div className="card w-[340px] h-[320px] bg-[#F8F988] mt-4 mb-8 text-black rounded-3xl">
                <div className="card-body ">
                    <h2 className="text-xl font-semibold">Team</h2>
                    <div className='font-semibold'>
                        <div className='flex gap-2 mt-4'>
                            <img src={img1} alt="" />
                            <p>Rohan Srivastava</p>
                            <img src={chat} alt="" className='w-5 h-5' />
                            <img src={phone} alt="" className='w-5 h-5' />
                        </div>
                        <div className='flex gap-2 mt-3'>
                            <img src={img2} alt="" />
                            <p>Piyush Joshi</p>
                            <img src={chat} alt="" className='w-5 h-5' />
                            <img src={phone} alt="" className='w-5 h-5' />
                        </div>
                        <div className='flex gap-2 mt-3'>
                            <img src={img3} alt="" />
                            <p>Sreeja Meheshwari</p>
                            <img src={chat} alt="" className='w-5 h-5' />
                            <img src={phone} alt="" className='w-5 h-5' />
                        </div>
                        <div className='flex gap-2 mt-3'>
                            <img src={img4} alt="" />
                            <p>Neha Trivedi</p>
                            <img src={chat} alt="" className='w-5 h-5' />
                            <img src={phone} alt="" className='w-5 h-5' />
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn btn-xs w-1/2 bg-black rounded-3xl mt-4">ADD MEMBER</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;