---
layout: post
title: "dotX - mais um tema para Jekyll"
permalink: dotX-mais-um-tema-para-jekyll
date: 2015-12-21 20:55:22
comments: true
description: "Olá, eu desenvolvi mais um tema para Jekyll, faça o download do dotX agora"
cover: http://raw.githubusercontent.com/nandomoreirame/dotX/master/screenshot.png
keywords: "temas, jekyll, download, tema, free, gratuito, blog, front-end"
categories:
- temas-jekyll
tags:
- temas
- jekyll
- download
---

## Como usar

1. Faça o Download ou clone o repo `git clone git@github.com:nandomoreirame/dotX.git`
2. Entre no diretório: `cd dotX/`
3. Instale as dependencias do Ruby: `bundle install`
4. Inicie o servidor Jekyll: `jekyll serve`

Acesse, [localhost:4000/dotX](http://localhost:4000/dotX)

### Usando Rake tasks

* Criar nova página: `rake page name="contato.md"`
* Criar novo post: `rake post title="TITULO DO POST"`

### Fazendo o deploy no Github

1. Altere as variáveis `GITHUB_REPONAME` e `GITHUB_REPO_BRANCH` no arquivo `Rakefile`
2. Rode o comando `rake` ou `rake publish` para publicar os arquivos finais no Github

---

## Licença

Este tema é liberado sob licença [MIT](https://github.com/nandomoreirame/dotX/blob/master/LICENSE).

---

## Demo e download

[Demo](http://nandomoreira.me/dotX){: .button} [Download](https://github.com/nandomoreirame/dotX/archive/master.zip){: .button-secondary}

