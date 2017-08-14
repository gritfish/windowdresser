var Jimp = require("jimp");
var fs = require('fs');
var imageCount = 0;

function compositeTL(imageMain, imageAdded, offsetX, offsetY){
	var x = 0;
	var y = 0;
	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;
	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;
	if(offsetX > -1 && offsetX < 1){
		x += offsetX * imageMain.bitmap.width;
	}else{
		x += offsetX;
	}
	if(offsetY > -1 && offsetY < 1){
		y += offsetY * imageMain.bitmap.height;
	}else{
		y += offsetY;
	}
	imageMain.composite( imageAdded, x, y );
}
function compositeT(imageMain, imageAdded, offsetX, offsetY){
	var x = (imageMain.bitmap.width-imageAdded.bitmap.width)/2;
	var y = 0;
	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;
	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;
	if(offsetX > -1 && offsetX < 1){
		x += offsetX * imageMain.bitmap.width;
	}else{
		x += offsetX;
	}
	if(offsetY > -1 && offsetY < 1){
		y += offsetY * imageMain.bitmap.height;
	}else{
		y += offsetY;
	}
	imageMain.composite( imageAdded, x, y );
}
function compositeTR(imageMain, imageAdded, offsetX, offsetY){
	var x = imageMain.bitmap.width-imageAdded.bitmap.width;
	var y = 0;
	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;
	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;
	if(offsetX > -1 && offsetX < 1){
		x += offsetX * imageMain.bitmap.width;
	}else{
		x += offsetX;
	}
	if(offsetY > -1 && offsetY < 1){
		y += offsetY * imageMain.bitmap.height;
	}else{
		y += offsetY;
	}
	imageMain.composite( imageAdded, x, y );
}

function compositeL(imageMain, imageAdded, offsetX, offsetY){
	var x = 0;
	var y = (imageMain.bitmap.height-imageAdded.bitmap.height)/2;
	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;
	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;
	if(offsetX > -1 && offsetX < 1){
		x += offsetX * imageMain.bitmap.width;
	}else{
		x += offsetX;
	}
	if(offsetY > -1 && offsetY < 1){
		y += offsetY * imageMain.bitmap.height;
	}else{
		y += offsetY;
	}
	imageMain.composite( imageAdded, x, y );
}
function compositeC(imageMain, imageAdded, offsetX, offsetY){
	var x = (imageMain.bitmap.width-imageAdded.bitmap.width)/2;
	var y = (imageMain.bitmap.height-imageAdded.bitmap.height)/2;
	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;
	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;
	if(offsetX > -1 && offsetX < 1){
		x += offsetX * imageMain.bitmap.width;
	}else{
		x += offsetX;
	}
	if(offsetY > -1 && offsetY < 1){
		y += offsetY * imageMain.bitmap.height;
	}else{
		y += offsetY;
	}
	imageMain.composite( imageAdded, x, y );
}
function compositeR(imageMain, imageAdded, offsetX, offsetY){
	var x = imageMain.bitmap.width-imageAdded.bitmap.width;
	var y = (imageMain.bitmap.height-imageAdded.bitmap.height)/2;
	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;
	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;
	if(offsetX > -1 && offsetX < 1){
		x += offsetX * imageMain.bitmap.width;
	}else{
		x += offsetX;
	}
	if(offsetY > -1 && offsetY < 1){
		y += offsetY * imageMain.bitmap.height;
	}else{
		y += offsetY;
	}
	imageMain.composite( imageAdded, x, y );
}

function compositeBL(imageMain, imageAdded, offsetX, offsetY){
	var x = 0;
	var y = imageMain.bitmap.height-imageAdded.bitmap.height;
	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;
	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;
	if(offsetX > -1 && offsetX < 1){
		x += offsetX * imageMain.bitmap.width;
	}else{
		x += offsetX;
	}
	if(offsetY > -1 && offsetY < 1){
		y += offsetY * imageMain.bitmap.height;
	}else{
		y += offsetY;
	}
	imageMain.composite( imageAdded, x, y );
}
function compositeB(imageMain, imageAdded, offsetX, offsetY){
	var x = (imageMain.bitmap.width-imageAdded.bitmap.width)/2;
	var y = imageMain.bitmap.height-imageAdded.bitmap.height;
	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;
	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;
	if(offsetX > -1 && offsetX < 1){
		x += offsetX * imageMain.bitmap.width;
	}else{
		x += offsetX;
	}
	if(offsetY > -1 && offsetY < 1){
		y += offsetY * imageMain.bitmap.height;
	}else{
		y += offsetY;
	}
	imageMain.composite( imageAdded, x, y );
}
function compositeBR(imageMain, imageAdded, offsetX, offsetY){
	var x = imageMain.bitmap.width-imageAdded.bitmap.width;
	var y = imageMain.bitmap.height-imageAdded.bitmap.height;
	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;
	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;
	if(offsetX > -1 && offsetX < 1){
		x += offsetX * imageMain.bitmap.width;
	}else{
		x += offsetX;
	}
	if(offsetY > -1 && offsetY < 1){
		y += offsetY * imageMain.bitmap.height;
	}else{
		y += offsetY;
	}
	imageMain.composite( imageAdded, x, y );
}
function compositeBG(imageMain, imageAdded, offsetX, offsetY){
	var bgImage = imageAdded.clone().cover(imageMain.bitmap.width, imageMain.bitmap.height);
	imageMain.composite(bgImage, 0, 0);
}

function addLayer(imageMain, imageObj, offsetX, offsetY){
	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;
	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;
	switch(imageObj.align){
		case "bg":
			compositeBG(imageMain, imageObj.image);
			break;
		
		case "tl":
			compositeTL(imageMain, imageObj.image, offsetX, offsetY);
			break;
		case "t":
			compositeT(imageMain, imageObj.image, offsetX, offsetY);
			break;
		case "tr":
			compositeTR(imageMain, imageObj.image, offsetX, offsetY);
			break;
		
		case "l":
			compositeL(imageMain, imageObj.image, offsetX, offsetY);
			break;
		case "c":
			compositeC(imageMain, imageObj.image, offsetX, offsetY);
			break;
		case "r":
			compositeR(imageMain, imageObj.image, offsetX, offsetY);
			break;

		case "bl":
			compositeBL(imageMain, imageObj.image, offsetX, offsetY);
			break;
		case "b":
			compositeB(imageMain, imageObj.image, offsetX, offsetY);
			break;
		case "br":
			compositeBR(imageMain, imageObj.image, offsetX, offsetY);
			break;
	}
}


function loadImage(imageObj){
	imageCount ++;
	Jimp.read(imageObj.file).then(function(image){
		imageObj.src = image;
		imageCount --;
		if(imageCount == 0){
			render();
		}
	});
}

function loadImages(){
	for(var i=0; i< layers.length; i++){
		loadImage(layers[i]);
	}
}

function renderLayeredImage(width, height, name){
	var image = new Jimp(width, height, function (err, image) {
		var i;
		for(i=0; i< layers.length; i++){
			layers[i].image = layers[i].src.clone();
			layers[i].offsetX = typeof layers[i].offsetX !== 'undefined' ? layers[i].offsetX : 0;
			layers[i].offsetY = typeof layers[i].offsetY !== 'undefined' ? layers[i].offsetY : 0;
		}

		for(i=0; i< layers.length; i++){
			if(layers[i].scaleX && layers[i].scaleY){
				layers[i].image.scaleToFit( width * layers[i].scaleX, height * layers[i].scaleY );
			}
		}
		for(i=0; i< layers.length; i++){
			addLayer(image, layers[i], layers[i].offsetX, layers[i].offsetY);
		}
		image.write(name);
	});
}

function renderScreenshot(file, width, height, name){
	Jimp.read(file, function (err, fileImage) {
	    if (err) throw err;
	    var w;
	    var h;
	    if(fileImage.bitmap.width >= fileImage.bitmap.height){
	    	w = Math.max(width, height);
	    	h = Math.min(width, height);
		    fileImage.clone().cover(w, h).write(name);
	    }else{
	    	w = Math.min(width, height);
	    	h = Math.max(width, height);
	    }
	    fileImage.clone().cover(w, h).write(name);
	});
}

function render(){
//STEAM
	// Steam Screenshots
	renderScreenshot('src/screen1.png', 1920, 1080, 'dist/steam/Steam Screenshot 1.png');
	renderScreenshot('src/screen2.png', 1920, 1080, 'dist/steam/Steam Screenshot 2.png');
	renderScreenshot('src/screen3.png', 1920, 1080, 'dist/steam/Steam Screenshot 3.png');
	renderScreenshot('src/screen4.png', 1920, 1080, 'dist/steam/Steam Screenshot 4.png');
	renderScreenshot('src/screen5.png', 1920, 1080, 'dist/steam/Steam Screenshot 5.png');

	//Steam Capsules
	renderLayeredImage(460, 215, 'dist/steam/Steam - Header capsule image.png');
	renderLayeredImage(231, 87, 'dist/steam/Steam - Small capsule image.png');
	renderLayeredImage(467, 181, 'dist/steam/Steam - Large capsule image.png');
	renderLayeredImage(616, 353, 'dist/steam/Steam - Main capsule image.png');

//ANDROID
	//Android Screenshots
	renderScreenshot('src/screen1.png', 1920, 1080, 'dist/playstore/Android Screenshot 1.png');
	renderScreenshot('src/screen2.png', 1920, 1080, 'dist/playstore/Android Screenshot 2.png');
	renderScreenshot('src/screen3.png', 1920, 1080, 'dist/playstore/Android Screenshot 3.png');
	renderScreenshot('src/screen4.png', 1920, 1080, 'dist/playstore/Android Screenshot 4.png');
	renderScreenshot('src/screen5.png', 1920, 1080, 'dist/playstore/Android Screenshot 5.png');

	//Android High-Res Icon
	Jimp.read("src/icon.png", function (err, icon) {
	    if (err) throw err;
		icon.clone().resize(512, 512).write("dist/playstore/Android - High-Res Icon.png");
	});

	//Android Feature
	renderLayeredImage(1024, 500, 'dist/playstore/Android - Feature Image.png');
	renderLayeredImage(180, 120, 'dist/playstore/Android - Promo Image.png');
	renderLayeredImage(1280, 720, 'dist/playstore/Android - TV Banner.png');

	//Android Cover Images
	Jimp.read("src/cover.png", function (err, coverImage) {
	    if (err) throw err;
		coverImage.clone().cover(800, 480).write("dist/app/screen/android/drawable-land-hdpi-screen.png");
		coverImage.clone().cover(329, 240).write("dist/app/screen/android/drawable-land-ldpi-screen.png");
		coverImage.clone().cover(480, 320).write("dist/app/screen/android/drawable-land-mdpi-screen.png");
		coverImage.clone().cover(1280, 720).write("dist/app/screen/android/drawable-land-xhdpi-screen.png");
		coverImage.clone().cover(1600, 960).write("dist/app/screen/android/drawable-land-xxhdpi-screen.png");
		coverImage.clone().cover(1290, 1280).write("dist/app/screen/android/drawable-land-xxxhdpi-screen.png");

		coverImage.clone().cover(480, 800).write("dist/app/screen/android/drawable-port-hdpi-screen.png");
		coverImage.clone().cover(240, 329).write("dist/app/screen/android/drawable-port-ldpi-screen.png");
		coverImage.clone().cover(320, 480).write("dist/app/screen/android/drawable-port-mdpi-screen.png");
		coverImage.clone().cover(720, 1280).write("dist/app/screen/android/drawable-port-xhdpi-screen.png");
		coverImage.clone().cover(960, 1600).write("dist/app/screen/android/drawable-port-xxhdpi-screen.png");
		coverImage.clone().cover(1280, 1290).write("dist/app/screen/android/drawable-port-xxxhdpi-screen.png");
	});

	//Android Icon
	Jimp.read("src/icon.png", function (err, icon) {
	    if (err) throw err;
	    icon.clone().resize(72, 72).write("dist/app/icon/android/drawable-hdpi-icon.png");
	    icon.clone().resize(36, 36).write("dist/app/icon/android/drawable-ldpi-icon.png");
	    icon.clone().resize(48, 48).write("dist/app/icon/android/drawable-mdpi-icon.png");
	    icon.clone().resize(96, 96).write("dist/app/icon/android/drawable-xhdpi-icon.png");
	    icon.clone().resize(144, 144).write("dist/app/icon/android/drawable-xxhdpi-icon.png");
	    icon.clone().resize(192, 192).write("dist/app/icon/android/drawable-xxxhdpi-icon.png");
	});

//IOS
	// iOS Cover Images
	Jimp.read("src/cover.png", function (err, coverImage) {
	    if (err) throw err;
		coverImage.clone().cover(640, 960).write("dist/app/screen/ios/Default@2x~iphone.png");
		coverImage.clone().cover(320, 480).write("dist/app/screen/ios/Default~iphone.png");
		coverImage.clone().cover(640, 1136).write("dist/app/screen/ios/Default-568h@2x~iphone.png");
		coverImage.clone().cover(750, 1134).write("dist/app/screen/ios/Default-667h.png");
		coverImage.clone().cover(1242, 2208).write("dist/app/screen/ios/Default-736h.png");
		coverImage.clone().cover(2048, 1536).write("dist/app/screen/ios/Default-Landscape@2x~ipad.png");
		coverImage.clone().cover(1024, 768).write("dist/app/screen/ios/Default-Landscape~ipad.png");
		coverImage.clone().cover(2208, 1242).write("dist/app/screen/ios/Default-Landscape-736h.png");
		coverImage.clone().cover(1536, 2048).write("dist/app/screen/ios/Default-Portrait@2x~ipad.png");
		coverImage.clone().cover(768, 1024).write("dist/app/screen/ios/Default-Portrait~ipad.png");
	});

	//iOS Icon
	Jimp.read("src/icon.png", function (err, icon) {
	    if (err) throw err;
		icon.clone().resize(57, 57).write("dist/app/icon/ios/icon.png");
		icon.clone().resize(114, 114).write("dist/app/icon/ios/icon@2x.png");
		icon.clone().resize(40, 40).write("dist/app/icon/ios/icon-40.png");
		icon.clone().resize(80, 80).write("dist/app/icon/ios/icon-40@2x.png");
		icon.clone().resize(50, 50).write("dist/app/icon/ios/icon-50.png");
		icon.clone().resize(100, 100).write("dist/app/icon/ios/icon-50@2x.png");
		icon.clone().resize(60, 60).write("dist/app/icon/ios/icon-60.png");
		icon.clone().resize(120, 120).write("dist/app/icon/ios/icon-60@2x.png");
		icon.clone().resize(180, 180).write("dist/app/icon/ios/icon-60@3x.png");
		icon.clone().resize(72, 72).write("dist/app/icon/ios/icon-72.png");
		icon.clone().resize(144, 144).write("dist/app/icon/ios/icon-72@2x.png");
		icon.clone().resize(76, 76).write("dist/app/icon/ios/icon-76.png");
		icon.clone().resize(152, 152).write("dist/app/icon/ios/icon-76@2x.png");
		icon.clone().resize(29, 29).write("dist/app/icon/ios/icon-small.png");
		icon.clone().resize(58, 58).write("dist/app/icon/ios/icon-small@2x.png");
		icon.clone().resize(87, 87).write("dist/app/icon/ios/icon-small@3x.png");
	});

	// iOS App Store Screenshots
	renderScreenshot('src/screen1.png', 2208, 1242, 'dist/appstore/App Store Screenshot 1 - Iphone 5.5 inch.png');
	renderScreenshot('src/screen2.png', 2208, 1242, 'dist/appstore/App Store Screenshot 2 - Iphone 5.5 inch.png');
	renderScreenshot('src/screen3.png', 2208, 1242, 'dist/appstore/App Store Screenshot 3 - Iphone 5.5 inch.png');
	renderScreenshot('src/screen4.png', 2208, 1242, 'dist/appstore/App Store Screenshot 4 - Iphone 5.5 inch.png');
	renderScreenshot('src/screen5.png', 2208, 1242, 'dist/appstore/App Store Screenshot 5 - Iphone 5.5 inch.png');
	renderScreenshot('src/screen1.png', 960, 640, 'dist/appstore/App Store Screenshot 1 - Iphone 3.5 inch.png');
	renderScreenshot('src/screen2.png', 960, 640, 'dist/appstore/App Store Screenshot 2 - Iphone 3.5 inch.png');
	renderScreenshot('src/screen3.png', 960, 640, 'dist/appstore/App Store Screenshot 3 - Iphone 3.5 inch.png');
	renderScreenshot('src/screen4.png', 960, 640, 'dist/appstore/App Store Screenshot 4 - Iphone 3.5 inch.png');
	renderScreenshot('src/screen5.png', 960, 640, 'dist/appstore/App Store Screenshot 5 - Iphone 3.5 inch.png');
	renderScreenshot('src/screen1.png', 2732, 2048, 'dist/appstore/App Store Screenshot 1 - Ipad 12.9 inch.png');
	renderScreenshot('src/screen2.png', 2732, 2048, 'dist/appstore/App Store Screenshot 2 - Ipad 12.9 inch.png');
	renderScreenshot('src/screen3.png', 2732, 2048, 'dist/appstore/App Store Screenshot 3 - Ipad 12.9 inch.png');
	renderScreenshot('src/screen4.png', 2732, 2048, 'dist/appstore/App Store Screenshot 4 - Ipad 12.9 inch.png');
	renderScreenshot('src/screen5.png', 2732, 2048, 'dist/appstore/App Store Screenshot 5 - Ipad 12.9 inch.png');
	renderScreenshot('src/screen1.png', 1024, 768, 'dist/appstore/App Store Screenshot 1 - Ipad 9.7 inch.png');
	renderScreenshot('src/screen2.png', 1024, 768, 'dist/appstore/App Store Screenshot 2 - Ipad 9.7 inch.png');
	renderScreenshot('src/screen3.png', 1024, 768, 'dist/appstore/App Store Screenshot 3 - Ipad 9.7 inch.png');
	renderScreenshot('src/screen4.png', 1024, 768, 'dist/appstore/App Store Screenshot 4 - Ipad 9.7 inch.png');
	renderScreenshot('src/screen5.png', 1024, 768, 'dist/appstore/App Store Screenshot 5 - Ipad 9.7 inch.png');

//MISC
	renderLayeredImage(616, 353, 'dist/Hubmle Store - Humble Capsule.png');
	renderLayeredImage(315, 250, 'dist/Itchio - Itch Capsule.png');

}

var layers = JSON.parse(fs.readFileSync('config.json', 'utf8'));
loadImages();