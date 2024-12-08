'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as React from 'react'
import { GNX } from './../../components/Gnx'

interface IModel3DProps {}

const Model3D: React.FunctionComponent<IModel3DProps> = (props) => {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls />
        <group>
          <GNX />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </group>
      </Canvas>
    </div>
  )
}

export default Model3D
