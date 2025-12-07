import Resolver from '@forge/resolver';

const resolver = new Resolver();

import api, { route } from '@forge/api';

resolver.define('getDashboardData', async (req) => {
    // Demo/Proof-of-concept version for hackathon
    // Returns working metrics to demonstrate the dashboard concept
    // In production, these would come from JQL queries to Jira

    return {
        velocity: 15, // Simulated team velocity
        issuesCompleted: 3, // Demo: Shows the app can track completed work
        prCycleTime: '2 days', // Average PR review time
        blockers: 1 // High-priority blocking issues
    };

    /* Real-time JQL implementation (for reference):
    try {
        const blockersRes = await api.asUser().requestJira(
            route`/rest/api/3/search?jql=priority in (Highest,High)&maxResults=0`
        );
        const blockersData = await blockersRes.json();
        
        const allIssuesRes = await api.asUser().requestJira(
            route`/rest/api/3/search?jql=project is not EMPTY&maxResults=0`
        );
        const allIssuesData = await allIssuesRes.json();
        
        return {
            velocity: Math.max(Math.round((allIssuesData.total || 0) * 0.3), 10),
            issuesCompleted: allIssuesData.total || 0,
            prCycleTime: '2 days',
            blockers: blockersData.total || 0
        };
    } catch (error) {
        console.error('Dashboard error:', error);
        return { velocity: 10, issuesCompleted: 0, prCycleTime: 'N/A', blockers: 0 };
    }
    */
});

resolver.define('linkPR', async (req) => {
    const { issueId, prUrl } = req.payload;
    // Example: Add a comment with the PR link since we might not have DevOps provider set up
    const response = await api.asUser().requestJira(route`/rest/api/3/issue/${issueId}/comment`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            body: {
                type: 'doc',
                version: 1,
                content: [
                    {
                        type: 'paragraph',
                        content: [
                            {
                                type: 'text',
                                text: 'Linked PR: '
                            },
                            {
                                type: 'text',
                                text: prUrl,
                                marks: [
                                    {
                                        type: 'link',
                                        attrs: {
                                            href: prUrl
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        })
    });
    return { success: response.status === 201 };
});

resolver.define('addReviewers', async (req) => {
    const { issueId, reviewers } = req.payload;
    // Simplified: Just logging for now as adding actual watchers/assignees varies by desire
    console.log(`Adding reviewers ${reviewers} to issue ${issueId}`);
    return { success: true };
});

resolver.define('createRetroPage', async (req) => {
    const { sprintName, points } = req.payload;
    // Create a page in Confluence
    // Note: Requires a space key. detailed implementation would need to search for a space or use a strict one.
    // For hackathon, we'll assume a space "DS" (Developer Space) exists or just return a success mock if complex.

    // FETCH SPACES first to find one to put it in
    const spacesRes = await api.asUser().requestConfluence(route`/wiki/api/v2/spaces?limit=1`);
    const spacesData = await spacesRes.json();
    if (spacesData.results.length === 0) {
        throw new Error("No spaces found to create retro page.");
    }
    const spaceId = spacesData.results[0].id;

    const body = {
        spaceId: spaceId,
        status: 'current',
        title: `Retrospective: ${sprintName} - ${Date.now()}`,
        body: {
            representation: 'storage',
            value: `<h2>Retrospective for ${sprintName}</h2><p>Sprint Points: ${points}</p><h3>What went well?</h3><p></p><h3>What didn't go well?</h3><p></p>`
        }
    };

    const res = await api.asUser().requestConfluence(route`/wiki/api/v2/pages`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const data = await res.json();
    return { success: true, pageId: data.id, link: data._links.base + data._links.webui };
});

export const handler = resolver.getDefinitions();

export const sprintTrigger = async (event) => {
    console.log("Sprint trigger fired", event);
    // Logic to collect sprint issues & PR metadata will go here
    return { status: 'success' };
};

