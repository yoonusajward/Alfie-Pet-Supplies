import pet1 from './assets/Pets/1.png';
import pet2 from './assets/Pets/2.png';
import pet3 from './assets/Pets/3.png';
import pet4 from './assets/Pets/4.png';
import pet5 from './assets/Pets/5.png';
import pet6 from './assets/Pets/6.png';
import pet7 from './assets/Pets/7.png';
import pet8 from './assets/Pets/8.png';
import pet9 from './assets/Pets/9.png';
import pet10 from './assets/Pets/10.png';
import pet11 from './assets/Pets/11.png';
import pet12 from './assets/Pets/12.png';
import pet13 from './assets/Pets/13.png';
import pet14 from './assets/Pets/14.png';
import pet15 from './assets/Pets/15.png';

import dogs from './dogs.json';

const images = { pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12, pet13, pet14, pet15 };


export const dogsData = dogs.map(dog => ({
  ...dog,
  image: images[dog.imageName]
}));
