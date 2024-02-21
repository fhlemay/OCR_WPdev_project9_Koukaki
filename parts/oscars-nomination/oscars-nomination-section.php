<?php
  // Style pour la section temporaire de la mise en nomination aux Oscars
  // Dans le foote car on ne veut pas à devoir l'appeler ailleurs qu'ici (module indépendant).
  // Ça ne serait pas une bonne pratique à faire. 
  add_action( 'wp_footer', 'callback_oscar_nomination_style');
  function callback_oscar_nomination_style () {
    wp_enqueue_style('oscars-nomination-style', 
      get_stylesheet_directory_uri() . '/parts/oscars-nomination/style.css' );
  }
?>

<section id="oscars-nomination">
    <h3>Fleurs d’oranger & chats errants<br>est nominé aux Oscars Short<br>Film Animated de 2022 !</h3>
    <img src="<?php echo get_stylesheet_directory_uri() . '/parts/oscars-nomination/images/oscars_logo.png'; ?>" alt="">
</section>
