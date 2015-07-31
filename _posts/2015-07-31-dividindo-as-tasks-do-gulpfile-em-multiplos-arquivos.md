---
layout: post
title: "Dividindo as tasks do Gulpfile em multiplos arquivos"
permalink: dividindo-as-tasks-do-gulpfile-em-multiplos-arquivos
date: 2015-07-31 16:02:20
comments: true
description: "Dividindo as tasks do Gulpfile em multiplos arquivos"
keywords: "gulp, tasks, Gulpfile"
categories:
- gulp
tags:
- gulp
- tasks
---

Se o seu arquivo `gulpfile.js` estiver começando a ficar muito grande, você pode dividir as tasks em arquivos menores.

É bem fácil, vem comigo..

Pra começar nós vamos usar o módulo **[requireDir](https://github.com/aseemk/requireDir)**.

O que o requireDir faz é simplesmente incluir qualquer arquivo (.js, .json, .txt, .coffee) que esteja dentro de um diretório específico.

Primeiro instale o módulo:

{% highlight bash %}
npm install --save-dev require-dir
{% endhighlight %}

Após a instalação crie um diretório para colocar seus arquivos, aqui eu criei o diretório `tasks`.

Abra o seu arquivo `gulpfile.js` e adicione o seguinte código:

{% highlight javascript %}
var requireDir = require('require-dir');
requireDir('./tasks', { recurse: true });
{% endhighlight %}

Feito isso, crie suas tarefas dentro do retório `tasks` que todas serão inclusas pelo módulo **requireDir**.

Aqui eu criei e ficou mais ou menos [assim]():

<a href="/assets/images/posts/tasks-do-gulpfile-em-multiplos-arquivos.png" class="swipebox" rel="gallery" title="{{ page.title }}">
  <img src="/assets/images/posts/tasks-do-gulpfile-em-multiplos-arquivos.png" alt="{{ page.title }}">
</a>

o meu arquivo `gulpfile.js` ficou assim:

{% highlight javascript %}
/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  gulp/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/
'use strict';

// Require all tasks in gulp/tasks, including subfolders
//

var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });
{% endhighlight %}

Coloquei os exemploes nesse [repositório](https://github.com/nandomoreirame/exemplos/tree/master/dividindo-tasks-do-gulpfile), fique à vontade para baixar e compartilhar.

Espero ter ajudado, forte abraço.
