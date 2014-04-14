<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html class="no-js">
<!--<![endif]-->
<head>
  <meta charset="utf-8">
  <title>David Gilbertson Web Design</title>

  <!-- <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/rv_logo_70.png"> -->

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="description" content="David Gilbertson is a web designer and developer. An excellent one, to be frank.">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1">
  <!-- injected-css -->

  <!--[if lt IE 9]>
  <script src="<?php echo get_template_directory_uri(); ?>/vendor/js/html5.js"></script>
  <![endif]-->
  <script>var DG = {};</script>
  <?php wp_head(); ?>

  <!-- <link rel="prefetch" href="blog" /> -->
  <!-- <link rel="prerender" href="blog"> -->

  <!-- <link href='http://fonts.googleapis.com/css?family=Lora' rel='stylesheet' type='text/css'> -->
  <link href='http://fonts.googleapis.com/css?family=Josefin+Slab:300,400,600' rel='stylesheet' type='text/css'>
  <style>
    @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 300;
        src: local('Raleway Light'), local('Raleway-Light'), url(http://themes.googleusercontent.com/static/fonts/raleway/v7/-_Ctzj9b56b8RgXW8FAriRsxEYwM7FgeyaSgU71cLG0.woff) format('woff');
    }
    @font-face {
        font-family: 'Lora';
        font-style: normal;
        font-weight: 200;
        src: local('Lora'), local('Lora'), url(http://themes.googleusercontent.com/static/fonts/raleway/v7/-_Ctzj9b56b8RgXW8FAriRsxEYwM7FgeyaSgU71cLG0.woffwoff) format('woff');
    }
    </style>
</head>


<body <?php body_class(dg_get_page_name(false)); ?> >
  <div id="test">
    <span class="visible-xs">xs</span>
    <span class="visible-sm">sm</span>
    <span class="visible-md">md</span>
    <span class="visible-lg">lg</span>
  </div>

<!-- <nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbar-collapse">
      <ul class="nav navbar-nav navbar-right">
        <li><a id="nav-home" href="">HOME</a></li>
        <li><a id="nav-portfolio" href="portfolio">PORTFOLIO</a></li>
        <li><a id="nav-blog" href="blog">BLOG</a></li>
      </ul>
    </div>

    <div class="navbar-header">
      <button id="menu-button" class="menu-icon visible-xs">
        <span class="menu-icon-bar"></span>
        <span class="menu-icon-bar"></span>
        <span class="menu-icon-bar"></span>
      </button>
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="#" class="navbar-brand home-link hidden-xs hidden-ss">David Gilbertson Web Design</a>
      <a href="#" class="navbar-brand home-link visible-xs hidden-ss">David G Web Design</a>
      <a href="#" class="navbar-brand home-link visible-ss">David G</a>
    </div>

  </div>
</nav> -->



  <nav id="menu-contents" class="menu-contents">
    <div class="row menu-row">
      <div class="col col-xs-12 col-sm-4"><a id="nav-home" class="nav-link" href="/" title="">HOME</a></div>
      <div class="col col-xs-12 col-sm-4"><a id="nav-portfolio" class="nav-link" href="portfolio" title="">PORTFOLIO</a></div>
      <div class="col col-xs-12 col-sm-4"><a id="nav-blog" class="nav-link" href="blog" title="">BLOG</a></div>
    </div>
  </nav>

  <div id="body-wrapper" class="body-wrapper" role="navigation">
    <header class="dg-navbar container-fluid">
      <a href="#" class="home-link hidden-xs hidden-ss" title="David Gilbertsion Web Design">David Gilbertson Web Design</a>
      <a href="#" class="home-link visible-xs hidden-ss" title="David Gilbertsion Web Design">David G Web Design</a>
      <a href="#" class="home-link visible-ss" title="David Gilbertsion Web Design">David G</a>
      <button id="menu-button" class="menu-icon visible-xs visible-sm">
        <span class="menu-icon-bar"></span>
        <span class="menu-icon-bar"></span>
        <span class="menu-icon-bar"></span>
      </button>
      <ul class="dg-navbar-nav hidden-xs hidden-sm">
        <li><a id="nav-home" class="navbar-link home" href="/" title="">HOME</a></li>
        <li><a id="nav-portfolio" class="navbar-link portfolio" href="portfolio" title="">PORTFOLIO</a></li>
        <li><a id="nav-blog" class="navbar-link blog" href="blog" title="">BLOG</a></li>
      </ul>
    </header>
    <div id="body-content" class="body-content container-fluid">
      <div class="row">