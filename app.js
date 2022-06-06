const btn = document.getElementById('calculate');

btn.addEventListener('click', function() {

  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;

if(height === '' || weight === ''){
  alert("Please fill out the input field(s)");
  return;
}

// BMI = weight in KG / (height in Meter ^ 2)

height = height / 100

let BMI = (weight / (height * height));

BMI = BMI.toFixed(2);

document.querySelector('#result').innerHTML = BMI;

let status = '';

if(BMI < 18.5){
  status = "Underweight";
}
if (BMI >= 18.5 && BMI < 25){
  status = "Healthy";
}
if(BMI >= 25 && BMI < 30){
  status = "Overweight";
}
if(BMI >= 30){
  status = "Obese";
}

document.querySelector('.comment').innerHTML = `Result:
you are <span id ="comment">${status}</span>`;

})



// BMI info-box
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
let slider = document.querySelector('.slider');

btn1.onclick = function() {
  slider.style.marginLeft = '0px';
  this.style.background = 'aliceblue';
  btn2.style.background = 'transparent';
  btn3.style.background = 'transparent';
  btn4.style.background = 'transparent';
  btn5.style.background = 'transparent';
}
btn2.onclick = function() {
  slider.style.marginLeft = '-300px';
  this.style.background = 'aliceblue';
  btn1.style.background = 'transparent';
  btn3.style.background = 'transparent';
  btn4.style.background = 'transparent';
  btn5.style.background = 'transparent';
}
btn3.onclick = function() {
  slider.style.marginLeft = '-600px';
  this.style.background = 'aliceblue';
  btn1.style.background = 'transparent';
  btn2.style.background = 'transparent';
  btn4.style.background = 'transparent';
  btn5.style.background = 'transparent';
}
btn4.onclick = function() {
  slider.style.marginLeft = '-900px';
  this.style.background = 'aliceblue';
  btn1.style.background = 'transparent';
  btn2.style.background = 'transparent';
  btn3.style.background = 'transparent';
  btn5.style.background = 'transparent';
}
btn5.onclick = function() {
  slider.style.marginLeft = '-1200px';
  this.style.background = 'aliceblue';
  btn1.style.background = 'transparent';
  btn2.style.background = 'transparent';
  btn3.style.background = 'transparent';
  btn4.style.background = 'transparent';
}
