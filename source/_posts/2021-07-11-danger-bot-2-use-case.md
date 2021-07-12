---
layout: post
title: "Danger Bot 2.0 Use Case"
permalink: /blog/danger-bot-2-use-case
date: 2021-07-11 00:00:01
comments: true
description: "Danger Bot 2.0 Use Case"
keywords: "Internet bot, open-source software, software engineering, open-source curriculum, automated feedback, Expertiza"
categories:
- research
tags:
- internet-bot
---

> The below table demonstrates an elaborated use case of the Danger Bot 2.0.

<table style="width:100%">
  <style>
  th, td {
    padding: 10px;
  }
</style>
  <tr>
    <th style="width:8%">Steps</th>
    <th style="width:60%">Comments</th>
    <th style="width:32%">Explanation</th>
  </tr>
  <tr>
    <td>1</td>
    <td><img src="/assets/images/danger_bot_use_case_screenshot_1.png"/></td>
    <td>An initial pull-request comment created by the Danger Bot 2.0.</td>
  </tr>
  <tr>
    <td>2</td>
    <td><img src="/assets/images/danger_bot_use_case_screenshot_2.png"/></td>
    <td>When students add a new comment <b>/dispute 846d e29c 4805</b>, the bot will immediately reply to students and notify the teaching staff to review student code and especially check for guideline violations associated with those UUIDs.</td>
  </tr>
  <tr>
    <td>3</td>
    <td><img src="/assets/images/danger_bot_use_case_screenshot_3.png"/></td>
    <td>After inspecting student-submitted code, the teaching staff cancel one or more unresolved violations by inserting a new comment on the pull-request page <b>/cancel 61df 846d 4f9c 9e09</b>. The new comment will eventually trigger the bot to adjust its feedback.</td>
  </tr>
  <tr>
    <td>4</td>
    <td><img src="/assets/images/danger_bot_use_case_screenshot_4.png"/></td>
    <td>The canceled violations are moved to the bottom of the table, with strikethrough messages and green check icons in front of the message. Note that teaching staff can cancel zero or more guideline violations disputed by students, along with other unresolved violations that they think can be bypassed.</td>
  </tr>
  <tr>
    <td>5</td>
    <td><img src="/assets/images/danger_bot_use_case_screenshot_5.png"/></td>
    <td>After students submit new code changes, the bot check the code again and mark some guideline violations (<b>7d1a</b> and <b>e29c</b>) as resolved.</td>
  </tr>
  <tr>
    <td>6</td>
    <td><img src="/assets/images/danger_bot_use_case_screenshot_6.png"/></td>
    <td>The teaching staff always have the right to bypass the decision of the bot by adding a new comment with message <b>/confirm e29c</b>.</td>
  </tr>
  <tr>
    <td>7</td>
    <td><img src="/assets/images/danger_bot_use_case_screenshot_7.png"/></td>
    <td>The violation <b>e29c</b> that cancelled by the bot becomes unresolved again.</td>
  </tr>
</table>


## References
 - <a href="https://github.com/Winbobob/Improving-Feedback-on-GitHub-Pull-Requests-A-Bots-Approach">https://github.com/Winbobob/Improving-Feedback-on-GitHub-Pull-Requests-A-Bots-Approach</a>

/end
