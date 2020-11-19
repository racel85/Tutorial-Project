var commentaries = document.getElementsByClassName('clickToAppear'); // make an array with all the commentaries
var textToHighligh= document.getElementsByClassName('toBeHighlighted');

function changeText1() {
  document.getElementById('demo').innerHTML = 'I changed!'; // change the text inside the preview
  textToHighligh[0].innerHTML = 'I changed!'; // change the text inside html cell
  textToHighligh[0].style.backgroundColor = 'red'; // change the backgorund color of the changed text
  commentaries[0].style.opacity = 1; // change the first commentary to visible. The first is given by using the index 0, stated by 'commentaries[0]'
}


var state = 0; // this will store the state of the light bulb, 0=OFF & 1=ONN. The default is 0.
var bulb = document.getElementById('bulb'); //get the element

function engageLight() {
  if (state == 0) {
    state = 1; // Register the turning on
    bulb.src = 'imgs/bulbON.png';
    bulb.style.boxShadow = "0px 0px 55px 20px rgb(255,215,0)";
    bulb.style.backgroundColor = "rgb(255,215,0, 0.72)";

    //change the text inside HTML & CSS cell when it is turned on
    textToHighligh[1].innerHTML = 'imgs/bulbON.png'; //change the text inside html cell
    textToHighligh[1].style.backgroundColor = 'red';

    textToHighligh[2].innerHTML = 'box-shadow: rgb(255, 215, 0) 0px 0px 55px 20px;<br>background: rgb(255, 215, 0, 0.72);'
    textToHighligh[2].style.backgroundColor = 'red';
  } else {
    state = 0; // Register the turning off
    bulb.src = 'imgs/bulbOFF.png';
    bulb.style.boxShadow = "0px 0px 0px 0px";
    bulb.style.backgroundColor = "white";

    //change the text inside HTML & CSS cell when it is turned off
    textToHighligh[1].innerHTML = 'imgs/bulbOFF.png'; //change the text inside html cell
    textToHighligh[2].innerHTML = ''
  }
    commentaries[1].style.opacity = 1;
}
