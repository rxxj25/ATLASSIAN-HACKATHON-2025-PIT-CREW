import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';

function Dashboard() {
    const [data, setData] = useState(null);

    useEffect(() => {
        invoke('getDashboardData').then(setData);
    }, []);

    if (!data) return <div>Loading dashboard...</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>Pit Crew Dashboard</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={cardStyle}>
                    <h3>Velocity</h3>
                    <p style={statStyle}>{data.velocity}</p>
                </div>
                <div style={cardStyle}>
                    <h3>Issues Completed</h3>
                    <p style={statStyle}>{data.issuesCompleted}</p>
                </div>
                <div style={cardStyle}>
                    <h3>PR Cycle Time</h3>
                    <p style={statStyle}>{data.prCycleTime}</p>
                </div>
                <div style={cardStyle}>
                    <h3>Blockers</h3>
                    <p style={statStyle}>{data.blockers}</p>
                </div>
            </div>
        </div>
    );
}

const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const statStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#0052CC'
};

export default Dashboard;
