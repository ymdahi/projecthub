  <?php 
    
//    drupal_add_js('/sites/all/themes/projecthub/vendor/jsmodeler/three.min.js');
//    drupal_add_js('/sites/all/themes/projecthub/vendor/jsmodeler/jsmodeler.js');
//    drupal_add_js('/sites/all/themes/projecthub/vendor/jsmodeler/jsmodeler.ext.three.js');
    // drupal_add_js('/sites/all/themes/projecthub/vendor/jsmodeler/online3dembedder.js'); 
//  drupal_add_js('/sites/all/themes/projecthub/js/3dviewer.js'); 

  ?>

<div id="login-wrap" class="container-fluid">

  <div class="row">

    <div id="login-left" class="col-md-12">

      <div class="login-header">
        <div class="login-logo">
          <img class="img-responsive" src="/sites/all/themes/projecthub/assets/projecthub_logo_login.png" alt="Project Hub Logo">
        </div>
        <div class="login-subheader">
          <p>Share 3D models with the Ryerson community</p>
        </div>
      </div>

      <div class="login-form">
        <div class="login-message">
          <?php print $messages; ?>
        </div>
        <div class="login-info">
          <p>Login in with your Ryerson username and password</p>
        </div>
        <?php print render($page['content']); ?>
      </div>

      <div class="login-footer">
        <p><?php print l(t('Forgot your password?'), 'user/password'); ?></p>
      </div>

    </div> <!-- end login-left -->


</div><!-- end login-wrap -->


