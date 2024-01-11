var bgImageArray = ["knight.jpg", "earthrise.jpg", "coding.jpeg"],
base = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-"
secs = 4;
bgImageArray.forEach(function(img){
    new Image().src = img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 
			document.documentElement.style.background = "url(" + bgImageArray[k] + ") no-repeat center center fixed";
			document.documentElement.style.backgroundSize ="cover";
		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();