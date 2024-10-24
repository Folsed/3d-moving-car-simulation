'use client'
import IslandModel from '@/3dModels/Island'
import { Canvas, Euler, Vector3 } from '@react-three/fiber'
import { Loader } from 'lucide-react'
import { Suspense } from 'react'

const Model = () => {
    const adjustIslandForScreenSize = () => {
        let screenScale: Vector3
        let screenPosition: Vector3 = [0, -8.5, -43]
        let rotation: Euler = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [4, 4, 4]
        } else {
            screenScale = [5, 5, 5]
        }

        return [screenScale, screenPosition, rotation]
    }

    const [islandScale, islandPosition, islandRotation] =
        adjustIslandForScreenSize()

    return (
        <Canvas
            className='h-screen w-full bg-transparent'
            camera={{ near: 0.1, far: 1000 }}
        >
            <Suspense fallback={''}>
                <directionalLight />
                <ambientLight />
                <pointLight />
                <spotLight />
                <hemisphereLight />
                <IslandModel
                    scale={islandScale as Vector3}
                    position={islandPosition as Vector3}
                    rotation={islandRotation as Euler}
                />
            </Suspense>
        </Canvas>
    )
}
export default Model
