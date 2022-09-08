const menu = document.querySelector('#btn');
const itemsMenu = document.querySelector('#display');

function changeClass () {
  if (menu.getAttribute('class') === 'menu') {
    menu.setAttribute('class', 'close');
    itemsMenu.setAttribute('class', 'appear');
  } else {
    menu.setAttribute('class', 'menu');
    itemsMenu.setAttribute('class', 'disappear');
  }
}