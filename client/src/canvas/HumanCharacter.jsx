/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 animated-rigged-humanCharacter.gltf 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/HumanCharacter/animated-rigged-humanCharacter.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, 0, 0]} scale={1}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone007} />
          <primitive object={nodes.Bone008} />
          <skinnedMesh name="FinalBaseMesh" geometry={nodes.FinalBaseMesh.geometry} material={materials['default']} skeleton={nodes.FinalBaseMesh.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/animated-rigged-humanCharacter.gltf')
