import React from 'react';
import Rechart from '../Others/Rechart/Rechart';
import Activity from './Activity';
import Team from './Team';
import ToDo from './ToDo';

const DashBoard = () => {
    return (
        <div className='mx-4 lg:grid grid-cols-2 sm:grid-cols-1 overflow-hidden'>
            <div>
                <Activity></Activity>
                <Rechart></Rechart>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                    <ToDo></ToDo>
                    <Team></Team>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;