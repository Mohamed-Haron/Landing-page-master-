'use-strict';

function display_menu(){

   let option =  document.getElementById('mobile-list');
   if(option.style.display === 'none'){
    option.style.display = 'block';
    document.getElementById('close').src = './images/icon-close.svg';
   }else{
    option.style.display = "none";
    document.getElementById('close').src = './images/icon-hamburger.svg';
   }
   
}