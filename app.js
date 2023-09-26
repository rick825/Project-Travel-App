window.onscroll = function(){
    navscroll();
}

const navShow = () =>{
    const nav = document.querySelector('.navbar');
    const navmain = document.querySelector('.navmain');
    const backblack = document.querySelector('.backblack');

    navmain.classList.toggle('nav-show');
    backblack.classList.toggle('backblack-show');
}


function navscroll(){
  var nav = document.querySelector('.header');

  if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
   nav.classList.add('headerback');
}else{
nav.classList.remove('headerback');
}

}