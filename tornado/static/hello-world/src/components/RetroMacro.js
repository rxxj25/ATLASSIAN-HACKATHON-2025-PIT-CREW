import React, { useState } from 'react';
import { invoke } from '@forge/bridge';

function RetroMacro() {
    const [status, setStatus] = useState(null);

    const createRetro = async () => {
        setStatus('Creating page...');
        try {
            const res = await invoke('createRetroPage', { sprintName: 'Sprint 24', points: 42 });
            setStatus(`Page created! <a href="${res.link}" target="_blank">View Page</a>`);
        } catch (e) {
            setStatus('Error creating page: ' + e.message);
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px dashed #ccc', textAlign: 'center' }}>
            <h3>Auto Retro</h3>
            <p>Generate a retrospective page for the active sprint.</p>
            <button onClick={createRetro} style={btnStyle}>Generate Retro Page</button>
            {status && <div style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: status }} />}
        </div>
    );
}

const btnStyle = {
    background: '#008DA6',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer'
};

export default RetroMacro;
