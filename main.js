let formControl = document.querySelector('.form_control');
formControl.addEventListener('click', (e) => {
  e.preventDefault();
  let betProg = 250;
  let betContent = 156;
  let quantityDays = document.querySelector('.quantity_days').value;
  quantityDays = parseInt(quantityDays);
  let timeProg = document.querySelector('.time_prog').value;
  timeProg = parseInt(timeProg);

  let salarySum = (betProg * timeProg) + ((quantityDays * 8 - timeProg) * betContent);

  let salary = document.querySelector('.salary').innerHTML = salarySum;
});