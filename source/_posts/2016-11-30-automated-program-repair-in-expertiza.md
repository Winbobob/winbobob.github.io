---
layout: post
title: "Automated Program Repair in Expertiza"
permalink: automated-program-repair-in-expertiza
date: 2016-11-30 11:59:59
comments: true
description: "I created an automated program repair tool named Mutator. It can fix Ruby on Rails runtime exception errors successfully. Mutator uses fix patterns offered by Mutant ruby gem to exhaustively produce patch candidates. For the experiment, I selected 17 real runtime exception errors and manually created developer patches and corresponding test cases. Mutator successfully fixed one runtime exception errors for 24 minutes each."
keywords: "Automated Program Repair, Expertiza, runtime exception error, Mutator, Mutant, benchmark"
categories:
- automated-program-repair
- expertiza
tags:
- ruby
- rails
- course-project
---

> Bug fixing is a time-consuming work. Recently, automated program repair receives more and more attentions. There are many existing tools which can fix Java, C and Python programs. To the best of my knowledge, no tool repairs on Ruby language, especially Ruby on Rails web application program.

## Description

I created an automated program repair tool named **Mutator**. It can fix Ruby on Rails runtime exception errors successfully. Mutator uses fix patterns offered by Mutant ruby gem to exhaustively produce patch candidates. For the experiment, I selected **17 real runtime exception errors** and manually created developer patches and corresponding test cases. Mutator successfully fixed one runtime exception error with **20 solutions for 24 minutes each**.

Overall, I made following contributions:<br/>
**1. Benchmark:** Manually created developer patches and corresponding test cases of selected Expertiza runtime exception errors.<br/>
**2. Mutator:** An automated program repair tool leveraging fix patterns. Mutator repairs on Ruby on Rails program. And it exhaustively generates patch candidates based on fix patterns.<br/>
**3. Empirical evaluation:** Presented the empirical evaluation results by applying Mutator to 17 Expertiza runtime exception errors and analyzed the results for future research of automated program repair.<br/>

## Related Material

* <u><a href="https://github.com/Automated-Program-Repair-in-Expertiza" target="_blank">Source code</a></u>
* <u><a href="https://goo.gl/5Tcgbt" target="_blank">Slides</a></u>

/end