const css = document.querySelector("h3");
const [color1, color2] = document.querySelectorAll(".color");
const body = document.getElementById("gradient");

setGradient = () => {
	body.style.background = _linearGradient();
	css.textContent = `background = ${body.style.background};`
}

_linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Old version:
//-----------------------------------------------------------
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// updateGradient();

// function updateGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, "
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = "background = " + body.style.background + ";"
// }


// color1.addEventListener("input", updateGradient);
// color2.addEventListener("input", updateGradient);