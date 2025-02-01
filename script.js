function volume_sphere() {
    //Write your code here
	event.preventDefault();
	let r=parseFloat(document.getElementById("radius").value);
	if(isNaN(r) || r<=0) {
		document.getElementById("volume").value="NaN";
		return;
	}

	let volume = (4 / 3) * (Math.PI) * Math.pow(r, 3);
	document.getElementById("volume").value = volume.toFixed(4); 
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
