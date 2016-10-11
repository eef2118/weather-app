var temperature;


document.getElementById("submit").onclick = function(){

var celcius = parseInt(document.getElementById("temperature").value);

 temperature = ((celcius *9)/5 + 32);

parseInt(document.getElementById("result").innerHTML = temperature);


 if ( temperature > 85) {    
  document.getElementById("cover").style.backgroundImage = "url('images/summer_landscape.jpg')";
   document.getElementById("summer").innerHTML = "Summer";
   document.getElementById("winter").innerHTML = "";
   document.getElementById("fall").innerHTML = "";
   document.getElementById("spring").innerHTML = "";
}

  else if (temperature < 49 ) {
  document.getElementById("cover").style.backgroundImage = "url('images/winter_landscape.jpg')";
    document.getElementById("summer").innerHTML = "";
    document.getElementById("winter").innerHTML = "Winter";
    document.getElementById("fall").innerHTML = "";
    document.getElementById("spring").innerHTML = "";
}

   else if (temperature > 50 && temperature < 69) {
 document.getElementById("cover").style.backgroundImage = "url('images/autumn_landscape.jpg')";
   document.getElementById("summer").innerHTML = "";
   document.getElementById("winter").innerHTML = "";
   document.getElementById("fall").innerHTML = "Fall";
   document.getElementById("spring").innerHTML = "";
}
  else if (temperature > 60 && temperature < 80) {
 document.getElementById("cover").style.backgroundImage = "url('images/spring_landscape.jpg')";
   document.getElementById("summer").innerHTML = "";
   document.getElementById("winter").innerHTML = "";
   document.getElementById("fall").innerHTML = "";
   document.getElementById("spring").innerHTML = "Spring";
  }
}