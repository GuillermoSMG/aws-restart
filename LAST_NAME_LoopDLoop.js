/* 
En este ejercicio es necesario un búcle porque se deben realizar un conjunto de instrucciones varias veces
Usé un while porque estas se deben realizar mientras se cumpla que la distancia recorrida por el corredor es menor a la distancia máxima 
*/

// Distancia hasta la que se darán caramelos
const MAX_KM = 10;

// Se darán caramelos cada 3km
const GIVE_CANDY_EVERY = 3;

// Velocidad mínima para otorgar caramelos en km/h
const MIN_VELOCITY = 9;

// Distancia recorrida por el corredor
let runnedDistance = 0;
let runnedDistanceStretch2 = 0;

// Cantidad de caramelos dados
let candys = 0;
let candysStretch2 = 0;

// Velocidad del corredor en km/h
let runnerVelocity = 10;

/* 
Mientras la distancia recorrida sea menor a la distancia máxima seguirá corriendo el bucle, 
al intentar entrar con runnedDistance = 11 se detendrá
 */
// El punto de partida del búcle es con la distancia recorrida en 0
while (runnedDistance < MAX_KM) {
  // Se le suma 1 a la distancia recorrida
  runnedDistance++;
  // Si los km recorridos son múltiplos de 3 se dará un caramelo
  if (!(runnedDistance % GIVE_CANDY_EVERY)) candys++;
}
console.log(runnedDistance, candys);

while (runnedDistanceStretch2 < MAX_KM) {
  // Se le suma 1 a la distancia recorrida
  runnedDistanceStretch2++;
  // Si los km recorridos son múltiplos de 3 y la velocidad del corredor mayor a 9km/h se dará un caramelo
  if (
    !(runnedDistanceStretch2 % GIVE_CANDY_EVERY) &&
    runnerVelocity > MIN_VELOCITY
  )
    candysStretch2++;
}
console.log(runnedDistanceStretch2, candysStretch2);
