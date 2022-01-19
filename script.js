// Click on navigation socialmediaicons

const navigationButton = document.getElementById('nav-button');

const cancelButton = document.getElementById('back');

const openNavigationMenu = () => {
  const main = document.getElementById('maincontent');

  const navigationPage = document.getElementById('navigation-page');
  const navigationList = document.getElementById('navigation-list');


  navigationPage.style.display = 'block';

  main.style.display = 'none';


}

const closeNavigationMenu = () => {
  const main = document.getElementById('maincontent');

  const navigationPage = document.getElementById('navigation-page');

  navigationPage.style.display = 'none';

  main.style.display = 'block';

}

navigationButton.addEventListener('click', openNavigationMenu);

cancelButton.addEventListener('click', closeNavigationMenu);
