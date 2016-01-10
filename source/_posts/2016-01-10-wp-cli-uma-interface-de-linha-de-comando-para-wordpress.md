---
layout: post
title: "WP-CLI: Uma interface de linha de comando para WordPress"
permalink: wp-cli-uma-interface-de-linha-de-comando-para-wordpress
date: 2016-01-10 15:33:20
comments: true
description: "Nesse artigo vou mostrar como instalar a WP-CLI, uma interface de linha de comando para WordPress"
keywords: "wordpress, wp, cli, wp-cli, comando, linha, interface"
categories:
- wordpress
tags:
- wordpress
---

Nesse artigo vou mostrar como instalar a [WP-CLI](http://wp-cli.org/), uma interface de linha de comando para WordPress.

**WP-CLI** significa _WordPress Command Line Interface_ traduzindo para o português _interface de linha de comando_.

A instalação é bem simples, basta que você tenha o <abbr title="PHP: Hypertext Preprocessor">PHP</abbr> instalado em sua máquina.

---

## Instalando (e atualizando)

Primeiro, faça o download [wp-cli.phar](https://raw.github.com/wp-cli/builds/gh-pages/phar/wp-cli.phar) usando `wget` ou `curl`. Por exemplo:

{% highlight bash %}
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
{% endhighlight %}

Em seguida, verifique se ele funciona:

{% highlight bash %}
php wp-cli.phar --info
{% endhighlight %}

Para ser capaz de escrever apenas `wp` no seu terminal, em vez de `php wp-cli.phar`, você precisa tornar o arquivo executável e movê-lo para algum lugar no seu `$PATH`. Por exemplo:

{% highlight bash %}
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp
{% endhighlight %}

Agora é só executar `wp --info`.

> O texto acima foi uma tradução de [WP-CLI](http://wp-cli.org/).

---

## WP-CLI instalado e agora?

Executando `wp help` ou apenas `wp` ele nos trará uma lista de subcomandos.

<a href="/assets/images/posts/2016/01/wp-cli-help.png" class="swipebox" rel="gallery" title="WP-CLI help">
![WP-CLI help](/assets/images/posts/2016/01/wp-cli-help.png)
</a>

Com esses subcomandos você pode ter total controle da sua instalação <abbr title="WordPress">WP</abbr>, você pode instalar e remover plugins e temas, gerenciar categorias, taxonomias e termos, gerenciar comentários, usuários, resumindo, tudo que pode ser feito via `/wp-admin/` poderá ser feito via `WP-CLI`.

Por exemplo, instalação de um plugin ficara mais ou menos assim:

{% highlight bash %}
wp plugin install hello-dolly
{% endhighlight %}

Fácil não?


<a href="/assets/images/posts/2016/01/wp-cli-theme-status.png" class="swipebox" rel="gallery" title="WP-CLI theme status">
![WP-CLI theme status](/assets/images/posts/2016/01/wp-cli-theme-status.png)
</a>

E você já usa <abbr title="WordPress Command Line Interface">WP-CLI</abbr>? Conte para nós como está sendo sua experiência com a ferramenta.

/end
