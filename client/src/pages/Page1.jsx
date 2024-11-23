import { useSnapshot } from 'valtio';

import { Canvas } from '@react-three/fiber';

import state from '../store';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';

import '../App.css';
import { Model } from '../canvas/HumanCharacter';

function Page1() {
  
  const snap = useSnapshot(state);

  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model />
          </Suspense>
      </Canvas>
    </>
  )
}

export default Page1
