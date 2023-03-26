import React from 'react';
import shape from '../../assets/Todo-icon/Shape.png';
import default_shape from '../../assets/Todo-icon/Default.png';

const ToDo = () => {
    return (
        <div className="card w-[340px] h-[260px] bg-[#F8F988] mt-4 mb-8 text-black rounded-3xl">
            <div className="card-body ">
                <h2 className="text-xl font-semibold">To-Do</h2>
                <div className='font-semibold'>
                    <div className='flex gap-2 mt-4'>
                        <img src={shape} alt="" />
                        <p>Call Rohan</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <img src={shape} alt="" />
                        <p>Meeting at 7pm</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <img src={default_shape} alt="" />
                        <p>Fixed navbar bug issues</p>
                    </div>
                </div>
                <div className="card-actions justify-start">
                    <button className="btn btn-xs w-20 bg-black rounded-3xl mt-4">Add Task</button>
                </div>
            </div>
        </div>
    );
};

export default ToDo;