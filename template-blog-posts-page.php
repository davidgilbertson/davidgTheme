<?php
/*
Template Name: Blog Posts Page
*/
get_header(); ?>
  <!-- Blog Posts Page Template -->
  <?php while ( have_posts() ) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class('col-xs-12'); ?>>
      <div class="entry-content">
        <?php the_content(); ?>
      </div>
    </article>
  <?php endwhile; ?>
  
<?php get_footer(); ?>