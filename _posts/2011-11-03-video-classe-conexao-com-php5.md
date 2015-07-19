---
layout: post
title: "Vídeo: Classe Conexão com PHP5"
date: 2011-11-03 06:18
description: "A função number_format() do PHP, além de trocar ponto (.) por vírgula (,), também serve para definir quantas casas decimais teremos no valor"
keywords: "tutorial, php, programação, Vídeo"
comments: true
categories:
- PHP
- Programação
tags:
- php
- programação
- Vídeo
---
<!--
<div class="video-responsive">
  <iframe src="http://www.youtube.com/embed/fOW79dy1Y-A" frameborder="0" width="100%" height="350"></iframe>
</div>
-->

<strong>Conexao.class.php</strong>

{% highlight php %}
<?php
class Conexao
{
  private $_host = 'localhost';
  private $_user = 'root';
  private $_pass = '';
  private $_database = 'video-aula';
  public  $_con;

  function __construct() {
    $this->conecta();
  }

  function conecta() {
    $_con = mysql_connect($this->_host, $this->_user, $this->_pass) or die("Erro ao conectar ao servidor => " . mysql_error());
    $_con = mysql_select_db($this->_database) or die("Erro ao selecionar o Banco de Dados => " . mysql_error());
    return $_con;
  }
}
?>
{% endhighlight %}

<strong>index.php</strong>

{% highlight php %}
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <title> Classe Conexão com PHP5 </title>
  </head>
  <body>
    <?php
      include_once 'classes/Conexao.class.php';
      $conecta = new Conexao();
    ?>
  </body>
</html>
{% endhighlight %}

