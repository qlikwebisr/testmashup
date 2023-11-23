/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */

//var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var prefix = "/";

var config = {
	host: "<qlik_host>",
	prefix: prefix,
	port: "",
	isSecure: true
};

const appId = "<app_id>";

const objects = {
	"QV01":"<obj_id_1>",
	"QV02":"<obj_id_2>",
	"QV03":"<obj_id_3>"
}

console.log('baseUrl', (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources");

require.config({
	baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
});

require(["js/qlik"], function (qlik) {

	qlik.on("error", function (error) {
		//$('#popupText').append(error.message + "<br>");
		//$('#popup').fadeIn(1000);
		console.log(error);
	});

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp(appId, config);

	//get objects -- inserted here --

	app.getObject('QV01', objects.QV01);
	app.getObject('QV02', objects.QV02);
	app.getObject('QV03', objects.QV03);

	//create cubes and lists -- inserted here --

});
