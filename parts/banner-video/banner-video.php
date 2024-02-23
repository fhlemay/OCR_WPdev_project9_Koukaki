<?php
  // Style pour la vidéo sur la bannière. 
  // Dans le foote car on ne veut pas à devoir l'appeler ailleurs qu'ici (module indépendant).
  // Ça ne serait pas une bonne pratique à faire. 
  add_action( 'wp_footer', 'callback_banner_video_style');
  function callback_banner_video_style () {
    wp_enqueue_style('banner-video-style', 
      get_stylesheet_directory_uri() . '/parts/banner-video/style.css' );
  }
?>

<video id="banner-video" autoplay loop muted poster= "<?php echo get_stylesheet_directory_uri() . '/assets/images/banner_1440x806-fs8.png'; ?>">
  <source src="<?php echo get_stylesheet_directory_uri() . '/parts/banner-video/video/Studio_Koukaki_video_header.mp4'; ?>" type="video/mp4">
</video>
