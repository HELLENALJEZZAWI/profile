const button_bar=document.querySelector('.header .nav-bar .nav-list .button_bar');
const mobile_menu=document.querySelector('.header .nav-bar .nav-list  ul');
const header=document.querySelector('.header .container');

button_bar.addEventListener('click',()=>{

button_bar.classList.toggle('active');
mobile_menu.classList.toggle('active');

});
document.addEventListener('scroll',()=>{
    var scroll_position=window.scrollY;
    if(scroll_position>250){
        header.style.background='#29323c';
    }
    else{
        header.style.background='trancparent';
    }
});

document.addEventListener('scroll',()=>
{
var scroll_position=window.scrollY;
if(scroll_position>250){
    header.style.backgroundColor = '#29323c';
} 
else
 {
    header.style.backgroundColor = 'transparent';
}
});
