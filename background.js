var bgs = [
    'ny_1.jpg',
    'ny_2.jpeg'

];
var i = 0;

function changeBG() {
    document.getElementByTagName('body').style.backgroundImage = "url(images/backgrounds/" + bgs[i] + ")";
    i = (i+1) % bgs.length;
}

window.onload = function () {
  setInterval(changeBG, 5000);
  changeBG();
};
