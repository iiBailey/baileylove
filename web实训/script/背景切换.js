document.addEventListener("DOMContentLoaded", function() {
  var images = ["img/香港.jpg", "img/美国自由女神.jpg", "img/九寨沟.jpg", "img/哈尔滨.jpeg"];
  var Index = 0; 
  var banners = document.getElementById('banner');
  function nextSlide() {
    Index = (Index + 1) % 4; 
    banners.style.backgroundImage = "url('" + images[Index] + "')";
  }
  setInterval(nextSlide, 2000);
});


