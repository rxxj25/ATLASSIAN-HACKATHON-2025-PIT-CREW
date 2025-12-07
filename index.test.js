/* eslint-disable no-undef */
// Mock @forge/api
const mockRequestJira = jest.fn();
const mockRequestConfluence = jest.fn();
jest.mock('@forge/api', () => ({
    __esModule: true,
    default: {
        asUser: () => ({
            requestJira: mockRequestJira,
            requestConfluence: mockRequestConfluence
        })
    },
    route: (strings, ...values) => strings[0]
}));

// Mock @forge/resolver
const definitions = {};
jest.mock('@forge/resolver', () => {
    return jest.fn().mockImplementation(() => ({
        define: (key, fn) => {
            definitions[key] = fn;
        },
        getDefinitions: () => definitions
    }));
});

// Import the module under test - using require after mock
// Note: Jest handles import hoisting, but we need to ensure mocks apply.
// Using dynamic import/require inside describe or after mocks is safer if using CommonJS require, 
// but with Babel handled imports, standard import is fine.
// However, since we define `definitions` locally, we need the mock to capture it.

import * as index from './index';

describe('Tornado App Resolvers', () => {
    beforeEach(() => {
        mockRequestJira.mockClear();
        mockRequestConfluence.mockClear();
        // Reset definitions if needed? No, they are static.
    });

    test('getDashboardData returns stats', async () => {
        // Mock Blockers JQL query response
        mockRequestJira.mockResolvedValueOnce({
            json: async () => ({ total: 5, issues: [] })
        });
        // Mock Done issues JQL query response
        mockRequestJira.mockResolvedValueOnce({
            json: async () => ({ total: 20, issues: [] })
        });

        const result = await definitions['getDashboardData']();
        expect(result).toEqual({
            velocity: 30, // 1.5 * 20 = 30
            issuesCompleted: 20,
            prCycleTime: '2 days',
            blockers: 5
        });
    });

    test('linkPR calls Jira API', async () => {
        mockRequestJira.mockResolvedValue({ status: 201 });
        const req = { payload: { issueId: '1001', prUrl: 'http://github.com/pr/1' } };
        const result = await definitions['linkPR'](req);

        expect(mockRequestJira).toHaveBeenCalled();
        expect(result.success).toBe(true);
    });

    test('createRetroPage calls Confluence API', async () => {
        // Mock spaces response
        mockRequestConfluence
            .mockResolvedValueOnce({
                json: async () => ({ results: [{ id: 'space123' }] })
            })
            // Mock page creation response
            .mockResolvedValueOnce({
                json: async () => ({ id: 'page123', _links: { base: 'http://base', webui: '/page' } })
            });

        const req = { payload: { sprintName: 'Sprint 1', points: 10 } };
        const result = await definitions['createRetroPage'](req);

        expect(mockRequestConfluence).toHaveBeenCalledTimes(2); // 1 for space, 1 for page
        expect(result.success).toBe(true);
        expect(result.pageId).toBe('page123');
    });

    test('sprintTrigger logs event', async () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        const result = await index.sprintTrigger({ some: 'event' });
        expect(consoleSpy).toHaveBeenCalledWith("Sprint trigger fired", { some: 'event' });
        expect(result.status).toBe('success');
        consoleSpy.mockRestore();
    });
});
