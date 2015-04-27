window.onload = function() {
	var doc = document;
	var menu_button = doc.getElementById("menu_button");
	var menu = doc.getElementById("menu");
	if (menu_button.addEventListener) {
		doc.addEventListener("click", function(event) {
			if (event.target === menu_button && menu.className === "menu") {
				menu.className += " opened";
				menu_button.className += " opened";
			} else{
				menu.className = "menu";
				menu_button.className = "menu_button";
			}
		});
	} else {
		menu_button.addEventListener("onclick", openMenu(event));
	}

};
