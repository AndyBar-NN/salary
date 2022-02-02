let formControl = document.querySelector('.form_control');
formControl.addEventListener('click', (e) => {
  e.preventDefault();
  let betProg = 250;
  let quantityDays = document.querySelector('.quantity_days').value;
  let betContent = 30000 / (quantityDays * 8);

  quantityDays = parseInt(quantityDays);
  let timeProg = document.querySelector('.time_prog').value;
  timeProg = parseInt(timeProg);

  let salarySum = (betProg * timeProg) + ((quantityDays * 8 - timeProg) * betContent);

  let betContentSum = document.querySelector('.bet_content-sum').innerHTML = Math.round(betContent);

  let salary = document.querySelector('.salary').innerHTML = Math.round(salarySum);
});