var savedColor = localStorage.getItem('color')
var newColor = $('.color-here')
newColor.css('backgroundColor', savedColor)
var changeColorBtn = $('.change-color')

changeColorBtn.on("click", changeColor);

function changeColor() {
  var currentColor = $('.color').val();
  localStorage.setItem('color', currentColor)
  newColor.css('backgroundColor', color);
}
