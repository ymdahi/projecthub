  <?php 
    
    drupal_add_js('/sites/all/themes/projecthub/vendor/jsmodeler/three.min.js');
    drupal_add_js('/sites/all/themes/projecthub/vendor/jsmodeler/jsmodeler.js');
    drupal_add_js('/sites/all/themes/projecthub/vendor/jsmodeler/jsmodeler.ext.three.js');
    // drupal_add_js('/sites/all/themes/projecthub/vendor/jsmodeler/online3dembedder.js'); 
    drupal_add_js('/sites/all/themes/projecthub/js/3dviewer.js'); 

  ?>

<div id="login-wrap" class="container-fluid">

  <div class="row">

    <div id="login-left" class="col-md-6">

      <div class="login-header">
        <div class="login-logo">
          <img src="/sites/all/themes/projecthub/assets/projecthub_logo_login.png" alt="Project Hub Logo">
        </div>
        <div class="login-subheader">
          <p>Share and view 3D models with the Ryerson community</p>
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

    <div id="login-right" class="col-md-6">

      <div class="login-model-region">
        <a class="model-file hidden" data-model-filepath="https://projecthub.fcadweb.ca/sites/all/themes/projecthub/assets/objects_binary.stl">Project Hub.stl</a>

        <div class="login-model-author clearfix">
          <div class="login-model-author-photo">
            <img src="/sites/default/files/styles/300x300_sc/public/pictures/picture-19-1510766529.jpg">
          </div>
          <div class="login-model-author-details">
            <p><strong><em>Eiffel Tower 3D Model</em></strong></p>
            <p>By Yasin Dahi, FCAD Staff</p>
          </div>
        </div>

        <div class="model-region">
          <div class="model-loading">
            <div class="spinner"></div>
            <!--<p>Loading...</p>-->
          </div>
          <div class="model-error"><p>Unable to load 3D file.</p></div>
          <canvas id="modelViewer" width="600px" height="600px"></canvas>
        </div>

      <div class="login-model-footer">
        <div class="model-viewer-help">
          <div class="row">
            
            <div class="col-md-4">
              <img src="/sites/all/themes/projecthub/assets/rotate_icon.png">
              <p>Click or touch and drag to rotate 3d model.</p>
            </div>

            <div class="col-md-4">
              <img src="/sites/all/themes/projecthub/assets/zoom_icon.png">
              <p>Scroll or pinch to zoom in and out.</p>
            </div>

            <div class="col-md-4">
              <img src="/sites/all/themes/projecthub/assets/move_icon.png">
              <p>Right-click to move the 3d model.</p>
            </div>

          </div>
      </div>

      </div>


    </div> <!-- end login-right -->

  </div> 

</div><!-- end login-wrap -->


