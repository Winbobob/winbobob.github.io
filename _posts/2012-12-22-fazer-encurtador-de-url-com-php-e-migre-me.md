---
layout: post
title: Fazer encurtador de url com PHP e migre.me (atualizado)
date: 2012-12-22 14:45:22.000000000 -02:00
categories:
- Dicas
- HTML
- PHP
tags:
- dicas
- html
- php
- programação
- twitter
---

Olá galera!

Hoje vamos criar uma simples função para encurtar URL's com o site [migre.me](http://migre.me/).

Crie um arquivo chamado `short-url.php` e coloque o código abaixo:

{% highlight php %}
<?php

/**
 * migre_get_content function
 * @param string $url
 */
function migre_get_content( $url = null ) {
    if($url) {
        //  Initiate curl
        $ch = curl_init();
        // Disable SSL verification
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        // Will return the response, if false it print the response
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // Set the url
        curl_setopt($ch, CURLOPT_URL,$url);
        // Execute
        $result=curl_exec($ch);
        // Closing
        curl_close($ch);

        return $result;
    }
}

/**
 * shortURL function
 *
 * @param string $url
 * @author nandomoreira.me
 */
function shortURL($url) {
  # urlencode() = http://php.net/manual/pt_BR/function.urlencode.php
  $siteurl = urlencode($url);

  $migreme_url = "http://migre.me/api.json?url=" . $siteurl;

  $return = migre_get_content($migreme_url)
        or die ('<pre>Ocorreu um erro de comunicação com o Migre.me!</pre>');

    # json_decode() = http://php.net/manual/pt_BR/function.json-decode.php
    $return = json_decode($return);

  if ($return->info != 'OK')
      die ( '<pre>Ocorreu um erro ao encurtar sua url. ' . $return->info . '</pre>' );

  return $return ->migre;
}
?>
{% endhighlight %}

> **Importante:** toda vez que essa função for chamada ela irá gerar uma URL nova, então para os botões do twitter e do facebook chame apenas 1 (uma) vez a função e armazene o resultado. As redes sociais armazenam a URL para fazer a contagem.

Você precisa fazer o include do arquivo em seu projeto:

{% highlight php %}
<?php include_once "short-url.php"; ?>
{% endhighlight %}

No seu botao de tweet onde tem chamada `data-url=` basta chamar a funcao passado a url que será encurtada como parâmetro

Vai ficar assim:

{% highlight php %}
<?php
  include_once "short-url.php";
  $urlAntes = "http://nandomoreira.me/2012/12/22/fazer-encurtador-de-url-com-php-e-migre-me/";

  if(!isset($_SESSION['shorturl']) || empty($_SESSION['shorturl'])) {
      $url      = shortURL($urlAntes);
      $_SESSION['shorturl'] = $url;
  }

  $shorturl = $_SESSION['shorturl'];
?>
<a href="https://twitter.com/share" class="twitter-share-button" data-url="<?php echo $shorturl; ?>" data-text="TITULO DA NOTICIA" data-via="nando_dev" data-hashtags="demo">Tweet</a>
{% endhighlight %}

Em `data-text` troque onde diz `TITULO DA NOTICIA` pelo texto que quer quem aparece no tweet.

Segue abaixo um link para o repositório e o arquivo para download.

Até a próxima!

<a href="https://github.com/nandomoreirame/Fazer-encurtador-de-url-com-PHP-e-migre.me/archive/master.zip">Download</a> | <a href="https://github.com/nandomoreirame/Fazer-encurtador-de-url-com-PHP-e-migre.me">Repositório no Github</a>