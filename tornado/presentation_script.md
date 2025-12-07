# 🏎️ Tornado - 3-Minute Presentation Script
## Atlassian Codegeist Hackathon 2024

---

## Opening (0:00 - 0:30)

**[Slide: Title - Tornado Logo]**

"Hello everyone! My name is [Your Name], and I'm excited to introduce you to **Tornado** - the pit crew for software teams.

You know, in Formula 1, when a car pulls into the pit stop, the crew has just seconds to change tires, refuel, and get the driver back on track. They rely on **real-time data**, **streamlined workflows**, and **automated processes**. 

What if we could bring that same level of efficiency to software development teams?

That's exactly what Tornado does for teams using Jira and Confluence."

---

## Problem Statement (0:30 - 1:00)

**[Slide: Common Team Challenges]**

"Software teams today face three major challenges:

**First**, managers struggle to get real-time insights into team performance. They're stuck navigating multiple dashboards, running complex JQL queries, and manually compiling reports.

**Second**, retrospective meetings are time-consuming to prepare. Someone has to create the Confluence page, set up the template, add sprint details - all before the actual retro even begins.

**Third**, developers waste time on repetitive tasks - like linking pull requests to Jira issues or adding code reviewers - which breaks their flow state.

Tornado solves all three of these problems."

---

## Solution Overview (1:00 - 2:00)

**[Slide: Tornado Features Overview]**

"Let me show you Tornado's four core features:

**Feature 1: The Pit Crew Dashboard** 
**[Demo: Navigate to Dashboard]**

This is a custom Jira global page that displays real-time team metrics at a glance:
- Team velocity and sprint capacity
- Issues completed this sprint
- PR cycle time to track code review efficiency
- Active blockers that need immediate attention

No more hunting through reports - everything your team needs is right here.

---

**Feature 2: Auto Retro** 
**[Demo: Open Confluence, type /Auto Retro]**

This is a Confluence macro that generates complete retrospective pages with one click. Just type `/Auto Retro` in any Confluence page, hit the button, and boom - you have a fully structured retro page ready to go. This saves our teams hours of preparation time before every sprint review.

---

**Feature 3: Pit Crew Actions** 
**[Demo: Open Jira Issue, show panel]**

This issue panel gives developers quick actions right from the Jira ticket:
- Link pull requests instantly
- Add code reviewers
- All without leaving the issue view

It's all about removing friction from the developer workflow.

---

**Feature 4: Scheduled Automation** 

Behind the scenes, Tornado runs hourly background jobs to collect and aggregate sprint metrics. This ensures your dashboard is always up-to-date without any manual intervention."

---

## Technical Implementation (2:00 - 2:30)

**[Slide: Tech Stack]**

"Tornado is built entirely on the **Atlassian Forge platform**, which is why it deserves consideration for the **'Best Use of Forge Custom UI'** category.

**On the frontend**, we use React 18 with Forge Bridge and Atlassian's Design System for a native Atlassian experience.

**On the backend**, we leverage Forge Resolvers to interact with both the Jira REST API v3 and Confluence REST API v2, creating a seamless integration between both products - which is perfect for the **'Best Integration'** category.

The app is designed specifically for **software teams**, making it a natural fit for the **'Apps for Software Teams'** category as well.

All of this is fully tested with Jest, and the code is production-ready."

---

## Impact & Closing (2:30 - 3:00)

**[Slide: Impact Metrics / Vision]**

"The impact of Tornado is immediate and measurable:

✅ **Managers** get instant visibility into team performance  
✅ **Scrum Masters** save hours on retrospective preparation  
✅ **Developers** stay in flow with quick-action panels  
✅ **Teams** make data-driven decisions with automated metrics  

But this is just the beginning. Our roadmap includes real JQL integration for live data, GitHub and Bitbucket PR tracking, advanced sprint analytics, and customizable dashboard widgets.

**Tornado isn't just another Jira app - it's a complete performance optimization system for software teams, inspired by the world's fastest pit crews.**

Thank you! I'm happy to answer any questions."

---

## Q&A Preparation

**Potential Questions & Answers:**

**Q: How does this differ from existing Jira reporting tools?**  
A: Tornado brings everything into one unified dashboard with a focus on real-time actionable metrics, plus it uniquely combines Jira analytics with Confluence automation and developer workflow tools.

**Q: Can teams customize which metrics to display?**  
A: Currently, we show the four core metrics most valuable to agile teams, but customizable widgets are on our roadmap based on user feedback.

**Q: Is this ready for production use?**  
A: Yes! Tornado is fully functional, tested, and deployed on the Forge platform. Teams can install it today.

**Q: How does the scheduled automation work?**  
A: We use Forge's scheduled triggers to run background jobs every hour that aggregate sprint data from the Jira API and cache it for instant dashboard loading.

**Q: What's next for Tornado?**  
A: We're focusing on real JQL integration, third-party repository integrations (GitHub/Bitbucket), and advanced analytics with trend visualizations.

---

## Presentation Tips

1. **Practice timing**: Aim for 2:45 to leave buffer time
2. **Energy**: Channel Formula 1 excitement - this is about speed and efficiency!
3. **Demo smoothness**: Have your Atlassian instance ready with sample data
4. **Visual focus**: Let the app demo speak - don't just talk about features, show them
5. **Call to action**: End with your installation link and encourage teams to try it

**Good luck! 🏎️💨**
