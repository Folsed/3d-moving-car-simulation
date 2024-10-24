// import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { a } from '@react-spring/three'

type GLTFResult = GLTF & {
    nodes: {
        Object_4: THREE.Mesh
        Object_6: THREE.Mesh
        Object_8: THREE.Mesh
        Object_10: THREE.Mesh
        Object_11: THREE.Mesh
        Object_13: THREE.Mesh
        Object_15: THREE.Mesh
        Object_17: THREE.Mesh
        Object_19: THREE.Mesh
        Object_21: THREE.Mesh
        Object_23: THREE.Mesh
        Object_24: THREE.Mesh
        Object_26: THREE.Mesh
        Object_28: THREE.Mesh
        Object_30: THREE.Mesh
        Object_32: THREE.Mesh
        Object_33: THREE.Mesh
        Object_35: THREE.Mesh
    }
    materials: {
        Lights_MAT: THREE.MeshStandardMaterial
        Foliage_MAT: THREE.MeshStandardMaterial
        Grass_MAT: THREE.MeshStandardMaterial
        Water_MAT: THREE.MeshStandardMaterial
        Base_Base_MAT: THREE.MeshStandardMaterial
        Base_SideRocks_MAT: THREE.MeshStandardMaterial
        Base_TreeBark_MAT: THREE.MeshStandardMaterial
        TreeLeaves_MAT: THREE.MeshStandardMaterial
    }
}

const IslandModel = (props: JSX.IntrinsicElements['group']) => {
    const { nodes, materials } = useGLTF('/island.glb') as GLTFResult
    const islandRef = useRef<Mesh>()

    return (
        <a.group {...props} ref={islandRef}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={3.387}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0.06, 0.11, -0.208]}>
                        <mesh
                            geometry={nodes.Object_10.geometry}
                            material={materials.Foliage_MAT}
                        />
                        <mesh
                            geometry={nodes.Object_11.geometry}
                            material={materials.Water_MAT}
                        />
                    </group>
                    <group position={[-0.794, 1.191, 0.152]}>
                        <mesh
                            geometry={nodes.Object_32.geometry}
                            material={materials.TreeLeaves_MAT}
                        />
                        <mesh
                            geometry={nodes.Object_33.geometry}
                            material={materials.Foliage_MAT}
                        />
                    </group>
                    <mesh
                        geometry={nodes.Object_4.geometry}
                        material={materials.Lights_MAT}
                        position={[0.464, 0.85, 0.364]}
                    />
                    <mesh
                        geometry={nodes.Object_6.geometry}
                        material={materials.Foliage_MAT}
                        position={[1.031, 0.147, 0.182]}
                        rotation={[0.267, -0.247, -0.136]}
                        scale={0.288}
                    />
                    <mesh
                        geometry={nodes.Object_8.geometry}
                        material={materials.Grass_MAT}
                    />
                    <mesh
                        geometry={nodes.Object_13.geometry}
                        material={materials.Base_Base_MAT}
                        position={[0, 0.079, 0]}
                    />
                    <mesh
                        geometry={nodes.Object_15.geometry}
                        material={materials.Base_Base_MAT}
                        position={[0, 0.079, 0]}
                    />
                    <mesh
                        geometry={nodes.Object_17.geometry}
                        material={materials.Base_SideRocks_MAT}
                    />
                    <mesh
                        geometry={nodes.Object_19.geometry}
                        material={materials.Base_SideRocks_MAT}
                    />
                    <mesh
                        geometry={nodes.Object_21.geometry}
                        material={materials.Base_SideRocks_MAT}
                    />
                    <mesh
                        geometry={nodes.Object_23.geometry}
                        material={materials.Base_TreeBark_MAT}
                    />
                    <mesh
                        geometry={nodes.Object_24.geometry}
                        material={materials.Foliage_MAT}
                    />
                    <mesh
                        geometry={nodes.Object_26.geometry}
                        material={materials.Base_TreeBark_MAT}
                    />
                    <mesh
                        geometry={nodes.Object_28.geometry}
                        material={materials.Base_TreeBark_MAT}
                    />
                    <mesh
                        geometry={nodes.Object_30.geometry}
                        material={materials.TreeLeaves_MAT}
                        position={[0.885, 1.329, 0.071]}
                    />
                    <mesh
                        geometry={nodes.Object_35.geometry}
                        material={materials.TreeLeaves_MAT}
                        position={[0.1, 1.113, -0.608]}
                        rotation={[-2.721, -0.552, -3.028]}
                    />
                </group>
            </group>
        </a.group>
    )
}

useGLTF.preload('/island.glb')

export default IslandModel
