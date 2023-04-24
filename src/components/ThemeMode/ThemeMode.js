import './ThemeMode.css';

export const ThemeMode = () => {
  return `<svg class = "theme-mode-button" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
      <path d="M479.765 716Q538 716 579 675.235q41-40.764 41-99Q620 518 579.235 477q-40.764-41-99-41Q422 436 381 476.765q-41 40.764-41 99Q340 634 380.765 675q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280 576q0-83 58.5-141.5T480 376q83 0 141.5 58.5T680 576q0 83-58.5 141.5T480 776ZM70 606q-12.75 0-21.375-8.675Q40 588.649 40 575.825 40 563 48.625 554.5T70 546h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170 606H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790 546h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890 606H790ZM479.825 296Q467 296 458.5 287.375T450 266V166q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 166v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720q-12.825 0-21.325-8.62-8.5-8.63-8.5-21.38V886q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 886v100q0 12.75-8.675 21.38-8.676 8.62-21.5 8.62ZM240 378l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217 270 226 279l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5 774q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743 882 734 873Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786 313 777 322l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897 873.103q-8.897-8.896-8.897-21.5Q174 839 183 830l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291 783 291 795t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480 576Z" />
    </svg>`;
};

export const initializeThemeMode = () => {
  const themeModeContainer = document.createElement('div');
  themeModeContainer.classList.add('theme-mode-container');

  const themeModeButtonWrapper = document.createElement('div');
  themeModeButtonWrapper.classList.add('theme-mode-button-wrapper');
  themeModeButtonWrapper.innerHTML = ThemeMode();

  const themeModeList = document.createElement('ul');
  themeModeList.classList.add('theme-mode-list');

  const lightMode = document.createElement('li');
  lightMode.classList.add('light-mode');
  lightMode.innerText = 'Light Mode';

  const darkMode = document.createElement('li');
  darkMode.classList.add('dark-mode');
  darkMode.innerText = 'Dark Mode';

  themeModeButtonWrapper.addEventListener('click', () => themeModeList.classList.toggle('active'));
  lightMode.addEventListener('click', () => {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  });
  darkMode.addEventListener('click', () => {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  });

  themeModeContainer.appendChild(themeModeButtonWrapper);
  themeModeContainer.appendChild(themeModeList);
  themeModeList.appendChild(lightMode);
  themeModeList.appendChild(darkMode);

  return themeModeContainer;
};
