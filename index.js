var randomNumber1=Math.floor(Math.random()*6)+1;//initializing random nums to select random imgs
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImg1="images/dice"+randomNumber1+".png";//added folder two select random img from images
var randomDiceImg2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg1);//setting the images below the player names to randomize
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").textContent="Player 1 wins!!";
}
if (randomNumber1<randomNumber2) {
    document.querySelector("h1").textContent="Player 2 wins!!";
}
if (randomNumber1==randomNumber2) {
    document.querySelector("h1").textContent="It's a draw :<";
}