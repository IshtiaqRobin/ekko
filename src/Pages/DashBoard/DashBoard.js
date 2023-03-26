import React from 'react';
import Rechart from '../Others/Rechart/Rechart';
import Activity from './Activity';
import Team from './Team';
import ToDo from './ToDo';

const DashBoard = () => {
    return (
        <div className='mx-4 overflow-hidden'>
            <div>
                <Activity></Activity>
                <Rechart></Rechart>
                <ToDo></ToDo>
                <Team></Team>
            </div>
        </div>
    );
};

export default DashBoard;