'use client';

import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { CAMERA_START_Z, FRAME_BEAM, FRAME_HEIGHT, FRAME_WIDTH, GATE_LOOP_LENGTH, gatePose } from '../course';
import type { GateState, RunState } from '../types';

type GatesProps = {
  flightDistance: React.MutableRefObject<number>;
  gate: GateState;
  runState: React.MutableRefObject<RunState>;
};

export default function Gates({ flightDistance, gate, runState }: GatesProps) {
  const group = useRef<THREE.Group>(null);
  const geometry = useMemo(() => {
    const halfWidth = FRAME_WIDTH / 2;
    const halfHeight = FRAME_HEIGHT / 2;
    const innerWidth = halfWidth - FRAME_BEAM;
    const innerHeight = halfHeight - FRAME_BEAM;
    const shape = new THREE.Shape();
    shape.moveTo(-halfWidth, -halfHeight);
    shape.lineTo(halfWidth, -halfHeight);
    shape.lineTo(halfWidth, halfHeight);
    shape.lineTo(-halfWidth, halfHeight);
    shape.closePath();

    const opening = new THREE.Path();
    opening.moveTo(-innerWidth, -innerHeight);
    opening.lineTo(-innerWidth, innerHeight);
    opening.lineTo(innerWidth, innerHeight);
    opening.lineTo(innerWidth, -innerHeight);
    opening.closePath();
    shape.holes.push(opening);

    const frame = new THREE.ExtrudeGeometry(shape, {
      depth: 1.4,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.16,
      bevelThickness: 0.16,
    });
    frame.translate(0, 0, -0.7);
    frame.computeVertexNormals();
    return frame;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);
  const initialPose = gatePose(gate.z - CAMERA_START_Z, gate.sequence);

  useFrame(({ clock }) => {
    if (!group.current) return;
    let relativeZ = gate.z - (CAMERA_START_Z - flightDistance.current);
    if (runState.current === 'running' && relativeZ > 14) {
      gate.z -= Math.ceil((relativeZ - 14) / GATE_LOOP_LENGTH) * GATE_LOOP_LENGTH;
      relativeZ = gate.z - (CAMERA_START_Z - flightDistance.current);
    }
    const pose = gatePose(relativeZ, gate.sequence);
    group.current.position.set(pose.x, pose.y, gate.z);
    group.current.rotation.z = pose.tilt + clock.elapsedTime * (0.14 + gate.sequence * 0.025);
    group.current.scale.setScalar(pose.scale);
  });

  return (
    <group ref={group} position={[initialPose.x, initialPose.y, gate.z]} rotation={[0, 0, initialPose.tilt]}>
      <mesh geometry={geometry} castShadow>
        <meshStandardMaterial color="#f4f4f2" roughness={0.62} metalness={0} emissive="#ffffff" emissiveIntensity={0.06} />
      </mesh>
    </group>
  );
}
