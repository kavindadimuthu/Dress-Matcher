import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame, useLoader } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight, Plane } from '@react-three/drei';
import * as THREE from 'three';

import { background } from '../assets';

const Backdrop = () => {
  const shadows = useRef();
  const texture = useLoader(THREE.TextureLoader, background);

    // Adjust the texture properties
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(5, 5); // Adjust these values to change the resolution
    texture.offset.set(0, 0);

  return (
    <>
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scae={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
    <Plane args={[20, 20]} position={[0, 0, -5]}>
    <meshBasicMaterial attach="material" map={texture} />
  </Plane>
  </>
  )
}

export default Backdrop