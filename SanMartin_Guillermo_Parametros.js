const greet = name => {
  if (name === 'Count Dooku') {
    console.log('¡Voy por ti, Dooku!');
    return;
  }

  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  let greeting = '';
  if (hour < 12 && hour > 6) {
    greeting = 'Buenos días';
  } else if (hour > 12 && hour < 19) {
    greeting = 'Buenas tardes';
  } else {
    greeting = 'Buenas noches';
  }
  console.log(
    `¡${greeting}, ${name}! ${hour}:${minutes <= 9 ? '0' + minutes : minutes}`
  );
};

greet('Guillermo');
