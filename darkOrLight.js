/* http://git.io/darkorlight */

function darkOrLight(selector, dark, light) {
	"use strict";
	var elems = [];
	var bg, i, y, r, g, b;

	if (typeof selector.length !== "undefined") {
		for (i = 0; i < selector.length; i++) {
			elems.push(selector[i]);
		}
	} else {
		elems.push(selector);
	}

	for (i = 0; i < elems.length; i++) {
		bg = window.getComputedStyle(elems[i]).getPropertyValue("background-color");

		if (bg[3] !== "a") {
			dark = (typeof dark === "undefined") || (Number(dark) === 0) ? "dark" : dark;
			light = (typeof light === "undefined") || (Number(light) === 0) ? "light" : light;
			bg = bg.replace("rgb", "").replace(/\s/g, "").replace("(", "").replace(")", "");
			bg = bg.split(",");

			r = Number(bg[0]);
			g = Number(bg[1]);
			b = Number(bg[2]);

			y = (r * 299 + g * 587 + b * 114) / 1000;

			if (y < 130) y = dark;
			else y = light;

			if (elems[i].className === "") elems[i].className = y;
			else elems[i].className += " " + y;
		}
	}
}