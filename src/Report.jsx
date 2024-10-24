import React from 'react';

function Report() {
  const reports = [
    { name: 'Lead Generation Report', date: '2024-03-15', type: 'PDF' },
    { name: 'Conversion Analysis', date: '2024-03-14', type: 'CSV' },
    { name: 'Campaign Performance', date: '2024-03-13', type: 'PDF' },
    { name: 'Source Attribution', date: '2024-03-12', type: 'CSV' },
  ];

  return (
    <div className='report-container'>
      <h3>Generated Reports</h3>
      <button className='new-report-button'>+ New Report</button>
      <table className='report-table'>
        <thead>
          <tr>
            <th>Report Name</th>
            <th>Date</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.name}</td>
              <td>{report.date}</td>
              <td>
                <span className={`report-type ${report.type === 'PDF' ? 'pdf' : 'csv'}`}>
                  {report.type}
                </span>
              </td>
              <td>
                <button onClick={() => alert(`Downloading ${report.name}`)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Report;