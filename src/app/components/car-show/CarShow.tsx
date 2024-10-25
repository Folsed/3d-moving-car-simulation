'use client'
import {
    CubeCamera,
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Ground from './Ground'
import Car from './Car'
import Rings from './Rings'
import Boxes from './Boxes'
import {
    Bloom,
    ChromaticAberration,
    DepthOfField,
    EffectComposer,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { Vector2 } from 'three'
import FloatingGrid from './FloatingGrid'

const CarShow = () => {
    return (
        <section className='relative h-screen w-full'>
            <Suspense fallback={null}>
                <Canvas shadows>
                    <OrbitControls
                        target={[0, 0.35, 0]}
                        maxPolarAngle={1.45}
                        maxDistance={20}
                    />
                    <PerspectiveCamera
                        makeDefault
                        fov={50}
                        position={[3, 2, 5]}
                    />

                    <color args={[0, 0, 0]} attach='background' />

                    <CubeCamera resolution={256} frames={Infinity}>
                        {(texture) => (
                            <>
                                <Environment map={texture} />
                                <Car />
                            </>
                        )}
                    </CubeCamera>

                    <spotLight
                        color={[1, 0.25, 0.7]}
                        intensity={150}
                        angle={0.6}
                        penumbra={0.5}
                        position={[5, 5, 0]}
                        castShadow
                        shadow-bias={-0.0001}
                    />

                    <spotLight
                        color={[0.14, 0.5, 1]}
                        intensity={200}
                        angle={0.6}
                        penumbra={0.5}
                        position={[-5, 5, 0]}
                        castShadow
                        shadow-bias={-0.0001}
                    />

                    <Ground />
                    <FloatingGrid/>
                    <Boxes />
                    <Rings />

                    <EffectComposer>
                        <DepthOfField
                            focusDistance={0.0035}
                            focalLength={5}
                            bokehScale={1}
                            height={480}
                        />
                        <Bloom
                            blendFunction={BlendFunction.ADD}
                            intensity={1.3} // The bloom intensity.
                            width={300} // render width
                            height={300} // render height
                            kernelSize={5} // blur kernel size
                            luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
                            luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
                        />
                        <ChromaticAberration
                            blendFunction={BlendFunction.NORMAL} // blend mode
                            offset={new Vector2(0.0005, 0.0012)} // color offset
                            radialModulation={false}
                            modulationOffset={0}
                        />
                    </EffectComposer>
                </Canvas>
            </Suspense>
        </section>
    )
}
export default CarShow
