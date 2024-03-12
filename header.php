<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary">
      <?php esc_html_e('Skip to content', 'foce'); ?>
    </a>

    <header id="masthead" class="site-header">
      <nav id="site-navigation" class="main-navigation">
        <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>
        <div class="main-navigation__header">
          <div class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
              <?php bloginfo('name'); ?>
            </a></div>
          <img id="toggle-super-menu"
            src="<?php echo get_stylesheet_directory_uri() . '/assets/images/menu_open.png'; ?> " alt="burger">
        </div>
        <div class="super-menu">
          <img class="super-menu__logo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png' ;
            ?> "=alt="">
          <ul>
            <li id="decoration1"><a href="#story">Histoire</a></li>
            <li id="decoration2"><a href="#characters">Personnages</a></li>
            <li id="decoration3"><a href="#place">Lieu</a></li>
            <li id="decoration4"><a href="#studio">Studio Koukaki</a></li>
          </ul>
          <img class="super-menu__footer"
            src="<?php echo get_stylesheet_directory_uri() . '/assets/images/main-navigation-footer.png'; ?> " alt="">
        </div>


      </nav><!-- #site-navigation -->
    </header><!-- #masthead -->