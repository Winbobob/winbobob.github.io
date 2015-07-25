---
layout: post
title: Construindo um menu animado com CSS3 e jQuery
date: 2011-11-24 00:09
description: "Criar um menu animado usando alguns CSS3 e jQuery"
keywords: "CSS, Design, HTML, jQuery"
comments: false
categories:
- css
tags:
- css3
- efeitos
- html
- jquery
- tutorial
---

Hoje nós vamos ter todos os tipos de diversão. Primeiro vamos criar um menu animado usando alguns CSS3 nova e brilhante ao mesmo tempo aprender como implementar seletores pseudo de forma prática em um projeto real. Então vamos seguir-se que com a forma de construir a mesma coisa sem pseudo seletores para melhor suporte a navegador. Finalmente, vamos terminar com uma olhada em como sucata todos os CSS que fantasia em favor de alguns jQuery bem antiquada.

Junte-se a examinamos não um, mas três maneiras de abordar um deslizamento CSS menu de navegação!

## Por Seletores Pseudo?

Um dos principais propósitos deste artigo é ilustrar um exemplo do mundo real para usar seletores pseudo que não é o tutorial tabela óbvio.

Seletores de pseudo recebo um monte de hype em blogs de design, mas quando chega a hora para comentários eu sempre vejo a mesma pergunta: "Ótimo, mas quando é que eu realmente uso estes?" Às vezes, pego com a utilização de exemplos ridículos e irrealistas apenas para mostrar algum brinquedo novo, enquanto isso os leitores imediatamente marcá-lo como algo "puro", mas não qualquer coisa que nunca vai ser prático.

Nosso menu de navegação hoje vai atirar em apenas um par de pseudo seletores de uma forma muito rápida, que é exatamente como você estará usando esses caras no futuro.

## O que estamos construindo?

[![screenshot](/assets/images/posts/pseudomenu-4.jpg)](http://designshack.net/tutorialexamples/pseudomenu/pseudo.html)

O objetivo aqui é criar um simples menu de navegação CSS composto por blocos de retângulo com um fundo vermelho. Quando o usuário passa sobre o item de menu, haverá uma animação de correr e tanto a mensagem quanto a cor de fundo do item de menu irá mudar.

É quase como um efeito de abertura da porta da garagem aplicadas via CSS animações. É um projeto divertido eo efeito final parece ótimo.

## Primeiro Passo: O HTML

Nossa estrutura HTML é muito sucinta, apenas uma div contendo uma lista não ordenada, com três itens da lista. Os itens da lista pode parecer um pouco estranho à primeira vista, cada um tem não um mas dois links, um após o outro.Check it out:

{% highlight html %}
<div id="menu">
  <ul>
    <li><a href="#">Home</a><a href="#">See Us</a></li>
    <li><a href="#">About</a><a href="#">Meet Us</a></li>
    <li><a href="#">Contact</a><a href="#">Email Us</a></li>
  </ul>
</div>
{% endhighlight %}

Cada item da lista representa um item de navegação. Cada item de navegação tem dois estados distintos: padrão e hover. Os dois links representam cada estado. Repare como, em hover, eu mudei as mensagens passiva para uma chamada à ação: "About" torna-se "Meet Us", este sutilmente ajuda a incentivar o clique comportamento.

Isso é realmente todo o HTML que precisamos para esta rodada. Você já pode começar a pensar sobre como você teria como alvo cada link no item da lista de forma diferente. Seria muito difícil sem o nosso pseudo amigos selector.

## Passo 2: Starter menu CSS

Para começar o CSS, nós vamos precisar estilo a área do menu como um todo.Cada item do menu será alto 100px por 200px de largura e teremos três deles.Que nos dá uma área total de 100px por 600px para o menu como um todo.Adicionar em dez pixels de preenchimento para cada um dos três itens e nossa total geral torna-se 100px por 630px.

{% highlight css %}
#menu {
  height: 100px; width: 630px;
  overflow: hidden;
  margin: 50px auto;
  text-align: center;
}
{% endhighlight %}

Depois de definir a altura e largura, eu simplesmente centrado no menu junto com seu texto e escondeu o transbordamento, o que será importante com a animação mais tarde.

## Passo 3: Estilo de Links

Em seguida, nós pregar para baixo a estética dos itens do menu. Nós primeiro alvo os itens da lista e flutuar-los para a esquerda com algumas margens. Então segue-se que por denominar todos os links no menu.

{% highlight css %}
#menu ul li {
  float: left;
  margin: 0 5px;
  list-style-type: none;
}

/* Menu Link Styles */
#menu ul a {
  display: block;
  background: #ff061c; color: #fff;
  height: 100px; width: 200px;
  font: lighter 2em/100px "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
  text-decoration: none;
}
{% endhighlight %}

Essencialmente nos viramos cada link em um grande bloco vermelho:

<div>![screenshot](/assets/images/posts/pseudomenu-1.jpg)</div>

Observe que esse estilo tem efetivamente cortado o segundo link em cada set. O que está acontecendo é que o segundo link em cada item da lista é empilhado no âmbito do primeiro e está simplesmente sendo escondido. Se desligar temporariamente "overflow: hidden" isso se torna muito mais fácil de visualizar.

<div>![screenshot](/assets/images/posts/pseudomenu-2.jpg)</div>

## Etapa 4: Alterar o link secundário Styles

Repare na imagem acima que, apesar de terem diferentes do texto, os links superior e inferior são essencialmente idênticas. Vamos mudar isso um pouco para fazer a transição mais perceptível. Para isso, basta alterar a segunda caixa em cada conjunto em preto e branco para o texto.

A parte complicada é, como é que temos como alvo apenas o link do segundo?Nós não incluir qualquer coisa no HTML para definir os dois separados: não há classes, sem identificações, nada. Este é o lugar onde os oh tão útil seletores pseudo entram em jogo! Usando seletores pseudo, podemos facilmente alvo todos os outro link através do uso de par ou ímpar.

{% highlight css %}
#menu ul a:nth-of-type(even)
{% endhighlight %}

Este selector parece um pouco complicado, então vamos correr por ele. Em primeiro lugar temos como alvo a identificação do menu, então nós drill down para a lista não-ordenada e mais especificamente as marcas de âncora na referida lista. Em seguida, adicione nosso seletor pseudo ": nth-of-type (mesmo)", que tem como alvo apenas o link do segundo em cada um dos conjuntos de nosso link.

Agora podemos atirar em alguns estilos para definir estes para além de os blocos vermelhos:

{% highlight css %}
/* Secondary Link Styles */
#menu ul a:nth-of-type(even) {
  background: #000;
  color: white;
}
{% endhighlight %}

Agora, se nós mais uma vez, temporariamente comentar "overflow: hidden" podemos ver que nossas ligações têm diferenciação muito mais.

![screenshot](/assets/images/posts/pseudomenu-3.jpg)

## Passo 5: Passe Ação Deslize

Agora é hora de definir a acção que terá lugar em foco. Basicamente queremos que o link vermelho para deslizar para cima e para fora de vista como o elo preta aparece. Parece fácil, mas quando você realmente dar-lhe algum pensamento, esta ação torna-se super-complicado! Queremos o link de cima para deslizar para cima quando passamos o mouse sobre o botão, mas como ele desliza para fora de vista, você não será mais pairando sobre ela, fazendo com que alguma ação realmente buggy. Depois de algum pensamento sério, cheguei à seguinte conclusão. Precisamos visar o item da lista inteira para o evento hover, dessa forma, não importa se o link é superior ou inferior em vista, tudo ainda funciona. No entanto, apesar do fato de que paira sobre o item da lista deve disparar o evento, é realmente outra coisa, o primeiro link, que precisa se mover. Traduzir estas metas a CSS se parece com isso:

{% highlight css %}
/* Hover Slide */
#menu ul li:hover :first-child {
  margin-top: -100px;
}
{% endhighlight %}

Muitas pessoas não percebem isso, mas você não tem que agir sobre o item que você definir o estado de hover. Aqui estamos desencadeando a pairar sobre o item da lista, mas movendo o primeiro filho (obrigado pseudo seletor) desse item, que neste caso será a de links superior.

Para fazer essa transição um liso, revisitamos a Passo 3 código e adicionar em alguns agradável CSS3 transições.

{% highlight html %}
/* Menu Link Styles */
#menu ul a {
  display: block;
  background: #ff061c; color: #fff;
  height: 100px; width: 200px;
  font: lighter 2em/100px "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
  text-decoration: none;

  -webkit-transition: margin .4s ease-in-out;
  -moz-transition: margin .4s ease-in-out;
  -o-transition: margin .4s ease-in-out;
  -ms-transition: margin .4s ease-in-out;
  transition: margin .4s ease-in-out;
}
{% endhighlight %}

## Acabado! Versão Selector pseudo

Com isso, a nossa primeira versão é completa! Nossas animações olhar grande e os seletores de pseudo estão fazendo o trabalho pesado para manter a nossa marcação agradável e limpo.

[![screenshot](/assets/images/posts/pseudomenu-4.jpg)](http://designshack.net/tutorialexamples/pseudomenu/pseudo.html)

**Demonstração: **[Clique aqui](http://designshack.net/tutorialexamples/pseudomenu/pseudo.html) para o lançamento.

**Download: **[Clique aqui](http://designshack.net/tutorialexamples/pseudomenu/DesignShackMenu.zip) para baixar todas as três versões.

## Demolição do Seletores Pseudo

Eu, pessoalmente, adoro pseudo seletores, seletores de atributo e todas as outras guloseimas fornecido pela CSS3. O apoio é realmente bastante bom para eles através da placa com praticamente todos os principais navegadores tocar junto, incluindo IE9!

No entanto, o pior browser da história não seria apenas ir e não ser uma dor no pescoço, como que por isso, naturalmente nada mais velho do que o IE9 terá problemas com esses seletores. Uma vez que a maioria das pessoas só agora chegado a cerca de demolição apoio IE6, estamos longe de ano provavelmente ignorando o IE6 e IE7.

Se você quiser implementar este menu em um projeto ao vivo, é provavelmente uma idéia melhor ir em frente e usar classes em seu código HTML em seu lugar.Vamos ver como isso funciona.

### HTML

À luz da nossa decisão de abrir mão das nossas pseudo experimental seletores, vamos ter que adicionar uma classe extra para ajudar a direcionar o primeiro elo, sem afetar o segundo em cada item da lista. Aqui eu só jogou em uma classe "top" em cada link que fica no topo.


{% highlight html %}
<div id="menu">
  <ul>
    <li><a href="#" class="top">Home</a><a href="#">See Us</a></li>
    <li><a href="#" class="top">About</a><a href="#">Meet Us</a></li>
    <li><a href="#" class="top">Contact</a><a href="#">Email Us</a></li>
  </ul>
</div>
{% endhighlight %}

### CSS

Agora, com esta marcação extra no lugar, nós não precisamos de os seletores de pseudo em nosso CSS. Podemos simplesmente usar classes ao invés, que têm suporte universal.

{% highlight css %}
/* Menu Link Styles */
#menu ul a.top {
  background: #e70f23; color: #fff;
}
#menu ul a {
  display: block;
  background: #000; color: #fff;
  height: 100px; width: 200px;
  font: lighter 2em/100px "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
  text-decoration: none;

  -webkit-transition: margin .4s ease-in-out;
  -moz-transition: margin .4s ease-in-out;
  -o-transition: margin .4s ease-in-out;
  -ms-transition: margin .4s ease-in-out;
  transition: margin .4s ease-in-out;
}
/* Hover Slide */
#menu ul li:hover .top {
  margin-top: -100px;
}
{% endhighlight %}

### Acabado! Versão não-Pseudo Selector

Nossa segunda versão é completa! Para aqueles de vocês não interessado em pseudo seletores, aqui está uma versão sem eles.

**Demonstração: **[Clique aqui](http://designshack.net/tutorialexamples/pseudomenu/NoPseudo.html) para o lançamento.

**Download: **[Clique aqui](http://designshack.net/tutorialexamples/pseudomenu/DesignShackMenu.zip) para baixar todas as três versões.

## Usando jQuery para as animações

Como uma última alternativa, você pode jogar fora as animações CSS e executar as mesmas ações com jQuery (ou talvez usar jQuery como um fallback via Modernizr).

Com base no anterior, a versão não-pseudo-seletor, desligue a animações CSS e lance neste pouco de jQuery:

{% highlight javascript %}
$(document).ready(function() {
  $("li").hover(function() {
    $(this).stop().animate({ marginTop: "-100px" }, 400);
  },function(){
    $(this).stop().animate({ marginTop: "0px" }, 400);
  });
});
{% endhighlight %}

## Acabado versão o jQuery!

Nossa versão final utiliza a mesma estrutura do anterior, mas joga fora as transições CSS em favor da jQuery. Dê uma olhada.

**Demonstração:** [Clique aqui](http://designshack.net/tutorialexamples/pseudomenu/jquery.html) para visualizar.

**Download:** [Clique aqui](http://designshack.net/tutorialexamples/pseudomenu/DesignShackMenu.zip) para baixar todas as versões.

Boa diversão! ;)