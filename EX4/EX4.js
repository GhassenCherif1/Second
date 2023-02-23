function getRandomColor() {
    var color = "#"+ Math.floor(Math.random()*16777215).toString(16);
    return color;
  }
  var elements = document.getElementsByTagName("ul")[0];
  elements.addEventListener("click",function(event) {
      event.target.style.color = getRandomColor();
    });