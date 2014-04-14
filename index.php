<?php get_header(); ?>
<div id="body-content" class="body-content">
  <div class="row">
    <div class="col-xs-12">
      <h1>Hello there. What can we do for you today?</h1>
    </div>
  </div>
  <div class="row">
    <?php
      $pages = get_pages(array(
        'sort_column' => 'menu_order',
        'parent' => 0
      ));
      $contactForm = file_get_contents(get_template_directory_uri() . "/contact_form.php");

    ?>
  </div> <!-- /row for the articles -->
</div> <!-- /body-content -->


</div> <!-- /body-wrapper (opened in header.php-->

<?php get_footer(); ?>