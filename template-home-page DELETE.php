<?php
/*
Template Name: Home Page
*/
get_header(); ?>
  <!-- Home Page Template -->
  <?php /* The loop */ ?>
  <?php while ( have_posts() ) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

      <?php 
        $content = apply_filters( 'the_content', get_the_content() ); //Without the filter, <p> tags aren't added
        $section1 = $content;
      ?>
      <div class="entry-content">
        <?php echo $section1; ?>
      </div>

    </article>
  <?php endwhile; ?>

  <?php get_sidebar(); ?>

<?php get_footer(); ?>