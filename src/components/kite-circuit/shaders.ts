export const SKY_VERTEX_SHADER = `
  varying vec3 vDirection;

  void main() {
    vDirection = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const SKY_FRAGMENT_SHADER = `
  varying vec3 vDirection;

  void main() {
    float horizon = pow(1.0 - abs(vDirection.y), 4.3);
    float rightLift = smoothstep(-0.35, 1.0, vDirection.x) * horizon;
    vec3 upper = vec3(0.0004, 0.0005, 0.0007);
    vec3 lower = mix(vec3(0.034, 0.036, 0.04), vec3(0.06, 0.062, 0.066), rightLift);
    vec3 color = mix(upper, lower, horizon);
    gl_FragColor = vec4(color, 1.0);
  }
`;
