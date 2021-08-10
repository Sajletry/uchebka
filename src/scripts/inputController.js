
window.addEventListener('DOMContentLoaded', (event) => {
  const ball = document.getElementById('ball');
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  let isDrugged;
  let position = 'left';

  function drugStart(){
    isDrugged = true;
    ball.style.position = 'absolute';
  }

  function drugmove(event){
    if(isDrugged){
    ball.style.top = event.pageY+'px';
    ball.style.left = event.pageX+'px';
    }
  }

  function drugStop(){
    if(isDrugged) {
      isDrugged = false;
      if(position==='left'){
        left.appendChild(ball)
      }
      if(position==='right'){
        right.appendChild(ball)
      }
    }
  }



  ball.addEventListener('mousedown',drugStart);
  document.body.addEventListener('mousemove',drugmove)
  document.body.addEventListener('mouseup',drugStop)
  left.addEventListener("mouseenter", ()=>{position="left"})
  right.addEventListener("mouseenter", ()=>{position="right"})
});