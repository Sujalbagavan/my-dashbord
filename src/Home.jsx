import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function Home() {
  const data = [
    { year: '2020', leads: 200, conversionRate: 50 },
    { year: '2021', leads: 250, conversionRate: 55 },
    { year: '2022', leads: 300, conversionRate: 60 },
    { year: '2023', leads: 280, conversionRate: 65 },
    { year: '2024', leads: 350, conversionRate: 70 },
    { year: '2025', leads: 400, conversionRate: 75 },
    { year: '2026', leads: 370, conversionRate: 72 },
    { year: '2027', leads: 420, conversionRate: 78 },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="leads" stroke="#8884d8" />
            <Line type="monotone" dataKey="conversionRate" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Leads</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>{data[data.length - 1].leads}</h1>
          <p>+{data[data.length - 1].leads - data[data.length - 2].leads} from last year</p>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Conversion Rate</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>{data[data.length - 1].conversionRate}%</h1>
          <p>+{data[data.length - 1].conversionRate - data[data.length - 2].conversionRate}% from last year</p>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Active Campaigns</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>12</h1>
          <p>2 pending approval</p>
        </div>
      </div>
    </main>
  );
}

export default Home;