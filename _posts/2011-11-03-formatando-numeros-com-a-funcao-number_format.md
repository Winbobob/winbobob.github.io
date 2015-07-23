---
layout: post
title: "Formatando números com a função number_format()"
date: 2011-11-03 11:11
description: "A função number_format() do PHP, além de trocar ponto (.) por vírgula (,), também serve para definir quantas casas decimais teremos no valor"
keywords: "dicas, php, programação, number_format"
comments: true
categories:
- php
tags:
- dicas
- php
- programacao
cover: '/assets/uploads/php-default.jpg'
---

A função `number_format()` do PHP, além de trocar ponto (.) por vírgula (,), também serve para definir quantas casas decimais teremos no valor.

O número que é em Inglês `999.9` fica `999,90` no formato moeda brasileiro. Além disso, podemos definir se irá exibir algum caracter a cada grupo de milhar (de mil em mil)

`string number_format(float $number, int $decimals, string $dec_point, string $thousands_sep)`

podemos definir por:
`valor texto number_format($valor_decimal, $casas_decimais,$caracter_definicao_decimal, $caracter_definicao_milhar)`

Por exemplo, se quisermos que o número `1000` fique como `1.000`, utilizamos a função desta maneira:

{% highlight php %}
<?php
$valor = 1000;
echo number_format($valor, 0, ",", ".");
?>
{% endhighlight %}

Agora se quisermos que o valor `1,000.9` (em formato inglês) tenha o formato `1.000,90` (real brasileiro), utilize:

{% highlight php %}
<?php
$valor = 1,000.9;
echo number_format($valor, 2, ",", ".");
?>
{% endhighlight %}

Se não quiser que tenha o ponto(.) entre as casas de milhar, deixe com o última parâmetro vazio:

{% highlight php %}
<?php
$valor = 1000.9;
echo number_format($valor, 2, ",", "");
?>
{% endhighlight %}

Existe uma maneira <del>gambiarra</del> para formatar número que eu não aconselho a utilizar. Seria algo do tipo:

{% highlight php %}
<?php
$valor = 100.9;
echo str_replace(".", ",", $valor);
?>
{% endhighlight %}

<small>Fonte: [leocaseiro.com.br](http://leocaseiro.com.br/)</small>
