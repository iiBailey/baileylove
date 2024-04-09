document.addEventListener("DOMContentLoaded", function() {
var parentSelect = document.getElementById("province");
var childSelect = document.getElementById("city");
parentSelect.addEventListener("change", function() {
  childSelect.innerHTML = "";
  var selectedValue = parentSelect.value;
  if (selectedValue === "江苏省") {
    childSelect.innerHTML = `
      <option >南京</option>
      <option >徐州</option>
      <option >苏州</option>
      <option >无锡</option>
      <option >宿迁</option>
      <option >常州</option>
      <option >淮安</option>
      <option >泰州</option>
      <option >南通</option>
      <option >镇江</option>
      <option >盐城</option>
      <option >扬州</option>
      <option >连云港</option>
    `;
  } else if (selectedValue === "浙江省") {
    childSelect.innerHTML = `
      <option >杭州</option>
      <option >宁波</option>
      <option >金华</option>
      <option >舟山</option>
      <option >嘉兴</option>
      <option >温州</option>
      <option >绍兴</option>
      <option >衢州</option>
      <option >台州</option>
      <option >丽水</option>
    `;
  }
});
})