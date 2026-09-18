
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';

function App() {{
  return (
    <Canvas camera={{position: [0, 0, 5]}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5,5,5]} />
      <Box args={[1,1,1]}>
        <meshStandardMaterial color="orange" />
      </Box>
    </Canvas>
  );
}}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
