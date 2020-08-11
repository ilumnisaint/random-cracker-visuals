//v0.0.01
//random-cracker-viz
//goal => random texts and symbols printing in blazzing speed and then one by one each letter
//turns into this word - random.
//or any other word. or sentences. or paragraphs. hahaha😄😄

//var
var erandom = "Random";
var rNdM = (i) => String.fromCharCode(i);

//loop
for (var i = 0; i < 10000; i++) {
  console.log(" " + rNdM(i) + rNdM(i) + rNdM(i) + rNdM(i) + rNdM(i) + rNdM(i));
  if (i == 9999) {
    console.log(" " + erandom);
    break;
  }
}

//timer-setter
