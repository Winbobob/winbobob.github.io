---
layout: post
title: "Refactor staggered-deadline assignments in Expertiza"
permalink: refactor-staggered-deadline-assignments-in-expertiza
date: 2015-05-17 12:34:56
comments: true
description: "Refactor staggered-deadline assignments in Expertiza."
keywords: "Expertiza, staggered-deadline"
categories:
- expertiza
- software-development
tags:
- course-project
- team-project
- ruby
- rails
---

## What is staggered-dealine assignment?

> Consider `Wiki 1a` and `Wiki 1b` assignment in `NCSU CSC517` class.  They were structured as separate assignments, with separate signup sheets, teams, and reviews. But actually, since only one of the two was done by any student, it would’ve been better to have a single assignment. Still, some topics could be done soon after the course started, whereas others were better done after we had studied related topics in class.

> This raises the idea of a `staggered-deadlne assignment`, where different topics have different submission and review deadlines, rather than all topics having the same deadline. 
  > <small>Read more at: _[About staggered-dealine assignment (E1524)](https://goo.gl/g9eyjc)_</small>

## Description

1. Refactor `signup_sheet_controller.rb` to implement staggered-deadline addignment and dependency graphs between topics.
2. Test the `varying rubric by rounds` feature to make sure it works OK.
3. Write `Rspec` unit test and increase the test coverage by `1.01%`.

## Related Material

* <u><a href="https://github.com/expertiza/expertiza/pull/541" target="_blank">Source code</a></u>
* <u><a href="http://wiki.expertiza.ncsu.edu/index.php/CSC/ECE_517_Spring_2015_S1524_FSZZ" target="_blank">Wiki page</a></u>
* Demo video  
{% youtube 1LBPbCMSk8w 850 460 %}

/end
