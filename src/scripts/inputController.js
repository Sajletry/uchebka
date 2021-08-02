const greenColor = '#009900';
const blueColor = '#000099';

const redColor1 = '#d20a25';
const orangeColor1 = '#ff6816';
const yellowColor1 = '#ffff00';
const greenColor1 = '#3bcb00';
const blueColor1 = '#246eff';
const darkBlueColor1 = '#0707b7';
const purpleColor1 = '#7020bf';

function changeColor(input){

  if(input.dataset.isgreen === "true"){
    input.style.background = blueColor;
    input.dataset.isgreen = "false";
  }
  else if(input.dataset.isgreen === "false"){
    input.style.background = greenColor;
    input.dataset.isgreen = "true";
  }


//1
  if (input.dataset.isred1 === "true" ){
    input.style.background = redColor1;
    input.dataset.isred1 = "false";
  }
  else if (input.dataset.isred1 === "false"){
    input.style.background = orangeColor1;
    input.dataset.isred1 = "true";
  }
//2
  if (input.dataset.isorange1 === "true"){
    input.style.background = orangeColor1;
    input.dataset.isorange1 = "false";
  }
  else if (input.dataset.isorange1 === "false"){
   input.style.background = yellowColor1;
   input.dataset.isorange1 = "true";
  }
//3
   if (input.dataset.isyellow1 === "true"){
    input.style.background = yellowColor1;
    input.dataset.isyellow1 = "false";
  }
   else if (input.dataset.isyellow1 === "false"){
     input.style.background = greenColor1;
     input.dataset.isyellow1 = "true";
   }
//4
  if (input.dataset.isgreen1 === "true"){
    input.style.background = greenColor1;
    input.dataset.isgree1 = "false";
  }
  else if (input.dataset.isgreen1 === "false"){
    input.style.background = blueColor1;
    input.dataset.isgreen1 = "true";
  }
//5
  if (input.dataset.isblue1 === "true"){
    input.style.background = blueColor1;
    input.dataset.isblue1 = "false";
  }
  else if (input.dataset.isblue1 === "false"){
    input.style.background = darkBlueColor1;
    input.dataset.isblue1 = "true";
  }
//6
  if (input.dataset.isDarkBlue1 === "true"){
    input.style.background = darkBlueColor1;
    input.dataset.isDarkBlue1 = "false";
  }
  else if (input.dataset.isDarkBlue1 === "false"){
    input.style.background = purpleColor1;
    input.dataset.isdarkBlue1 = "true";
  }
//7
  if (input.dataset.ispurple1 === "true"){
    input.style.background = purpleColor1;
    input.dataset.ispurple1 = "false";
  }
  else if (input.dataset.ispurple1 === "false"){
    input.style.background = redColor1;
    input.dataset.ispurple1 = "true";
  }

}

function onTimer(input){
  setInterval(()=>{
    changeColor(input);
  },300);
}

window.addEventListener('DOMContentLoaded', (event) => {
  const login = document.getElementById('login');
  const password = document.getElementById('password');

  const red = document.getElementById('red');
  const orange = document.getElementById('orange');
  const yellow = document.getElementById('yellow');
  const green = document.getElementById('green');
  const blue = document.getElementById('blue');
  const darkBlue = document.getElementById('darkBlue');
  const purple = document.getElementById('purple');

  onTimer(login);
  onTimer(password);

  onTimer(red);
  onTimer(orange);
  onTimer(yellow);
  onTimer(green);
  onTimer(blue);
  onTimer(darkBlue);
  onTimer(purple);
});