---
layout: post
title: Adicionando Disqus ao seu projeto Jekyll
date: 2015-07-19 05:13
description: "Gostei da ideia de montar meu blog com o Jekyll como plataforma, ainda mais usando Markdown, entretanto, apesar da simplicidade da ferramenta"
keywords: "jekyll, disqus, html, dicas, comentarios"
comments: true
categories:
- jekyll
tags:
- jekyll
- disqus
- dicas
- html
---

Gostei da ideia de montar meu blog com o Jekyll como plataforma, ainda mais usando Markdown, entretanto, apesar da simplicidade da ferramenta, uma coisa me tirou um tempinho até conseguir entender como funcionava, era: _Como vou adicionar a plataforma de comentários **<a href="https://disqus.com/">Disqus</a>** em meu blog?_

É simples, vem comigo.

A primeira coisa que você deve fazer é registrar-se no <a href="https://disqus.com/websites/">Disqus</a>, após o registro você vai logar em sua conta e acessar o <a href="https://disqus.com/admin/universalcode/">código universal</a> do Disqus, o sistema já vai "automágicamente" identificar o seu `shortname` e vai incluir em uma variável assim:

{% highlight javascript %}
var disqus_shortname = 'fernandomoreira';
{% endhighlight %}

Abaixo dessa variável `disqus_shortname` você pode incluir outras variáveis opcionais como:

{% highlight javascript %}
var disqus_identifier = 'o identificador único da página onde o Disqus está presente';
var disqus_title = 'o título da página onde está o Disqus';
var disqus_url = 'a url da página onde está o Disqus';
{% endhighlight %}

Após ter copiado o código universal e adicionado suas respectivas variáveis vamos colar ele dentro do nosso projeto Jekyll.

Eu criei um arquivo de include dentro do diretório `_includes/` chamado `comments.html` e colei nosso amigo, mais tarde iremos incluir ele dentro do template.

O meu ficou mais ou menos assim:
{% highlight html %}
<aside id="comments">
  <h3>Comentários</h3>
  <div id="disqus_thread"></div>
  <script type="text/javascript">
    /* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = 'fernandomoreira';
    var disqus_identifier = '{ { page.id } }';
    var disqus_title = '{ { page.title } }';
    var disqus_url = '{ { site.baseurl } }{ { post.url } }';

    var disqus_developer = 1;

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
  </script>
  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
</aside>
{% endhighlight %}

> **obs** Eu separei as chaves `{ { } }` das variáveis do Jekyll porque ele estava colocando a url do post e não era a minha intenção, se você for copiar o código com essas variáveis certifique de remover os espaços, pode não funcionar corretamente.

As <a href="https://help.disqus.com/customer/portal/articles/472138-jekyll-installation-instructions">instruções</a> passadas pelo próprio **Disqus** diz que você deve criar uma variável chamada `comments` com valor `true` para cada post que você queira que tenha comentários.

{% highlight text %}
...
layout: default
comments: true
# outras opções
...
{% endhighlight %}

Tendo essa varável configurada você pode envolver o seu include de comentários dentro de um conditional `if`, assim:

{% highlight text %}
{ % if page.comments % }
  { % include comments.html % }
{ % endif % }

// separei as chaves { } do simbolo de porcento %
// junte-os para funcionar corretamente
{% endhighlight %}

Tudo certo.. Tudo funcionando.. Agora você deve está se perguntando: _como eu faço pra testar se realmente isso está funcionando?_

É simples, se você está testando em um ambiente local basta habilitar o modo de desenvolvedor.

{% highlight javascript %}
var disqus_developer = 1; // Remova-o quando o site está online
{% endhighlight %}

Você verá que está tudo ok.. É só correr pro abraço!
