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

function closemodel(){
    let modelclose = document.querySelectorAll(".maintemp");
    let backblack = document.querySelector(".carbackblack");
    for (var i = 0; i < modelclose.length; i++) {
        modelclose[i].classList.remove('mymodelshow');
      }

   
    backblack.classList.remove('carbackblackshow');
}

function showburj(){
    let model=document.querySelector(".mkhalifa");
    let backblack = document.querySelector(".carbackblack");
    model.classList.add('mymodelshow');
    backblack.classList.add('carbackblackshow');
}

function showarab(){
    let model=document.querySelector(".malarab");
    let backblack = document.querySelector(".carbackblack");
    model.classList.add('mymodelshow');
    backblack.classList.add('carbackblackshow');
}

function showmus(){
    let model=document.querySelector(".mmus");
    let backblack = document.querySelector(".carbackblack");
    model.classList.add('mymodelshow');
    backblack.classList.add('carbackblackshow');
}

function showgard(){
    let model=document.querySelector(".mmir");
    let backblack = document.querySelector(".carbackblack");
    model.classList.add('mymodelshow');
    backblack.classList.add('carbackblackshow');
}

function showpalm(){
    let model=document.querySelector(".mpalm");
    let backblack = document.querySelector(".carbackblack");
    model.classList.add('mymodelshow');
    backblack.classList.add('carbackblackshow');
}


