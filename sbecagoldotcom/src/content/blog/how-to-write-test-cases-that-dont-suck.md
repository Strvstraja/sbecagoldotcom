---
title: 'How to Write Test Cases That Don’t Suck'
description: 'A practical guide to writing test cases that are actually useful - and won’t make your team hate you.'
pubDate: 2025-07-28
author: 'Strahinja Becagol'
image: '/blogPostCover3.png'
tags: ['qa', 'test cases', 'manual testing']
---

# How to Write Test Cases That Don’t Suck

Not all test cases are created equal. Some are helpful, clear, and save everyone’s sanity. Others? They’re vague, confusing, and somehow make things worse than not having any test cases at all.  
In one word they SUCK!

Let’s fix that.

## What Is a Test Case?

A test case is a set of conditions, steps, and expected results used to verify that a feature works as intended.

Sounds simple, right? But poorly written test cases can cause:
- Confusion for other testers
- Bugs slipping through the cracks
- Endless follow-up questions from developers
- Slower QA cycles
- General chaos

Good test cases do the opposite. They make testing repeatable, reliable, and clear.

## Anatomy of a Test Case

Here are the basic parts that every useful test case should include:

- **ID**: A unique identifier (e.g., TC-001)  
- **Title**: A short, descriptive name (e.g., “Login with valid credentials”)  
- **Preconditions**: What needs to be set up before the test  
- **Steps**: The exact steps to follow  
- **Expected Results**: What you should see after performing the steps  
- **Actual Results** *(optional during planning)*: Used to log the outcome  
- **Status**: Pass/Fail when executing the test  

## Best Practices for Writing Test Cases

Here’s how to make your test cases not suck:

- **Be clear and concise**: Don’t overcomplicate. Your future self (or teammate) will thank you.
- **Avoid ambiguity**: “Click the button” is not enough. Which button?
- **Use consistent structure**: Makes it easier to review and reuse.
- **Focus on what matters**: Don’t test the blinking cursor. Test actual functionality.
- **Think like the user**: Walk through the feature like they would.
- **Test one thing per case**: Keep it simple and isolated.

## Common Mistakes

Some classic ways to write terrible test cases:
- Skipping preconditions
- Writing one massive case to cover 10 flows
- Being too vague (“App works correctly” – wow, thanks)
- Forgetting edge cases (what if the user enters an emoji as their name?)

## A Quick Example

Here’s a decent test case:

- **Title**: Login with valid credentials  
- **Preconditions**: User is on login page  
- **Steps**:
  1. Enter valid email
  2. Enter correct password
  3. Click “Login”
- **Expected Result**: User is redirected to dashboard

Simple. Clear. No guesswork.

## Final Thoughts

You don’t need 10 years of experience or a fancy tool to write good test cases. You just need structure, clarity, and the will to not write garbage.

And hey, if you want to go deeper, [How To Write Test Cases That Don't Suck is live on Udemy](https://www.udemy.com/course/how-to-write-test-cases-that-dont-suck/?referralCode=8914C6D9F0373B3952B9).

Test smarter. Don’t make your team cry.