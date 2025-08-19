import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

// Custom 3D Scene Component
const ThreeScene = ({ config, view, onLoaded }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const robotRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 8);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x4488ff, 0.5);
    pointLight.position.set(-10, -10, -10);
    scene.add(pointLight);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x222222,
      transparent: true,
      opacity: 0.3
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Create robot
    createRobot(scene, config);

    // Mouse controls
    let mouseX = 0;
    let mouseY = 0;
    let isMouseDown = false;

    const onMouseMove = (event) => {
      if (!isMouseDown) return;
      const deltaX = event.clientX - mouseX;
      const deltaY = event.clientY - mouseY;
      
      if (robotRef.current) {
        robotRef.current.rotation.y += deltaX * 0.01;
      }
      
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const onMouseDown = (event) => {
      isMouseDown = true;
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    const onWheel = (event) => {
      camera.position.z += event.deltaY * 0.01;
      camera.position.z = Math.max(5, Math.min(15, camera.position.z));
    };

    mountRef.current.addEventListener('mousemove', onMouseMove);
    mountRef.current.addEventListener('mousedown', onMouseDown);
    mountRef.current.addEventListener('mouseup', onMouseUp);
    mountRef.current.addEventListener('wheel', onWheel);

    // Animation loop
    const animate = () => {
      if (robotRef.current) {
        robotRef.current.rotation.y += 0.003;
        
        // Floating animation
        robotRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.1 - 1;
      }

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    if (onLoaded) {
      setTimeout(onLoaded, 1000);
    }

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', onMouseMove);
        mountRef.current.removeEventListener('mousedown', onMouseDown);
        mountRef.current.removeEventListener('mouseup', onMouseUp);
        mountRef.current.removeEventListener('wheel', onWheel);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // Update robot when config changes
  useEffect(() => {
    if (sceneRef.current && robotRef.current) {
      updateRobotColors(robotRef.current, config);
    }
  }, [config]);

  // Update camera view
  useEffect(() => {
    if (cameraRef.current) {
      const camera = cameraRef.current;
      const targetPosition = { x: 0, y: 2, z: 8 };
      
      if (view === 'front') {
        targetPosition.x = 0;
        targetPosition.z = 8;
      } else if (view === 'side') {
        targetPosition.x = 8;
        targetPosition.z = 0;
      } else if (view === 'back') {
        targetPosition.x = 0;
        targetPosition.z = -8;
      }

      // Smooth camera transition
      const animateCamera = () => {
        camera.position.lerp(targetPosition, 0.1);
        camera.lookAt(0, 0, 0);
        
        if (camera.position.distanceTo(targetPosition) > 0.1) {
          requestAnimationFrame(animateCamera);
        }
      };
      animateCamera();
    }
  }, [view]);

  const createRobot = (scene, config) => {
    const robotGroup = new THREE.Group();
    robotGroup.position.y = -1;
    robotRef.current = robotGroup;

    // Robot Head
    const headGeometry = new THREE.BoxGeometry(1, 1, 1);
    const headMaterial = new THREE.MeshStandardMaterial({ 
      color: config.headColor,
      metalness: 0.3,
      roughness: 0.4
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0, 2, 0);
    head.castShadow = true;
    head.userData = { part: 'head' };
    robotGroup.add(head);

    // Robot Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({ 
      color: config.eyeColor,
      emissive: config.eyeColor,
      emissiveIntensity: 0.5
    });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.25, 2.2, 0.45);
    leftEye.userData = { part: 'eye' };
    robotGroup.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial.clone());
    rightEye.position.set(0.25, 2.2, 0.45);
    rightEye.userData = { part: 'eye' };
    robotGroup.add(rightEye);

    // Robot Body
    const bodyGeometry = new THREE.BoxGeometry(1.5, 1.8, 0.8);
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
      color: config.bodyColor,
      metalness: 0.6,
      roughness: 0.2
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, 1, 0);
    body.castShadow = true;
    body.userData = { part: 'body' };
    robotGroup.add(body);

    // Robot Arms
    const armGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.5);
    const armMaterial = new THREE.MeshStandardMaterial({ 
      color: config.armColor,
      metalness: 0.7,
      roughness: 0.3
    });
    
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-1, 1, 0);
    leftArm.castShadow = true;
    leftArm.userData = { part: 'arm' };
    robotGroup.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeometry, armMaterial.clone());
    rightArm.position.set(1, 1, 0);
    rightArm.castShadow = true;
    rightArm.userData = { part: 'arm' };
    robotGroup.add(rightArm);

    // Robot Legs
    const legGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1);
    const legMaterial = new THREE.MeshStandardMaterial({ 
      color: config.legColor,
      metalness: 0.5,
      roughness: 0.4
    });
    
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.4, -0.5, 0);
    leftLeg.castShadow = true;
    leftLeg.userData = { part: 'leg' };
    robotGroup.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial.clone());
    rightLeg.position.set(0.4, -0.5, 0);
    rightLeg.castShadow = true;
    rightLeg.userData = { part: 'leg' };
    robotGroup.add(rightLeg);

    // Antenna (if selected)
    if (config.hasAntenna) {
      const antennaGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.6);
      const antennaMaterial = new THREE.MeshStandardMaterial({ 
        color: '#ff6b6b',
        metalness: 0.8
      });
      const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
      antenna.position.set(0, 2.8, 0);
      antenna.castShadow = true;
      robotGroup.add(antenna);
    }

    scene.add(robotGroup);
  };

  const updateRobotColors = (robotGroup, config) => {
    robotGroup.children.forEach(child => {
      if (child.userData.part === 'head') {
        child.material.color.setStyle(config.headColor);
      } else if (child.userData.part === 'body') {
        child.material.color.setStyle(config.bodyColor);
      } else if (child.userData.part === 'arm') {
        child.material.color.setStyle(config.armColor);
      } else if (child.userData.part === 'leg') {
        child.material.color.setStyle(config.legColor);
      } else if (child.userData.part === 'eye') {
        child.material.color.setStyle(config.eyeColor);
        child.material.emissive.setStyle(config.eyeColor);
      }
    });
  };

  return <div ref={mountRef} className="w-full h-full" />;
};

// Loading Component
const LoadingScreen = () => (
  <motion.div
    className="absolute inset-0 bg-black flex items-center justify-center z-50"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="text-center">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.h2
        className="text-white text-xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Loading Your Robot...
      </motion.h2>
    </div>
  </motion.div>
);

// Configuration Panel
const ConfigPanel = ({ config, setConfig, isOpen, setIsOpen }) => {
  const colorOptions = [
    { name: 'Steel Blue', value: '#4682b4' },
    { name: 'Crimson Red', value: '#dc143c' },
    { name: 'Forest Green', value: '#228b22' },
    { name: 'Golden Yellow', value: '#ffd700' },
    { name: 'Deep Purple', value: '#9932cc' },
    { name: 'Orange Burst', value: '#ff8c00' }
  ];

  const eyeColors = [
    { name: 'Electric Blue', value: '#00bfff' },
    { name: 'Laser Red', value: '#ff0000' },
    { name: 'Neon Green', value: '#39ff14' },
    { name: 'Plasma Pink', value: '#ff1493' }
  ];

  return (
    <motion.div
      className="fixed right-0 top-0 h-full w-96 bg-black/90 backdrop-blur-lg text-white overflow-y-auto z-40"
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Customize Robot
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-300 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Robot Model Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-400">Model Series</h3>
          <div className="grid grid-cols-1 gap-2">
            {['Guardian-X1', 'Sentinel-Pro', 'Vanguard-Elite'].map((model) => (
              <button
                key={model}
                onClick={() => setConfig(prev => ({ ...prev, model }))}
                className={`p-3 rounded-lg border-2 transition-all ${
                  config.model === model
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
              >
                {model}
              </button>
            ))}
          </div>
        </div>

        {/* Body Color */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-400">Body Color</h3>
          <div className="grid grid-cols-3 gap-2">
            {colorOptions.map((color) => (
              <button
                key={color.name}
                onClick={() => setConfig(prev => ({ ...prev, bodyColor: color.value }))}
                className={`aspect-square rounded-lg border-2 transition-all ${
                  config.bodyColor === color.value
                    ? 'border-white scale-110'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Head Color */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-400">Head Color</h3>
          <div className="grid grid-cols-3 gap-2">
            {colorOptions.map((color) => (
              <button
                key={color.name}
                onClick={() => setConfig(prev => ({ ...prev, headColor: color.value }))}
                className={`aspect-square rounded-lg border-2 transition-all ${
                  config.headColor === color.value
                    ? 'border-white scale-110'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Eye Color */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-400">Eye Color</h3>
          <div className="grid grid-cols-2 gap-2">
            {eyeColors.map((color) => (
              <button
                key={color.name}
                onClick={() => setConfig(prev => ({ ...prev, eyeColor: color.value }))}
                className={`aspect-square rounded-lg border-2 transition-all ${
                  config.eyeColor === color.value
                    ? 'border-white scale-110'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-400">Features</h3>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={config.hasAntenna}
              onChange={(e) => setConfig(prev => ({ ...prev, hasAntenna: e.target.checked }))}
              className="w-5 h-5 text-blue-500 rounded"
            />
            <span>Communication Antenna.....</span>
          </label>
        </div>

        {/* Price Display */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-300">Estimated Price</p>
            <p className="text-2xl font-bold text-green-400">$12,999</p>
          </div>
        </div>

        {/* Order Button */}
        <motion.button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-lg font-bold text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Place Order 
        </motion.button>
      </div>
    </motion.div>
  );
};

// Header Component
const Header = ({ setConfigOpen, view, setView }) => {
  const views = [
    { name: 'Front', value: 'front' },
    { name: 'Side', value: 'side' },
    { name: 'Back', value: 'back' }
  ];

  return (
    <motion.header
      className="absolute top-0 left-0 right-0 z-30 bg-black/50 backdrop-blur-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="flex justify-between items-center p-6">
        <motion.div
          className="text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {/* <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ROBOCRAFT
          </h1>
          <p className="text-sm text-gray-300">Configure Your Perfect Robot</p> */}
        </motion.div>

        <div className="flex items-center space-x-4">
          {/* View Controls */}
          <div className="flex space-x-2">
            {views.map((viewOption) => (
              <button
                key={viewOption.value}
                onClick={() => setView(viewOption.value)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  view === viewOption.value
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {viewOption.name}
              </button>
            ))}
          </div>

          <motion.button
            onClick={() => setConfigOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Customize
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

// Main Configurator Component
const RobotConfigurator = () => {
  const [config, setConfig] = useState({
    model: 'Guardian-X1',
    bodyColor: '#4682b4',
    headColor: '#4682b4',
    armColor: '#4682b4',
    legColor: '#4682b4',
    eyeColor: '#00bfff',
    hasAntenna: false
  });
  
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState('front');

  const handleModelLoaded = () => {
    setTimeout(() => setIsLoading(false), 2000);
  };

  // Update related colors when body color changes
  useEffect(() => {
    setConfig(prev => ({
      ...prev,
      headColor: prev.bodyColor,
      armColor: prev.bodyColor,
      legColor: prev.bodyColor
    }));
  }, [config.bodyColor]);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <Header 
        setConfigOpen={setIsConfigOpen} 
        view={view} 
        setView={setView}
      />

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <ThreeScene config={config} view={view} onLoaded={handleModelLoaded} />
      </div>

      {/* Info Panel */}
      <motion.div
        className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-lg p-4 rounded-lg text-white max-w-md"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h3 className="text-xl font-bold text-blue-400 mb-2">{config.model}</h3>
        <p className="text-sm text-gray-300 mb-3">
          Advanced humanoid robot designed for industrial and domestic applications.
          Featuring AI-powered decision making and adaptive learning capabilities.
        </p>
        <div className="text-xs text-gray-400">
          • Self-charging solar panels<br />
          • 48-hour battery life<br />
          • Voice command recognition<br />
          • Advanced mobility system
        </div>
      </motion.div>

      {/* Configuration Panel */}
      <ConfigPanel 
        config={config}
        setConfig={setConfig}
        isOpen={isConfigOpen}
        setIsOpen={setIsConfigOpen}
      />
    </div>
  );
};

export default RobotConfigurator;