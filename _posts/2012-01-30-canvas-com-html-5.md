---
layout: post
title: Canvas com HTML 5
date: 2012-01-30 12:38
description: "Olá pessoal, já faz muito tempo que não posto algo para vocês e hoje vou falar sobre o canvas do HTML5"
keywords: "dicas, HTML, HTML5, canvas, tutorial"
comments: true
categories:
- html
tags:
- canvas
- html5
- javascript
- tutorial
---

Olá pessoal, já faz muito tempo que não posto algo para vocês e hoje vou falar sobre o canvas do HTML5\.

**Mas afinal o que é canvas?**

> _canvas_ é um novo e poderoso elemento entre as inúmeras novas funcionalidades do HTML 5.
>
> Com o _canvas_ você consegue de maneira fácil criar gráficos, composições de fotos e animações usando JavaScript. Pense em um bloco de notas, cada folha é um elemento _canvas_ onde você pode usar um contexto diferente, utilizando ou não API's para fornecer funcionalidades de desenho.
>
> [fonte: [imasters.com.br](http://imasters.com.br/artigo/16455/desenvolvimento/html-5-na-pratica-canvas-parte-01)]

**Vamos começar:**

Dentro da tag `<body>` inicie o seu elemento canvas:

{% highlight html %}
<canvas id="menino" width="150" height="150">
  O seu navegador não suporta canvas
</canvas>
{% endhighlight %}

Abra script dentro das tags `&lt;head&gt;&lt;/head&gt;` (eu optei em usar um arquivo externo e nada te impede de o fazer). Já dentro do seu script insira o código:

{% highlight javascript %}
function _menino() {
  // Obtém o id do canvas quem é "menino"
  var canvasElem = document.getElementById('menino');
  if (canvasElem.getContext){
    var context = canvasElem.getContext('2d');
    context.strokeStyle = '#9c9c9c';
    context.lineWidth   = 1;
    context.beginPath();
    context.arc(75,75,45,0,Math.PI*2,true);
    context.moveTo(110,75);
    context.arc(75,75,35,0,Math.PI,false);
    context.moveTo(65,65);
    context.arc(60,65,5,0,Math.PI*2,true);
    context.moveTo(95,65);
    context.arc(90,65,5,0,Math.PI*2,true);
    context.stroke();
    context.closePath();
  }
}
{% endhighlight %}

Agora na tag inicial <body> coloque para inicializar a funcao _menino().

Fica assim:

{% highlight html %}
<body onload="_menino();">
{% endhighlight %}

Pronto! Salve seus arquivos e visualize:

você verá um desenho como esse:

![canvas-menino](/assets/images/posts/canvas-menino.png)

<a href="https://github.com/nandomoreirame/canvas_menino">Repositório</a> | <a href="https://github.com/nandomoreirame/canvas_menino/archive/master.zip">Download</a>

Esse é um exemplo simples, espero ter ajudado!

Abraço e fiquem com Deus!
