/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Myjato (https://sketchfab.com/Myjato)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/floating-portal-island-diorama-62cade7753204cfc9589fa12a6b8b7df
Title: Floating Portal Island | diorama
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import {a} from "@react-spring/three"

const Island = (props) => {
  const islandRef = useRef();
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/lowpoly_island.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/lowpoly_island.glb");
export default Island