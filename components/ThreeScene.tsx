"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Cube() {
  return (
    <mesh rotation={[10,10,0]}>
      <boxGeometry args={[2,2,2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function ThreeScene() {
  return (
    <div className="h-screen">
      <Canvas>

        <ambientLight intensity={0.5} />
        <directionalLight position={[2,2,2]} />

        <Cube />

        <OrbitControls />

      </Canvas>
    </div>
  )
}