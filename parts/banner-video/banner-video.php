<?php
  // Style pour la section temporaire de la mise en nomination aux Oscars
  // Dans le foote car on ne veut pas à devoir l'appeler ailleurs qu'ici (module indépendant).
  // Ça ne serait pas une bonne pratique à faire. 
  add_action( 'wp_footer', 'callback_banner_video_style');
  function callback_banner_video_style () {
    wp_enqueue_style('banner-video-style', 
      get_stylesheet_directory_uri() . '/parts/banner-video/style.css' );
  }
?>

<video id="banner-video" autoplay loop muted poster= "<?php echo get_template_directory_uri() . '/assets/images/banner.png'; ?>">
  <source src="<?php echo get_stylesheet_directory_uri() . '/parts/banner-video/video/Studio_Koukaki_video_header.mp4'; ?>" type="video/mp4">
</video>
