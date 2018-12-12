// Your scripts here
const amount = document.getElementById('amount');
const percent = document.getElementById('percent');
const numPeople = document.getElementById('people')
const calc = document.getElementById('calculate');
const total = document.getElementById('total');
const tipAmount = document.getElementById('tip');
const costEachTip = document.getElementById('each-tip');
const costEachTotal = document.getElementById('each-total');
// const bill = Number(amount.value);
// const tipPercent = Number(percent.value);
// const tips = bill * tipPercent / 100;
// const people = Number(numPeople.value);

calc.addEventListener('click', function() {
  const bill = Number(amount.value);
  const tipPercent = Number(percent.value);
  const tips = (bill * tipPercent / 100).toFixed(2);
  const people = Number(numPeople.value);
  // total.innerHTML = amount * (1+percent)
  tip.innerHTML = tips;
  total.innerHTML = bill + tips;
  costEachTip.innerHTML = tips/people;
  costEachTotal.innerHTML = bill/people;
  // console.log(total.textContent)
  // costEach.innerHTML = bill// total.textContent/numPeople.value


  // console.log("hello world")
})

// Add an event listener to button_1
// calc.addEventListener('click', function(e) {
//   // Set these properties when then button_1 is clicked
//   titleElement.style.color = '#22dd11';
//   titleElement.innerHTML = 'Run!';
// });
