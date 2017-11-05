---
layout: post
title: "Users Controller Refactoring in Expertiza (OSS)"
permalink: user-controller-refactoring-in-expertiza-oss
date: 2015-04-01 12:34:56
comments: true
description: "Users Controller Refactoring in Expertiza (OSS)."
keywords: "Expertiza, users controller"
categories:
- expertiza
- software-development
tags:
- course-project
- team-project
- ruby
- rails
---

## Description

* Find the un-called methods if any and delete them.
* Change the Rails 2 syntax to `Rails 4` style.
* Refactor `users_controller.rb`
 * Change the white space for the second half of this file, starts at “def edit”.
 * Separate the `paginate_list` method into two methods. The search method should be in model and the paginating method should be in the controller. 
* `New feature`: delete users
  * A user can be deleted if (s)he has not participated in an assignment.
  * If the user is participating in an assignment, the system will ask, “User is participating in k assignments. Delete as a participant in these assignment(s)?” 
  * If the user has submitted or reviewed in any of these assignments, the system will say the user cannot be deleted, but offer to rename the user account to <current_account_name>_hidden.
    * rename (javascript calling update method in users_controller.rb)
    * different users have different delete methods. 
  * If the person trying to delete does not want to rename the account, the system will just say that the user can’t be deleted.
 * Write `Rspec` unit test and increase the test coverage to `28`%.

## Related Material

* <u><a href="https://github.com/expertiza/expertiza/pull/505" target="_blank">Source code</a></u>
* <u><a href="http://wiki.expertiza.ncsu.edu/index.php/CSC/ECE_517_Spring_2015/oss_E1506_SYZ" target="_blank">Wiki page</a></u>
* Demo video  
{% youtube uY6OriHdxRA 850 460 %}

/end
