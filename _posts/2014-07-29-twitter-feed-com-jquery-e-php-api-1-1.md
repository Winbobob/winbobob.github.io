---
layout: post
title: Twitter feed com jQuery e PHP (api 1.1)
date: 2014-07-29 16:33
description: Hoje vamos criar um box com feed do twitter utilizando a nova api 1.1 com jQuery e PHP.
keywords: "api, jQuery, html, php, twitter"
categories:
- php
- jquery
tags:
- api
- html
- jquery
- php
- twitter

comments: true
cover: '/assets/uploads/witter-feed-com-jquery-e-php-api-1-1.jpg'
---

Hoje vamos criar um box com feed do twitter utilizando a nova <a href="https://dev.twitter.com/docs/platform-objects" target="_blank">api 1.1</a> com jQuery e PHP.

Para essa façanha vamos usar a API <a href="http://github.com/j7mbo/twitter-api-php" target="_blank">Twitter-API-PHP</a>, <a href="http://jquery.com/" target="_blank">jQuery</a> e <a href="http://getbootstrap.com/" target="_blank">Bootstrap 3</a>.

Primeiramente você precisa criar uma conta de desenvolvedor e criar um app aqui <a href="https://dev.twitter.com/apps/" target="_blank">https://dev.twitter.com/apps/</a>


#### config.php

{% highlight php %}
<?php
// Simple PHP Wrapper for Twitter API v1.1 calls
// https://github.com/J7mbo/twitter-api-php
require_once 'TwitterAPIExchange.php';

$username = 'nandomoreirame'; // node do usuario
$count    = '20'; // numero de tweets que sera exibido

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token'        => TOKEN_DE_ACESSO,
    'oauth_access_token_secret' => TOKEN_SECRETO_DE_ACESSO,
    'consumer_key'              => CHAVE_DE_CLIENTE,
    'consumer_secret'           => CHAVE_SECRETA_DE_CLIENTE"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$requestMethod = 'GET';
$getfield = '?username='.$username.'&count='.$count;
?>
{% endhighlight %}

#### functions.php

{% highlight php %}
<?php
function twitter_feed()
{
    global $url, $settings, $requestMethod, $getfield;

    $twitter = new TwitterAPIExchange($settings);
    $tw_data = json_decode($twitter->setGetfield($getfield)->buildOauth($url, $requestMethod)->performRequest(), true);

    if($tw_data)
    {
        if($tw_data["errors"][0]["message"] != "")
        {
            echo "<h3>Desculpe, ocorreu um problema.</h3><p>Twitter retornou a seguinte mensagem de erro:</p><p><em>".$tw_data[errors][0]["message"]."</em></p>";
            exit();
        }
        else
        {
            $twt_data = array();
            foreach ($tw_data as $i => $tw)
            {
                $twt_data[$i]['date']           = twitter_date_format($tw['created_at']);
                $twt_data[$i]['id']             = $tw['id'];
                $twt_data[$i]['avatar']         = $tw['user']['profile_image_url'];
                $twt_data[$i]['user']           = $tw['user']['screen_name'];
                $twt_data[$i]['text']           = $tw['text'];
                $twt_data[$i]['favorite_count'] = $tw['favorite_count'];
                $twt_data[$i]['retweet_count']  = $tw['retweet_count'];
            }

            return $twt_data;
        }
    }
    else
    {
        die('Problema: O twitter nao retornou nada.');
    }
}


function twitter_date_format($date)
{
    // get current timestampt
    $current = strtotime("now");

    // get timestamp when tweet created
    $date = strtotime($date);

    // get difference
    $new_date = $current - $date;

    // calculate different time values
    $minute = 60;
    $hour   = $minute * 60;
    $day    = $hour * 24;
    $week   = $day * 7;

    if(is_numeric($new_date) && $new_date > 0)
    {
        // if less then 3 seconds
        if($new_date < 3) return "agora mesmo";

        // if less then minute
        if($new_date < $minute) return floor($new_date) . " segundos atrás";

        // if less then 2 minutes
        if($new_date < $minute * 2) return "cerca de 1 minuto atrás";

        // if less then hour
        if($new_date < $hour) return floor($new_date / $minute) . " minutos atrás";

        // if less then 2 hours
        if($new_date < $hour * 2) return "cerca de 1 hora atrás";

        // if less then day
        if($new_date < $day) return floor($new_date / $hour) . " horas atrás";

        // if more then day, but less then 2 days
        if($new_date > $day && $new_date < $day * 2) return "ontem";

        // if less then year
        if($new_date < $day * 365) return floor($new_date / $day) . " dias atrás";

        // else return more than a year
        return "mais de um ano atrás";
    }
}
?>
{% endhighlight %}

#### O HTML

{% highlight html %}
<aside class="tweets-box">
  <div class="tweets-header">
    <h3>Tweets</h3>
  </div>
  <div id="tweets">
    <div class="text-center">
      <img src="images/loader.gif" height="11" width="43" alt="loader">
    </div>
  </div>
</aside>
{% endhighlight %}

#### ajax-tweets.php

{% highlight php %}
<?php
include 'config.php';
include 'functions.php';

$tweets = twitter_feed();
echo json_encode($tweets);
die();
?>
{% endhighlight %}

#### O Javascript

{% highlight javascript %}
(function ($) {
  $(window).load(function() {
    var tweets = $("#tweets"),
    html   = '<ul class="media-list">';

    $.ajax({
      url: "./ajax-tweets.php",
      dataType: 'json'
    })
    .done(function( data ) {
      $.each(data, function( i, tweet )
      {
        html += '<li class="media">';
        html += '<a class="pull-left" href="http://twitter.com/'+tweet.user+'" target="_blank">';
        html += '<img src="'+tweet.avatar+'" alt="Foto do perfil de '+tweet.user+'" class="img-circle">';
        html += '</a>';
        html += '<div class="media-body">';
        html += '<h4 class="media-heading">';
        html += '<a href="http://twitter.com/'+tweet.user+'" target="_blank">@'+tweet.user+'</a>';
        html += '<small>'+tweet.date+'</small>';
        html += '</h4>';
        html += '<p>'+ tweet.text +'</p>';
        html += '</div>';
        html += '</li>';
      });

      html += '</ul>';

      tweets.animate({ 'height':'300px' }, 200).html(html);
    });
  });
})(jQuery);
{% endhighlight %}

#### O CSS

{% highlight css %}
.tweets-box {
  position: relative;
  background: #fff;
  box-shadow: 0px 2px 2px #ccc;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  border-radius: 3px;
}
.tweets-box .tweets-header {
  padding: 20px 20px 10px;
  background-color: #eee;
}
.tweets-box .tweets-header h3 {
  margin-top: 0;
}
.tweets-box #tweets {
  padding: 10px;
  overflow-x: hidden;
  max-height: 300px;
  overflow-y: auto;
}
.tweets-box #tweets .media {
  padding: 10px;
  margin-bottom: 5px;
  border-bottom: 1px solid #eee;
}
.tweets-box #tweets .media .media-heading {
  display: block;
  margin-bottom: 5px;
}
.tweets-box #tweets .media .media-heading small {
  font-size: 12px;
  font-style: italic;
  margin-left: 10px;
}
{% endhighlight %}

E é isso ai, os arquivos estão no repositório do Github e os links logo abaixo para download.

<a href="https://github.com/nandomoreirame/Twitter-feed-com-jQuery-e-PHP-api-1.1-">Repositório no Github</a> | <a href="https://github.com/nandomoreirame/Twitter-feed-com-jQuery-e-PHP-api-1.1-/archive/master.zip">Download</a>

Boa programação e enjoy!
