// Variables
// -- DOM Elements
const footer = document.querySelector('footer');
console.log(footer);

// Funtions
const showFooter = () => {
  // -- creating HTML elements
    const div1 = document.createElement('div');
  const ul2 = document.createElement('ul');
  const li12 = document.createElement('li');
  const li22 = document.createElement('li');
    const li123 = document.createElement('li');
  const a12 = document.createElement('a');
  const a22 = document.createElement('a');
    const a123 = document.createElement('a');

  // -- adding classnames to new html created elements
div1.classList.add('container')
ul2.classList.add('listas')
// li12.classList.add('')
// li22.classList.add('')
// a12.classList.add('')
// a22.classList.add('')


  // -- adding content and atributes to created HTML elements
let today = new Date().toLocaleDateString('fr-CA', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
})

// console.log(today);
  a12.href = location.href.includes('pages') ? '../index.html' : 'index.html';
  a12.innerHTML =  '&copy; Car DealerShop';
  a123.innerHTML = `${today}`;

  let user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    a22.href = location.href.includes('pages')
      ? 'my-account.html'
      : './pages/my-account.html';
    a22.innerHTML = 'Take bonus discount -15% <i class="fas fa-tags"></i>';
  } else {
    a22.href = location.href.includes('pages')
      ? 'login.html'
      : './pages/login.html';
    a22.innerHTML = ` All rights reserved &reg;  `
  }

  // -- append elements
    li123.appendChild(a123);
  li12.appendChild(a12);
  li22.appendChild(a22);

  ul2.appendChild(li12);
   ul2.appendChild(li123);
  ul2.appendChild(li22);
  
  div1.appendChild(ul2);
  footer.appendChild(div1);
};

// Events
document.addEventListener('DOMContentLoaded', showFooter);
