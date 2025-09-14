import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Grid() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  // Vytvoření geometrie mřížky - zvětšená velikost
  const geometry = new THREE.PlaneGeometry(100, 100, 30, 40)
  // const material = new THREE.MeshBasicMaterial({
  //   wireframe: true,
  //   color: '#98cdd9'
  // })

  useFrame((state) => {
    if (meshRef.current) {
      // Aplikace deformace na vertexty
      const positions = geometry.attributes.position.array
      const time = state.clock.getElapsedTime()
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        
        // Vytvoření vlnité deformace
        positions[i + 2] = Math.sin(x * 0.3 + time) * Math.cos(y * 0.3 + time) * 2
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
        rotation={[0, 0, 0]}
        position={[0, 0, 0]}
      >
        <MeshWobbleMaterial
          wireframe
          color="#52595e"
          speed={1}
        />
      </mesh>
    </>
  )
}

export function GridShape() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'black' }}>
      <Canvas
        camera={{ position: [0, 0, 70], fov: 30 }}
      >
        <Grid />
      </Canvas>
    </div>
  )
} 