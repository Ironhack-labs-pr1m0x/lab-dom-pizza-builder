// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  peppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  peppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything(ev) {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();

  renderGlutenFreeCrust();

  renderButtons(ev);
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

// ✅ Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((el) => {
    if (state.mushrooms) {
      el.style.visibility = 'visible';
    } else {
      el.style.visibility = 'hidden';
    }
  });
}

// ✅ Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((el) => {
    if (state.peppers) {
      el.style.visibility = 'visible';
    } else {
      el.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector('.sauce').style.visibility = 'visible';
  } else {
    document.querySelector('.sauce').style.visibility = 'hidden';
  }
}

// ✅ Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}

// ✅ Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons(ev) {
  if (!ev) {
    let activeButtons = [];
    for (var prop in state) {
      if (state[prop]) activeButtons.unshift(prop);
    }
  } else {
    ev.classList.toggle('active');
  }
}

// ✅ Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
  let toppings = [];
  let price = 0;

  for (var prop in state) {
    if (state[prop]) {
      toppings.unshift(prop);
      price += ingredients[prop].price;
    }
  }

  const toppingElements = toppings.map((el) => {
    return `<li>$${ingredients[el].price} ${ingredients[el].name}</li>`;
  });

  const ul = document.querySelector('.panel.price ul');
  ul.innerHTML = toppingElements.join(' ');

  ul.insertAdjacentHTML('beforeend', `<strong>$${price + 10}</strong>`);
}

renderEverything();

// ✅  Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', (ev) => {
  state.pepperoni = !state.pepperoni;
  renderEverything(ev.target);
});

// ✅ Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', (ev) => {
  state.mushrooms = !state.mushrooms;
  renderEverything(ev.target);
});

// ✅ Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-peppers').addEventListener('click', (ev) => {
  state.peppers = !state.peppers;
  renderEverything(ev.target);
});

// ✅ Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', (ev) => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything(ev.target);
});

// ✅ Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', (ev) => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything(ev.target);
});
