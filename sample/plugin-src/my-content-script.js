import depSample from "./dependency-sample";

console.info("content script running");
console.log(depSample());


function makeSpace(){
	const space = document.createElement("div");
	space.id = 'copycan-space';
	document.body.prepend(space);
	
	space.innerHTML = "<p>this is injection again</p>";
}

makeSpace();