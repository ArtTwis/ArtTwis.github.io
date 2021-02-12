document.addEventListener('scroll', () => {
  let scrollToTop_Button = document.querySelector('#scrollButton');
  let count = window.scrollY;
  if(count > window.innerHeight){
    scrollToTop_Button.classList.remove('hidden');
  }else{
    scrollToTop_Button.classList.add('hidden');
  }
});

document.addEventListener('click', (event) => {
  if(event.target.getAttribute('data-scrollBtn') == 'scrollToTop'){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
})

let defaultScrollRevealObject = {
  // origin: 'top',
  distance: '50px',
  duration: 1000,
  delay: 0,
  scale: '0.5',
  reset: true,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  mobile: true,
  viewFactor: 0
};

// ScrollReveal().reveal('#pageHeader');
ScrollReveal().reveal('#greeting-text-div', defaultScrollRevealObject);
ScrollReveal().reveal('#greeting-image-div', defaultScrollRevealObject);
ScrollReveal().reveal('#skills-image-div', defaultScrollRevealObject);
ScrollReveal().reveal('#skills-text-div', defaultScrollRevealObject);
ScrollReveal().reveal('#workExp_text_div', defaultScrollRevealObject);
ScrollReveal().reveal('#workExp_image_div', defaultScrollRevealObject);
ScrollReveal().reveal('#contactMe_image_div', defaultScrollRevealObject);
ScrollReveal().reveal('#contactMe_text_div', defaultScrollRevealObject);