---
layout: post
title: "SIGCSE 2019 Poster: Using Bots to Improve GitHub Pull-Request Feedback"
permalink: /blog/sigcse-2019-poster-using-bots-to-improve-github-pull-request-feedback
date: 2019-03-10 11:11:11
comments: true
description: "SIGCSE 2019 poster"
keywords: "SIGCSE, poster, Internet Bots, GitHub, Pull request, Feedback"
categories:
- expertiza
- research
tags:
- sigcse
- poster
- bot
- github
- pull-request
---

> Rising enrollments make it difficult for instructors and teaching assistants to give adequate feedback on each student's work. Our course projects require students to submit GitHub pull requests as deliverables for their open-source software (OSS) projects. We have set up a static code analyzer and a continuous integration service on GitHub to help students check different aspects of the code. However, these tools have some limitations.

## Description
In this poster, I discuss how we bypass the limitations of existing tools by implementing three Internet bots. These bots are either open source or free for OSS projects and can be easily integrated with any GitHub repositories. One-hundred one Computer Science and Computer Engineering masters students participated in our study. The survey results showed that more than 84% of students thought bots can help them to contribute code with better quality. We analyzed 391 pull requests. Results revealed that bots can provide more timely feedback than teaching staff. The Danger Bot can significantly reduce system-specific guideline violations (by 42%), and the Code Climate Bot can significantly decrease code smells in student contributions (by 60%). However, we found that the Travis CI Bot did not help student contributions pass automated tests.

## Poster

<a href="https://raw.githubusercontent.com/Winbobob/Improving-Feedback-on-GitHub-Pull-Requests-A-Bots-Approach/master/SIGCSE'19%20poster%20-%20new.png" class="swipebox" rel="gallery" title="netflix-project-poster" target="_blank">
![sigcse-poster](https://raw.githubusercontent.com/Winbobob/Improving-Feedback-on-GitHub-Pull-Requests-A-Bots-Approach/master/SIGCSE'19%20poster%20-%20new.png)
</a>

## Steps to set up bots on your repoistory
 * <a href="https://github.com/Winbobob/Improving-Feedback-on-GitHub-Pull-Requests-A-Bots-Approach/blob/master/README.md" target="_blank">Link</a>

/end
