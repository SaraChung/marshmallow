window.onload = function() {
	var doc = document;
	var descriptions = doc.getElementsByClassName("project_description");
	for (var i = 0; i < descriptions.length; i++) {
		if (descriptions[i].innerHTML.length > 300) {
			descriptions[i].innerHTML=descriptions[i].innerHTML.substring(0,300)+" ...";
		}
	}
	var shift = 100;
	var currentShift = 0;
	var leftButton = document.getElementById('scroll_left_button');
	var rightButton = document.getElementById('scroll_right_button');
	var scrollPage = document.getElementById('content');
	var a = scrollPage.style.marginLeft;
	rightButton.onclick = function() {
		if (parseInt((parseInt(scrollPage.style.marginLeft) || 0)) > -(200 - shift)) {
			currentShift += shift;
			leftButton.className="scroll_left_button";
			scrollPage.style.marginLeft = -currentShift + "%";
			if (parseInt((parseInt(scrollPage.style.marginLeft) || 0)) <= -(200 - shift)){
				rightButton.className+=" disabled";
			}
		}
	};
	leftButton.onclick = function() {
		if (parseInt((parseInt(scrollPage.style.marginLeft) || 0)) < 0) {
			currentShift -= shift;
			scrollPage.style.marginLeft = -currentShift + "%";
			rightButton.className="scroll_right_button";
			if (parseInt((parseInt(scrollPage.style.marginLeft) || 0)) >= 0){
				leftButton.className+=" disabled";
			}
		}
	};
}; 