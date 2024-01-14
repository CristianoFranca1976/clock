const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const secound = document.querySelector(".secound");

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
setInterval(() => {
  const d = new Date();
  let h = addZero(d.getUTCHours());
  let m = addZero(d.getUTCMinutes());
  let s = addZero(d.getUTCSeconds());
  let hours = h;
  let min = m;
  let sec = s;
  hour.innerHTML = hours;
  minute.innerHTML = min;
  secound.innerHTML = sec;
}, 1000);

const body = document.querySelector("body");
/* 
window.onload = function () {

    function Timer() {
      window.setInterval("changeImage()", 5000);
    }
  
    function changeImage() {   
      var BackgroundImg = ["./assets/avenue.jpg",
                        "./assets/bird.jpg",
                        "./assets/dandelion.jpg",
                        "./assets/feather.jpg"];
      var i = Math.floor((Math.random() * 3));
      var bgImg = document.body.style.backgroundImage();
      bgImg.url = BackgroundImg[i];
    }
  }
*/
var Image_Array = [
  "./assets/avenue.jpg",
  "./assets/bird.jpg",
  "./assets/dandelion.jpg",
  "./assets/feather.jpg",
  "./assets/mountains.jpg",
  "./assets/owl.jpg",
  "./assets/sea.jpg",
  "./assets/seashells.jpg"
];
secs = 8;

function background_image() {
  window.clearTimeout();
  var null_value = 0;
  for (i = 0; i < Image_Array.length; i++) {
    setTimeout(function () {
      document.documentElement.style.background =
        "url(" + Image_Array[null_value] + ") no-repeat center center fixed";
      document.documentElement.style.backgroundSize = "cover";
      if (null_value + 1 === Image_Array.length) {
        setTimeout(function () {
          background_image();
        }, secs * 1000);
      } else {
        null_value++;
      }
    }, secs * 1000 * i);
  }
}
background_image();
