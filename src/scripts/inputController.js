const greenColor = '#009900';
const blueColor = '#000099';

function changeColor(input){
  if(input.dataset.isgreen === "true"){
    input.style.background = blueColor;
    input.dataset.isgreen = "false";
  }else if(input.dataset.isgreen === "false"){
    input.style.background = greenColor;
    input.dataset.isgreen = "true";
  }
}

function onTimer(input){
  setInterval(()=>{
    changeColor(input);
  },1000);
}

window.addEventListener('DOMContentLoaded', (event) => {
  const login = document.getElementById('login');
  const password = document.getElementById('password');
  onTimer(login);
  onTimer(password);
});