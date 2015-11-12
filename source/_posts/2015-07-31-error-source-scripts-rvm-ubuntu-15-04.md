---
layout: post
title: "Reinstalando rvm no Ubuntu 15.04"
permalink: error-source-scripts-rvm-ubuntu-15-04
date: 2015-07-31 01:56:12
comments: true
description: "Recentemente atualizei meu Ubuntu 14.04 para 15.04 e atualizei também o Gnome para 13.16.6 e do nada a Gems que estavam instaladas pararam de funcionar"
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

{% highlight bash %}
/usr/lib/ruby/2.1.0/rubygems/dependency.rb:298:in `to_specs': Could not find 'bundler' (>= 0) among 25 total gem(s) (Gem::LoadError)
  from /usr/lib/ruby/2.1.0/rubygems/dependency.rb:309:in `to_spec'
  from /usr/lib/ruby/2.1.0/rubygems/core_ext/kernel_gem.rb:53:in `gem'
  from /usr/local/bin/bundle:22:in `<main>'
{% endhighlight %}

Tentei atualizar as gems, tentei remover e instalar cada Gem novamente mas nada revolvia meu problema, e o erro acima continuava a ocorrer.

Então a única solução seria remover o Ruby e o RVM da minha máquina e instalar de novo.

Primeiro eu tentei remover o RVM, e funcionou, vou explicar como, vem comigo.

Primeiro eu removi o diretório `.rvm` do meu usuário:

{% highlight bash %}
rm -rf ~/.rvm
{% endhighlight %}

Depois fiz a instalação do RVM novamente:

{% highlight bash %}
curl -L https://get.rvm.io | bash -s stable
cd ~/.rvm/archives/
tar xvzf rvm-1.26.11.tgz
cd rvm-1.26.11/
./install
{% endhighlight %}

O código acima irá instalar o RVM na versão 1.26.11, agora iremos instalar o Ruby 2.2.2:

{% highlight bash %}
rvm install 2.2.2
{% endhighlight %}

Pronto, agora basta instalar suas gems e tudo funcionará bem.

{% highlight bash %}
gem install bundle sass compass jekyll rails
{% endhighlight %}

Se obteve sucesso ou algum erro, comenta ai, vamos tentar resolver isso juntos.

Abraço!
