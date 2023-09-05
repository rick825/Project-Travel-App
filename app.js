const navShow = () =>{
    const nav = document.querySelector('.navbar');
    const navmain = document.querySelector('.navmain');
    const backblack = document.querySelector('.backblack');

    navmain.classList.toggle('nav-show');
    backblack.classList.toggle('backblack-show');
}