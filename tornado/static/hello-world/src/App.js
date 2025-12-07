import React, { useEffect, useState } from 'react';
import { view } from '@forge/bridge';
import Dashboard from './components/Dashboard';
import IssuePanel from './components/IssuePanel';
import RetroMacro from './components/RetroMacro';

function App() {
    const [context, setContext] = useState(null);

    useEffect(() => {
        view.getContext().then(setContext);
    }, []);

    if (!context) {
        return <div>Loading...</div>;
    }

    const moduleKey = context.moduleKey;

    switch (moduleKey) {
        case 'tornado-global-dashboard':
            return <Dashboard />;
        case 'tornado-issue-panel':
            return <IssuePanel />;
        case 'tornado-retro-macro':
            return <RetroMacro />;
        default:
            // Fallback for development testing or unknown modules
            return (
                <div>
                    Module Key: {moduleKey}
                    <Dashboard />
                </div>
            );
    }
}

export default App;
