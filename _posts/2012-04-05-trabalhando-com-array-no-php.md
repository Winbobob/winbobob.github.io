---
layout: post
title: "Trabalhando com Array no PHP"
date: 2012-04-05 10:19
description: "Um array é uma forma de armazenamento de variáveis que podem ser acessadas por índices, sejam eles numéricos ou não"
keywords: "Dicas, PHP, programação, tutorial, Array"
comments: true
categories:
- PHP
tags:
- dicas
- php
- programacao
- tutorial
cover: '/assets/uploads/php-default.jpg'
---

Um array é uma forma de armazenamento de variáveis que podem ser acessadas por índices, sejam eles numéricos ou não.

No php é muito simples trabalhar com arrays, nesse artigo vamos ver como declarar arrays e como acessar seus valores.

Você pode declarar um array sem dimensionar ele ou ainda dimensionando ele, veja:

#### Criando um array (Sem dimensionar)

{% highlight php %}
<?php
  $array_var =  array();
?>
{% endhighlight %}

No exemplo acima as dimensões do array não foram definidas, esse recurso é muito útil pq muitas vezes você não sabe qual a dimensão que um array vai precisar durante a execução do script.

#### Dimensionando um array

{% highlight php %}
<?php
  $array_1 = array(10);
?>
{% endhighlight %}


Nesse exemplo estamos dimensionando o array em 10 itens com índices de 0 a 9.

Também é possível setar os valores do array. Veja o exemplo abaixo:

{% highlight php %}
<?php
  $nomes = array(
      "Antonio",
      "Maria", 
      "João", 
      "José", 
      "Lucas"
  );
?>
{% endhighlight %}

<strong>ou</strong>

{% highlight php %}
<?php
  $author = array(
     "Nome"=>"Fernando",
     "Sobrenome"=>"Moreira",
     "Idade"=>"23",
     "Postagens"=>"29"
  );
?>
{% endhighlight %}


#### Imprimindo um array:

Existem 2 formas mais utilizadas por programadores para imprimir e verificar um array. E mais um monte para obter resultados mais complexos.

{% highlight php %}
<?php
  print_r($author);
?>
{% endhighlight %}

e

{% highlight php %}
<?php
  var_dump($author);
?>
{% endhighlight %}


#### print_r() resultado:

{% highlight text %}
Array
(
    [Nome] => Fernando
    [Sobrenome] => Moreira
    [Idade] => 23
    [Postagens] => 29
)
{% endhighlight %}

#### var_dump() resultado:

{% highlight text %}
array(4) {
  ["Nome"]=>
  string(8) "Fernando"
  ["Sobrenome"]=>
  string(7) "Moreira"
  ["Idade"]=>
  string(2) "23"
  ["Postagens"]=>
  string(2) "29"
}
{% endhighlight %}

Vou descrever uma das formas mais complexas de se detalhar um array.

Através de um loop, ou laço de repetição. Nesse caso eu utilizarei o <code>foreach ();</code>


#### Fica assim:

{% highlight php %}
<?php
foreach ($author as $chave => $valor) {
    echo $chave.': '.$valor;
}
?>
{% endhighlight %}

#### Resultado:

{% highlight text %}
Nome: Fernando
Sobrenome: Moreira
Idade: 23
Postagens: 29
{% endhighlight %}

Você pode utilizar outros laços de repetição como <code>for();</code> <code>while();</code> ou <code>do while();</code> todos funcionam perfeitamente com arrays.

Espero ter ajudado.

Um forte abraço e até a próxima!
