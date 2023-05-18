const menu = document.getElementById('menu');

function openclosemenu(){
  if(menu.classList.contains('menuShow')){
    menu.classList.remove('menuShow');
    menu.classList.add('menuHide');
  } else {
    menu.classList.remove('menuHide');
    menu.classList.add('menuShow');
  }
}