import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Decal, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Group } from 'three';

interface BallProps {
  imgUrl: string;
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}

const Ball = ({ imgUrl, position = [0, 0, 0], scale = 2.75, rotation = [0, 0, 0] }: BallProps) => {
  const decal = useTexture(imgUrl);
  const ballRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (ballRef.current) {
      ballRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={0.5} floatIntensity={1}>
      <group 
        ref={ballRef}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <mesh castShadow receiveShadow>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#915EFF"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </group>
    </Float>
  );
};

interface ThreeSceneProps {
  icons: string[];
}

const ThreeScene = ({ icons }: ThreeSceneProps) => {
  const [activeIcon, setActiveIcon] = useState(0);
  
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
      className="cursor-grab"
      style={{ height: 300 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      
      <Ball 
        imgUrl={icons[activeIcon]} 
        position={[0, 0, 0]}
        scale={2}
      />
      
      <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default ThreeScene;