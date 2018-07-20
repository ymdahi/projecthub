<?php

/**
 * @file
 * Main view template.
 *
 * Variables available:
 * - $classes_array: An array of classes determined in
 *   template_preprocess_views_view(). Default classes are:
 *     .view
 *     .view-[css_name]
 *     .view-id-[view_name]
 *     .view-display-id-[display_name]
 *     .view-dom-id-[dom_id]
 * - $classes: A string version of $classes_array for use in the class attribute
 * - $css_name: A css-safe version of the view name.
 * - $css_class: The user-specified classes names, if any
 * - $header: The view header
 * - $footer: The view footer
 * - $rows: The results of the view query, if any
 * - $empty: The empty text to display if the view is empty
 * - $pager: The pager next/prev links to display, if any
 * - $exposed: Exposed widget form/info to display
 * - $feed_icon: Feed icon to display, if any
 * - $more: A link to view more, if any
 *
 * @ingroup views_templates
 */
?>
<div class="<?php print $classes; ?>">
  
  <?php 
    
    drupal_add_js('/sites/all/themes/projecthub/vendor/jsmodeler/three.min.js');
    drupal_add_js('/sites/all/themes/projecthub/vendor/jsmodeler/jsmodeler.js');
    drupal_add_js('/sites/all/themes/projecthub/vendor/jsmodeler/jsmodeler.ext.three.js');
    // drupal_add_js('/sites/all/themes/projecthub/vendor/jsmodeler/online3dembedder.js'); 
    drupal_add_js('/sites/all/themes/projecthub/js/3dviewer.js'); 

  ?>

  
  
  
  <?php if ($rows): ?>
    <div class="view-content">
      <div class="btn-group modelSelector">
        <a href="#" class="selectedModel btn btn-default">Select model</a>
        <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="caret"></span></a>
        <?php print $rows; ?>
      </div>
    </div>
  <?php elseif ($empty): ?>
    <div class="view-empty">
      <?php print $empty; ?>
    </div>
  <?php endif; ?>

  <div class="model-region">
    <div class="model-loading">
      <div class="spinner"></div>
      <!--<p>Loading...</p>-->
    </div>
    <div class="model-error"><p>Unable to load 3D file.</div>
    <canvas id="modelViewer" width="600px" height="600px"></canvas>
  </div>

</div><?php /* class view */ ?>
