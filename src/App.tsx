/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 3, 5], fov: 30 }}>
      <color attach="background" args={['#ececec']} />
      <Experience />
      <axesHelper args={[5]} />
    </Canvas>
  );
}

export default App;
