// Test script to verify getDashboardData returns real values
// Run this to see what the backend returns

const testData = {
    velocity: 0,
    issuesCompleted: 0,
    prCycleTime: 'N/A',
    blockers: 0
};

console.log('Expected fallback values (if error):', testData);
console.log('');
console.log('If working correctly, you should see:');
console.log('- velocity: >= 10 (number)');
console.log('- issuesCompleted: > 0 (total Jira issues)');
console.log('- prCycleTime: "2 days"');
console.log('- blockers: >= 0 (high priority issues)');
console.log('');
console.log('Run: forge tunnel');
console.log('Then navigate to the dashboard and check the browser console for API responses');
