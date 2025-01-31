import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3, Mesh } from 'three'

interface BoxProps {
    color: [number, number, number]
}

function Box({ color }: BoxProps) {
    const box = useRef<Mesh | null>(null)
    const time = useRef(0)
    const [position, setPosition] = useState<Vector3>(getInitialPosition())
    const [xRotSpeed] = useState(() => Math.random())
    const [yRotSpeed] = useState(() => Math.random())
    const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05)

    function getInitialPosition(): Vector3 {
        const v = new Vector3(
            (Math.random() * 2 - 1) * 3,
            Math.random() * 2.5 + 0.1,
            (Math.random() * 2 - 1) * 15
        )
        if (v.x < 0) v.x -= 1.75
        if (v.x > 0) v.x += 1.75

        return v
    }

    function resetPosition() {
        const v = new Vector3(
            (Math.random() * 2 - 1) * 3,
            Math.random() * 2.5 + 0.1,
            Math.random() * 10 + 10
        )
        if (v.x < 0) v.x -= 1.75
        if (v.x > 0) v.x += 1.75

        setPosition(v)
    }

    useFrame((state, delta) => {
        time.current += delta * 1.2
        const newZ = position.z - time.current

        if (newZ < -10) {
            resetPosition()
            time.current = 0
        }

        if (box.current) {
            box.current.position.set(position.x, position.y, newZ)
            box.current.rotation.x += delta * xRotSpeed
            box.current.rotation.y += delta * yRotSpeed
        }
    })

    return (
        <mesh ref={box} rotation-x={Math.PI * 0.5} scale={scale} castShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} envMapIntensity={0.15} />
        </mesh>
    )
}

const Boxes = () => {
    return (
        <>
            {Array.from({ length: 100 }).map((e, i) => (
                <Box
                    key={i}
                    color={i % 2 === 0 ? [0.4, 0.1, 0.1] : [0.05, 0.15, 0.4]}
                />
            ))}
        </>
    )
}
export default Boxes
