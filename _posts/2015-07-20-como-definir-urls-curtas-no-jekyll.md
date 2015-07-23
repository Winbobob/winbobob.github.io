---
layout: post
title: "Como definir URLs curtas no Jekyll"
description: "Neste post, vou descrever como fazer as URLs amigáveis para o seu blog Jekyll"
keywords: "blog, url, amigáveis, curtas, jekyll"
permalink: urls-curtas-no-jekyll
comments: true
category: [jekyll]
tags: [jekyll]
---

Neste post, vou descrever como fazer as URLs amigáveis para o seu blog Jekyll. Por exemplo, eu queria que a URL para este post para ser [nandomoreira.me/urls-curtas-no-jekyll](http://nandomoreira.me/urls-curtas-no-jekyll) sem quaisquer tags, datas ou outros personagens extras. Ter uma url é curta, parece bom, e é fácil de compartilhar. Eu também li algumas especulações que URLs menores ajudar com SEO.

A documentação do Jekyll discute a capacidade de setar `permalink` como `none` no `_config.yml`:

{% highlight yaml %}
permalink: none
{% endhighlight %}

Mas isso criou uma URL como `nandomoreira.me/urls-curtas-no-jekyll.html` e eu não quero que minhas UTLs terminem com `.html` no final.

Em seguida, eu defini o valor do `permalink` para `"/:title"` no arquivo `_config.yml`

{% highlight yaml %}
permalink: "/:title"
{% endhighlight %}

Finalmente, eu percebi que eu poderia obter o meu resultado desejado sem bagunçar páginas estáticas, definindo explicitamente a chave permalink nos metadados YAML de cada post. Para este post, eu definir:

{% highlight yaml %}
permalink: urls-curtas-no-jekyll
{% endhighlight %}

Com isso obtemos o resultado desejado e podemos personalizar quaisquer links do nosso blog, seja ele um post ou uma página.

Se você tiver quaisquer perguntas ou comentários, por favor poste abaixo. Se você gostou deste post, você pode compartilhá-lo com seus seguidores ou siga-me no Twitter!

Divirta-se"

---

> Essa é uma tradução do post original: [joshualande.com/short-urls-jekyll](http://joshualande.com/short-urls-jekyll/)
