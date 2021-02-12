document.addEventListener('click', (event) => {
  if(event.target.id == 'navIcon'){
    document.querySelector('#navOptions').classList.toggle('show');
  }
})