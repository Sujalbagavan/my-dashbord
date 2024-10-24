import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

function Leads() {
  const leadsData = [
    { name: 'Caroline B.', email: 'caroline@example.com', status: 'New Lead', source: 'Website', date: '2024-03-15' },
    { name: 'Michael R.', email: 'michael@example.com', status: 'In Progress', source: 'LinkedIn', date: '2024-03-14' },
    { name: 'Sarah W.', email: 'sarah@example.com', status: 'Contacted', source: 'Referral', date: '2024-03-13' },
    { name: 'James L.', email: 'james@example.com', status: 'Qualified', source: 'Website', date: '2024-03-12' },
    { name: 'Emma D.', email: 'emma@example.com', status: 'New Lead', source: 'Facebook', date: '2024-03-11' },
  ];

  return (
    <div className='leads-container'>
      <div className='leads-header'>
        <h3>Leads</h3>
        <input type='text' placeholder='Search leads...' className='search-input' />
        <button className='add-lead-button'>+ Add Lead</button>
      </div>
      <table className='leads-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Source</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leadsData.map((lead, index) => (
            <tr key={index}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>
                <span className={`status ${lead.status.replace(' ', '-').toLowerCase()}`}>{lead.status}</span>
              </td>
              <td>{lead.source}</td>
              <td>{lead.date}</td>
              <td>
                <BsThreeDots className='action-icon' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leads;