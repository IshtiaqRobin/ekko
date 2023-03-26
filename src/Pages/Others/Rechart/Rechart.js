import React from 'react';
import chart from '../../../assets/chart.png';
import card from '../../../assets/First Card.png';
import card1 from '../../../assets/Card.png';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { Tooltip } from 'chart.js';
// import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const data = [
        {
            "id": 1,
            "name": "JAN",
            "logo": "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
            "total": 8
        },
        {
            "id": 2,
            "name": "FEB",
            "logo": "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
            "total": 9
        },
        {
            "id": 4,
            "name": "MAR",
            "logo": "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
            "total": 8
        },
        {
            "id": 5,
            "name": "APR",
            "logo": "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
            "total": 12
        },
        {
            "id": 6,
            "name": "MAY",
            "logo": "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
            "total": 4
        },
        {
            "id": 7,
            "name": "JUN",
            "logo": "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
            "total": 9
        }
    ]
    return (
        <div>
            <div className='lg:flex flex-wrap mt-10 gap-5'>
                <BarChart width={400} height={400} data={data}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>

                {/* <div className='bg-[#F8F988] p-2 rounded-3xl'>
                    <LineChart width={400} height={400} data={data}>
                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div> */}

                <img src={chart} alt="" />
                <img src={card} alt="" className='w-[440px] h-[315px]' />

                
            </div>
        </div>
    );
};

export default Rechart;