---
layout: post
title: "Usando Rake tasks para automatizar publicações Jekyll"
permalink: rake-tasks-para-automatizar-publicacoes-jekyll
date: 2015-08-01 15:28:15
comments: true
description: "Rake é um Ruby Make, um utilitário usado para executar uma lista de tarefas em Ruby. São bastante utilizadas por desenvolvedores Ruby on Rails para automatizar tarefas como manipulação de assets, migração de banco de dados, limpar cache e muito mais.."
keywords: "jekyll, rake, ruby"
categories:
- jekyll
tags:
- jekyll
- rake
- ruby
---

### Mas afinal, o que é Rake?

Rake é um Ruby Make, um utilitário usado para executar uma lista de tarefas em Ruby. São bastante utilizadas por desenvolvedores Ruby on Rails para automatizar tarefas como manipulação de assets, migração de banco de dados, limpar cache e muito mais..

Hoje vamos entender como podemos criar e usar algumas rake tasks em nosso projeto Jekyll, com elas podemos criar automaticamente os arquivos `.md`de nossos posts, criar páginas, categorias e outras tarefas customizadas para o Jekyll, é bem bacana e fácil de fazer, vem comigo.

### "Hello World" com Rake

A primeira coisa que você precisa fazer é instalar o Ruby em sua máquina, como estamos falando de *"Automatizar publicações Jekyll"* então vou pressupor que você já tenha o Ruby e a Gem do Jekyll já instalada.

Baixe e instale a gem rake com o seguinte comando:

{% highlight bash %}
gem install rake
{% endhighlight %}

Após a instalação você deve criar um arquivo chamado `Rakefile` onde serão escritas as suas tarefas.

{% highlight ruby %}
task :hello do
  puts "Hello World"
end
{% endhighlight %}

Se você rodar no seu terminal o comando `rake hello` aparecerá na tela, bem bonitão, o nosso famoso "Hello World".

<a href="/assets/images/posts/rake-hello-world.png" class="swipebox" rel="gallery" title="{{ page.title }}">
  <img src="/assets/images/posts/rake-hello-world.png" alt="{{ page.title }}">
</a>

Pronto, agora você aprendeu a criar uma Rake task, se você for criativo e souber o básico de Ruby você fará coisas incríveis com elas.

### Rake e o Jekyll

Agora vamos implementar nossas tasks em nosso projeto Jekyll, e quero fazer um exercício com você, quero que pense o seguinte:

> O que podemos fazer para facilitar uma publicação Jekyll?

Isso mesmo que você pensou, `criar o arquivo do post dentro do diretório _posts/`, muito bem pensado pequeno gafanhoto!

Vamos começar criando variáveis globais para armazenar coisas que serão utilizadas dentro das nossas tasks. Logo no início do arquivo Rakefile adicione as seguintes linhas:

{% highlight ruby %}
SOURCE    = "."
POSTS_DIR = File.join(SOURCE, "_posts")
POST_EXT  = ".md"
{% endhighlight %}

Nós temos em mãos o diretório onde serão armazenados nossos artigos e a extenção que será utilizada em cada arquivo.

Agora vamos criar uma task chamada `post`:

{% highlight ruby %}
task :post do
  # codigos ruby aqui
end
{% endhighlight %}

Se você rodar `rake post` do seu terminal não acontecerá nada pois nossa task está vazia.

### Passando parâmetros para Rake task

Para criar nosso artigo via rake task nós precisaremos passar alguns parâmetros necessários, como por exemplo, o Título do post.

Para capturar esse parâmentro passado no terminal nós usaremos uma variável global do Ruby chamada `ENV[]`, com ela pegaremos todo e qualquer parâmetro passado para a task.

Vamos pegar nosso Título e armazenar em uma variável chamada `title`:

{% highlight ruby %}
task :post do
  title = ENV["title"] || "Novo post"

  puts title
end
{% endhighlight %}

Fácil não? Basta passar o título do post como parâmentro pelo terminal assim: `rake post title="Rake é bem legal"`, note que se você deixar vazio ele automaticamente coloca `Novo post` como valor padrão para o título.

<a href="/assets/images/posts/rake-post-title.png" class="swipebox" rel="gallery" title="{{ page.title }}">
  <img src="/assets/images/posts/rake-post-title.png" alt="rake post title">
</a>

Agora que você aprendeu a passar parâmetros para sua rake task, use a criatividade e adicione os parâmetros de *tags* e *categorias* para o seu post.

### Usando métodos Ruby para montar o nome do arquivo

Tendo o título do post em mãos vamos criar o nome do nosso arquivo, que precisa da data `YYY-MM-DDD` na frente do slug do post, seguido da extensão `.md`

Primeiro montaremos o `slug` do post usando métodos do próprio Ruby, veja como.

{% highlight ruby %}
task :post do
  title = ENV["title"] || "Novo post"
  slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

  puts slug
end
{% endhighlight %}

Mas tem um probleminha, a letra acentuada foi removida, e isso não é bom, teremos que dar um jeito.

{% highlight ruby %}
task :post do
  title = ENV["title"] || "Novo post"
  slug  = title.tr("ÀÁÂÃÄÅàáâãäåĀāĂăĄąÇçĆćĈĉĊċČčÐðĎďĐđÈÉÊËèéêëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħÌÍÎÏìíîïĨĩĪīĬĭĮįİıĴĵĶķĸĹĺĻļĽľĿŀŁłÑñŃńŅņŇňŉŊŋÒÓÔÕÖØòóôõöøŌōŎŏŐőŔŕŖŗŘřŚśŜŝŞşŠšſŢţŤťŦŧÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųŴŵÝýÿŶŷŸŹźŻżŽž", "AAAAAAaaaaaaAaAaAaCcCcCcCcCcDdDdDdEEEEeeeeEeEeEeEeEeGgGgGgGgHhHhIIIIiiiiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnNnnNnOOOOOOooooooOoOoOoRrRrRrSsSsSsSssTtTtTtUUUUuuuuUuUuUuUuUuUuWwYyyYyYZzZzZz")
  slug = slug.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

  puts slug
end
{% endhighlight %}

<a href="/assets/images/posts/rake-e-bem-legal.png" class="swipebox" rel="gallery" title="{{ page.title }}">
  <img src="/assets/images/posts/rake-e-bem-legal.png" alt="rake e bem legal">
</a>

É uma solução bem bizarra, mas funciona :)

<hr>

Agora vamos pegar a data atual e colocar no nome do arquivo.

Usando o operador ternário nós pegaremos a data passada como parâmetro pelo terminal, se não existir adicionamos o método `now` usando a classe `Time` do Ruby e armazenaremos em uma variável chamada `date`, assim vale para a hora também, armazenada ma variável `time`, ficando assim:

{% highlight ruby %}
task :post do
  title = ENV["title"] || "Novo post"
  slug  = title.tr("ÀÁÂÃÄÅàáâãäåĀāĂăĄąÇçĆćĈĉĊċČčÐðĎďĐđÈÉÊËèéêëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħÌÍÎÏìíîïĨĩĪīĬĭĮįİıĴĵĶķĸĹĺĻļĽľĿŀŁłÑñŃńŅņŇňŉŊŋÒÓÔÕÖØòóôõöøŌōŎŏŐőŔŕŖŗŘřŚśŜŝŞşŠšſŢţŤťŦŧÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųŴŵÝýÿŶŷŸŹźŻżŽž", "AAAAAAaaaaaaAaAaAaCcCcCcCcCcDdDdDdEEEEeeeeEeEeEeEeEeGgGgGgGgHhHhIIIIiiiiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnNnnNnOOOOOOooooooOoOoOoRrRrRrSsSsSsSssTtTtTtUUUUuuuuUuUuUuUuUuUuWwYyyYyYZzZzZz")
  slug = slug.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

  begin
    date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
    time = (ENV['time'] ? Time.parse(ENV['time']) : Time.now).strftime('%T')
  rescue => e
    puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
    exit -1
  end

  puts date
  puts time
end
{% endhighlight %}

<a href="/assets/images/posts/rake-post-date-time.png" class="swipebox" rel="gallery" title="{{ page.title }}">
  <img src="/assets/images/posts/rake-post-date-time.png" alt="rake - date time">
</a>

Usando método `File.join()` vamos concatenar a data, o slug e a extensão do arquivo armazenando na variável `filename`:

{% highlight ruby %}
task :post do
  title = ENV["title"] || "Novo post"
  slug  = title.tr("ÀÁÂÃÄÅàáâãäåĀāĂăĄąÇçĆćĈĉĊċČčÐðĎďĐđÈÉÊËèéêëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħÌÍÎÏìíîïĨĩĪīĬĭĮįİıĴĵĶķĸĹĺĻļĽľĿŀŁłÑñŃńŅņŇňŉŊŋÒÓÔÕÖØòóôõöøŌōŎŏŐőŔŕŖŗŘřŚśŜŝŞşŠšſŢţŤťŦŧÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųŴŵÝýÿŶŷŸŹźŻżŽž", "AAAAAAaaaaaaAaAaAaCcCcCcCcCcDdDdDdEEEEeeeeEeEeEeEeEeGgGgGgGgHhHhIIIIiiiiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnNnnNnOOOOOOooooooOoOoOoRrRrRrSsSsSsSssTtTtTtUUUUuuuuUuUuUuUuUuUuWwYyyYyYZzZzZz")
  slug = slug.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

  begin
    date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
    time = (ENV['time'] ? Time.parse(ENV['time']) : Time.now).strftime('%T')
  rescue => e
    puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
    exit -1
  end

  filename = File.join(POSTS_DIR, "#{date}-#{slug}#{POST_EXT}")

  puts filename
end
{% endhighlight %}

<a href="/assets/images/posts/rake-post-filename.png" class="swipebox" rel="gallery" title="{{ page.title }}">
  <img src="/assets/images/posts/rake-post-filename.png" alt="rake - post filename">
</a>

### Salvando o arquivo do post

Pra finalizar vamos criar o arquivo dentro do diretório `_posts/` com o nome que acabamos de montar acima.

Usando o método de manipulação de arquivos do Ruby nós vamos escrever algumas coisas dentro do nosso arquivo `finename`, isso já criará o arquivo dentro de `_posts/`, mais ou menos assim:

{% highlight ruby %}
task :post do
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/-/,' ')}\""
    post.puts "permalink: #{slug}"
    post.puts "date: #{date} #{time}"
    post.puts "comments: true"
    post.puts "description: \"#{title}\""
    post.puts "keywords: \"#{keywords}\""
    post.puts "categories:"
    post.puts "#{categories}"
    post.puts "tags:"
    post.puts "#{tags}"
    post.puts "---"
  end
end
{% endhighlight %}

<hr>

## Bonus **

[Nesse repositório](https://github.com/nandomoreirame/exemplos/tree/master/rake-tasks-para-automatizar-publicacoes-jekyll) eu deixei o arquivo `Rakefile` completo com algumas tasks e algumas funções e úteis, talvez você queira adicionar em seu projeto.

Se gostou compartilha e comenta ai.

Abraço.
