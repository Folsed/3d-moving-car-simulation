// import { useFrame } from '@react-three/fiber'
// import { useEffect, useRef, useState } from 'react'
// import { Mesh, Vector3 } from 'three'

// interface BoxProps {
//     props: any
//     color: string
// }

// const Box: React.FC<BoxProps> = ({ props, color }) => {
//     const boxRef = useRef<Mesh>()
//     const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05)
//     const [xRotSpeed] = useState(() => Math.random())
//     const [yRotSpeed] = useState(() => Math.random())
//     const [position, setPosition] = useState<any>(resetPosition())

//     function resetPosition() {
//         let v = new Vector3(
//             (Math.random() * 2 - 1) * 3,
//             Math.random() * 2.5 + 0.1,
//             Math.random() * 10 + 10
//         )
//         if (v.x < 0) v.x -= 1.75
//         if (v.x > 0) v.x += 1.75
//         setPosition(v)
//     }

//     useFrame(
//         (state, delta) => {
//             if (boxRef.current) {
//                 boxRef.current.position.set(position.x, position.y, position.z)
//                 boxRef.current.rotation.x += delta * xRotSpeed
//                 boxRef.current.rotation.y += delta * yRotSpeed
//             }
//         },
//         [xRotSpeed, yRotSpeed, position]
//     )

//     return (
//         <mesh {...props} ref={boxRef} scale={scale} castShadow>
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={color} envMapIntensity={150} />
//         </mesh>
//     )
// }
// export default Box

import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Color, Mesh, Vector3 } from 'three'

interface BoxProps {
    props?: JSX.IntrinsicElements['mesh'] // Define props as the mesh intrinsic props
    color: number
}

export const Box: React.FC<BoxProps> = ({ props, color }) => {
    const boxRef = useRef<Mesh>(null) // Initialize with null for proper typing
    const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05)
    const [xRotSpeed] = useState(() => Math.random())
    const [yRotSpeed] = useState(() => Math.random())
    const [position, setPosition] = useState<Vector3>(resetPosition()) // Define position as Vector3

    function resetPosition(): Vector3 {
        let v = new Vector3(
            (Math.random() * 2 - 1) * 3,
            Math.random() * 2.5 + 0.1,
            (Math.random() * 2 - 1) * 15
        )

        if (v.x < 0) v.x -= 1.75
        if (v.x > 0) v.x += 1.75
        return v
    }

    // useEffect(() => {
    //     setPosition(resetPosition()) // Reset position when component mounts
    // }, [])

    useFrame((state, delta) => {
        if (boxRef.current) {
            boxRef.current.position.set(position.x, position.y, position.z)
            boxRef.current.rotation.x += delta * xRotSpeed
            boxRef.current.rotation.y += delta * yRotSpeed
        }
    })

    return (
        <mesh {...props} ref={boxRef} scale={scale} castShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} envMapIntensity={150} />
        </mesh>
    )
}

const Boxes = () => {
    const [arr] = useState(() => {
        let a = []
        for (let i = 0; i < 100; i++) a.push(0)
        return a
    })

    return (
        <>
            {arr.map((e, i) => (
                <Box
                    key={i}
                    color={
                        i % 2 === 0
                            ? new Color(0.4, 0.1, 0.1).getHex()
                            : new Color(0.05, 0.15, 0.4).getHex()
                    }
                />
            ))}
        </>
    )
}
export default Boxes
