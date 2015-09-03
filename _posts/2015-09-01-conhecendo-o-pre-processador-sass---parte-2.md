---
layout: post
title: "Conhecendo o pré-processador SASS - Variáveis"
permalink: sass-variaveis-parte-2
date: 2015-09-01 17:57:12
comments: true
description: "Conhecendo o pré-processador SASS - Variáveis"
cover: /assets/images/posts/conhecendo-o-pre-processador-sass.jpg
keywords: "sass, css, scss, pre-processador, pre-processadores, variáveis"
categories:
 - sass
 - css
tags:
 - sass
 - css
 - pre-processador
---

Vamos continuar nossa série de **SASS**, mas agora falando de **Variáveis**.

#### Mas afinal, o que são Variáveis?

Se você está começando agora no mundo do desenvolvimento você precisa ter uma base de como funciona variáveis.

O conceito de variáveis no SASS é bem parecido com na programação em geral.

De acordo com o Google:

> Variável é a característica de interesse que é medida em cada elemento da amostra ou população. Como o nome diz, seus valores variam de elemento para elemento. As variáveis podem ter valores numéricos ou não numéricos.
  > <small>Google.com (<a href="https://goo.gl/dlslou">https://goo.gl/dlslou</a>)</small>

Basicamente você cria um espaço na memória, da um nome pra ele e armazena um valor para ser usado em algum lugar ou ser manipulado de alguma forma.. é isso.

***

Vamos testar o seguinte código:

{% highlight sass %}
$cor: #f00;

body {
  bakground-color: $cor;
}
{% endhighlight %}

Se você rodar `sass --watch style.scss:style.css` e visualizar seu HTML no navegador, você verá o fundo vermelho.

Isso aconteceu porque o a cor que estáva armazenada na *variável* `$cor` passou a ser o fundo da nossa tag `<body>`

Fácil não?!

***

#### Tipos de variáveis no SASS

Pra quem "manja dos parauês" de programação sabe que existem tipos de variáveis.

Se levarmos em consideração que **SASS** também "pode" ser considerada uma linguagem de programação ela teria a [Tipagem fraca](https://pt.wikipedia.org/wiki/Tipo_de_dado), pois a variável pode ter o seu valor automaticamente alterado para outro tipo para possibilitar uma operação.

Uma variável pode ser do tipo inteiro e no meio do caminho se tornar uma string, e vise-versa.

Mas no SASS a coisa é um pouco diferente. Tempos tipos próprios de CSS, que não precisam de "aspas" como string.

{% highlight sass %}
$mutable-var: '->'; // variavel do tipo string
$mutable-var: 200; // variavel do tipo inteiro
$mutable-var: 2.2; // variavel do tipo double
$mutable-var: #fff; // variavel do tipo hexadecimal (para cores)
$mutable-var: 150px; // variavel do tipo medida em pixel
$mutable-var: 1em; // variavel do tipo Unidade relativa
$mutable-var: 100%; // variavel do tipo porcentagem

body {
  width: $mutable-var;
}
{% endhighlight %}

Se você processar o código acima verá que o valor de `width` é de `100%`, o SASS pegou automaticamente o valor setado na ultima linha.

**Pra falar a verdade o SASS aceita qualquer valor que não vai gerar erro nenhum** ^.^
