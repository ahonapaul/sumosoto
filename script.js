var scrollCn = function(quantity)
{
  var scrollTop = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
  
  var size = 300 - ((scrollTop / quantity) || 0);
  
  if(size <= 100) size = 100;
  
  document.querySelector('h1').setAttribute('style', 'font-size: '+size+'px;');


};
window.addEventListener('scroll', function(){ scrollCn(10) });

var pageName;

function page(pageName){
  window.location.href = pageName;
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}