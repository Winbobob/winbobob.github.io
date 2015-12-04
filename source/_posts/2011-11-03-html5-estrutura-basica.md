---
layout: post
title: "HTML5: Estrutura básica"
date: 2011-11-03 22:27
comments: true
description:  "HTML5 | A Estrutura base para dar o pontapé inicial com HTML5."
keywords: "Dicas, HTML, HTML5, Estrutura"
categories:
- html
tags:
- dicas
- html
- html5
---

A Estrutura base para dar o pontapé inicial com HTML5.

{% highlight html %}
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="/main.css" />
    <title>Titulo do seu projeto</title>
  </head>
  <body>
    <main>
      <header>
        <h1>Cabeçalho do site</h1>
      </header>
      <section>
        <article>
          <header>
            <h1>Cabeçalho do artigo</h1>
          </header>
          <p>Conteúdo do artigo</p>
          <footer>
            <span>Rodapé do artigo</span>
          </footer>
        </article>
        <aside>
          <h3>Conteúdo secundário (sidebar)</h3>
        </aside>
      </section>
      <footer>
        <h3>Rodapé do site</h3>
      </footer>
    </main>
  </body>
</html>
{% endhighlight %}

Abraço!