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
            <p>Project Hub accounts are tied to your Ryerson account. Your Ryerson account is the same account you use to login to my.ryerson.ca and your Ryerson email.</p>
            <p>For example, if you email address is billy.bishop1@ryerson.ca, your Ryerson username is "billy.bishop1".</p>
            <p>To change your password please refer to the <a href="http://www.ryerson.ca/ccs/services/accounts/password/" target="_blank">CCS guide</a> to changing your password.</p>
        </div>
      </div>

      <div class="login-footer">
        <p><?php print l(t('Login to your account'), 'user/login'); ?></p>
      </div>

    </div> <!-- end login-left -->


</div><!-- end login-wrap -->