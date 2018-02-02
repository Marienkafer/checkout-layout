function updateValue(value) {
	var slider = document.getElementById("clientInput");
	var clientNumber = document.getElementById("sliderNumber");
	var clientPricePlan = document.getElementById("client-price");
	clientNumber.innerHTML = slider.value;
	slider.oninput = function() {
		clientNumber.innerHTML = this.value;
		clientPricePlan.innerHTML = "$"+clientNumber.innerHTML*120;
	}
}

function switchvalue(){
	document.getElementById("cmdSwitch300").addEventListener("click", function(e){
		var list = document.querySelector("ul");
		list.appendChild(list.firstElementChild);
		document.getElementById("300").checked= true;
		document.getElementById("29").checked= false;
	});
	document.getElementById("cmdSwitch29").addEventListener("click", function(e){
		var list = document.querySelector("ul");
		list.appendChild(list.firstElementChild);
		document.getElementById("29").checked= true;
		document.getElementById("300").checked= false;
	});

}
