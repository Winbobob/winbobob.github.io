---
layout: post
title: "Compilado de funções úteis para seu projeto Wordpress"
permalink: compilado-de-funcoes-uteis-para-seu-projeto-wordpress
date: 2015-07-23 22:25:15
description: "Nesse artigo vou pressupor que você já saiba o que é o Wordpress e saiba pelo menos o básico de PHP"
keywords: "funções, wordpress, dicas, programação, php, web, desenvolvimento"
cover: "/assets/images/posts/2015/07/compilado-de-funcoes-uteis-para-seu-projeto-wordpress.jpg"
comments: true
categories:
- php
- wordpress
tags:
- php
- wordpress
- funcoes
---

Nesse artigo vou pressupor que você já saiba o que é o Wordpress e saiba pelo menos o básico de PHP :)

Sabendo disso vou lhes mostrar algumas funções úteis para qualquer projeto Wordpress, seja ele institucional, blog, portfolio ou portal de notícias.

***

#### Clean wp_head()

Essa função limpa algumas tags geradas pela função `wp_head()` do WP.

{% highlight php %}
<?php
function head_cleanup() {
  remove_action('wp_head', 'feed_links_extra', 3); // Category feeds.
  remove_action('wp_head', 'feed_links', 2); // Post and comment feeds.
  remove_action('wp_head', 'rsd_link'); // EditURI link.
  remove_action('wp_head', 'wlwmanifest_link'); // Windows live writer.
  remove_action('wp_head', 'index_rel_link'); // Index link.
  remove_action('wp_head', 'parent_post_rel_link', 10, 0); // Previous link.
  remove_action('wp_head', 'start_post_rel_link', 10, 0); // Start link.
  remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0); // Links for adjacent posts.
  remove_action('wp_head', 'wp_generator'); // WP version.
}

add_action('init', 'head_cleanup');
{% endhighlight %}

***

#### Remover CSS default da galeria

Essa pequena linha com a função `add_filter()` do wordpress remove o CSS padrão gerado pelo Wordpress para a galeria que é inserida dentro do editor.

{% highlight php %}
<?php
/**
 * Remove injected CSS from gallery.
 */
add_filter('use_default_gallery_style', '__return_false');
{% endhighlight %}

***

#### Painel pais clean

Se você quer um painel administrativo mais limpo basta usar a linhas abaixo.

{% highlight php %}
<?php
/**
 * Remove widgets dashboard.
 */
function admin_remove_dashboard_widgets() {
  remove_meta_box('dashboard_right_now', 'dashboard', 'normal');
  remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
  remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
  remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
  remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
  remove_meta_box('dashboard_primary', 'dashboard', 'side');
  remove_meta_box('dashboard_secondary', 'dashboard', 'side');
  remove_meta_box('dashboard_recent_drafts', 'dashboard', 'side');

  // Yoast's SEO Plugin Widget
  remove_meta_box('yoast_db_widget', 'dashboard', 'normal');
}

add_action('wp_dashboard_setup', 'admin_remove_dashboard_widgets');
{% endhighlight %}

Você também pode remover o painel de "Bem vindo" padrão do Wordpress com as linhas abaixo.

{% highlight php %}
<?php
/**
 * Remove Welcome Panel.
 */
remove_action('welcome_panel', 'wp_welcome_panel');
{% endhighlight %}

***

#### Adicione um ID na tag `body`

Pra alguns essa função pode ser bem útl... ou não.

{% highlight php %}
<?php
/**
 * The body ID
 */
function add_body_id() {
  global $post;

  if (is_home()) {
    echo 'id="home"';
  } elseif (is_single()) {
    echo 'id="single"';
  } elseif (is_page()) {

    $post = get_post($post->ID);
    if(!empty($post->post_name)) {
      echo 'id="page-'.$post->post_name.'"';
    } else {
      echo 'id="page"';
    }

  } elseif (is_search()) {
    echo 'id="search"';
  } elseif (is_archive()) {
    echo 'id="archive"';
  } elseif (is_404()) {
    echo 'id="error404"';
  }
}
{% endhighlight %}

Basta chamar ela dentro da sua tag `body`

{% highlight php %}
<body id="<?php add_body_id() ?>">
{% endhighlight %}

***

#### Trocando a localização do template de busca

Quando você usa a função `get_search_form()` você precisa criar o template `searchform.php` na raiz do seu tema ou o Wordpress irá usar o template padrão dele. Com essa função você consegue colocar o seu template em qualquer outro diretório personalizado a seu gosto.

{% highlight php %}
<?php
/*
 * change get_search_form
 * */
function my_custom_get_search_form() {
  $form = '';
  locate_template('/templates/searchform.php', true, false);
  return $form;
}
add_filter('get_search_form', 'my_custom_get_search_form');
{% endhighlight %}

***

#### Adicionar Google Analytics no footer

Essa função tem um escript global do GA junto com os scripts chamados pela função `wp_footer()`. Mas antes você precisa definir uma constante de configuração chamada `define(GOOGLE_ANALYTICS_ID, 'UA-12345678-9')` antes de chamar a função.

{% highlight php %}
<?php
/**
 * Script for Google Analytics on wp_footer
 */
function add_google_analytics() {
?>
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', '<?php echo GOOGLE_ANALYTICS_ID ?>']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
<?php
}

if (defined('GOOGLE_ANALYTICS_ID')) {
  add_action('wp_footer', 'add_google_analytics', 20);
}
{% endhighlight %}

***

#### Trocar a label de "Posts" para "Notícias"

Com essas duas funções você consigurá alterar as labels de "Posts", "Categorias" e "Tags" padrões do Wordpress para qualquer nome que você desejar.

{% highlight php %}
<?php
/**
 * Change blog labels "Posts" to "Notícias"
 **/
function change_post_menu_label() {
  global $menu;
  global $submenu;
  $menu[5][0]                 = 'Notícias';
  $submenu['edit.php'][5][0]  = 'Notícias';
  $submenu['edit.php'][10][0] = 'Nova notícia';
  // $submenu['edit.php'][15][0] = 'Status'; # alterar label de Categoria
  // $submenu['edit.php'][16][0] = 'Labels'; # alterar label de Tags
  echo '';
}

function change_post_object_label() {
  global $wp_post_types;
  $labels = &$wp_post_types['post']->labels;

  $labels->name               = 'Notícias';
  $labels->singular_name      = 'Notícias';
  $labels->add_new            = 'Nova notícia';
  $labels->add_new_item       = 'Nova notícia';
  $labels->edit_item          = 'Editar';
  $labels->new_item           = 'Nova notícia';
  $labels->view_item          = 'Visualizar';
  $labels->search_items       = 'Buscar notícias';
  $labels->not_found          = 'Nada encontrado';
  $labels->not_found_in_trash = 'Nada na lixeira';
}

add_action( 'init', 'change_post_object_label' );
add_action( 'admin_menu', 'change_post_menu_label' );
{% endhighlight %}


***

## Bonus **

#### Configurações iniciais

Quando eu estou criando um tema novo gosto de iniciar pelo arquivo de configurações, nele eu crio constantes globais para todo o projeto, veja como fica.

{% highlight php %}
<?php
/**
 *  Definitions
 */
$the_theme = wp_get_theme();
define('THEME_NAME', $the_theme['Name']);
define('THEME_VERSION', $the_theme['Version']);
define('THEME_FX', $the_theme->template);
define('THEME_PATH', get_stylesheet_directory());
define('THEME_URL', get_stylesheet_directory_uri());
define('SITE_URL', get_bloginfo('url' ));
{% endhighlight %}

Com essas linhas eu consigo ter:

  - THEME_NAME: o nome do tema
  - THEME_VERSION: a versão
  - THEME_FX: um prefixo, eu uso sempre em traduções
  - THEME_PATH: o caminho completo do tema
  - THEME_URL: a URL do tema (uso sempre para os assets como css e js)
  - SITE_URL: por fim a URL do projeto.

Eu armazeno em constantes porque fica mais fácil de lembrar e me poupa tempo no desenvolvimento.

Indo nessa, espero que tenham gostado, até breve.
