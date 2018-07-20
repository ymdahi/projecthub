<div id="auth_box" class="reset">
  <div id="top_part">
    <h1 id="the_logo">
      <a href="<?php print url('<front>'); ?>">
        <img src="<?php print $logo; ?>" alt="<?php print $site_name; ?>">
      </a>
    </h1>
  </div>

  <div id="middle_part">
    <h2 class="title"><?php print $title; ?></h2>
    <p>Project Hub accounts are tied to your Ryerson account - to change your password please refer to the <a href="http://www.ryerson.ca/ccs/services/accounts/password/" target="_blank">CCS guide</a>.</p>

    <?php print $messages; ?>
    
    <?php print render($page['content']); ?>
  </div>

  <div id="bottom_part">
    <div class="login_link">
      <?php print l(t('Login'), 'user/login'); ?>
    </div>
  </div>
</div>
