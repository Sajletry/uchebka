// common

const buttons = document.getElementsByTagName('input');

// // // // // // //

function changeInput(element) {
  switch (element.classList[0]) {
    case 'red':
      element.classList.remove('red');
      element.classList.add('orange');
      element.value = 'Охотник';
      break;
    case 'orange':
      element.classList.remove('orange');
      element.classList.add('yellow');
      element.value = 'Желает';
      break;
    case 'yellow':
      element.classList.remove('yellow');
      element.classList.add('green');
      element.value = 'Знать';
      break;
    case 'green':
      element.classList.remove('green');
      element.classList.add('blue');
      element.value = 'Где';
      break;
    case 'blue':
      element.classList.remove('blue');
      element.classList.add('darkBlue');
      element.value = 'Сидит';
      break;
    case 'darkBlue':
      element.classList.remove('darkBlue');
      element.classList.add('violet');
      element.value = 'Фазан';
      break;
    case 'violet':
      element.classList.remove('violet');
      element.classList.add('red');
      element.value = 'Каждый';
      break;
  }
}

const change = () => {
  for (let i = 0; i < buttons.length; i++) {
    changeInput(buttons.item(i));
  }
  setTimeout(change, 300);
}

// change(buttons);

// // // // // // //

const containerState = {
  0: ['red', 'orange', 'yellow', 'green', 'blue', 'darkBlue', 'violet'],
  1: ['orange', 'yellow', 'green', 'blue', 'darkBlue', 'violet', 'red'],
  2: ['yellow', 'green', 'blue', 'darkBlue', 'violet', 'red', 'orange'],
  3: ['green', 'blue', 'darkBlue', 'violet', 'red', 'orange', 'yellow'],
  4: ['blue', 'darkBlue', 'violet', 'red', 'orange', 'yellow', 'green'],
  5: ['darkBlue', 'violet', 'red', 'orange', 'yellow', 'green', 'blue'],
  6: ['violet', 'red', 'orange', 'yellow', 'green', 'blue', 'darkBlue']
};

const itemState = {
  0: ['Каждый', 'Охотник', 'Желает', 'Знать', 'Где', 'Сидит', 'Фазан'],
  1: ['Охотник', 'Желает', 'Знать', 'Где', 'Сидит', 'Фазан', 'Каждый'],
  2: ['Желает', 'Знать', 'Где', 'Сидит', 'Фазан', 'Каждый', 'Охотник'],
  3: ['Знать', 'Где', 'Сидит', 'Фазан', 'Каждый', 'Охотник', 'Желает'],
  4: ['Где', 'Сидит', 'Фазан', 'Каждый', 'Охотник', 'Желает', 'Знать'],
  5: ['Сидит', 'Фазан', 'Каждый', 'Охотник', 'Желает', 'Знать', 'Где'],
  6: ['Фазан', 'Каждый', 'Охотник', 'Желает', 'Знать', 'Где', 'Сидит']
};

let stateIndex = 0;

const changeState = () => {
  for (let i = 0; i < buttons.length; i++) {
    // remove
    buttons.item(i).classList.remove(containerState[stateIndex][i]);
    // add
    if (stateIndex < 6) {
      buttons.item(i).value = itemState[stateIndex + 1][i];
      buttons.item(i).classList.add(containerState[stateIndex + 1][i]);
    } else {
      buttons.item(i).value = itemState[0][i];
      buttons.item(i).classList.add(containerState[0][i]);
    }
  }
  stateIndex += 1;
  if (stateIndex === 7) {
    stateIndex = 0;
  }
  setTimeout(changeState, 300);
}

// changeState();

// // // // // // //

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'darkBlue', 'violet'];
const values = ['Каждый', 'Охотник', 'Желает', 'Знать', 'Где', 'Сидит', 'Фазан'];
let counter = 0;

const changeColorsAndValues = () => {
  for (let i = 0; i < buttons.length; i++) {
    const index = (counter + i) % 7;
    // change class
    buttons.item(i).className = colors[index];
    // add value
    buttons.item(i).value = values[index];
  }
  counter = (counter + 1) % 7;

  setTimeout(changeColorsAndValues, 300);
}

changeColorsAndValues();