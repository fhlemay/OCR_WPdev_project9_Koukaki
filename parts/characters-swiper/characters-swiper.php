<?php
add_action('wp_footer', 'callback_swiper');
function callback_swiper()
{
  wp_enqueue_style(
    'swiper-style-config',
    get_stylesheet_directory_uri() . '/parts/characters-swiper/style.css'
  );
  wp_enqueue_script('swiper-config', get_stylesheet_directory_uri() . '/parts/characters-swiper/characters-swiper.js');
  wp_enqueue_style('swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
  wp_enqueue_script('swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
}
?>

<div class="swiper">
  <div class="swiper-wrapper">
    <?php
    $args = array(
      'post_type' => 'characters',
      'posts_per_page' => -1,
      'meta_key'  => '_main_char_field',
      'orderby'   => 'meta_value_num',

    );
    $characters_query = new WP_Query($args);

    while ($characters_query->have_posts()) {
      $characters_query->the_post();
      echo <<<EOL
      <div class="swiper-slide">
        <figure>
      EOL;
      echo get_the_post_thumbnail(get_the_ID(), 'full');
      echo '<figcaption>';
      the_title();
      echo <<<EOL
          </figcaption>
        </figure>
      </div>
      EOL;
    }
    ?>
  </div>
  <div class="swiper-pagination"></div>
</div>
