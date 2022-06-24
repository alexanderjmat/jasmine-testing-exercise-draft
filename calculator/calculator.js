window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }

}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValues = {amount: 0, years: 0, rate: 0}
  const amount = document.querySelector('#loan-amount')
  const years = document.querySelector('#loan-years')
  const rate = document.querySelector('#loan-rate')
  amount.value = defaultValues.amount;
  years.value = defaultValues.years;
  rate.value = defaultValues.rate;
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));


}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principle = values.amount;
  const interest = values.rate / 12
  const payments = values.years * 12
  const final = (principle * interest) / (1 - (1 + interest) ** -payments)
  const finalRounded = final.toFixed(2);
  return finalRounded;

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let span = document.querySelector('#monthly-payment');
  span.innerText = `$ ${monthly}`;
}
