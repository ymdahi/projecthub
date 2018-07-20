LoadOnline3DModels = function () {
	
	var viewerElement = canvas;
	
	
	function Error (viewerElement, message) {
		var context = viewerElement.getContext ('2d');
		context.font = '12px Arial';
		context.fillText (message, 0, 12);
	}
	
	function LoadViewer (canvas)	{
		var urls = viewerElement.getAttribute ('sourcefiles');
		console.log(urls);
		
		if (urls === undefined || urls === null) {
			Error (viewerElement, 'Invalid source files.');
			return;
		}

		var urlList = urls.split ('|');
		
		JSM.ConvertURLListToJsonData (urlList, {
			onError : function () {
				Error (viewerElement, 'Conversion failed.');
				return;
			},
			onReady : function (fileNames, jsonData) {
				var viewerSettings = {
					cameraEyePosition : [6.0, -5.5, 4.0],
					cameraCenterPosition : [0.0, 0.0, 0.0],
					cameraUpVector : [0.0, 0.0, 1.0]
				};

				var viewer = new JSM.ThreeViewer ();
				if (!viewer.Start (viewerElement, viewerSettings)) {
					Error (viewerElement, 'Internal error.');
					return;
				}

				var currentMeshIndex = 0;
				var environment = {
					onStart : function (/*taskCount, meshes*/) {
						viewer.EnableDraw (false);
					},
					onProgress : function (currentTask, meshes) {
						while (currentMeshIndex < meshes.length) {
							viewer.AddMesh (meshes[currentMeshIndex]);
							currentMeshIndex = currentMeshIndex + 1;
						}
					},
					onFinish : function (meshes) {
						if (meshes.length > 0) {
							viewer.AdjustClippingPlanes (50.0);
							viewer.FitInWindow ();
						}
						$(".se-pre-con").fadeOut("slow");
						viewer.EnableDraw (true);
						viewer.Draw ();
					}
				};
				
				var textureLoaded = function () {
					viewer.Draw ();
				};
				JSM.ConvertJSONDataToThreeMeshes (jsonData, textureLoaded, environment);	
			}				
		});
	}
	
	//var csource = canvas.attr('sourcefiles');
	console.log(canvas);

	
	var supported = JSM.IsWebGLEnabled () && JSM.IsFileApiEnabled ();
	var viewers = document.getElementById ('3dModelViewer');
	var i, viewer;
	for (i = 0; i < viewers.length; i++) {
		viewer = viewers[i];
		if (supported) {
			LoadViewer (viewer);
		} else {
			Error (viewer, 'No browser support.');
		}
	}
	
	LoadViewer();
	
};
