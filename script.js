const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menuIcon');
const navBtn = document.getElementById('navBtn');

navBtn.addEventListener('click', openclosemenu);
menu.addEventListener('click', openclosemenu);

function openclosemenu(){
  if(menu.classList.contains('menuShow')){
    menu.classList.remove('menuShow');
    menu.classList.add('menuHide');
    menuIcon.src = "./assets/icons/bars-solid.svg";
    navBtn.ariaLabel = "Hide menu";
  } else {
    menu.classList.remove('menuHide');
    menu.classList.add('menuShow');
    menuIcon.src = "./assets/icons/xmark-solid.svg";
    navBtn.ariaLabel = "Show menu";
  }
}