import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

function Analytics() {
  const analyticsData = [
    { month: 'Jan', leads: 50 },
    { month: 'Feb', leads: 70 },
    { month: 'Mar', leads: 70 },
    { month: 'Apr', leads: 60 },
    { month: 'May', leads: 80 },
    { month: 'Jun', leads: 90 },
  ];

  const leadSourcesData = [
    { name: 'Website', value: 400 },
    { name: 'LinkedIn', value: 300 },
    { name: 'Referral', value: 300 },
    { name: 'Facebook', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <main className='analytics-container'>
      <div className='analytics-overview'>
        <h3>Analytics Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={analyticsData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="leads" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className='lead-sources'>
        <h3>Lead Sources</h3>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Tooltip />
            <Pie 
              data={leadSourcesData} 
              dataKey="value" 
              nameKey="name" 
              cx="50%" 
              cy="50%" 
              outerRadius={100} 
              fill="#8884d8"
              stroke="none"
            >
              {leadSourcesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Analytics;