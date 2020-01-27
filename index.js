// detect button pressed

var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHtml = this.innerHTML;
    MakeSound(buttonInnerHtml);

  });

}

// detect keyboard pressed

document.addEventListener("keydown", function(event) {
  console.log(event);
})


document.addEventListener("keydown", function(event) {
  MakeSound(event.key);
})

function MakeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/1.mp3");
      crash.play();
      break;

    case "2":
      var crash = new Audio("sounds/2.mp3");
      crash.play();
      break;

    case "3":
      var crash = new Audio("sounds/3.mp3");
      crash.play();
      break;

    case "4":
      var crash = new Audio("sounds/4.mp3");
      crash.play();
      break;

    case "5":
      var crash = new Audio("sounds/5.mp3");
      crash.play();
      break;

    case "6":
      var crash = new Audio("sounds/6.mp3");
      crash.play();
      break;

    case "7":
      var crash = new Audio("sounds/7.mp3");
      crash.play();
      break;

    case "8":
      var crash = new Audio("sounds/8.mp3");
      crash.play();
      break;

    case "9":
      var crash = new Audio("sounds/9.mp3");
      crash.play();
      break;
    case "0":
      var crash = new Audio("sounds/0.mp3");
      crash.play();
      break;
    case "Enter":
      var crash = new Audio("sounds/enter.mp3");
      crash.play();
      break;
    case "+":
      var crash = new Audio("sounds/+.mp3");
      crash.play();
      break;



    default:
      concole.log(buttonInnerHtml);

  }



}
