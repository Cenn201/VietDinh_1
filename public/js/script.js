const icon = document.querySelector('.icon');
const hiddenMenus = document.querySelectorAll('.menu-1.hidden');
let isHidden = true;

icon.addEventListener('click', function() {
  if (isHidden) {
    hiddenMenus.forEach(function(menu) {
      menu.classList.remove('hidden');
    });
  } else {
    hiddenMenus.forEach(function(menu) {
      menu.classList.add('hidden');
    });
  }
  
  isHidden = !isHidden;
});