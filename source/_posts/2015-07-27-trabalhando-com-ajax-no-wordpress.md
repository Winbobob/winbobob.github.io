---
layout: post
title: "Trabalhando com Ajax usando jQuery no Wordpress"
permalink: trabalhando-com-ajax-usando-jquery-no-wordpress
date: 2015-07-27 01:56:12
comments: true
description: "Trabalhar com ajax usando jQuery no Wordpress é muito fácil"
keywords: "wordpress, jquery, php, ajax, programacao"
categories:
- wordpress
- jquery
- php
tags:
- wordpress
- jquery
- ajax
- php
- programacao
---

Trabalhar com ajax usando [jQuery](http://www.jquery.com) no [Wordpress](http://br.wordpress.org) é muito fácil, hoje vou explicar com apenas algumas linhas de código um exemplo simplificado de como fazer essa grande façanha.

#### Script footer

A primeira coisa que você deve fazer é incluir o `admin-ajax.php` no seu tema.. usaremos a função `wp_enqueue_script()` do wordpress para isso, e usando `add_action()` incluiremos nossos scripts na lista de scripts a serem chamadas pela função `wp_footer()` no final do nosso tema.

**Fica mais ou menos assim:**

{% highlight php %}
<?php
/*
 *  add Footer scripts
 */
function footer_scripts() {
  wp_enqueue_script( 'main', get_stylesheet_directory_uri() . '/js/main.js', array(), null, true );
  wp_localize_script( 'main', 'wpAjax', array( 'ajaxurl'=>admin_url('admin-ajax.php') ) );
}
add_action( 'wp_enqueue_scripts', 'footer_scripts', 1 );
?>
{% endhighlight %}

Após inserir essas linhas de código no seu arquivo `functions.php` vamos ver como ficou nosso site no navegador.. nada mudou certo? Aparentemente não, mas vamos visualizar o código fonte.

<a href="/assets/images/posts/2015/07/trabalhando-com-ajax-usando-jquery-no-wordpress-scripts-footer.png" class="swipebox" rel="gallery" title="{{ page.title }}">
  <img src="/assets/images/posts/2015/07/trabalhando-com-ajax-usando-jquery-no-wordpress-scripts-footer.png" alt="{{ page.title }}">
</a>

#### O JavaScript

Note que junto com o `admin-ajax.php` nós incluimos também um arquivo chamado `main.js`, nesse arquivo vamos adicionar nosso jQuery ajax para chamar nossa função PHP.

{% highlight javascript %}
(function($) {
  $('.mypost').on('click', function(e) {
    var post_id = $(this).data('id'),
        $postContent = $("#post-" + post_id);

    $postContent.html('');

    var data = {
      'action'  : 'PostAjaxme',
      'post-id' : post_id
    };

    var request = $.ajax({
      url      : wpAjax.ajaxurl,
      data     : data,
      method   : "POST",
      dataType : 'json'
    });

    request.success(function(r) {
      var html = '<div class="entry-content">'+r.html+'</div>';
      $postContent.html(html);
    });
    e.preventDefault();
  });
})(jQuery);
{% endhighlight %}

Ao clicar na classe `.mypost` o método `on()` do jQuery vai disparar um click para uma função, nessa função vamos pegar o ID do post que estará em um atributo chamado `data-id` no nosso HTML.

{% highlight php %}
<article id="post-<?php the_ID(); ?>" <?php post_class('mypost'); ?> data-id="<?php the_id() ?>">
{% endhighlight %}

Ainda no jQuery nós precisamos saber onde vamos incluir o retorno de nosso PHP, então eu vou colocar dentro do próprio post, com a variável `$postContent`, limpando o que já existia nesse container.

A variável `data` é o objeto que será passado para o método `$.ajax` do jQuery, nesse mesmo método estamos passando mais alguns paramentros como a url do nosso arquivo `admin-ajax.php`, o tipo de metodo como `POST` e o dataType como `json`.

Com tudo isso configurado no callback `.success()` trataremos de exibir o resultado do nosso ajax, colocando esse resultado dentro do nosso container criado logo acima.

#### Nosso PHP

No javascript nós passamos uma variável `action` com valor `PostAjaxme`, certo? Pois bem.. usaremos esse valor dessa variável em nosso PHP, passando ele como parametro na função `add_action()` do Wordpress, veja como.

<?php
add_action( 'wp_ajax_PostAjaxme', 'SUCA_FUNCAO_AQUI' );
add_action( 'wp_ajax_nopriv_PostAjaxme', 'SUCA_FUNCAO_AQUI' );
?>

Note que nossa action ficou concatenada com `wp_ajax_` e `wp_ajax_nopriv_`, é assim que o Wordpress faz a ligação do seu JavaScript com a sua função PHP.

Se você quiser criar seu ajax apenas para o painel administratido do Wordpress basta usar apenas o `wp_ajax_` para tal, mas se você quiser usar no front do seu tema você precisa usar o `wp_ajax_nopriv_` juntamente com o `wp_ajax_`.

#### A função do PHP

Feito isso vamos criar nossa função e chamar elas dentro das funções `add_action()` do WP. Fica mais ou menos assim:

{% highlight php %}
<?php
function PostAjaxme_callback() {
}
add_action( 'wp_ajax_PostAjaxme', 'PostAjaxme_callback' );
add_action( 'wp_ajax_nopriv_PostAjaxme', 'PostAjaxme_callback' );
?>
{% endhighlight %}

Ai é só usar a criatividade de um programador nato e "botar pra quebrar!". No meu exemplo eu fiz o retorno de uma simples mensagem em HTML.

{% highlight php %}
<?php
function PostAjaxme_callback() {
  $return_array = array();
  $post_ID = intval($_POST['post-id']);

  $return_array['html'] .= '<p>';
  $return_array['html'] .= 'Olá eu ou a requisição <b>Ajax</b> que você acabou de chamar!';
  $return_array['html'] .= 'O meu ID é: <b>'.$post_ID.'</b>';
  $return_array['html'] .= '</p>';

  echo json_encode($return_array);
  wp_die();
}
add_action( 'wp_ajax_PostAjaxme', 'PostAjaxme_callback' );
add_action( 'wp_ajax_nopriv_PostAjaxme', 'PostAjaxme_callback' );
?>
{% endhighlight %}

<img src="/assets/images/posts/2015/07/trabalhando-com-ajax-usando-jquery-no-wordpress-video-gif.gif" alt="{{ page.title }} Video gif">


### Conclusão

É muito útil e relativamente simples trabalhar com Ajax no Wordpress, se você quiser baixar os exemplos estarão no meu [Github](https://github.com/nandomoreirame/Trabalhando-com-Ajax-usando-jQuery-no-Wordpress) para [download](https://github.com/nandomoreirame/Trabalhando-com-Ajax-usando-jQuery-no-Wordpress/archive/master.zip).

As funções são exemplos meramente ilustrativos e podem ser alteradas como você bem entender, como eu disse o Céu é o limite, use e abuse da sua criatividade como programador e divirta-se!

Esse é o post de hoje. Abraços!
