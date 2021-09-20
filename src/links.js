import Home from './components/Home';
import Buttons from './components/buttons/Buttons';
import Cards from './components/Cards';
import Loaders from './components/loaders/Loaders';

// images
import nature from './assets/nature.jpeg';
import nature1 from './assets/nature1.jpeg';
import button from './assets/button.jpg';

export const links = [
  { path: '/', name: 'home', component: <Home /> },
  { path: '/buttons', name: 'buttons', component: <Buttons />, img: button },
  { path: '/loaders', name: 'loaders', component: <Loaders />, img: nature },
  { path: '/cards', name: 'cards', component: <Cards />, img: nature },
  { path: '/cards', name: 'cards', component: <Cards />, img: nature1 },
];
