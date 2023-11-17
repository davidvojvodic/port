import React from "react";
import {useGLTF} from "@react-three/drei"


const Sky = () => {
    const sky = useGLTF("/sky.glb")
  return (
    <mesh>
        <primitive object={sky.scene} />
    </mesh>
  )
};

export default Sky;
