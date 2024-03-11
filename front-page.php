<?php

get_header();
?>

<main id="primary" class="site-main">
  <section class="banner">
    <?php get_template_part('parts/banner-video/banner-video'); ?>
    <img class="banner__logo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
  </section>
  <section class="story section">
    <h2 class="story__title">L'histoire</h2>
    <article id="" class="story__article">
      <p class="section__text">
        <?php echo get_theme_mod('story'); ?>
      </p>
    </article>
    <article id="characters">
      <div class="main-character">
        <h3>Les personnages</h3>
        <?php get_template_part('parts/characters-swiper/characters-swiper'); ?>
      </div>
    </article>
    <article id="place">
      <div>
        <h3>Le Lieu</h3>
        <p class="section__text">
          <?php echo get_theme_mod('place'); ?>
        </p>
      </div>
      <div class="story__moving-clouds"></div>

    </article>
  </section>


  <section id="studio" class="section">
    <h2>Studio Koukaki</h2>
    <div>
      <p class="section__text">Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé,
        produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons
        deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques,
        principalement autour de la culture de notre pays natal, le Japon.</p>
      <p class="section__text">Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise
        éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur
        incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et
        capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats
        errants”.</p>
    </div>
  </section>
</main><!-- #main -->

<?php
get_footer();
