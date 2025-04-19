import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Grid() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  // Vytvoření geometrie mřížky
  const geometry = new THREE.PlaneGeometry(20, 20, 20, 20)
  const material = new THREE.MeshBasicMaterial({
    wireframe: true,
    color: '#98cdd9'
  })

  useFrame((state) => {
    if (meshRef.current) {
      // Aplikace deformace na vertexty
      const positions = geometry.attributes.position.array
      const time = state.clock.getElapsedTime()
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        
        // Vytvoření vlnité deformace
        positions[i + 2] = Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time) * 2
      }
      
      geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={1} />
      <mesh
        ref={meshRef}
        geometry={geometry}
        rotation={[0, 0, 0]} // Mřížka stojí vertikálně
        position={[0, 0, 0]}
      >
        <MeshDistortMaterial
          wireframe
          color="#98cdd9"
          speed={2}
          distort={0.3}
        />
      </mesh>
    </>
  )
}

export function GridShape() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'black' }}>
      <Canvas
        camera={{ position: [0, 0, 30], fov: 50 }}
      >
        <Grid />
      </Canvas>
    </div>
  )
} 