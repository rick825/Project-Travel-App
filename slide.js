// Get all the .maintemp elements
var maintempElements = document.querySelectorAll('.maintemp');

// Iterate through each .maintemp element
maintempElements.forEach((maintemp, index) => {
  var imgList = maintemp.querySelector('.imgList');
  var scrollRight = maintemp.querySelector('.scroll-right');
  var scrollLeft = maintemp.querySelector('.scroll-left');

  scrollRight.addEventListener('click', (event) => {
    imgList.scrollBy(750, 0);
  });

  scrollLeft.addEventListener('click', (event) => {
    imgList.scrollBy(-750, 0);
  });
});





