let today = new Date();

let month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let m = today.getMonth();

let date = `${today.getDate()} ${month[m]}, ${today.getFullYear()}`;
// console.log(date);

// document.querySelector('.date').textContent = date;
// document.getElementsByClassName('date')[0].textContent = date;

document.getElementById('main-unit').addEventListener('keyup', () => {
  let mainOptions = document.querySelector('.main-unit-options');
  let secondaryOptions = document.querySelector('.second-unit-options');

  let mainUnit = mainOptions.options[mainOptions.selectedIndex].textContent.toLowerCase();
  let secondUnit = secondaryOptions.options[secondaryOptions.selectedIndex].textContent.toLowerCase();

  let numberTyped = Number(document.getElementById('main-unit').value) || 0; // Ensures valid number
  console.log(numberTyped);

  if (mainUnit === 'celsius') {
    document.getElementById('second-unit').value = 
      secondUnit === 'kelvin' ? numberTyped + 273.15 :
      secondUnit === 'fahrenheit' ? (numberTyped * 9) / 5 + 32 :
      numberTyped;
  } else if (mainUnit === 'kelvin') {
    document.getElementById('second-unit').value = 
      secondUnit === 'celsius' ? numberTyped - 273.15 :
      secondUnit === 'fahrenheit' ? ((numberTyped - 273.15) * 9) / 5 + 32 :
      numberTyped;
  } else if (mainUnit === 'fahrenheit') {
    document.getElementById('second-unit').value = 
      secondUnit === 'celsius' ? ((numberTyped - 32) * 5) / 9 :
      secondUnit === 'kelvin' ? ((numberTyped - 32) * 5) / 9 + 273.15 :
      numberTyped;
  }

  // Reset values when a new selection is made
  document.querySelectorAll('.reset').forEach((select) => {
    select.addEventListener('change', () => {
      document.getElementById('main-unit').value = '';
      document.getElementById('second-unit').value = '';
    });
  });
});
