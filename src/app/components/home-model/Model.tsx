'use client'
import IslandModel from '@/3dModels/Island'
import { Canvas } from '@react-three/fiber'
import { Loader } from 'lucide-react'
import { Suspense } from 'react'

const Model = () => {
    const adjustIslandForScreenSize = () => {
        let screenSize: number[]
        let screenPosition: number[] = [0, -6.5, -43]

        if (window.innerWidth < 768) {
            screenSize = [0.9, 0.9, 0.9]
        } else {
            screenSize = [1, 1, 1]
        }

        return [screenSize, screenPosition]
    }

    const [islandScale, islandPosition] = adjustIslandForScreenSize()

    return (
        <div>
            <Canvas
                className='h-screen w-full bg-transparent'
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight />
                    <ambientLight />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight />
                    <IslandModel />
                </Suspense>
            </Canvas>
        </div>
    )
}
export default Model
