<?php
// Style pour la section temporaire de la mise en nomination aux Oscars
// Dans le foote car on ne veut pas à devoir l'appeler ailleurs qu'ici (module indépendant).
// Ça ne serait pas une bonne pratique à faire. 
add_action('wp_footer', 'callback_slider');
function callback_slider()
{
  wp_enqueue_style(
    'characters-slider-style',
    get_stylesheet_directory_uri() . '/parts/characters-slider/style.css'
  );
  wp_enqueue_style( 'swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
  wp_enqueue_script( 'SwiperJS', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js' );
  wp_enqueue_script( 'slider', get_stylesheet_directory_uri() . '/parts/characters-slider/characters-slider.js' );
}
?>

<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>

