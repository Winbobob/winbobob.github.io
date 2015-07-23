---
layout: post
title: "Comprimindo o HTML do seu blog no Jekyll"
permalink: "comprimindo-o-html-do-seu-blog-no-jekyll"
comments: true
description: "Como comprimir o HTML no Jekyll"
keywords: "HTML, Jekyll, Comprimindo, Blog, Layout, Compress, liquid"
category: [jekyll]
tags: [html, jekyll]
---

A ideia é bem simples.. Nós vamos usar um [layout](https://github.com/penibelst/jekyll-compress-html) Jekyll que faz todo o trabalho para nós.

## O que ele faz:

* Remove espaços em branco desnecessários;
* Remove tags de fim opcionais;
* Remove comentários;
* Mantém espaços em branco dentro de <pre> ;
* Páginas GitHub compatíveis;
* Ignora ambientes de desenvolvimento;
* Elementos afectados configuráveis;
* Modo de perfil;
* Testado automaticamente.

O layout é escrito em puro [liquid](http://liquidmarkup.org/) e sem plugins são necessários.

---

## Instalação

1. Baixe a versão mais recente [aqui](https://github.com/penibelst/jekyll-compress-html/releases/tag/v2.0.0).
2. Extraia, copie o `compress.html`.
3. Cole dentro do diretório `_layouts`.
4. Abra o seu layout `default.html` e referencie o `compress.html` como layout.

{% highlight html %}
---
layout: compress
---
<html>
  <head>
  </head>
  <body>
    <!-- jekyll content -->
  </body>
</html>
{% endhighlight %}

Agora toda a sua marcação HTML será processada pelo layout `compress.html`.

---

## Configuração

Por padrão o layout substitui espaços contíguos com um único espaço em branco. Configurações adicionais podem ser especificados na chave `compress_html` dentro do arquivo `_config.yml`.

A configuração padrão é:

{% highlight yaml %}
compress_html:
  clippings: []
  comments: []
  endings: []
  profile: false
  ignore:
    envs: []
{% endhighlight %}

Para um exemplo real eu estou usando nesse exato momento [neste blog](https://github.com/nandomoreirame/nandomoreirame.github.io)

É issoa ai... Abraço!

{:.text-center}
| [Repositório](https://github.com/penibelst/jekyll-compress-html) | [Download](https://github.com/penibelst/jekyll-compress-html/archive/gh-pages.zip) |

---