---
layout: post
title: "Instalando NojeJS 0.12 no Ubuntu via apt-get"
permalink: zetsu-tema-jekyll
date: 2015-08-10 00:10:30
comments: true
description: "Instalando NojeJS 0.12 no Ubuntu via apt-get"
keywords: "nodejs, ubuntu, node"
categories:
- ubuntu
tags:
- nodejs
- ubuntu
- node
---

Salve galera! Hoje vou explicar como instalar o NodeJS no Ubuntu via apt-get..

É bem simples, precisamos apenas desse um link `(https://deb.nodesource.com/setup_0.12)` para o pacote deb.

Antes de tudo instale o `curl` no seu ubuntu:

{% highlight bash %}
sudo apt-get install curl -y
{% endhighlight %}

Pronto, agora vamos instalar o NodeJS.

{% highlight bash %}
cd
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
sudo apt-get install nodejs -y
{% endhighlight %}

Prontinho, agora você tem o NojdeJS e o NPM instalados e funcionandos.. 

Para verificar se tudo ocorreu bem, basta executar os comandos abaixo:


{% highlight bash %}
node -v
# aqui pra mim a versão do NodeJS apareceu v0.12.7
npm -v
# aqui pra mim a versão do NPM apareceu 2.11.3
{% endhighlight %}

Bom, é isso.. Bem simples e fácil de instalar.

Abraço!
