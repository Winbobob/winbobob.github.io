---
layout: post
title: "Instalando NodeJS 0.12 no Ubuntu via apt-get"
permalink: instalando-nodejs-012-no-ubuntu-via-apt-get
date: 2015-08-10 00:10:30
comments: true
description: "Salve galera! Hoje vou explicar como instalar o NodeJS no Ubuntu via apt-get"
cover: /assets/images/posts/2015/08/instalando-nodejs-no-ubuntu.jpg
keywords: "nodejs, ubuntu, node"
categories:
- ubuntu
tags:
- nodejs
- node
- ubuntu
- linux
---

Salve galera! Hoje vou explicar como instalar o **[NodeJS](https://nodejs.org/)** no **Ubuntu** via **apt-get**..

É bem simples, precisamos apenas desse um link `(https://deb.nodesource.com/setup_0.12)` para o pacote do **NodeJS**.

Antes de tudo instale o `curl` no seu Ubuntu:

{% highlight bash %}
sudo apt-get install curl -y
{% endhighlight %}

Pronto, agora vamos instalar o **NodeJS**.

{% highlight bash %}
cd
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
sudo apt-get install nodejs -y
{% endhighlight %}

Prontinho, agora você tem o **NodeJS** e o **NPM** instalados e funcionandos..

Para verificar se tudo ocorreu bem, basta executar os comandos abaixo:

{% highlight bash %}
node -v
# v0.12.7
npm -v
# 2.11.3
{% endhighlight %}

Bom, é isso.. Bem simples e fácil de instalar.

Agora só instalar seus pacotes favoritos de **NodeJS** e correr pro abraço!


{% highlight bash %}
sudo npm install -g gulp bower yo generator-wordpress browser-sync
{% endhighlight %}

Abraço!
