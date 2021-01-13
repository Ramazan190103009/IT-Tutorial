function change(element) {
	var a = element.innerHTML;
	switch(a){
    case("About us"):
	document.getElementById('container3').innerHTML =
document.getElementById('AboutUs').innerHTML;
 break;
 }
}
function btn4(element){
	alert("Start to learn");
}

function Alert(element) {
	var text;
	var person = prompt("Please enter your name:", " Yertayev Ramazan");
	if(person == null || person == ""){
		text = "User canceled";
	}else{
		text = "Hello!" + person + " You can start work"
	}
	alert(text);
}

function DropDownContact(element){
	document.getElementById('dropdwn1').classList.toggle("show");
}
function DropdwnFunction(element) {
	document.getElementById('dropdwn2').classList.toggle("show");
}
function myFunction(element) {
	  var x = document.getElementById("menu");
	if (x.style.display == "block") {
	 	x.style.display = "none";
	 }else {
	 	x.style.display = "block";
	 }
}
function modallogin(element){
	var x = document.getElementById("id03").style.display = "block";
}

var x;
function btntry(element){
	x = document.getElementById('box-code2');
	if(x.style.display == "block") {
		x.style.display = "none";
	}else {
		x.style.display = "block";
window.onclick = function(element) {
	if (element.target == x) {
		x.style.display = "none";
	}
}
	}
}
var modal;
function popup(){
	modal = document.getElementById('popup');
	modal.style.display = 'block';
}
window.onclick = function(element) {
	if (element.target == modal) {
	  modal.style.display = "none";
	}
}
  
function primary(){
	alert("Button Primary");
}
function secondary(){
	alert("Button Secondary");
}
function success(){
	alert("Button Success");
}
function warning(){
	alert("Button Warning");
}
function danger(){
	alert("Button Danger");
}
///////// toggle //////////////
function toggle(){
	var toggle = document.getElementById('learn5');
	if (toggle.style.display == 'none') {
		toggle.style.display = 'block';
	}else {
		toggle.style.display = 'none';
	}
}
///////// ScrollTop //////////
function ScrollTop(){
	document.body.scrollTop=0;
	document.documentElement.scrollTop = 0;
}

function initMap() {
	var options = {
		center: {lat: 51.1470, lng: 71.4704},
		zoom: 11.8,
	  }
	  var map = new google.maps.Map(document.getElementById('map'), options);
    var icon = {
		url: "https://previews.123rf.com/images/onluxe/onluxe1605/onluxe160500086/57600951-map-pin-for-supermarket-location-map-marker-pointer-cart-icon.jpg",
		scaledSize: new google.maps.Size(70, 70)		
	}
	  var marker1 = new google.maps.Marker({
	 position: {lat: 51.15402415047999, lng: 71.42937528117545},
	 map:map,
	 icon: icon
  });

  marker1.addListener("click", function(){
	  document.getElementById('marker1').style.display='block';
  });
  marker1.addListener("click", function(){
	document.getElementById('marker1-modal').style.display='block';
});
marker1.addListener("mouseout", function(){
	document.getElementById('marker1-modal').style.display='none';
});
marker1.addListener("mouseout", function(){
	document.getElementById('marker1').style.display='none';
});
  var icon = {
	 url: "https://vectorified.com/images/school-map-icon-5.png",
	 scaledSize: new google.maps.Size(60, 60),
  }
  var marker2 = new google.maps.Marker({
	 position: {lat: 51.13394036721601,lng: 71.46427609026438},
	 map:map,
	 icon: icon
  });
  marker2.addListener("click", function(){
	  map.setZoom(15);
  })
  var icon2 = {
	 url:"https://cdn2.iconfinder.com/data/icons/places-4/100/drink_place_marker_location_bar_coctail_party-512.png",
	 scaledSize: new google.maps.Size(60, 50),
  };
  var marker3 = new google.maps.Marker({
	 position: {lat:51.1470916382244, lng: 71.47481710770293},
	 map:map,
	 icon: icon2
  });
  marker3.addListener("click", function(){
	var x; 
	x = document.getElementById('marker3').style.display = "block";	
 });
 marker3.addListener("mouseout", function(){
	 document.getElementById('marker3').style.display='none';
 })
}



