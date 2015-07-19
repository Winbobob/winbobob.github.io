---
layout: post
title: "Diferença entre require(), require_once(), include, include_once()"
date: 2012-04-03 10:50
description:  "Diferença entre require(), require_once(), include, include_once() - Sabe que eu não sabia disso, e muito tempo utilizo as duas funcões."
keywords: "Dicas, PHP, Programação, tutorial"
comments: true
categories:
- Dicas
- PHP
- Programação
tags:
- dicas
- php
- programação
- tutorial
---

Sabe que eu não sabia disso, e muito tempo utilizo as duas funcões.

**include():** Tenta incluir uma página. Caso de algum erro, o script retorna um warning (aviso) e prossegue com a execução do script. Aceita a passagem de variáveis (GET) na string. Pode ser utilizado em uma estrutura de condicionais que terá seu efeito perpetuado todas as vezes que for chamado.

**Require():** Tenta incluir uma página. Caso de algum erro, o script retorna um fatal error(erro fatal) (Que maravilha!) e aborta a execução do script. Aborta mesmo, já era não roda nada mais dali pra frente. Não aceita a passagem de variáveis (GET) na string. Não recomendo que utilizem nas estruturas condicionais, a menos que se deseje o seu efeito, de ser executada apenas uma vez.

**include_once() e require_once():** Idênticas as suas funções simples, porém se o arquivo referenciado já foi incluso na página anteriormente, a função retorna ‘false’ e o arquivo não é incluido. É bom quando temos muitos includes e já estamos perdidos, sem saber o que está incluindo o que.

<small>FONTE: [http://webpub.wordpress.com/](http://webpub.wordpress.com/2007/11/11/diferenca-entre-require-require_once-include-include_once/)</small>