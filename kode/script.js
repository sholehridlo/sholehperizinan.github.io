// --------------- lazy loads ---------------
const images = document.querySelectorAll("img");
images.forEach(function(image) {
	image.setAttribute("loading", "lazy");
});

// --------------- footer credit ---------------
const tahun = new Date().getFullYear();
document.querySelector(".tahun").innerHTML = tahun;

// --------------- anti cheats ---------------
document.addEventListener("contextmenu", e => {
	e.preventDefault();
}, false);

const forbiddenKeys = ['c', 'u', 's', 'p'];
const forbiddenKeyCodes = [123, 73, 74];

document.addEventListener("keydown", e => {
	if (e.ctrlkey || forbiddenKeys.includes(e.key) || forbiddenKeyCodes.includes(e.keyCode)) {
		e.stopPropagation();
		e.preventDefault();
	};
});