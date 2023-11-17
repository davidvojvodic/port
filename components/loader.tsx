"use client";
import { Loader2 } from "lucide-react";
import React from "react";
import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <Loader2 className="animate-spin" />
      </div>
    </Html>
  );
};

export default Loader;
