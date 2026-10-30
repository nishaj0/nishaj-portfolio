'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { CAMERA_START_Z, ROAD_LENGTH, ROAD_WIDTH, ROAD_Y } from '../course';

type RoadwayProps = {
  flightDistance: React.MutableRefObject<number>;
};

export default function Roadway({ flightDistance }: RoadwayProps) {
  const roadway = useRef<THREE.Group>(null);

  useFrame(() => {
    if (roadway.current) roadway.current.position.z = CAMERA_START_Z - flightDistance.current - ROAD_LENGTH * 0.3;
  });

  return (
    <group ref={roadway}>
      <mesh position={[0, ROAD_Y - 0.34, 0]} receiveShadow>
        <boxGeometry args={[ROAD_WIDTH, 0.56, ROAD_LENGTH]} />
        <meshStandardMaterial color="#010102" roughness={0.48} metalness={0.28} />
      </mesh>
      <mesh position={[0, ROAD_Y, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[ROAD_WIDTH, ROAD_LENGTH]} />
        <meshPhysicalMaterial color="#050506" roughness={0.12} metalness={0} clearcoat={1} clearcoatRoughness={0.06} />
      </mesh>

      <mesh position={[0, ROAD_Y + 0.045, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.085, ROAD_LENGTH]} />
        <meshBasicMaterial color="#8d8f93" />
      </mesh>

      {[-1, 1].map((side) => (
        <group key={side} position={[side * (ROAD_WIDTH / 2 - 0.4), ROAD_Y + 0.15, 0]}>
          <mesh>
            <boxGeometry args={[0.8, 0.3, ROAD_LENGTH]} />
            <meshStandardMaterial color="#f4f4f2" emissive="#ffffff" emissiveIntensity={0.35} roughness={0.5} metalness={0} />
          </mesh>
          <mesh position={[side * 0.42, -0.15, 0]}>
            <boxGeometry args={[0.24, 0.13, ROAD_LENGTH]} />
            <meshStandardMaterial color="#010102" roughness={0.8} />
          </mesh>
        </group>
      ))}
      <pointLight position={[-ROAD_WIDTH * 0.34, ROAD_Y + 1.1, -16]} intensity={3.4} distance={46} color="#ffffff" />
      <pointLight position={[ROAD_WIDTH * 0.34, ROAD_Y + 1.1, -16]} intensity={3.4} distance={46} color="#ffffff" />
    </group>
  );
}
