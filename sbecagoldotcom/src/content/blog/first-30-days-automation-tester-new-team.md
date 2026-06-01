---
title: 'Your First 30 Days as an Automation Tester on a New Team'
description: "Most automation testers join a new team and make the same mistake on day one. Here's what the first 30 days should actually look like, week by week."
pubDate: 2026-06-01
author: 'Strahinja Becagol'
image: '/first30automation.png'
tags: ['automation', 'career', 'onboarding']
---

Most automation testers join a new team and make the same mistake on day one.

They clone the repo, run the suite, see failures, and spend the next two weeks fixing things they do not yet understand. They look busy. And they make almost no useful progress.

The first 30 days are not about fixing. They are about understanding the system before you touch it.

Here is what that actually looks like, week by week.

## Week 1: Understand the Automation Landscape

Before you write a single line of code or touch a single failing test, get oriented.

Get access to everything: the repo, the CI/CD pipeline, the test management tool, Jira, Slack. Clone the repo and get it running locally. Note every blocker you hit.

Find out what framework is in use, what language, what test runner, what reporting tool. Find out who owns automation: is it QA, devs, or nobody in particular?

Attend every ceremony this week. Standups, planning, retro. Observe and do not talk yet.

Ask two specific questions before the week is out: where do test results go, and who actually looks at them? If the answer to the second question is "nobody," you have found your first real problem.

## Week 2: Dig Into the Existing Suite

Run the full suite locally and document what passes, what fails, and what times out. Do not start fixing failures yet.

Identify flaky tests. Flag them, but do not fix them yet. Read the test code. Assess the structure, the naming conventions, and whether page objects are being used consistently.

Check CI history. How often does the pipeline fail due to test failures versus real bugs? If it fails constantly from test noise, the team has almost certainly learned to ignore it.

Ask when the suite was last meaningfully updated. Find the most critical user flows that have zero automation coverage.

## Week 3: Start Contributing

Write your first automated test for an area you mapped in week two. Not the most complex flow. Pick something you understand well enough to write correctly and submit a clean PR.

Open that PR and follow the team's conventions exactly. Fix one flaky test and document what was causing it. Report one quality risk you spotted: a gap in coverage, a fragile test pattern, an untested flow.

## Week 4: Establish Your Place

Put together a short summary of what you found in your first 30 days. Share it with your team or manager.

Propose one concrete improvement. Not a list of everything that is wrong. One thing.

Ask the question nobody asks: what automation failure has cost this team the most time this year?

Agree with your manager on what success looks like for month two and three.

---

There is a free one-page checklist PDF with all four weeks laid out as tasks you can tick off: [subscribepage.io/first-30-days](https://subscribepage.io/first-30-days)

If you want to practice answering automation interview questions before your next role change, Qaizzerr has hundreds of questions across Playwright, Cypress, and Selenium at every seniority level. Free, no signup required: [qaizzerr.sbecagol.com](https://qaizzerr.sbecagol.com)
