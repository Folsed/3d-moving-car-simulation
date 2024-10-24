'use client'
import { Canvas } from '@react-three/fiber'
import { Loader } from 'lucide-react'
import { Suspense } from 'react'

const Model = () => {
    return (
        <div>
            <Canvas
                className='h-screen w-full bg-transparent'
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight/>
                    <ambientLight/>
                    <pointLight/>
                    <spotLight/>
                    <hemisphereLight/>
                </Suspense>
            </Canvas>
        </div>
    )
}
export default Model
