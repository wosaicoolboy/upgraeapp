cordova create updateapp
cd updateapp
cordova platform add android
cordova plugin add ../upgradeplugin

upgradeplugin/src/android/res/values/strings.xml replace  updateapp/platforms/android/res/values

eclipse open project
modify www/index.html 
<head>
<script type="text/javascript" charset="utf-8">    
				function upgrade(){window.plugins.updateAppPlugin.checkAndUpdate("http://192.168.55.111:8080/version.js");}    
		 </script> 
</head>
<body>
<h2><a href="#" onclick="upgrade(); return false;">upgrade test</a></h2> 
</body>

cordova build
cordova run android