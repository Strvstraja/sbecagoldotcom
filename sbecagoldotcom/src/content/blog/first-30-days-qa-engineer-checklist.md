---
title: 'Your First 30 Days as a QA Engineer on a New Team (The Checklist Nobody Gives You)'
description: "The complete guide to joining a new QA team without wasting weeks testing the wrong things. What to learn, who to talk to, and how to establish yourself in the first month."
pubDate: 2026-04-12
author: 'Strahinja Becagol'
image: '/latestBlog.png'
tags: ['qa', 'career', 'onboarding']
---

I once joined a project that had been running for two years. The team was large, the product was complex, and the existing QA process was described to me as "well established." On day one I got a laptop, a Jira invite, and a Confluence link to a test suite that had not been touched since the previous QA engineer left a couple months ago while I was on vacation.

Nobody sat me down and explained what mattered. Nobody told me which parts of the product were fragile, which developers wrote bulletproof code and which ones needed their PRs reviewed carefully, or what the team actually meant when they said "regression passed." Nobody told me that this part of the software was in development for almost a year and it was 3 months overdue and long past its budget. I had access to everything and understood nothing.

So I did what most new QA engineers do. I started clicking. I opened the app, I poked around, I filed a few bugs, and I tried to look like I was contributing. Two weeks in I realised I had been testing the wrong things entirely. The features I had been focused on were legacy, rarely used, and the team had already accepted the bugs in them. Meanwhile the critical flow had a known timing issue that everyone was watching closely and I had not even found yet.

That experience taught me something that no QA course covers: joining a new team is its own skill. And most people are bad at it.

This is the checklist I wish someone had handed me on day one.

## Week 1: Understand Before You Touch Anything

The instinct on week one is to prove yourself. Start testing, file some bugs, show you can contribute. Resist this entirely.

Your job in week one is to understand the landscape, not change it.

**Get your environment working on day one.** This sounds obvious but it routinely takes two or three days and involves hunting down three different people for credentials, environment variables, and VPN access. Start immediately. Every day without a working setup is a day you cannot do anything useful.

**Find out what your role actually is.** Every team has a different relationship with QA. On some teams you are a gatekeeper who signs off before releases. On others you are a late reviewer who gets builds after developers have already called it done. On others you are embedded in the squad, in every planning session, reviewing specs before a line of code is written. These are fundamentally different jobs and the wrong assumption about which one you are will make you annoying to work with and ineffective.

Ask directly in your first week: "What does the team expect from QA in terms of when I get involved and what I sign off on?"

**Ask the most important question early.** Find time with the tech lead, the product manager, and at least one developer and ask each of them: "What keeps you up at night about quality on this product?"

This question does three things. It tells you where the real risk areas are faster than any documentation will. It signals to the team that you think about risk, not just test cases. And the gaps between what each person says will tell you a lot about where the team's blind spots are.

**Read the bug backlog before you read the test suite.** The existing test cases tell you what someone decided to test at some point in the past. The bug history tells you where things actually go wrong. Look for recurring bugs, bugs that were closed as "won't fix," bugs that took a long time to reproduce. These are the map of the product's weakest points and they are worth more than any test plan.

## Week 2: Learn the Product Like You Have Never Seen It Before

By week two you should have a working environment and a rough mental model of the team structure. Now the job is to actually understand what you are testing.

**Explore without a plan first.** Not formal [exploratory testing](/blog/exploratory-testing-for-beginners). Just use the product. Use it as someone who has never seen it before. Use it in a hurry. Use it in ways that feel slightly wrong. Write down everything that is confusing, unexpected, or incomplete.

This matters because you have something the rest of the team has lost: genuine first impressions. They have been looking at this product for months or years and they are blind to a lot of things that will immediately stand out to you. Document those impressions now because in two weeks you will have lost them too.

**Find the flows that cannot break.** Every product has three or four critical paths. The login. The main feature people are paying for. The checkout or signup or whatever the core conversion is. Find these, map them out, and understand them deeply before you spend time on anything else. When pressure comes, and it always does, these are what you protect.

**Work out where the documentation lies.** In most teams, documentation is a polite fiction. Test cases describe a product from six months ago. Specs cover what was intended rather than what was built. Wikis have articles that contradict each other. Your job is not to fix this immediately. Your job is to notice where the gaps are and start building your own understanding of how the product actually behaves, not how it was supposed to behave.

**Find a developer to have coffee with.** Not to ask about code. Just to understand how they think about quality on this product, what they worry about, what they consider done. The best QA engineers build good working relationships with developers early. The ones who struggle treat it as an adversarial relationship from day one.

## Week 3: Start Contributing, But Do It Carefully

Week three is when most new QA engineers overcorrect. They have been quiet for two weeks, they feel the pressure to show output, and they start filing bugs and writing test cases at volume.

The problem is that at week three you still do not fully know what is a bug and what is expected behavior. You do not know the team's standards for severity. You do not know which components are intentionally left in a rough state because they are being rewritten next quarter.

**Before filing a bug, do two minutes of research.** Search the backlog. Has this been reported before? Is there a known reason it works this way? Is there a comment on a related ticket that explains it? Filing a bug that gets closed in thirty seconds because everyone already knows about it is the fastest way to lose credibility with the development team. Learn [how to write bug reports](/blog/how-to-write-bug-reports-that-dont-suck) that get taken seriously.

**Connect your severity to business impact.** "This is a P1 because it looks bad" is not a severity assessment. "This is a P1 because it breaks the checkout flow for users on mobile Safari, which is 40% of our traffic" is. If you do not know the business impact yet, say so. "I'm marking this high because the flow breaks, but I'm not sure of the user impact yet" is better than a severity label that gets argued about. Understanding [bug severity](/blog/bug-severity-guide-nobody-tells-you) helps you communicate impact.

**Find one genuinely useful contribution.** Not a volume of bugs. One thing that makes the team's work better. A missing test case for a critical path. A gap in regression coverage that everyone knows exists but nobody has documented. A confusing step in the deployment process that you can write up clearly. Something that makes someone else's day slightly easier. That is worth more than twenty duplicate bug reports.

## Week 4: Establish Your Place on the Team

By week four you are no longer new but you are not yet established. This is the week most QA engineers skip the important work because they are finally busy enough to feel like they are contributing.

**Document what you have learned.** A simple document. What the critical paths are, where the known risk areas are, how the release process works, who owns what, what the common bug patterns are. You will use this yourself for months. Anyone who joins after you will use it even more. And writing it down forces you to notice where your understanding is still fuzzy.

**Make your work visible.** The bugs you caught before they reached production, the edge cases you flagged before development started, the ambiguous requirement you clarified before it became a two-day debugging session. None of this is visible by default. Nobody is tracking it. You have to surface it yourself.

This does not mean being loud or self-promotional. It means writing a short summary at the end of sprint, mentioning key catches in the team standup, and framing your work in terms of risk reduced rather than tasks completed.

The QA engineers who get taken seriously and get listened to in rooms where decisions are made are not always the most technically skilled. They are the ones who communicate clearly about what they do and why it matters.

**Set your direction for the next 30 days.** What coverage gaps need addressing? What part of the test process is slow or fragile? What recurring bug type could be caught earlier in the development cycle? Write it down even if it is just a short list. It gives you direction and it signals to the team that you think about improvement, not just execution. Having solid [software testing strategies](/blog/software-testing-strategies-that-arent-just-write-more-tests) helps you prioritize.

## The Bit Most People Get Wrong

Joining a new QA team is not about proving you can test. Anyone can click through a feature and file bugs. The hard part is understanding the product well enough to know what matters, building relationships with the team before you start pushing back on things, and making the kind of contributions that are still being talked about six months later.

Most of this does not show up in any onboarding guide. Which is why I turned it into a checklist.

If you want the complete one-page version covering all four weeks, with every item from tooling setup to the questions to ask at each stage, you can download it free below. It is the thing I wish someone had handed me on day one.

<div style="text-align: center; margin: 3rem 0; padding: 2.5rem; background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); border-radius: 12px; border: 2px solid #10b981;">
  <p style="font-size: 1.3rem; font-weight: 600; color: #10b981; margin-bottom: 1.5rem;">Get the complete checklist for your first 30 days</p>
  <a href="https://subscribepage.io/newQaCheckList" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff !important; padding: 1rem 3rem; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 1.2rem; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3); transition: all 0.3s;">Download Free Checklist</a>
  <p style="margin-top: 1rem; font-size: 0.9rem; color: #6b7280;">Free download. No credit card required.</p>
</div>
