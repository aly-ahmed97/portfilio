// google maps 
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 29.9792 , lng: 31.1342 },
    zoom: 17
  });
}
// text color options 
let colors = document.getElementsByClassName("color"),
    p      = document.getElementsByTagName("p"),
    i      = 0 ,
    y      = 0 ;
for(i=0 ; i < colors.length ; i++)
  {
  colors[i].onclick = function()
  {
    for(y = 0 ; y < colors.length ; y++)
      {
        colors[y].classList.add("not-active");
        colors[y].classList.remove("active");
      }
    this.classList.remove("not-active");
    this.classList.add("active");
    let ColorText = this.classList.item(1);
    for(y = 2 ; y < (p.length-1) ; y++)
      p[y].style.color = ColorText;
  }
}
//show hide menu
let gear = document.getElementsByClassName("open-settings"),
    aside = document.getElementsByClassName("settings-section");

gear[0].onclick = function()
{
  aside[0].classList.toggle("hide");
  aside[0].classList.toggle("show");
}
//random image

let Ciamge = document.getElementById("Cimage");
function randomImage()
{
let counter = Math.floor(Math.random() * 5);
counter++;
Ciamge.src = "./photos/pyramids"+counter+".jpg";
}
var intervalid = setInterval(randomImage,3000);

let yes = document.getElementById("Yes"),
    no  = document.getElementById("No");
    
no.onclick = function()
{
  if(intervalid)
  clearInterval(intervalid);
}
yes.onclick = function()
{
    if (intervalid) {
    clearInterval(intervalid);
    }
    randomImage();
    intervalid = setInterval(randomImage,3000);
}