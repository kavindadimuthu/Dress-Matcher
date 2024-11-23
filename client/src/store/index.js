import { proxy } from 'valtio';

const state = proxy({
  intro: "Home",
  color: '#636AE8',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './logos/react.png',
  fullDecal: './logos//threejs.png',
  avatarColor: '#f1c27d',
  dressColor: '#f1c27d',
});

export default state;