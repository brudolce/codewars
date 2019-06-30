//prototyping
function Cylon(model){
	this.model = model;
}
Cylon.prototype.attack = function () { return "Destroy all humans!"; }

function HumanSkin(model){
	this.model = model;
}
HumanSkin.prototype = Cylon.prototype;
HumanSkin.prototype.infiltrate = function() { return "Infiltrate the colonies"; };
