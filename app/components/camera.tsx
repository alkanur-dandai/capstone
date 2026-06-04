"use client"

import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Vector3 } from "three"

type Props = {
  target: [number, number, number]
  lookAt?: [number, number, number]
}

export default function CameraController({
  target,
  lookAt = [0, 0, 0],
}: Props) {
  const { camera } = useThree()

  const targetPosition = useRef(new Vector3(...target))
  const lookAtPosition = useRef(new Vector3(...lookAt))

  useFrame(() => {
    camera.position.lerp(targetPosition.current, 0.05)

    camera.lookAt(
      lookAtPosition.current.x,
      lookAtPosition.current.y,
      lookAtPosition.current.z
    )
  })

  return null
}