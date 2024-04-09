window.onload = function() {
    var appleLink = document.getElementById("apple");
    var strateryLink = document.getElementById("stratery");
    var bananaLink = document.getElementById("banana");
    var journeyLink = document.getElementById("journey");
    var peachLink = document.getElementById("peach");
    var nearbyLink = document.getElementById("nearby");
    var stratery1=document.getElementsByClassName("box")[0];
    var stratery2=document.getElementsByClassName("sea")[0];
    var journeylink=document.getElementsByClassName("journey1")[0];
    var nearbylink=document.getElementsByClassName("nearby1")[0];
    var sea1=document.getElementsByClassName("seach1")[0];
    var sea2=document.getElementsByClassName("seach2")[0];
    var sea3=document.getElementsByClassName("seach3")[0];
    var sea6=document.getElementsByClassName("seach6")[0];
    appleLink.addEventListener("click", function(event) {
      event.preventDefault();
      sea1.style.backgroundColor = "rgb(43, 232, 78)";
      sea2.style.backgroundColor = "#77767663";
      sea3.style.backgroundColor = "#77767663";
      strateryLink.style.fontWeight = "bold"; 
      journeylink.style.fontWeight = "normal";
      nearbyLink.style.fontWeight = "normal";
      sea6.style.backgroundColor="rgb(43, 232, 78)";
      stratery1.style.display='block';
      stratery2.style.display='block';
      journeylink.style.display='none';
      nearbylink.style.display='none';
  });
  
  strateryLink.addEventListener("click", function(event) {
      event.preventDefault();
      sea1.style.backgroundColor = "rgb(43, 232, 78)";
      sea2.style.backgroundColor = "#77767663";
      sea3.style.backgroundColor = "#77767663";
      strateryLink.style.fontWeight = "bold"; 
      journeylink.style.fontWeight = "normal";
      nearbyLink.style.fontWeight = "normal";
      sea6.style.backgroundColor="rgb(43, 232, 78)";
      stratery1.style.display='block';
      stratery2.style.display='block';
      journeylink.style.display='none';
      nearbylink.style.display='none';
  });

  bananaLink.addEventListener("click", function(event) {
      event.preventDefault(); 
      sea2.style.backgroundColor ="rgb(43, 89, 240)";
      sea1.style.backgroundColor = "#77767663";
      sea3.style.backgroundColor = "#77767663";
      journeyLink.style.fontWeight = "bold"; 
      strateryLink.style.fontWeight = "normal";
      nearbyLink.style.fontWeight = "normal";
      sea6.style.backgroundColor="rgb(43, 89, 240)";
      journeylink.style.display='block';
      stratery1.style.display = 'none'; 
      stratery2.style.display = 'none'; 
      nearbylink.style.display='none';
  });

  journeyLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    sea2.style.backgroundColor ="rgb(43, 89, 240)";
    sea1.style.backgroundColor = "#77767663";
    sea3.style.backgroundColor = "#77767663";
    journeyLink.style.fontWeight = "bold"; 
    strateryLink.style.fontWeight = "normal";
    nearbyLink.style.fontWeight = "normal";
    sea6.style.backgroundColor="rgb(43, 89, 240)";
    journeylink.style.display='block';
    stratery1.style.display='none';
    stratery2.style.display='none';
    nearbylink.style.display='none';
  });

  peachLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    sea3.style.backgroundColor ="rgb(247, 82, 244)";
    sea1.style.backgroundColor = "#77767663";
    sea2.style.backgroundColor = "#77767663";
    nearbyLink.style.fontWeight = "bold"; 
    journeylink.style.fontWeight = "normal";
    strateryLink.style.fontWeight = "normal";
    sea6.style.backgroundColor="rgb(247, 82, 244)";
    nearbylink.style.display='block';
    journeylink.style.display='none';
    stratery1.style.display='none';
    stratery2.style.display='none';
  });

  nearbyLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    sea3.style.backgroundColor ="rgb(247, 82, 244)";
    sea1.style.backgroundColor = "#77767663";
    sea2.style.backgroundColor = "#77767663";
    nearbyLink.style.fontWeight = "bold"; 
    journeylink.style.fontWeight = "normal";
    strateryLink.style.fontWeight = "normal";
    sea6.style.backgroundColor="rgb(247, 82, 244)";
    nearbylink.style.display='block';
    journeylink.style.display='none';
    stratery1.style.display='none';
    stratery2.style.display='none';
  });
}