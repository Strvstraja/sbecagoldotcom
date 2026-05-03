# Internal Linking Task for sbecagol.com

## Context

This is an Astro blog. All blog posts live in `src/content/blog/` as `.md` or `.mdx` files.
Internal links use standard Markdown syntax: `[anchor text](/blog/slug)`

**The problem:** 21 out of 25 posts have zero content internal links. Google cannot crawl
the site properly and is not indexing posts.

**Your job:** Add the internal links listed below to each post. Rules:

1. Embed each link **naturally into existing prose** at a point where the topic is already
   being discussed. Do NOT dump links at the bottom or create a generic "Related posts" list.
2. Find the sentence or paragraph where the concept is mentioned and hyperlink the relevant
   phrase using the exact anchor text provided.
3. If a concept is not mentioned in the prose, add one natural sentence that introduces it
   and includes the link.
4. Never add more than one link to the same destination in the same post.
5. Do not change any other content -- spelling, tone, headings, structure all stay the same.
6. Use the exact slug as written -- they already match the live URLs.

---

## Posts to Fix

### 1. `src/content/blog/what-is-software-testing-beginner-guide.md`

The "How to Start Learning Testing" section at the bottom already lists steps like
"Learn bug reporting" and "Explore test case writing". Link those phrases.
Also link "STLC" or "software testing life cycle" in the body if mentioned, or add a
natural sentence near the end.

**Links to add:**

| Find this text (or nearby concept) | Anchor text | Target URL |
|---|---|---|
| "Learn bug reporting" step | `writing effective bug reports` | `/blog/how-to-write-bug-reports-that-dont-suck` |
| "Explore test case writing" step | `how to write test cases` | `/blog/how-to-write-test-cases-that-dont-suck` |
| Near "manual testing" or learning progression | `manual and automation testing` | `/blog/manual-and-automation-testing` |
| Near end / "Stay tuned" paragraph | `defect life cycle` | `/blog/defect-life-cycle-explained` |
| Near end / "Stay tuned" paragraph | `software testing life cycle (STLC)` | `/blog/stlc-in-software-testing` |

---

### 2. `src/content/blog/how-to-write-test-cases-that-dont-suck.md`

This post talks about bug reporting, edge cases, and test execution. Link naturally.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| Mention of bug reports / reporting defects | `how to write bug reports that don't suck` | `/blog/how-to-write-bug-reports-that-dont-suck` |
| Mention of prioritizing what to test | `prioritize test cases when you have limited time` | `/blog/prioritize-test-cases-limited-time` |
| Mention of exploratory / edge case thinking | `exploratory testing` | `/blog/exploratory-testing-for-beginners` |
| Near beginning or intro paragraph | `what software testing is` | `/blog/what-is-software-testing-beginner-guide` |

---

### 3. `src/content/blog/how-to-write-bug-reports-that-dont-suck.md`

Post covers bug structure, severity, and the tester-developer feedback loop.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| Mention of test cases or steps to reproduce | `how to write test cases` | `/blog/how-to-write-test-cases-that-dont-suck` |
| Mention of defect tracking / bug lifecycle | `defect life cycle` | `/blog/defect-life-cycle-explained` |
| Mention of severity or priority | `bug severity` | `/blog/bug-severity-guide-nobody-tells-you` |
| Near intro / "what is software testing" context | `software testing basics` | `/blog/what-is-software-testing-beginner-guide` |

---

### 4. `src/content/blog/regression-testing-explained.mdx`

Post explicitly discusses exploratory testing as complementary. It's mentioned in the prose
already -- just hyperlink it. Also link automation and strategy.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| "exploratory testing" (already in prose) | `exploratory testing` | `/blog/exploratory-testing-for-beginners` |
| Mention of manual vs automated approach | `manual and automation testing` | `/blog/manual-and-automation-testing` |
| Mention of coverage / strategy | `software testing strategies` | `/blog/software-testing-strategies-that-arent-just-write-more-tests` |
| Mention of which tests to run first | `prioritizing test cases` | `/blog/prioritize-test-cases-limited-time` |

---

### 5. `src/content/blog/software-testing-strategies-that-arent-just-write-more-tests.mdx`

This is the strategy pillar post -- it mentions almost every testing type. Link them all.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| "exploratory testing" (mentioned in post) | `exploratory testing` | `/blog/exploratory-testing-for-beginners` |
| "regression testing" (mentioned in post) | `regression testing` | `/blog/regression-testing-explained` |
| "test case" prioritization or selection | `prioritize test cases` | `/blog/prioritize-test-cases-limited-time` |
| Manual vs automation mention | `manual and automation testing` | `/blog/manual-and-automation-testing` |
| STLC / testing process mention | `software testing life cycle` | `/blog/stlc-in-software-testing` |
| Test case writing mention | `how to write test cases` | `/blog/how-to-write-test-cases-that-dont-suck` |

---

### 6. `src/content/blog/manual-and-automation-testing.mdx`

Post already sets up the "both matter" framing. Exploratory and regression are mentioned.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| "exploratory testing" (in prose) | `exploratory testing` | `/blog/exploratory-testing-for-beginners` |
| "regression testing" (in prose) | `regression testing` | `/blog/regression-testing-explained` |
| The future / AI angle | `why manual testing will never die` | `/blog/why-manual-testing-will-never-die` |
| Strategy / coverage approach | `software testing strategy` | `/blog/software-testing-strategies-that-arent-just-write-more-tests` |
| Near intro for context | `what software testing is` | `/blog/what-is-software-testing-beginner-guide` |

---

### 7. `src/content/blog/bug-severity-guide-nobody-tells-you.mdx`

Post covers the full severity spectrum and politics of bug triage.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| Mention of writing / filing bug reports | `writing bug reports developers actually read` | `/blog/how-to-write-bug-reports-that-dont-suck` |
| Mention of bug lifecycle / tracking states | `defect life cycle` | `/blog/defect-life-cycle-explained` |
| Mention of prioritizing under time pressure | `prioritizing test cases under a deadline` | `/blog/prioritize-test-cases-limited-time` |
| Mention of pushing back / advocating | `how to say no to impossible deadlines` | `/blog/how-to-say-no-to-impossible-deadlines` |

---

### 8. `src/content/blog/exploratory-testing-for-beginners.mdx`

Already links to 2 posts. Add 3 more.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| Mention of writing test cases / documentation | `how to write test cases` | `/blog/how-to-write-test-cases-that-dont-suck` |
| Mention of regression / scripted tests | `regression testing` | `/blog/regression-testing-explained` |
| Near intro / foundational context | `what software testing is` | `/blog/what-is-software-testing-beginner-guide` |

---

### 9. `src/content/blog/5-things-senior-testers-do-that-juniors-dont.mdx`

Career post that covers bug reports, regression, strategy, and communication.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| Mention of bug reports / business impact | `writing bug reports that communicate business impact` | `/blog/how-to-write-bug-reports-that-dont-suck` |
| Mention of regression testing | `regression testing` | `/blog/regression-testing-explained` |
| Mention of strategy / risk-based approach | `software testing strategies` | `/blog/software-testing-strategies-that-arent-just-write-more-tests` |
| Mention of career / experience | `10 years of lessons in software testing` | `/blog/what-i-learned-10-years-breaking-software` |
| Near intro / for beginners context | `what software testing is` | `/blog/what-is-software-testing-beginner-guide` |

---

### 10. `src/content/blog/scary-truth-ai-replacing-testers.mdx`

Post covers AI tools, automation, and what testers can do that AI can't.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| "manual testing" mentioned in contrast to AI | `why manual testing will never die` | `/blog/why-manual-testing-will-never-die` |
| Mention of skills / senior testers adapting | `what senior testers do that AI can't replicate` | `/blog/5-things-senior-testers-do-that-juniors-dont` |
| QA focus / future of industry | `QA focus for 2026` | `/blog/new-year-new-bugs-qa-focus-2026` |
| Manual vs automation framing | `manual and automation testing` | `/blog/manual-and-automation-testing` |

---

### 11. `src/content/blog/why-manual-testing-will-never-die.mdx`

Post explicitly covers exploratory testing and regression as examples.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| "exploratory testing" (already in prose) | `exploratory testing` | `/blog/exploratory-testing-for-beginners` |
| Manual vs automation framing | `manual and automation testing` | `/blog/manual-and-automation-testing` |
| "regression testing" (in prose) | `regression testing` | `/blog/regression-testing-explained` |
| AI angle / counterpoint | `the scary truth about AI replacing testers` | `/blog/scary-truth-ai-replacing-testers` |

---

### 12. `src/content/blog/how-to-test-feature-when-requirements-are-garbage.mdx`

Post is about handling ambiguity -- exploratory testing and bug reports are core themes.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| "exploratory testing" (core technique) | `exploratory testing` | `/blog/exploratory-testing-for-beginners` |
| Mention of documenting bugs / filing reports | `how to write bug reports when there's no spec` | `/blog/how-to-write-bug-reports-that-dont-suck` |
| Mention of test cases from unclear specs | `how to write test cases` | `/blog/how-to-write-test-cases-that-dont-suck` |
| Pushing back / impossible situation | `how to say no to impossible deadlines` | `/blog/how-to-say-no-to-impossible-deadlines` |

---

### 13. `src/content/blog/the-dark-art-of-testing-legacy-code-nobody-understands.md`

Post about undocumented legacy systems -- black box and characterization testing.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| Black box / exploratory approach to unknown systems | `exploratory testing to map unknown systems` | `/blog/exploratory-testing-for-beginners` |
| Regression / safety net for legacy changes | `regression testing as your safety net` | `/blog/regression-testing-explained` |
| No documentation / unclear requirements parallel | `testing when requirements are garbage` | `/blog/how-to-test-feature-when-requirements-are-garbage` |
| Testing strategy for chaos | `software testing strategies` | `/blog/software-testing-strategies-that-arent-just-write-more-tests` |

---

### 14. `src/content/blog/how-to-say-no-to-impossible-deadlines.md`

Post about risk framing, smoke tests, and professional pushback.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| Mention of prioritizing test coverage | `how to prioritize test cases when time runs out` | `/blog/prioritize-test-cases-limited-time` |
| Mention of severity / impact framing | `bug severity` | `/blog/bug-severity-guide-nobody-tells-you` |
| Testing strategy under constraints | `software testing strategy` | `/blog/software-testing-strategies-that-arent-just-write-more-tests` |
| Senior tester skills / professional credibility | `what senior testers do differently` | `/blog/5-things-senior-testers-do-that-juniors-dont` |

---

### 15. `src/content/blog/five-stages-of-grief-failed-release.mdx`

Humorous post about production failures. References bug tracking, staging, UAT.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| Mention of bugs / bug tracking / lifecycle | `defect life cycle` | `/blog/defect-life-cycle-explained` |
| Mention of regression / what broke | `regression testing` | `/blog/regression-testing-explained` |
| Strategy / preventing this next time | `software testing strategies` | `/blog/software-testing-strategies-that-arent-just-write-more-tests` |
| Impossible timeline that led to the failure | `how to say no to impossible deadlines` | `/blog/how-to-say-no-to-impossible-deadlines` |

---

### 16. `src/content/blog/what-i-learned-10-years-breaking-software.mdx`

Reflective career post. References bug reports, automation, communication.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| Mention of senior skills / growth | `5 things senior testers do differently` | `/blog/5-things-senior-testers-do-that-juniors-dont` |
| Mention of bug reports / documentation | `writing bug reports developers respect` | `/blog/how-to-write-bug-reports-that-dont-suck` |
| Strategy / how you approach testing | `software testing strategies` | `/blog/software-testing-strategies-that-arent-just-write-more-tests` |
| Exploratory mindset | `exploratory testing` | `/blog/exploratory-testing-for-beginners` |
| AI / future of the industry | `what AI actually means for testers` | `/blog/scary-truth-ai-replacing-testers` |

---

### 17. `src/content/blog/new-year-new-bugs-qa-focus-2026.mdx`

Forward-looking post. Covers AI, communication, exploratory testing, automation choices.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| AI in QA discussion | `the scary truth about AI replacing testers` | `/blog/scary-truth-ai-replacing-testers` |
| "exploratory testing" (likely in prose) | `exploratory testing` | `/blog/exploratory-testing-for-beginners` |
| Strategy / selective automation | `software testing strategies` | `/blog/software-testing-strategies-that-arent-just-write-more-tests` |
| Senior skills / what matters | `what senior testers do differently` | `/blog/5-things-senior-testers-do-that-juniors-dont` |
| Regression / automation choices | `regression testing` | `/blog/regression-testing-explained` |

---

### 18. `src/content/blog/why-smart-testers-fail-qa-interviews.mdx`

Post about interview failure patterns. References test cases, bug reports, technical skills.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| Mention of test design / test cases | `how to write test cases` | `/blog/how-to-write-test-cases-that-dont-suck` |
| Mention of bug reports / documentation skills | `writing bug reports developers respect` | `/blog/how-to-write-bug-reports-that-dont-suck` |
| Senior skills / what interviewers want | `5 things senior testers do differently` | `/blog/5-things-senior-testers-do-that-juniors-dont` |
| Career lessons / experience | `10 years of lessons in software testing` | `/blog/what-i-learned-10-years-breaking-software` |
| Foundational knowledge for beginners | `software testing basics` | `/blog/what-is-software-testing-beginner-guide` |

---

### 19. `src/content/blog/first-30-days-qa-engineer-checklist.md`

Onboarding post with a lead magnet. Should funnel new testers into core content.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| Near intro / context setting | `what software testing actually is` | `/blog/what-is-software-testing-beginner-guide` |
| Exploratory product discovery | `exploratory testing on an unfamiliar product` | `/blog/exploratory-testing-for-beginners` |
| Filing bugs / severity triage | `how to write bug reports` | `/blog/how-to-write-bug-reports-that-dont-suck` |
| Bug severity / triage | `bug severity` | `/blog/bug-severity-guide-nobody-tells-you` |
| What good testers do | `what senior testers do in their first 90 days` | `/blog/5-things-senior-testers-do-that-juniors-dont` |
| The email course as next step | `free 21-day email course for testers` | `/blog/free-21-day-email-course-for-testers` |

---

### 20. `src/content/blog/what-actually-makes-you-better-at-testing.md`

Post about improvement and deliberate practice. Closely related to the email course.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| Near CTA / next step | `free 21-day email course` | `/blog/free-21-day-email-course-for-testers` |
| Strategy / approach to testing | `software testing strategies` | `/blog/software-testing-strategies-that-arent-just-write-more-tests` |
| Bug reports as a skill | `how to write bug reports` | `/blog/how-to-write-bug-reports-that-dont-suck` |
| Senior skills / what improvement looks like | `what senior testers do differently` | `/blog/5-things-senior-testers-do-that-juniors-dont` |
| Exploratory testing as a skill to develop | `exploratory testing` | `/blog/exploratory-testing-for-beginners` |

---

### 21. `src/content/blog/free-21-day-email-course-for-testers.md`

Lead gen post pitching the email course. Should link to posts that preview course content.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| Week 1 / test strategy | `how to build a test strategy` | `/blog/software-testing-strategies-that-arent-just-write-more-tests` |
| Week 2 / bug reporting | `writing bug reports` | `/blog/how-to-write-bug-reports-that-dont-suck` |
| Week 2 / no documentation | `testing without requirements` | `/blog/how-to-test-feature-when-requirements-are-garbage` |
| Week 3 / handling pressure | `how to say no to impossible deadlines` | `/blog/how-to-say-no-to-impossible-deadlines` |
| Related improvement content | `how to become a better tester in 21 days` | `/blog/what-actually-makes-you-better-at-testing` |

---

### 22. `src/content/blog/qa-engineers-humanitys-last-hope-against-robot-uprising.mdx`

Humor / AI post. Light tone -- link naturally, don't force it.

**Links to add:**

| Concept in post | Anchor text | Target URL |
|---|---|---|
| AI / automation taking over discussion | `the actual truth about AI replacing testers` | `/blog/scary-truth-ai-replacing-testers` |
| Manual testing / human judgment angle | `why manual testing will never die` | `/blog/why-manual-testing-will-never-die` |
| What QAs actually do well | `what senior testers actually do` | `/blog/5-things-senior-testers-do-that-juniors-dont` |

---

## Posts That Already Have Links (verify they are complete)

These posts already have some internal links. Read them and confirm they have at least
the links listed. Add any that are missing.

### `src/content/blog/stlc-in-software-testing.mdx`
Already has: `what-is-software-testing-beginner-guide`, `defect-life-cycle-explained`,
`exploratory-testing-for-beginners`, `how-to-write-test-cases-that-dont-suck`

Add if missing:
- `manual and automation testing` -> `/blog/manual-and-automation-testing` (near phases that reference both)
- `software testing strategies` -> `/blog/software-testing-strategies-that-arent-just-write-more-tests` (near planning/strategy phase)

### `src/content/blog/defect-life-cycle-explained.mdx`
Already has: `how-to-write-bug-reports-that-dont-suck`, `exploratory-testing-for-beginners`,
`prioritize-test-cases-limited-time`

Add if missing:
- `bug severity` -> `/blog/bug-severity-guide-nobody-tells-you` (near severity/priority states)
- `what software testing is` -> `/blog/what-is-software-testing-beginner-guide` (near intro)

### `src/content/blog/exploratory-testing-for-beginners.mdx`
Already has: `prioritize-test-cases-limited-time`, `defect-life-cycle-explained`

(Already handled in section 8 above -- add the 3 missing links there.)

### `src/content/blog/prioritize-test-cases-limited-time.mdx`
Already has: `how-to-write-test-cases-that-dont-suck`, `defect-life-cycle-explained`,
`exploratory-testing-for-beginners`

Add if missing:
- `regression testing` -> `/blog/regression-testing-explained` (near smoke test / regression mention)
- `software testing strategies` -> `/blog/software-testing-strategies-that-arent-just-write-more-tests`

---

## Sitemap Issue (fix this too)

The sitemap at `https://sbecagol.com/sitemap.xml` returns a 404.
Check `astro.config.mjs` -- Astro has a built-in sitemap integration.

If `@astrojs/sitemap` is not in the integrations array, add it:

```js
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sbecagol.com',
  integrations: [sitemap()],
});
```

Install if needed: `npm install @astrojs/sitemap`

Without a sitemap, Google Search Console cannot be told about new pages efficiently.
Fix this alongside the internal linking work.
