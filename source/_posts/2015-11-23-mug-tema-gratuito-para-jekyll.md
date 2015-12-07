---
layout: post
title: "Mug, tema gratuito para Jekyll"
permalink: mug-tema-gratuito-para-jekyll
date: 2015-11-23 17:13:30
comments: true
description: "Mug, tema gratuito para Jekyll"
cover: http://raw.githubusercontent.com/nandomoreirame/mug/master/screenshot.png
keywords: "jekyll, download, free, tema, mug, gratuito"
categories:
- jekyll
tags:
- jekyll
- download
---

Olá galera, fiz mais um tema para Jekyll chamado **Mug**, você pode dar um confere nele clicando [aqui]({{ "/mug" | prepend: site.baseurl }}).

---

## Como usar

1. Faça o Download ou clone o repo `git clone git@github.com:nandomoreirame/mug.git`
2. Entre no diretório: `cd mug/`
3. Instale as dependencias do Ruby: `bundle install`
4. Inicie o servidor Jekyll: `jekyll serve`

Acesse, [localhost:4000/mug](http://localhost:4000/mug)

### Usando Rake tasks

* Criar nova página: `rake page name="contato.md"`
* Criar novo post: `rake post title="TITULO DO POST"`

### Fazendo o deploy no Github

1. Altere as variáveis `GITHUB_REPONAME` e `GITHUB_REPO_BRANCH` no arquivo `Rakefile`
2. Rode o comando `rake` ou `rake publish` para publicar os arquivos finais no Github

---

## Licença

Este tema é liberado sob licença [MIT](https://github.com/nandomoreirame/mug/blob/master/LICENSE).

---

## Demo e download

[Demo]({{ "/mug" | prepend: site.baseurl }}){: .button} [Download](https://github.com/nandomoreirame/mug/archive/master.zip){: .button}
