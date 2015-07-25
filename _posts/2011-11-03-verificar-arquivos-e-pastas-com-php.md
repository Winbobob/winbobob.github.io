---
layout: post
title: Verificar arquivos e pastas com PHP
date: 2011-11-03 05:55
description: "Hoje irei falar sobre algo simples mas de grande importância para programadores PHP. Antes de excluirmos quaquer diretório ou arquivo devemos verificar se realmente existem."
keywords: "dicas, PHP, Programação"
comments: true
categories:
- php
tags:
- dicas
- php
- programacao
cover: '/assets/images/posts/php-default.jpg'
---

Hoje irei falar sobre algo simples mas de grande importância para programadores PHP.

Antes de excluirmos quaquer diretório ou arquivo devemos verificar se realmente existem.

Para fazer essa verificação basta usar as funções existente do PHP a **`file_exists()`** e **`is_dir()`**.

> "Tá! E como eu faço?"

É simples, vem comigo!

Utilizamos a condição `if()` e dentro dela colocamos a função `file_exists()`.

Fica assim:

{% highlight php %}
<?php
if(file_exists("diretorio/arquivo.pdf")) {
  echo 'Arquivo encontrado!';
}
else {
  echo 'Arquivo inexistente!';
}
?>
{% endhighlight %}

Para verificar diretórios utilizamos o mesmo método mas com a função **`is_dir()`**.

Veja:

{% highlight php %}
<?php
if(is_dir("diretorio/")) {
  echo 'Diretório encontrado!';
}
else {
  echo 'Diretório inexistente!';
}
?>
{% endhighlight %}

Pronto! Agora é só alegria!

Divirta-se e até a próxima!