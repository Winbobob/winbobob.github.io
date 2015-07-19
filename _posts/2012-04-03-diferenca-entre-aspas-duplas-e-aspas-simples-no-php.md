---
layout: post
title: Diferença entre aspas duplas e aspas simples no PHP
date: 2012-04-03 11:03
description: "Diferença entre aspas duplas e aspas simples no PHP"
keywords: "dicas, php, programação, aspas, curiosidades"
comments: true
categories:
- Dicas
- PHP
- Programação
tags:
- dicas
- php
- programação
---

**Aspas duplas**: fazem pre-processamento das váriaveis.

Ex:

{% highlight php %}
<?php
  $var = "olá mundo";
  echo "Resposta: $var";
?>
{% endhighlight %}

Resultado:

{% highlight text %}Resposta: olá mundo{% endhighlight %}

**Aspas simples:** não fazem pre-processamento das váriaveis. Entende tudo como uma String completa.

Ex:

{% highlight php %}
<?php
  $var = "olá mundo";
  echo "Resposta: $var";
?>
{% endhighlight %}

Resultado:

{% highlight text %}Resposta: $var{% endhighlight %}

Então? **Otimize seu código**, quando você estiver certo de que não ira ter váriaveis dentro das aspas use aspas simples, assim o [PHP](http://www.php.net/) não irá ficar procurando váriaveis para pre-processar.

<small>FONTE: [http://webpub.wordpress.com/](http://webpub.wordpress.com/)</small>
