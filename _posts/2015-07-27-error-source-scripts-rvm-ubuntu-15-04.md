---
layout: post
title: "Error encountered while sourcing file ~/.rvm/scripts/rvm no Ubuntu 15.04"
permalink: error-source-scripts-rvm-ubuntu-15-04
date: 2015-07-31 01:56:12
comments: true
description: "Error encountered while sourcing file ~/.rvm/scripts/rvm no Ubuntu 15.04"
keywords: "ruby, rvm, gem, linux, ubuntu"
categories:
- ruby
- ubuntu
tags:
- ruby
- rvm
- gem
- linux
- ubuntu
---

Recentemente atualizei meu Ubuntu `14.04` para `15.04` e atualizei também o Gnome para `13.16.6` e do nada a Gems que estavam instaladas pararam de funcionar.

Tentei rodar `jekyll server` e o seguinte erro apareceu no terminal:

{% highlight shell %}
/usr/lib/ruby/2.1.0/rubygems/dependency.rb:298:in `to_specs': Could not find 'bundler' (>= 0) among 25 total gem(s) (Gem::LoadError)
  from /usr/lib/ruby/2.1.0/rubygems/dependency.rb:309:in `to_spec'
  from /usr/lib/ruby/2.1.0/rubygems/core_ext/kernel_gem.rb:53:in `gem'
  from /usr/local/bin/bundle:22:in `<main>'
{% endhighlight %}

Tentei atualizar as gems, remover e instalar de novo e nada.

Uma solução foi remover o `rvm` e instalar novamente, vou explicar como.

