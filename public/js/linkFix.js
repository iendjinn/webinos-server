function fixBroken() {
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		if (links[i].href.indexOf('/.html') != -1) {
			links[i].href = links[i].pathname.replace('/.html', '/'+links[i].innerHTML.replace(/ /g, '_'));
		}
	}
}