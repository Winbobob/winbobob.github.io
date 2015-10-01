---
layout: post
title: "Melhore o SEO do seu blog Jekyll"
permalink: seo-jekyll
date: 2015-09-13 02:59:27
comments: true
description: "Fazer um blog usando Jekyll é bem fácil e rápido, sem contar que é incrível poder hospedar no Github"
keywords: "jekyll, blog, seo, dicas"
cover: '/assets/images/posts/2015-07-21-por-que-resolvi-criar-meu-blog-com-o-jekyll.jpg'
categories:
 - jekyll
tags:
 - dicas
 - jekyll
---

Fazer um blog usando [Jekyll](http://jekyllrb.com/) é bem fácil e rápido, sem contar que é incrível poder hospedar ele no [Github](http://github.com/nandomoreirame/nandomoreirame.github.io) sem pagar nada por isso, entretanto, existem alguns cuidados que se deve tomar se você quiser ser bem vindo no Google.

A principal funcionalidade do Jekyll é gerar HTML estático através do Ruby e usando uma [template engine](https://en.wikipedia.org/wiki/Comparison_of_web_template_engines) chamada [Liquid](https://github.com/Shopify/liquid/wiki), então todo e qualquer desenvolvimento do tema fica a cargo do dono do blog, até ai tudo bem, já que essa é uma ferramenta voltada para desenvolvedores como você e eu ;)

Nesse artigo vou citar algumas dicas de como não falhar no **SEO** na hora de criar o seu blog com **Jekyll**.

## Não repetir title nem description

Segundo o nosso "endeuzado" **Google**, o seu site não pode conter páginas com o mesmo título nem a mesma descrição, no Jekyll isso ocorre com frequência quando você cria a paginação dos seus artigos.

Eu tinha o seguinte código no meu head:

{% highlight liquid %}
<title>
  { % if page.title == "Home" % }
    { { site.name } } &bull; { { site.description } }
  { % else % }
    { { page.title } } &bull; { { site.name } }
  { % endif % }
</title>
{% endhighlight %}

Aparentemente tudo certo, até eu perceber que o google não considerava a home ([nandomoreira.me/](http://nandomoreira.me/)) e a página 2 ([nandomoreira.me/page/2](http://nandomoreira.me/page/2)) as mesmas páginas, são páginas diferentes então precisam ter títulos e descrições diferentes.

### Solução

O mesmo if que eu usei para montar minha paginação eu vou usar no titulo:

{% highlight liquid %}
{ % if paginator and paginator.page != 1 % } - Página { { paginator.page } } { % endif % }
{% endhighlight %}

..e vou inluir ele nas tags `title` e `description`, adicionando: ` - Página 1`, ` - Página 2`, ` - Página 3` sempre que estiver em uma página diferente.

{% highlight liquid %}
<title>
  { % if page.title == "Home" % }
    { { site.name } } &bull; { { site.description } }
    { % if paginator and paginator.page != 1 % } - Página { { paginator.page } } { % endif % }
  { % else % }
    { { page.title } } &bull; { { site.name } }
  { % endif % }
</title>

<meta name="description" content="{ % if page.description % }{ { page.description | strip_html | strip_newlines | truncate: 160 } }{ % else % }{ { site.meta_description } }{ % endif % }{ %if paginator and paginator.page != 1 % } - Página { { paginator.page } }{ % endif % }">
{% endhighlight %}

## Use as metas rel="next" e rel="prev"

Usando a mesma lógica acima vamos incluir as metas tags `rel="next"` e `rel="prev"` no `<head>`:

{% highlight liquid %}
{ % if paginator.previous_page % }
  <link rel="prev" href="{ { paginator.previous_page_path | prepend: site.baseurl | prepend: site.url } }">
{ % endif % }
{ % if paginator.next_page % }
  <link rel="next" href="{ { paginator.next_page_path | prepend: site.baseurl | prepend: site.url } }">
{ % endif % }
{% endhighlight %}

## Adicione description e keywords em cada artigo

No Jekyll você consegue adicionar informações que precisar no cabeçalho de cada artigo ou página do seu blog, seria mais ou menos assim:

{% highlight liquid %}
---
layout: post
title: "Melhore o SEO do seu blog Jekyll"
permalink: seo-jekyll
date: 2015-09-13 02:59:27
comments: true
description: "Fazer um blog usando Jekyll é bem fácil e rápido, sem contar que é incrível poder hospedar no Github"
keywords: "jekyll, blog, seo, dicas"
categories:
 - jekyll
tags:
 - dicas
 - jekyll
---
{% endhighlight %}

Essas informações estão armazenadas no objeto `page.VAR` e você pode usar quando e onde quiser.

Por exemplo se eu quiser usar o valor que está contigo em `title` basta que eu imprima: `{ { page.title } }`.

Então para ter suas keywords diferentes de cada artigo basta que você coloque a variável `{ { page.keywords } }` dentro da meta tag keywords.

{% highlight liquid %}
<meta name="keywords" content="{ % if page.keywords % }{ { page.keywords } }{ % else % }{ { site.meta_keywords } }{ % endif % }">
{% endhighlight %}

## Não esqueça do canonical

A meta tag **canonical** é extremamente importante para o SEO, esquecer dela é suicídio.

{% highlight liquid %}
<link rel="canonical" href="{ { page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url } }">
{% endhighlight %}

## Monte seu sitemap.xml

Com o Jekyll é bem fácil montar o sitemap do seu blog, eu criei um *[snippet](https://gist.github.com/nandomoreirame/448f4f98af7d26cf0c8c)* com o sitemap que eu uso [aqui no meu blog](/sitemap.xml).

## Isso é tudo pessoal

Não deixe o seu blog parado, sempre que possível analise cada tag, cada marcação e não deixe passar nada.

O Jekyll é um pouco complicado de início mas quando você entra na dele fica tudo bem fácil ;)

Por hoje é só, abraço.

/end
