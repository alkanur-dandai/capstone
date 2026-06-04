'use client'

import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const GRASS_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uWind;

  attribute float aOffset;
  attribute float aHeight;
  attribute float aLean;

  varying float vHeight;

  void main() {
    vHeight = position.y;
    vec3 pos = position;

    float wave = sin(uTime * 1.5 + aOffset * 6.28318) * uWind * vHeight * vHeight * aLean;
    pos.x += wave;
    pos.z += wave * 0.3;
    pos.y *= aHeight;

    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`

const GRASS_FRAG = /* glsl */ `
  varying float vHeight;

  void main() {
    vec3 base = vec3(0.08, 0.28, 0.06);
    vec3 tip  = vec3(0.55, 0.85, 0.20);
    gl_FragColor = vec4(mix(base, tip, vHeight), 1.0);
  }
`

function createBladeGeometry(): THREE.BufferGeometry {
  const geo = new THREE.BufferGeometry()
  const w = 0.06
  const h = 1.0

  const vertices = new Float32Array([
    -w,        0,       0,
     w,        0,       0,
    -w * 0.6,  h * 0.5, 0,
     w * 0.6,  h * 0.5, 0,
     0,        h,       0,
  ])

  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  geo.setIndex([0, 1, 2, 1, 3, 2, 2, 3, 4])
  geo.computeVertexNormals()
  return geo
}

export interface GrassProps {
  count?: number
  spread?: number
  windStrength?: number
}

export default function Grassfield({ count = 10000, spread = 16, windStrength = 0.4 }: GrassProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  // ✅ store material in a ref so useFrame always reads the live instance
  const materialRef = useRef<THREE.ShaderMaterial>(null!)

  const geometry = useMemo(() => {
    const geo = createBladeGeometry()

    const offsets = new Float32Array(count)
    const heights = new Float32Array(count)
    const leans   = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      offsets[i] = Math.random()
      heights[i] = 0.6 + Math.random() * 0.7
      leans[i]   = 0.5 + Math.random() * 1.0
    }

    geo.setAttribute('aOffset', new THREE.InstancedBufferAttribute(offsets, 1))
    geo.setAttribute('aHeight', new THREE.InstancedBufferAttribute(heights, 1))
    geo.setAttribute('aLean',   new THREE.InstancedBufferAttribute(leans,   1))

    return geo
  }, [count])

  // ✅ create material once and assign directly to the ref
  useMemo(() => {
    materialRef.current = new THREE.ShaderMaterial({
      vertexShader: GRASS_VERT,
      fragmentShader: GRASS_FRAG,
      uniforms: {
        uTime: { value: 0 },
        uWind: { value: windStrength },
      },
      side: THREE.DoubleSide,
    })
  }, [windStrength])

  useEffect(() => {
    if (!meshRef.current) return
    const dummy = new THREE.Object3D()

    for (let i = 0; i < count; i++) {
      dummy.position.set(
        (Math.random() - 0.5) * spread,
        0,
        (Math.random() - 0.5) * spread
      )
      dummy.rotation.y = Math.random() * Math.PI * 2
      dummy.scale.setScalar(0.7 + Math.random() * 0.6)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }

    meshRef.current.instanceMatrix.needsUpdate = true
  }, [count, spread])

  // ✅ always reads materialRef.current — never stale
  useFrame(({ clock }) => {
    if (!materialRef.current) return
    materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
  })

  return (
    <instancedMesh ref={meshRef} args={[geometry, materialRef.current, count]} />
  )
}