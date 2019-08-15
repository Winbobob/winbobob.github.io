---
layout: post
title: "Software Development Process Bad Smell Detection"
permalink: /blog/software-development-process-bad-smell-detection
date: 2015-04-25 12:34:56
comments: true
description: "Software Development Process Bad Smell Detection"
keywords: "Bad smell, GitHub, commit, issue, pull request, label, milestone"
categories:
- software-development
tags:
- course-project
- team-project
---

> The goal of this project is to detect bad smells in the software development process by looking at the commits, issues, pull requests, labels and milestones in GitHub repositories. I worked with my classmates to analyze three projects and extracted 14 features to describe the software development process. We built six bad smell detectors to automatically analyze GitHub repositories. We also designed two metrics to provide warnings to teams in the early stage of the software development process.

## Description

1. Used `gitable.py` to collect information from a specific Github Repo and store in the format of JSON.
2. Wrote 14 `feature extractors` to further process the raw JSON data.
3. Implemented six `bad smell detectors` to detect whether this repo exists some bad smells during development process, such as "Issue Time Duration Detector".
4. Implemented two `early warning detectors` ("Issue Duration Early Warning" and "Issue Interval Early Warning") to give early warnings of bad smell patterns.

## Related Material

* <u><a href="https://github.com/SuperCh-SE-NCSU/Project2_badsmell/blob/master/README.md" target="_blank">Project README</a></u>

/end
