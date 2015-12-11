---
layout: post
title: "#3 - Conhecendo o pré processador SASS | Mixins"
permalink: sass-parte-3-mixins
date: 2015-09-05 18:34:50
comments: true
description: "Mixin foi definitivamente algo novo para mim, você consegue passar valores por parâmetros assim como funções"
cover: /assets/images/posts/2015/09/conhecendo-o-pre-processador-sass.jpg
keywords: "sass, css, scss, pre-processador, pre-processadores"
categories:
- sass
tags:
- sass
- css
- pre-processador
---

**Mixin** foi definitivamente algo novo para mim, você consegue passar valores por parâmetros assim como funções, a diferença é que uma função retorna apenas 1 único valor e mixin retorna um bloco inteiro de CSS.

O principal objetivo do Mixin é você poder reutilizar um determinado bloco de código por todo seu projeto.

> Um mixin permite fazer grupos de declarações CSS que você deseja reutilizar em todo o site. Você pode até mesmo passar valores para fazer a sua mixin mais flexível.
  ><small> Traduzido de: [sass-lang.com](http://sass-lang.com)</small>

## Legal e por onde eu começo?

Vamos fazer um exemplo simples, o mesmo usado na documentação do SASS ([sass-lang.com/guide](http://sass-lang.com/guide)).

{% highlight sass %}
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.card {
  @include border-radius(4px);
}
{% endhighlight %}

Esse bloco acima vai nos gerar o seguinte trecho de CSS:

{% highlight css %}
.card {
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
}
{% endhighlight %}

Legal não!?

## Conclusão

Pense em Mixin como uma função que irá retornar um bloco inteiro de CSS ao invés de um valor único e que você pode usa-la em vários lugares do seu projeto sem precisar repetir ou copiar e colar blocos que são iguais.

Por enquanto é isso, obrigado.

***

 1. [Conhecendo o pré-processador SASS - Instalação](/conhecendo-o-pre-processador-sass-parte-1)
 2. [Conhecendo o pré-processador SASS - Variáveis](/sass-variaveis-parte-2)
 3. Conhecendo o pré processador SASS - Mixins
 4. [Conhecendo o pré processador SASS - Funções](/sass-parte-4-funcoes)
 5. [Conhecendo o pré-processador SASS - Placeholder](/sass-parte-5-placeholder/)