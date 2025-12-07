import React, { useState } from 'react';
import { invoke, view } from '@forge/bridge';

function IssuePanel() {
    const [context, setContext] = useState(null);
    const [prUrl, setPrUrl] = useState('');
    const [status, setStatus] = useState(null);

    React.useEffect(() => {
        view.getContext().then(setContext);
    }, []);

    const linkPR = async () => {
        if (!context) return;
        const issueId = context.extension.issue.id;
        await invoke('linkPR', { issueId, prUrl });
        setStatus('PR Linked!');
        setPrUrl('');
    };

    const addReviewers = async () => {
        if (!context) return;
        const issueId = context.extension.issue.id;
        await invoke('addReviewers', { issueId, reviewers: ['teammate1', 'teammate2'] });
        setStatus('Reviewers Added!');
    };

    if (!context) return <div>Loading...</div>;

    return (
        <div style={{ padding: '10px' }}>
            <h3>Pit Crew Actions</h3>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Pull Request URL"
                    value={prUrl}
                    onChange={(e) => setPrUrl(e.target.value)}
                    style={{ width: '100%', padding: '5px', marginBottom: '5px' }}
                />
                <button onClick={linkPR} style={btnStyle}>Link PR</button>
            </div>
            <div>
                <button onClick={addReviewers} style={btnStyle}>Add Reviewers (Fast)</button>
            </div>
            {status && <div style={{ marginTop: '10px', color: 'green' }}>{status}</div>}
        </div>
    );
}

const btnStyle = {
    background: '#0052CC',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%'
};

export default IssuePanel;
