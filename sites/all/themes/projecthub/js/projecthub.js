(function ($) {

  Drupal.behaviors.uiScripts = {
    attach: function (context, settings) {

      // h5p node admin links
      $('body.node-type-h5p-content ul.tabs--primary').each(function(){
        $('li:nth-of-type(1)', this).addClass('edit-link-icon');
        $('li:nth-of-type(2)', this).addClass('result-link-icon');
      });
      

      // Make sidebar sticky using StickyKit library
      $(".sidebar-nav").stick_in_parent({
        'bottoming':false
      });

      // Responsive sidebar button on mobile
      $('[data-toggle=sidebar]').click(function() {
        $('body').toggleClass('sidebar-in');
      });

      // Make entire rows ('.clickable-row') clickable on Views Tables
      // Takes the first link in each row, and uses it to create a click event
      $('.clickable-row').each(function(){
        if ($(this).find('a').length){
          $(this).click(function(){
            window.location = $(this).find('a').attr('href');
            return false;
          });
        }
      });


      // init tooltip for selector.
      $('.enable-tip').tooltip();

      // slick slider for project media elements
      $('.slick-slide-project').slick({});

      // main nav: add active class to parent 'li' when child 'a' has active class
      $('#block-system-main-menu ul.menu > li > a').each(function() {
        if ($(this).hasClass('active')) {
          $(this).parent('li').addClass('active');
        }
      });

      // disable My Profile main menu link when user is on user edit page
      $('body.page-user-edit .profile-link').removeClass('active');


      /**
       * Flag links
       */

      // add bootstrap classes to flag links
      $('.flag-report-user > a.flag').addClass('btn btn-default');
      $('.flag-favourites > a.flag').addClass('btn btn-default');
      $('.flag-report > a.flag').addClass('btn btn-default');

      // favourites flag button with counter
      var favFlag = $('.flag-btn-with-counter a.flag');
      $('.flag-btn-with-counter').each(function(){
        $(this).find('.badge').appendTo(favFlag);
      });


    }
  }

  Drupal.behaviors.workflowviz = {
    attach: function (context, settings) {
      /**
      * Workflow visualization block 
      */
      var currentState = $('.current-state').attr('data-stateid');
      var stateGroups = [
        ['1','2'], // new job
        ['3','8'], // needs revision, revised
        ['4'], // inqueue
        ['5'], // ready for pick up
        ['6','7'] // complete, cancelled
      ];

      // 1 - new job
      // 2 - new job
      // 3 - needs revision
      // 8 - revised
      // 4 - in queue
      // 5 - Ready for pick up

       
      var stateGroupIndex = getIndexOf(stateGroups,currentState);
      
      if(stateGroupIndex ==0){
        $('.step[data-step=1]').addClass('active');
      } else if(stateGroupIndex ==1){
        $('.step[data-step=2]').addClass('active');
      } else if(stateGroupIndex ==2){
        $('.step[data-step=3]').addClass('active');
      } else if(stateGroupIndex ==3){
        $('.step[data-step=4]').addClass('active');
      } else if(stateGroupIndex ==4){
        $('.step[data-step=5]').addClass('active');
      } else {
        $('.step[data-step=1]').addClass('active');
      }
     
  
      console.log('current: ' + currentState);
      console.log('index: ' + stateGroupIndex);


      function getIndexOf(groupArray,element){
        for(var i=0;i<stateGroups.length;i++){
          for(var j=0;j<stateGroups[i].length;j++){
            if(groupArray[i][j]==element){
              return i;  
            }
          }
        }        
        return -1;
      }


      $('.step').each(function() {
        $(this).not('.active').addClass('done');
        $('.done').html('<i class="fa fa-check 2x"></i>');
        
        if($(this).is('.active')) {
          return false;
        }
      });



      $('.step').prop('title','These are the next steps');
      $('.step.active').prop('title','This is the current step');
      $('.step.done').prop('title','This step is done');

      $('.step[data-toggle="tooltip"]').tooltip();

      $('.step').click(function(index, element) {
        var selectedStep = $(this).attr('data-step');
        var modalTitle = $('.description-entry[data-step=' + selectedStep + '] > h3').text();
        var modalBody = $('.description-entry[data-step=' + selectedStep + '] > p').text();;
        $('.modal-title').text(modalTitle);
        $('.modal-body').text(modalBody);
        $('#myModal').modal('toggle');
      });
    }
  }

})(jQuery);
