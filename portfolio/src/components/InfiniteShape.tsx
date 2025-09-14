import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Shape() {
  const meshRef = useRef<THREE.Mesh>(null)
  const rotationSpeed = 0.015
  
  useFrame((state) => {
    if (meshRef.current) {
      // Plynulejší rotace
      meshRef.current.rotation.x = state.clock.getElapsedTime() * rotationSpeed
      meshRef.current.rotation.y = state.clock.getElapsedTime() * rotationSpeed

      // Jemnější scale animace
      const time = state.clock.getElapsedTime()
      const scale = 1 + Math.sin(time * 0.15) * 0.01
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <>
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 0, 15]} intensity={0.3} />
      <mesh ref={meshRef} scale={1.5}>
        <octahedronGeometry args={[20, 7]} />
        <MeshDistortMaterial
          wireframe
          color="#fff"
          speed={0.8}
          distort={0.4}
          transparent
        />
      </mesh>
      {/* Druhý tvar s jemnější distorzí */}
      <mesh rotation={[Math.PI / 4, 0, Math.PI / 4]} scale={1}>
        <octahedronGeometry args={[15, 2]} />
        <MeshDistortMaterial
          wireframe
          color="#fff"
          speed={0.5}
          distort={0.3}
          transparent
        />
      </mesh>
    </>
  )
}

export function InfiniteShape() {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 40 }}
        gl={{ antialias: true }}
      >
        <Shape />
      </Canvas>
    </div>
  )
} 