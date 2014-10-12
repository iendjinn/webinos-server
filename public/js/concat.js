var j = 0;

function deleteDiv(id) {
	var div = document.getElementById(id);
	div.parentNode.removeChild(div);
}

function getContent(url, div) {
	$.get(url, function(data) {
		var newDiv = document.createElement('div');
		newDiv.setAttribute('class', 'section');
		newDiv.innerHTML = data;
		var brokenLinks = newDiv.getElementsByTagName('a');
		for (var i = 0; i < brokenLinks.length; i++) {
			if (brokenLinks[i].href.indexOf('/.html') != -1) {
				brokenLinks[i].href = brokenLinks[i].pathname.replace('/.html', '/'+brokenLinks[i].innerHTML.replace(/ /g, '_'));
			}
		}
		newDiv.setAttribute('id', 'd' + j);
		j++;
		
		var deleter = document.createElement('div');
		deleter.setAttribute('class', 'deleter');
		deleter.setAttribute('onclick', 'deleteDiv("'+newDiv.id+'");');
		newDiv.appendChild(deleter);
		
		insertLinks(newDiv, function(doc) {
			$('#'+div).after(doc);
		}, document.getElementById(div).innerHTML);
	}, "html");
}

var x = 0;

function insertLinks(content, callback, path) {

	var links = content.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		if (links[i].hostname == settings.concat.host) {
			links[i].href = 'http://' + links[i].host + path + links[i].pathname;
			
			var expander = document.createElement('div');
			if (!links[i].pathname) expander.innerHTML = '';
			else expander.innerHTML = links[i].pathname;
			expander.setAttribute('class', 'expander');
			expander.setAttribute('id', 'e' + x);
			expander.setAttribute('onclick', 'getContent("'+links[i].href+'", "e'+x+'")');
			x++;
			
			$(links[i].parentNode).after(expander);
		}
	}
	callback(content);
}