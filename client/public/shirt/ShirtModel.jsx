/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ShirtModel.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ShirtModel.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} />
    </group>
  )
}

useGLTF.preload('/ShirtModel.gltf')