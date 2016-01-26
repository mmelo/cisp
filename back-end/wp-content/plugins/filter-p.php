<?php
/*
Plugin Name: Filter <p>
Plugin URI: 
Description: Simple plugin to remove <p> tags from around images
Version: 1.0.0
Author: Miguel Melo
Author URI: 
*/

function filter_ptags_on_images($content){
   return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
}

add_filter('the_content', 'filter_ptags_on_images');

function new_excerpt_length($length) {
	return 10;
}
add_filter('excerpt_length', 'new_excerpt_length');


function continue_reading_link() {
	return '';
}
add_filter( 'excerpt_more', 'continue_reading_link' );

function mb_excerpt_more( $text ) {
     return '';
}

?>
