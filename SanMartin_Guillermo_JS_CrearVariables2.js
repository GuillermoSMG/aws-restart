// Edad en años
let age = 11;

// Altura en centímetros
let height = 53;

// 52 cm
const MIN_HEIGHT = 52;

// 10 años
const MIN_AGE = 10;

const checkIfValid = height => {
  if (height > MIN_HEIGHT) {
    console.log('¡Súbete, chico!');
  } else {
    console.log('Lo siento, chico. Tal vez el próximo año.');
  }
};

const checkIfValidStretch1 = (age, height) => {
  if (age > MIN_AGE && height > MIN_HEIGHT) {
    console.log('¡Súbete, chico!');
  } else {
    console.log('Lo siento, chico. Tal vez el próximo año.');
  }
};

const checkIfValidStretch2 = (age, height) => {
  if (age <= MIN_AGE || height <= MIN_HEIGHT) {
    console.log('Lo siento, chico. Tal vez el próximo año.');
  } else {
    console.log('¡Súbete, chico!');
  }
};
