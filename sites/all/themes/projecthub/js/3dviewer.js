(function ($) {
  Drupal.behaviors.modelViewer = {
    attach: function (context, settings) {

      var viewer = null;
      var urlList = [];


      function loadFile (urlList) {

        $('.model-loading').toggle();

        /*
        var materials = new JSM.Materials ();
        materials.AddMaterial (new JSM.Material ({
            ambient : 0xcc0000,
            diffuse : 0xcc0000
        }));
        */

        JSM.ConvertURLListToJsonData (urlList, {
          onError : function () {
            console.log('error 1');
            $('.model-error').toggle();
            return;
          },
          onReady : function (fileNames, jsonData) {
            JSM.ConvertJSONDataToThreeMeshes (jsonData, function(){
              viewer.Draw();
            }, {
              onStart : function(runCount, meshes) {
                console.log('Model mesh starting...');
              },
              onProgress : function(currentCount, meshes) {
                console.log('Processing model...');
              },
              onFinish : function(meshes) {

                for (var i = 0; i < meshes.length; i++) {
                  viewer.AddMesh (meshes[i]);
                }
                viewer.AdjustClippingPlanes (50.0);
                viewer.FitInWindow ();
                $('.model-loading').toggle();




                viewer.Draw ();
              } // end onFinish
            }); // end ConvertJSONDataToThreeMeshes
          } // end onReady
        }); // end ConvertURLListToJsonData
      } // end loadFile

      function Resize () {

      }

console.log(urlList);

      function Load (){

        if (urlList.length === 0) {
          urlList.push($('a.model-file:first-of-type').attr('data-model-filepath'));
          $('.view-3d-file-viewer .views-row-1').addClass('active');

          loadFile(urlList);
          $('.selectedModel').text($('.views-row-1 a.model-file').text());
        }

        window.onresize = Resize;

        Resize ();

  			var viewerSettings = {
  				cameraEyePosition : [6.0, -5.5, 4.0],
  				cameraCenterPosition : [0.0, 0.0, 0.0],
  				cameraUpVector : [0.0, 0.0, 1.0],
          lightAmbientColor: [0, 0.5, 1],
          lightDiffuseColor: [0.1, 0.5, 1]
  			};

        viewer = new JSM.ThreeViewer ();

        if (!viewer.Start (document.getElementById ('modelViewer'), viewerSettings)) {
  				return;
  			}

                var spotLight = new THREE.SpotLight(0xffffff, .3, 0);
                spotLight.position.set(500, 500, 100);
                spotLight.castShadow = true;
                viewer.scene.add(spotLight);

        viewer.Draw ();
      } // end load();

      window.onload = function ()	{
        Load ();
      }



      $('a.model-file').click(function() {
        var urlPath = [];
        urlPath.push($(this).attr('data-model-filepath'));
        $('.view-3d-file-viewer ul > li').removeClass('active');
        $(this).parent().addClass('active');
        $('.selectedModel').text($(this).text());
        viewer.RemoveMeshes ();
        loadFile(urlPath);
      });

      /*
      $('.field-name-3d-model-viewer').click(function() {
        $(this).parent('.field-group-fieldset')
          .removeClass('col-md-6')
          .addClass('col-md-8 col-md-offset-2 expanded');
      });
      */

    }
  }

})(jQuery);
