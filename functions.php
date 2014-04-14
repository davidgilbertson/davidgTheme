<?php
function enqueue_scripts() {
  /*  --  VENDOR FILES  --  */
  wp_register_script("jquery-js", get_template_directory_uri() . "/js/vendor/jquery-1.10.2.min.js", false, null, true);
  wp_enqueue_script("jquery-js");
  wp_register_script("bootstrap-collapse-js", get_template_directory_uri() . "/js/vendor/bootstrap.collapse.min.js", false, null, true);
  wp_enqueue_script("bootstrap-collapse-js");


  /*  --  DAVID GILBERTSON FILES  --  */
  wp_enqueue_style("main-css", get_template_directory_uri() . "/css/dg-main.css", null, null);

  //project-js:register
  wp_register_script("Fireball-js", get_template_directory_uri() . "/js/Fireball.js", false, null, true);
  wp_register_script("utils-js", get_template_directory_uri() . "/js/dg-utils.js", false, null, true);
  wp_register_script("events-js", get_template_directory_uri() . "/js/dg-events.js", false, null, true);
  wp_register_script("dom-js", get_template_directory_uri() . "/js/dg-dom.js", false, null, true);
  wp_register_script("project-js", get_template_directory_uri() . "/js/dg-main.js", false, null, true);
  //project-js:register end

  //project-js:enqueue
  wp_enqueue_script("Fireball-js");
  wp_enqueue_script("utils-js");
  wp_enqueue_script("events-js");
  wp_enqueue_script("dom-js");
  wp_enqueue_script("project-js");
  //project-js:enqueue end


  wp_localize_script('project-js', 'RVProps', array(
    'ajaxurl' => admin_url( 'admin-ajax.php'),
    'templateDir' => get_template_directory_uri()
    )
  );
}
add_action('wp_enqueue_scripts', 'enqueue_scripts');

function rv_add_admin_styles() {
  add_editor_style('css/editor-style.css');
}
add_action('init', 'rv_add_admin_styles');


function dg_get_page_name($echo = true, $suffix = "-page") {
  global $post;
  if ($echo) {
    echo $post -> post_name . $suffix;
  } else {
    return $post -> post_name . $suffix;
  }
}

/*  ---------------------------------------  */
/*  --  Code for Handling AJAX requests  --  */
/*  ---------------------------------------  */
function getPage() {
  $result = array();
  $result['success'] = 'Retunr from getPage';

  echo json_encode($result);
  die();
}
add_action( 'wp_ajax_getPage', 'getPage' ); // for logged in users
add_action( 'wp_ajax_nopriv_getPage', 'getPage' ); // for not logged in users


function post_message() {
  $result = array();

  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $msg = $_POST['msg'];
  // $url = $_POST['url'];

  $name = stripslashes($name);
  $email = stripslashes($email);
  $phone = stripslashes($phone);
  $msg = stripslashes($msg);
  // $url = stripslashes($url);

  $validIsh = preg_match("/.+@.+/", $email);
  $atCount = substr_count($email, "@");
  if (!$validIsh || $atCount !== 1) {
    $result["error"] = "The email address '" . $email . "' was rejected by the server.";
  } else {
    $to = get_bloginfo('admin_email');
    $subject = $name . " sent a message from redvivid.com";
    $message = "From: " . $name . "\r\n";
    $message .= "Email address: " . $email . "\r\n";
    $message .= "Phone: " . $phone . "\r\n";
    $message .= "Message: " . $msg;
    $headers = 'From: "Red Vivid Website" <info@redvivid.com>';

    wp_mail($to, $subject, $message, $headers);

    $result["success"] = "Message sent successfully";
  }
  echo json_encode($result);
  die();

}

add_action( 'wp_ajax_post_message', 'post_message' ); // for logged in users
add_action( 'wp_ajax_nopriv_post_message', 'post_message' ); // for not logged in users

//Remove some of the unecessary tags from the <head>
remove_action('wp_head', 'start_post_rel_link', 10, 0 );
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_shortlink_wp_head');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'rel_canonical');