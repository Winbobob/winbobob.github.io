---
layout: post
title: "DevOps Continuous Integration (CI) and Continuous Deployment (CD) Pipeline"
permalink: /blog/devops-continuous-intergration-and-continuous-deployment-pipeline
date: 2016-12-01 23:33:33
comments: true
description: "The pipeline contains 4 milestones, which are a build component, a testing and analysis component, a deployment component, and an incremental testing toolkit."
keywords: "DevOps, Continuous Integration, Continuous Deployment, Incremental Testing Toolkit, Node.js, AWS EC2, Jenkins, Ansible, mocha, ESlint, Redis, Monitoring, Auto-scaling, Load Balancing, Canary Release, Feature Flag"
categories:
- devops
tags:
- course-project
- team-project
- nodejs
- continuous-integration
- continuous-deployment
- jenkins
- ansible
---

> The pipeline contains 4 milestones, which are a [build component](https://github.com/DevOps-CSC519-591-791/DevOps-M1), a [testing and analysis component](https://github.com/DevOps-CSC519-591-791/DevOps-M2), a [deployment component](https://github.com/DevOps-CSC519-591-791/DevOps-M3), and an [incremental testing toolkit](https://github.com/DevOps-CSC519-591-791/DevOps-M4).

## Description

1. Created an Incremental Testing Toolkit to achieve test prioritization and shorten test time by 67%.
2. Ran Behavior Driven Test and Static Analysis Tool on Git hook to accept or reject a commit.
3. Set up Jenkins build server on AWS EC2 to run continuous testing on each Git commit.
4. Deployed code to Canary and Production Server continuously using Ansible.
5. Accomplished load balancing, auto-scaling, monitoring, and feature flag using Node.js.

## Workflow

<a href="https://raw.githubusercontent.com/DevOps-CSC519-591-791/DevOps-M4/master/images/M1-4%20workflow.png" class="swipebox" rel="gallery" title="milestone-1-4-workflow">
![milestone-1-4-workflow](https://raw.githubusercontent.com/DevOps-CSC519-591-791/DevOps-M4/master/images/M1-4%20workflow.png)
</a>

## Related Material

* <u><a href="https://github.com/DevOps-CSC519-591-791" target="_blank">Source code</a></u>
* Demo video
{% youtube GsuOUdD1swY 850 460 %}


/end
