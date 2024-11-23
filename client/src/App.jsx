import { useSnapshot } from 'valtio';

// import Canvas from './canvas';
// import Canvas from './Canvas';
import { Canvas } from '@react-three/fiber';
import { Header } from './components/Header';
import AvatarCustomizer from './pages/AvatarCustomizer';
// import Customizer from './pages/Customizer';
import DressCustomizer from './pages/DressCustomizer';
import Home from './pages/Home';
import Simulator from './pages/Simulator';

import state from './store';
import Customizer from './components/Customizer';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { AmbientLight } from 'three';

import './App.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  
  const snap = useSnapshot(state);

  return (
    <main>
      {/* <Header /> */}
      {snap.intro != "Home" && <Header />}
      {/* <Customizer /> */}
      {snap.intro != "Home" && <Customizer />}

      {snap.intro == "Home" && <Home />}
      

      {snap.intro == "Avatar" && <Page1 />}
      {snap.intro == "Dress" && <Page2 />}
      {snap.intro == "Simulator" && <Page3 />}
    </main>
  )
}

export default App
