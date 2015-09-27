---
layout: post
title: "Como instalar o Gulp 4"
permalink: como-instalar-o-gulp-4
date: 2015-09-26 22:22:13
comments: true
description: "Gulp 4 não foi liberado ainda e se você não pode esperar para colocar suas mãos sobre ele, aqui vai como instalar o Gulp 4"
keywords: "gulp, gulpjs, node, nodejs, dicas, gulp4"
categories:
- gulp
tags:
- dicas
- node
- nodejs
---

[Gulp 4](https://github.com/gulpjs/gulp/tree/4.0) não foi liberado ainda e se você não pode esperar para colocar suas mãos sobre ele, aqui vai como instalar o **Gulp 4**.

## Instale o Gulp globalmente

Se você tiver uma versão anterior do Gulp instalado, desinstale primeiro. _**Talvez seja necessário executar este comando como um administrador ou um superusuário, dependendo do seu sistema.**_

{% highlight bash %}
npm uninstall -g gulp
npm install -g "gulpjs/gulp-cli#4.0"
{% endhighlight %}

Na minha máquina (Linux Mint Rebecca), eu não tinha problemas contínuos usando Gulp < 4 depois de instalar globalmente Gulp 4.

## Adicionar Gulp 4 em seus repositórios

Se você usar uma versão anterior do Gulp (ie Gulp 3.8.x ou anterior), remova-o do repositório que você deseja atualizar. _**Não se esqueça de especificar `--save-dev` ou `--save` para que o seu `package.json` seja atualizado.**_

{% highlight bash %}
cd your_repo/
npm uninstall gulp --save-dev # removendo o gulp 3.8.x local
npm install "gulpjs/gulp#4.0" --save-dev # instalando o gulp 4.0 local
{% endhighlight %}

## Possíveis problemas ao desinstalar Gulp

Na minha máquina, a versão anterior do Gulp não foi devidamente removida e eu comecei a ficar esse erro ao tentar executar:

{% highlight bash %}
/usr/local/lib/node_modules/gulp/bin/gulp.js:129
    gulpInst.start.apply(gulpInst, toRun);
                   ^
TypeError: Cannot call method 'apply' of undefined
    at /usr/local/lib/node_modules/gulp/bin/gulp.js:129:20
    at process._tickDomainCallback (node.js:492:13)
{% endhighlight %}

O que significa esse erro de rastreamento uso tel? `gulp.start()` não está mais no Gulp 4 e não deve ser chamado e o pacote `gulp-cli` deve ser chamado no lugar de pacote `gulp`.

Eu corri o seguinte comando:

{% highlight bash %}
ls -l $`whereis gulp`
{% endhighlight %}

E percebi que eu ainda tinha um arquivo do Gulp antigo em uma pasta bin:

{% highlight bash %}
lrwxrwxrwx 1 root root 40 May  3 11:17 /usr/bin/gulp -> ../lib/node_modules/gulp-cli/bin/gulp.js
lrwxrwxrwx 1 root root 40 May  3 11:17 /usr/bin/X11/gulp -> ../lib/node_modules/gulp-cli/bin/gulp.js
lrwxrwxrwx 1 root root 36 Apr  3 21:41 /usr/local/bin/gulp -> ../lib/node_modules/gulp/bin/gulp.js
{% endhighlight %}

Simplesmente remova arquivos antigos:

{% highlight bash %}
sudo rm /usr/local/bin/gulp
sudo rm -rf /usr/local/lib/node_modules/gulp
{% endhighlight %}

> Trandução de [How to install Gulp 4](http://blog.reactandbethankful.com/posts/2015/05/01/how-to-install-gulp-4/)