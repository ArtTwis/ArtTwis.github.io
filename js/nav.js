document.addEventListener('click', (event) => {
  if(event.target.id == 'navIcon'){
    document.querySelector('#navOptions').classList.toggle('show');
  }

  if(event.target.classList.contains('navLink')){
    document.querySelector('#navOptions').classList.remove('show');
  }
})

