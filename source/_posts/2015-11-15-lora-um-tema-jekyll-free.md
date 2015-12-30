---
layout: post
title: "Lora, um tema Jekyll gratuito"
permalink: lora-um-tema-jekyll-free
date: 2015-11-15 18:45:26
comments: true
description: "Olá, eu desenvolvi mais um tema para Jekyll, faça o download do Lora!"
keywords: "jekyll, theme, tema, gratuito, free, github, gh-pages, download"
cover: http://raw.githubusercontent.com/nandomoreirame/lora/master/screenshot.png
categories:
- temas-jekyll
tags:
- temas
- jekyll
- download
---

Gostei de aprender a fazer página para o **Github** (gh-pages) utilizando o **[Jekyll](http://jekyllrb.com)**, um pacote do **[Ruby](https://www.ruby-lang.org/pt/)** (uma rubygem).

Grandes frameworks usam **jekyll** pra fazer as suas documentações pois ele é simples, fácil e objetivo. Mas uma das grandes vantagens de usar o Jekyll é que ele vem preparado para fazer blogs rápidos, por isso muitos desenvolvedores estão usando para seus blogs pessoais.

Eu já havia publicado o [Zetsu]({{ "/zetsu-tema-jekyll" | prepend: site.baseurl }}) a algum tempo atrás, também deixei [esse meu blog](http://nandomoreira.me/nandomoreira-jekyll-theme/) no [github](https://github.com/nandomoreirame/nandomoreira-jekyll-theme) para que qualquer um possa usa-lo. E hoje estou lançando um outro tema, simples, limpo e bonito, chamado **[Lora](https://github.com/nandomoreirame/lora)**.

---

## Escolha do nome

O tema usa uma fonte serifada do [google fonts](http://google.com/fonts) chamada _"lora"_ por isso dei esse nome a ele.

---

## Como usar

1. Faça o Download ou clone o repo `git clone git@github.com:nandomoreirame/lora.git`
2. Entre no diretório: `cd lora/`
3. Instale as dependencias do Ruby: `bundle install`
4. Inicie o servidor Jekyll: `jekyll serve`

Acesse, [localhost:4000](http://localhost:4000/)

### Usando Rake tasks

* Criar nova página: `rake page name="contato.md"`
* Criar novo post: `rake post title="TITULO DO POST"`

### Fazendo o deploy no Github

1. Altere as variáveis `GITHUB_REPONAME` e `GITHUB_REPO_BRANCH` no arquivo `Rakefile`
2. Rode o comando `rake` ou `rake publish` para publicar os arquivos finais no Github

---

## Licença

Este tema é liberado sob licença [MIT](https://github.com/nandomoreirame/lora/blob/master/LICENSE).

---

## Demo e download

[Demo](http://nandomoreira.me/lora){: .button} [Download](https://github.com/nandomoreirame/lora/archive/master.zip){: .button .secondary}
