let formControl = document.querySelector('.form_control');
let betContentSum = document.querySelector('.bet_content-sum');
let salary = document.querySelector('.salary');

formControl.addEventListener('click', (e) => {
  e.preventDefault();
  let betProg = 250;

  let quantityDays = document.querySelector('.quantity_days').value;
  quantityDays = parseInt(quantityDays);

  let timeProg = document.querySelector('.time_prog').value;
  timeProg = parseInt(timeProg);

  if (quantityDays && timeProg) {
    let betContent = 30000 / (quantityDays * 8);
    let salarySum = (betProg * timeProg) + ((quantityDays * 8 - timeProg) * betContent);

    betContentSum.innerHTML = Math.round(betContent);
    salary.innerHTML = Math.round(salarySum);
  } else {
    alert("Введите корректные данные");
  }

});