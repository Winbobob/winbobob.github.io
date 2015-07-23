---
layout: post
title: "ie7 = problema com position:absolute e z-index"
date: 2012-04-03 11:37
description: "É de praxe o IE7 incomodar os desenvolvedores fontend com suas formas de posicionar os elementos dos sites sem permissão"
keywords: "Dicas, PHP, programação, tutorial, Array"
comments: false
categories:
- CSS
- Dicas
- HTML
tags:
- CSS
- dicas
- front-end
- html
---

É de praxe o IE7 incomodar os desenvolvedores fontend com suas formas de posicionar os elementos dos sites sem permissão. Faz algum tempo que um problema vem me incomodando e não encontrava uma solução de forma alguma.

Todo mundo sabe que para fazer um drop down precisamos do `position` e do `z-index` e que o `z-index`não funciona com `position: absolute` no IE7.

Ao desenvolver um menu _drop down_ e posicionar o sub-menu com `position:absolute` o  IE7 coloca o menu por trás de todas imagens, principalmente de banners com slider.

[![ie7 menu por tras do banner](/assets/uploads/ie7-menu-por-tras-do-banner.jpg "ie7 menu por tras do banner")](/assets/uploads/2012/04/ie7-menu-por-tras-do-banner.jpg)

#### O CSS menu ficaria assim:

{% highlight css %}
ul {
  width: 957px; height: 46px;
  background: url(../images/menu.png) repeat-x;
  padding-left: 4px;
}
ul li {
  position: relative;
}
ul li ul {
  display: none;
  position: absolute;
  top: 45px;
  left: 0;
}
{% endhighlight %}

Para resolver esse problema é muito simples. Colocamos `position: relative` na ul e um `z-index: 2`

{% highlight css %}
ul {
  width: 957px; height: 46px;
  background: url(../images/menu.png) repeat-x;
  padding-left: 4px;
  position: relative;
  z-index: 2;
}
ul li {
  position: relative;
}
ul li ul {
  display: none;
  position: absolute;
  top: 45px;
  left: 0;
}
{% endhighlight %}

[![ie7 menu por cima do banner](/assets/uploads/ie7-menu-por-cima-do-banner.jpg "ie7 menu por cima do banner")](/assets/uploads/2012/04/ie7-menu-por-cima-do-banner.jpg)
