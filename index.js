const lampe = document.querySelector(".lampe");
toggle(lampe, 1500, 'on');
/** 
 * Toggle css class of the element each timer
 * @param element: the dom element to toggle
 * 
 * */ 
function toggle(element, timer, class1) {
    setInterval(() => {
      element.classList.toggle(class1);
    }, timer);
}
const regions = ["Djerba", "Sousse", "Kasserine", "Beja", "Tunis"];

let i = 0;
let olContent = "";
const olRegions = document.querySelector("#regions");
setInterval(() => {
  if (regions.length == i) {
    olRegions.innerHTML = "";
    i = 0;
  }
  olRegions.innerHTML += `<li> ${regions[i]} </li>`;
  i++;
}, 1000);