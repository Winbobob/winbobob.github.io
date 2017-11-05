---
layout: post
title: "Software Development Process Badsmells Detection"
permalink: software-development-process-badsmells-detection
date: 2015-04-25 12:34:56
comments: true
description: "The goal of this project is to detect Bad Smells in the software development process by looking at the commits, issues, pull requests, labels and milestones in Github Repository."
keywords: "Bad smell, GitHub, commit, issue, pull request, label, milestone"
categories:
- software-development
tags:
- course-project
- team-project
---

## Description

1. Used `gitable.py` to collect information from a specific Github Repo and store in the format of JSON.
2. Wrote 14 `feature extractors` to further process the raw JSON data.
3. Implemented 6 `bad smell detectors` to detect whether this repo exists some bad smells during development process, such as Issue Time Duration Detector, etc.
4. Implemented 2 `early warning detectors` (Issue Duration Early Warning and Issue Interval Early Warning) to give early warnings of bad smell patterns.

## Related Material

* <u><a href="https://github.com/SuperCh-SE-NCSU/Project2_badsmell/blob/master/README.md" target="_blank">Project README</a></u>

/end
