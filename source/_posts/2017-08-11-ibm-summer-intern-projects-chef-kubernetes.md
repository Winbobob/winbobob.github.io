---
layout: post
title: "IBM Summer Intern Chef and Kubernetes Projects"
permalink: /blog/ibm-summer-intern-projects-chef-kubernetes
date: 2017-08-11 11:11:11
comments: true
description: "Two summer intern projects: 1) Chef; 2) Kubernetes."
keywords: "DevOps, Continuous Integration, Continuous Deployment, Docker, Vagrant, Chef, Inspec, Test Kitchen, Kubernetes, Minikube, Ingress, Nginx, etcd, CNI, Calico, SaaS"
categories:
- intern
- devops
tags:
- continuous-integration
- continuous-deployment
- chef
- inspec
- test-kitchen
- k8s
- cni
- container-orchestration
---

> The first project is related to a configuration management tool named [Chef](https://www.chef.io/chef/). The second project is related to container orchestration tool named [Kubernetes](https://kubernetes.io).

## Description

1. Created infrastructure test suites written by InSpec testing framework to verify configuration results converged by Test Kitchen or
configured by Chef.
2. Set up Cron jobs to monitor infrastructure settings in real-time and send notification emails via SendGrid if exceptions occur.
3. Ported a big data sharing platform to Kubernetes cluster with etcd as distributed key-value store and Calico as CNI network plugin.
4. Replaced Nginx service with Nginx Ingress Controller that manages Ingress rules enabling inbound traffic to applications.


/end
