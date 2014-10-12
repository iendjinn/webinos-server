function insertGViz() {
	var GViz = document.getElementsByClassName('GViz');
	
	if (GViz.length > 0) {
		for (var i = 0; i < GViz.length; i++) {
			var img = document.createElement('img');
			img.src = settings.GViz.address + GViz[i].innerText + '&chs=' + settings.GViz.size;
			GViz[i].innerHTML = '';
			GViz[i].appendChild(img);
		}
	}
}