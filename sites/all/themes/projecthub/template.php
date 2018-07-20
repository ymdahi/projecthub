<?php
/**
 * @file
 * The primary PHP file for this theme.
 */


function projecthub_preprocess_views_view(&$vars) {
 $view = &$vars['view'];
  // Make sure it's the correct view
  if ($view->name == 'view-3d-file-viewer') {
   drupal_add_js(drupal_get_path('theme', 'projechub') . '/vendor/jsmodeler/three.min.js');
   drupal_add_js(drupal_get_path('theme', 'projechub') . '/vendor/jsmodeler/jsmodeler.js');
   drupal_add_js(drupal_get_path('theme', 'projechub') . '/vendor/jsmodeler/jsmodeler.ext.three.js');
   drupal_add_js(drupal_get_path('theme', 'projechub') . '/vendor/jsmodeler/online3dembedder.js');
   // add needed stylesheet
   //drupal_add_css(drupal_get_path('theme', 'your-theme') . '/your-css.css');
  }
}

function projecthub_preprocess_page(&$variables) {
  // both primary and secondary sidebars
  if (!empty($variables['page']['sidebar_first']) && !empty($variables['page']['sidebar_second'])) {
    $variables['content_column_class'] = ' class="col-md-4"';
  }
  // if primary only
  elseif (!empty($variables['page']['sidebar_first'])) {
    $variables['content_column_class'] = ' class="col-md-9"';
  }
  // if secondary only
  elseif (!empty($variables['page']['sidebar_second'])) {
    $variables['content_column_class'] = ' class="col-md-8"';
  }
  else {
    $variables['content_column_class'] = ' class="col-md-12"';
  }
  // sidebar small
  if (!empty($variables['page']['sidebar_small'])) {
    $variables['content_column_class'] = ' class="col-md-8"';
  }


}
