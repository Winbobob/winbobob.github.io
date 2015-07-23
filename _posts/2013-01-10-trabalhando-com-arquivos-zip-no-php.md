---
layout: post
title: Trabalhando com arquivos .zip no PHP
date: 2013-01-10 22:51
description: "Hoje vou explicar como trabalhar com arquivos .zip no PHP usando a classe ZipArchive"
keywords: "tutorial, arquivos, dicas, PHP, zip, programação"
categories:
- Dicas
- PHP
tags:
- arquivos
- zip
- dicas
- php
- programação
- tutorial
cover: '/assets/uploads/php-default.jpg'
comments: true
---

Olá meus queridos. Hoje vou explicar como trabalhar com arquivos `.zip` no PHP usando a classe `ZipArchive()`.

O processo é muito simples, e como todo programador sabe, precisamos criar uma instância da classe, fica assim:

{% highlight php %}
$zip = new ZipArchive();
{% endhighlight %}

Depois de instanciarmos a classe `ZipArchive()`, usamos o método `open()` para criar um arquivo `.zip` abrir ele para manipilarmos como quiser.

Assim:

{% highlight php %}
<?php
$zip = new ZipArchive();
$filename = "./imagens.zip";
$openZip = $zip->open( $filename, ZipArchive::CREATE);

if($openZip) {
    // faz alguma coisa..
}
else {
    // mensagem de erro..
}

$zip->close(); // fecha o arquivo
?>
{% endhighlight %}

Agora vamos adicionar arquivos em nosso .zip, vamos usar o método `addFile()` ou `addFromString()`, a diferença é que um adiciona qualquer arquivo, basta apontar para o caminho do arquivo, e o outro cria um arquivo de texto a partir de uma scring.

Certo, sabendo disso vamos adicionar alguns arquivos..

{% highlight php %}
<?php
$zip = new ZipArchive();
$filename = "./imagens.zip";
$openZip = $zip->open( $filename, ZipArchive::CREATE);

if($openZip) {
    $zip->addFile("/PATH/TO/FILE1.jpg", "imagem01.jpg");
    $zip->addFile("/PATH/TO/FILE2.jpg", "imagem02.jpg");
    $zip->addFile("/PATH/TO/FILE3.jpg", "imagem03.jpg");
    $zip->close(); // fecha o arquivo
}
else {
    exit("cannot open <$filename>\n"); // mensagem de erro..
}
?>
{% endhighlight %}

Agora com texto..

{% highlight php %}
<?php
$zip = new ZipArchive();
$filename = "./textos.zip";
$openZip = $zip->open( $filename, ZipArchive::CREATE);

if($openZip) {
    $zip->addFromString("nomeDoArquivo1.txt", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.");
    $zip->addFromString("nomeDoArquivo2.txt", "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.");
    $zip->addFromString("nomeDoArquivo3.txt", "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.");
    $zip->close(); // fecha o arquivo
}
else {
    exit("cannot open <$filename>\n"); // mensagem de erro..
}
?>
{% endhighlight %}


### Extraindo os arquivos

Para extrair os arquivos usaremos o método `extractTo('/PATH/TO/EXTRACT/FILES/')`.

{% highlight php %}
<?php
$zip = new ZipArchive();
$filename = "./zip_imagens.zip";
$openZip = $zip->open($filename);
if($openZip) {
    $zip->extractTo('./imagens/'); // extrai os arquivos no diretório imagens
    $zip->close(); // fecha o arquivo
}
else {
    exit("cannot open <$filename>\n"); // mensagem de erro..
}
?>
{% endhighlight %}

No código acima extraímos todas as imagens que estavam dentro do arquivo `'zip_imagens.zip'` para a pasta `"imagens"`.

### Contando o número arquivos de um zip

Para retornar a quantidade arquivos de dentro de um zip basta passar `$zip->numFiles`.

{% highlight php %}
<?php
$zip = new ZipArchive();
$filename = "./zip_imagens.zip";
$zip->open($filename);
echo "Numero total de imagens: " . $zip->numFiles . "\n";
?>
{% endhighlight %}

### Recuperando o nome dos arquivos dentro do zip

Usando o método `getNameIndex($indice)` e passando o numero do índice obteremos o nome do arquivo. Usaremos um `for()`, junto com o total de arquivos que recuperamos logo acima com a variavel `$zip->numFiles` para recuperar esse índice e listar o nome de todos os arquivos que estão dentro de nosso `'zip_imagens.zip'`. Fica assim:

{% highlight php %}
<?php
$zip = new ZipArchive();
$filename = "./zip_imagens.zip";
$zip->open($filename);

for ($i = 0; $i < $zip->numFiles; $i++) {
    $filename = $zip->getNameIndex($i);
    echo "O nome do arquivo é: " . $filename . "\n";
}
?>
{% endhighlight %}

Esse foi um breve passo-a-passo de alguns recursos da classe **`ZipArchive()`** do **PHP**, para mais informações sobre acessem: **[php.net/zip](http://www.php.net/zip)**.

Forte abraço!