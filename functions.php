<?php
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles()
{
  wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
  wp_enqueue_script('helper-functions', get_stylesheet_directory_uri() . '/assets/js/helper-functions.js');
  wp_enqueue_script('title-animation', get_stylesheet_directory_uri() . '/assets/js/title-animation.js');
  wp_enqueue_script('sections-animation', get_stylesheet_directory_uri() . '/assets/js/sections-animation.js');
  wp_enqueue_script('banner-animation', get_stylesheet_directory_uri() . '/assets/js/banner-animation.js');
  wp_enqueue_script('clouds-animation', get_stylesheet_directory_uri() . '/assets/js/clouds-animation.js');
  wp_enqueue_script('super-menu', get_stylesheet_directory_uri() . '/assets/js/super-menu.js');
  // pass PHP variable(s) to JS :
  wp_localize_script('super-menu', 'childThemeParams', array(
    'themeUrl' => get_stylesheet_directory_uri(), // Other parameters as needed
  ));
}

// Get customizer options form parent theme
if (get_stylesheet() !== get_template()) {
  add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($value, $old_value) {
    update_option('theme_mods_' . get_template(), $value);
    return $old_value; // prevent update to child theme mods
  }, 10, 2);
  add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($default) {
    return get_option('theme_mods_' . get_template(), $default);
  });
}
