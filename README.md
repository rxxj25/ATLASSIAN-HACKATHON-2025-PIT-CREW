# 🏎️ Tornado - Pit Crew for Software Teams

> Bringing Formula 1 pit crew efficiency to software development

[![Atlassian Forge](https://img.shields.io/badge/Atlassian-Forge-0052CC?logo=atlassian)](https://developer.atlassian.com/platform/forge/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![Tests](https://img.shields.io/badge/tests-passing-success)](./src/index.test.js)

**Tornado** is an Atlassian Forge app that provides real-time development metrics and automated workflows for software teams using Jira and Confluence.

**Built for**: Atlassian Codegeist Hackathon 2025

**Team Leader**: Rajdeep Bandyopadhaya (rajdeep04@icloud.com)
**Team Member**: Aniket Arya (arya.aniket9835@gmail.com)

# INSTALLATION LINK
https://developer.atlassian.com/console/install/edee2df5-2f0a-4645-bd35-e068c5cb46f8?signature=AYABeG5nIFkC%2BIXzZyJbZQLjm%2FsAAAADAAdhd3Mta21zAEthcm46YXdzOmttczp1cy13ZXN0LTI6NzA5NTg3ODM1MjQzOmtleS83MDVlZDY3MC1mNTdjLTQxYjUtOWY5Yi1lM2YyZGNjMTQ2ZTcAuAECAQB4IOp8r3eKNYw8z2v%2FEq3%2FfvrZguoGsXpNSaDveR%2FF%2Fo0B98J2q2ZyqYvKz4F%2FGtB0%2FAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDC3PdI0B5mh6M3LHDwIBEIA7kBbNbYLwuYPiZZLvK5PJbEM4lww4iKdWTJDB7H5BdTJfAczX7mCLTw5oFnFEocrb3TLfZXXhuk1M4JcAB2F3cy1rbXMAS2Fybjphd3M6a21zOmV1LXdlc3QtMTo3MDk1ODc4MzUyNDM6a2V5LzQ2MzBjZTZiLTAwYzMtNGRlMi04NzdiLTYyN2UyMDYwZTVjYwC4AQICAHijmwVTMt6Oj3F%2B0%2B0cVrojrS8yZ9ktpdfDxqPMSIkvHAFrk4DVgMLJuwuxnUoyjySDAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQM1Flf2wm8el%2BgCUGhAgEQgDvoo08kng17hJHcxc6ciWzXjdVW2zRSOOMCW6O5vIOnH6jzYlWYw8QCUiMlf74QyfvrMmvJjO7ZWxW0IgAHYXdzLWttcwBLYXJuOmF3czprbXM6dXMtZWFzdC0xOjcwOTU4NzgzNTI0MzprZXkvNmMxMjBiYTAtNGNkNS00OTg1LWI4MmUtNDBhMDQ5NTJjYzU3ALgBAgIAeLKa7Dfn9BgbXaQmJGrkKztjV4vrreTkqr7wGwhqIYs5AYL91QTy%2F7tApOy1ToWYRi0AAAB%2BMHwGCSqGSIb3DQEHBqBvMG0CAQAwaAYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAzXJuOWOqnFToeEW4YCARCAO9ph7owA3YyOCrrlPpBrSs05045xmhRglAdmELo3uyvyw7kAQYx0h5ttrumqwFz6Bpa6d0H4VwcLZR4XAgAAAAAMAAAQAAAAAAAAAAAAAAAAAJu03SojF55oeYuU024XwMr%2F%2F%2F%2F%2FAAAAAQAAAAAAAAAAAAAAAQAAADKGWZ29pEI7433JAncfeymhNFdA7VnaST%2BHjtoQf2aQ6CB0l9uuw0a0MKqQ7nE%2BxhYt20%2BVsXFxSF08pQHVU0itNr8%3D&product=jira
---

## ✨ Features

### 🎯 Pit Crew Dashboard
Real-time team performance metrics displayed in a custom Jira global page:
- **Velocity**: Team throughput and sprint capacity
- **Issues Completed**: Work completion tracking
- **PR Cycle Time**: Code review efficiency
- **Blockers**: High-priority impediments

### 📝 Auto Retro (Confluence Macro)
One-click retrospective page generation:
- Pre-built template with sprint structure
- Automatic deployment to Confluence
- Saves hours of manual documentation
- Accessible via `/Auto Retro` in any Confluence page

### ⚡ Pit Crew Actions (Issue Panel)
Quick actions directly from Jira issues:
- Link pull requests instantly
- Add code reviewers
- Streamlined workflow integration

### 🤖 Scheduled Automation
Background data collection with hourly triggers:
- Sprint metrics aggregation
- Automated performance tracking
- Foundation for advanced analytics

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) 20.x or 22.x
- [Forge CLI](https://developer.atlassian.com/platform/forge/getting-started/)
- Atlassian account with Jira and Confluence access

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/tornado.git
   cd tornado
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd static/hello-world && npm install && cd ../..
   ```

3. **Build frontend**
   ```bash
   cd static/hello-world
   npm run build
   cd ../..
   ```

4. **Deploy to development**
   ```bash
   forge deploy
   ```

5. **Install on your Atlassian site**
   ```bash
   forge install
   ```

---

## 📖 Usage

### Accessing the Dashboard
1. Navigate to your Jira instance
2. Click **Apps** in the top navigation
3. Select **"Pit Crew Dashboard"**
4. View real-time team metrics

### Using Auto Retro
1. Open any Confluence page in edit mode
2. Type `/Auto Retro` to insert the macro
3. Click **"Generate Retro Page"**
4. New retrospective page created automatically

### Quick Actions Panel
1. Open any Jira issue
2. Look for **"Pit Crew Actions"** in the right panel
3. Use "Link PR" or "Add Reviewers" features

---

## 🛠️ Tech Stack

**Platform**
- [Atlassian Forge](https://developer.atlassian.com/platform/forge/)
- Node.js 22.x runtime

**Frontend**
- React 18
- Forge Bridge
- Atlassian Design System (Atlaskit)

**Backend**
- Forge Resolvers
- Jira REST API v3
- Confluence REST API v2

**Testing**
- Jest
- Babel

---

## 📁 Project Structure

```
tornado/
├── manifest.yml              # Forge app configuration
├── src/
│   ├── index.js             # Backend resolvers
│   └── index.test.js        # Unit tests
├── static/hello-world/       # Frontend React app
│   ├── src/
│   │   ├── App.js           # Main router
│   │   └── components/
│   │       ├── Dashboard.js
│   │       ├── IssuePanel.js
│   │       └── RetroMacro.js
│   └── package.json
├── package.json
└── README.md
```

---

## 🧪 Development

### Run Tests
```bash
npm test
```

### View Logs
```bash
forge logs
```

### Deploy to Production
```bash
forge deploy --environment production
```

### Generate Installation Link
```bash
forge install --sharing
```

---

## 🎯 Roadmap

- [ ] Real JQL integration for live Jira metrics
- [ ] GitHub/Bitbucket PR cycle time tracking
- [ ] Advanced sprint analytics
- [ ] Customizable dashboard widgets
- [ ] Team comparison charts
- [ ] Export functionality

---

## 🏆 Hackathon Submission

**App ID**: `edee2df5-2f0a-4645-bd35-e068c5cb46f8`

**Categories**:
- Apps for Software Teams
- Best Use of Forge Custom UI
- Best Integration

**Demo Video**: 

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


---

## 🙏 Acknowledgments

- Built with [Atlassian Forge Platform](https://developer.atlassian.com/platform/forge/)
- Inspired by Formula 1 pit crew efficiency
- Created for [Codegeist Hackathon 2024](https://codegeist.devpost.com/)

---



**Made with ❤️ for the Atlassian Community**
