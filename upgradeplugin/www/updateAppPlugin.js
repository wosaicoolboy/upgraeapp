
function updateAppPlugin() {
}
updateAppPlugin.prototype.checkAndUpdate = function(checkPath){
	cordova.exec(null, null, "updateAppPlugin", "checkAndUpdate", [checkPath]);
}
updateAppPlugin.prototype.getCurrentVerInfo = function(successCallback){
	cordova.exec(successCallback, null, "updateAppPlugin", "getCurrentVersion", []);
}
updateAppPlugin.prototype.getServerVerInfo = function(successCallback,failureCallback,checkPath){
	cordova.exec(successCallback, failureCallback, "updateAppPlugin", "getServerVersion", [checkPath]);
}
cordova.addConstructor(function() {
	if (!window.plugins) {
		window.plugins = {};
	}
	window.plugins.updateAppPlugin = new updateAppPlugin();
});