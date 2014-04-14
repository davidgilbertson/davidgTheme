<?php //This serves as the default template ?>
<article id="post-<?php the_ID(); ?>" <?php post_class('home-article'); ?>>
	<div class="entry-content">
		<?php the_content(); ?>
	</div>
</article>
