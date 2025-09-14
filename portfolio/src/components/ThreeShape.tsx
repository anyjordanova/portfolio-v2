import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TorusKnot, MeshDistortMaterial } from '@react-three/drei'
import { Mesh, Vector2 } from 'three'

interface ShapeProps {
  mouseX: number
  mouseY: number
}

// Pomocná funkce pro lerp
const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor
}

function Shape({ mouseX, mouseY }: ShapeProps) {
  const meshRef = useRef<Mesh>(null)
  const targetPosition = useRef(new Vector2(0, 0))
  const currentPosition = useRef(new Vector2(0, 0))
  const isFirstMove = useRef(true)

  useFrame(() => {
    if (meshRef.current) {
      // Základní rotace
      meshRef.current.rotation.x += 0.0005
      meshRef.current.rotation.y += 0.001

      // Aktualizace cílové pozice
      targetPosition.current.set(mouseX * 0.5, -mouseY * 0.5)

      // Při prvním pohybu nastavíme současnou pozici na cílovou
      if (isFirstMove.current) {
        currentPosition.current.copy(targetPosition.current)
        isFirstMove.current = false
      }

      // Plynulý přechod na novou pozici
      currentPosition.current.x = lerp(currentPosition.current.x, targetPosition.current.x, 0.05)
      currentPosition.current.y = lerp(currentPosition.current.y, targetPosition.current.y, 0.05)

      // Aplikace pozice
      meshRef.current.position.x = currentPosition.current.x
      meshRef.current.position.y = currentPosition.current.y
    }
  })

  return (
    <TorusKnot ref={meshRef} args={[2, 0.5, 128, 32]}>
      <MeshDistortMaterial
        color="#6c868c"
        wireframe
        speed={1}
        distort={0.8}
      />
    </TorusKnot>
  )
}

export function ThreeShape({ mouseX, mouseY }: ShapeProps) {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, -5]} intensity={5} color={"#6c868c"} />
      <Shape mouseX={mouseX} mouseY={mouseY} />
    </Canvas>
  )
} 