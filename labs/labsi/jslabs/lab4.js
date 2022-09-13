function verifyEntry(number) {
  number = Number.parseInt(number);
  verif = true;
  if(!Number.isInteger(number)){
    verif = false;
  }
  else {
    number = number.toString();
      for (var i = 0; i < 4; i++) { 
        if (number.lastIndexOf(number.charAt(i)) != i) {
          verif = false;
          break;
        }
      }
  }
  return verif;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
function getHint(secret, guess) {
  var bulls = 0;
  var cows = 0;
  if (verifyEntry(guess) === false) { alert("Неверное значение! Повторите ввод..."); }
  else {
    var numbers = new Array(10);
    for (var i = 0; i < 10; i++) {
      numbers[i] = 0;
    }
    for (var i = 0; i < secret.length; i++) {
      var s = secret.charCodeAt(i) - 48;
      var g = guess.charCodeAt(i) - 48;
      if (s == g) bulls++;
      else {
        if (numbers[s] < 0) cows++;
        if (numbers[g] > 0) cows++;
        numbers[s]++;
        numbers[g]--;
      }
    }
    if (bulls == 4) {
      return "You win!" + secret;
    }
    else {
      return "быки: " + bulls + " коровы: " + cows;
    }
  }
}
let res = document.getElementById("result");
res.value = "";
let btn = document.getElementById("test");
let num = document.getElementById("A");
num.value = "";
let restart = document.getElementById("restart");
let secret;
let Cleaner2 = document.getElementById("clear2");
Cleaner2.addEventListener('click', function(){
  num.value = "";
  res.value = "";
})
restart.addEventListener('click', function () {
  secret = shuffleArray(numbers).slice(0, 4).join('');
  console.log(secret);
})
document.addEventListener("DOMContentLoaded", function() {
  secret = shuffleArray(numbers).slice(0, 4).join('');
  console.log(secret);
});
btn.addEventListener('click', function () {
  let r = getHint(secret, num.value);
  res.value = r;
})
//1
let btnClaim = document.getElementById('claim');
let res1 = document.getElementById("result1");
let res2 = document.getElementById("result2");
let res3 = document.getElementById("result3");
let res4 = document.getElementById("result4");
let res5 = document.getElementById("result5");
let res6 = document.getElementById("result6");
const chisla = [-3, 0, 6, 9, 12, 15];
const chisla1 = [-30, 10, 63, 59, 120, 175];
const ms = [1, 0.1, 0.01, 0.001, 0.00001, 0.000001, 0.000001, 1e-7, 1e-8, 1e-9, 1e-10, 1e-11, 1e-12, 1e-13, 1e-14, 1e-15]
function GetRandom(min, max) {
    return Math.random() * (max - min) + min;
}
function randomize1(min, max, zadanie) {
    let str = "";
    var mas = [];
    var size = 10;
    if(zadanie == 1){
        for (var i = 0; i < size; i++) {
            var rand = Math.round(Math.random() * (max - min) + min);
            mas[i] = rand;
        }
        for (var i = 0; i < mas.length; i++) {
            let prom = mas[i]+" ";
            str += prom;
        }
    }
    else if(zadanie == 2){
        for (var i = 0; i < size; i++) {
            var rand = Math.random() * (max - min) + min;
            mas[i] = rand;
        }
        for (var i = 0; i < mas.length; i++) {
            let prom = mas[i].toFixed(2)+" ";
            str += prom;
        }
    }
    return str; 
}
function randomize2(massive) {
    var mas = [];
    let str = "";
    for (var i = 0; i < 10; i++) {
        const random = Math.floor(Math.random() * massive.length);
        mas[i] = random;
    }
    for (var i = 0; i < mas.length; i++) {
        let prom = massive[mas[i]]+" ";
        str += prom;
    }
    return str;
}
function randomize3(min, max, step) {
    var mas = [];
    var size = 10;
    let str = "";
    while (mas.length != size) {
        var c = min + step * parseInt(Math.random() * 1000);
        if (c <= max) {
            mas.push(c);
        }
        else { continue; }
    }
    for (let i = 0; i < size; i++) {
        let prom = mas[i].toFixed(1)+" ";
        str += prom;
    }
    return str;
}
btnClaim.addEventListener('click', function(){
  res1.value = randomize1(3, 12, 1);
  res2.value =  randomize2(chisla);
  res3.value = randomize1(3, 12, 2);
  res4.value = randomize3(-2.3, 10.8, 0.1);
  res5.value = randomize2(chisla1);
  res6.value = randomize2(ms);
})
let Cleaner = document.getElementById("clear1");
Cleaner.addEventListener('click', function(){
  res1.value = "";
  res2.value = "";
  res3.value = "";
  res4.value = "";
  res5.value = "";
  res6.value = "";
})