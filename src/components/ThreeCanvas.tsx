import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.08);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 8;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Ambient and Base Lights
    const ambientLight = new THREE.AmbientLight(0x0a0a0c, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x00ff66, 1.0);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const blueLight = new THREE.DirectionalLight(0x00e5ff, 0.8);
    blueLight.position.set(-5, -5, 2);
    scene.add(blueLight);

    // Interactive mouse light (PointLight) that follows the cursor
    const mouseLight = new THREE.PointLight(0xffffff, 3.5, 12);
    mouseLight.position.set(0, 0, 5);
    scene.add(mouseLight);

    // 4. Create Particles (Dust/Glitter field)
    const particleCount = 150;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Position inside a sphere/box range
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      // Mix neon green and electric blue colors for the dust particles
      const isBlue = Math.random() > 0.5;
      colors[i * 3] = isBlue ? 0.0 : 0.22; // R
      colors[i * 3 + 1] = isBlue ? 0.9 : 1.0; // G
      colors[i * 3 + 2] = isBlue ? 1.0 : 0.08; // B
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom particle texture using a simple canvas-drawn circle for high compatibility
    const canvasParticle = document.createElement('canvas');
    canvasParticle.width = 16;
    canvasParticle.height = 16;
    const ctx = canvasParticle.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvasParticle);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      map: particleTexture,
      depthWrite: false
    });

    const starField = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(starField);

    // 5. Procedural 3D Dumbbells (Constructed dynamically with metallic materials)
    const dbGroup = new THREE.Group();
    scene.add(dbGroup);

    // Materials
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.95,
      roughness: 0.12,
    });

    const neonGreenMaterial = new THREE.MeshBasicMaterial({
      color: 0x39ff14,
    });

    const electricBlueMaterial = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
    });

    // Function to create a beautifully detailed dumbbell mesh
    const createDumbbell = (accentColorMaterial: THREE.Material) => {
      const db = new THREE.Group();

      // Handle (center bar)
      const handleGeo = new THREE.CylinderGeometry(0.12, 0.12, 2.2, 16);
      const handleMesh = new THREE.Mesh(handleGeo, chromeMaterial);
      handleMesh.rotation.z = Math.PI / 2;
      db.add(handleMesh);

      // Knurling details (rings on handle)
      for (let offset = -0.6; offset <= 0.6; offset += 0.3) {
        if (Math.abs(offset) < 0.1) continue;
        const ringGeo = new THREE.TorusGeometry(0.13, 0.015, 8, 24);
        const ringMesh = new THREE.Mesh(ringGeo, accentColorMaterial);
        ringMesh.position.x = offset;
        ringMesh.rotation.y = Math.PI / 2;
        db.add(ringMesh);
      }

      // Left weights (plates)
      const platePositions = [-0.9, -1.1];
      platePositions.forEach((pos) => {
        const plateGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.15, 32);
        const plate = new THREE.Mesh(plateGeo, chromeMaterial);
        plate.position.x = pos;
        plate.rotation.z = Math.PI / 2;
        db.add(plate);

        // Colored rim/ring detail
        const rimGeo = new THREE.TorusGeometry(0.655, 0.02, 8, 32);
        const rim = new THREE.Mesh(rimGeo, accentColorMaterial);
        rim.position.x = pos;
        rim.rotation.y = Math.PI / 2;
        db.add(rim);
      });

      // Right weights (plates)
      platePositions.forEach((pos) => {
        const plateGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.15, 32);
        const plate = new THREE.Mesh(plateGeo, chromeMaterial);
        plate.position.x = -pos; // opposite side
        plate.rotation.z = Math.PI / 2;
        db.add(plate);

        const rimGeo = new THREE.TorusGeometry(0.655, 0.02, 8, 32);
        const rim = new THREE.Mesh(rimGeo, accentColorMaterial);
        rim.position.x = -pos;
        rim.rotation.y = Math.PI / 2;
        db.add(rim);
      });

      // End caps
      const capGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.05, 16);
      const capL = new THREE.Mesh(capGeo, chromeMaterial);
      capL.position.x = -1.25;
      capL.rotation.z = Math.PI / 2;
      db.add(capL);

      const capR = capL.clone();
      capR.position.x = 1.25;
      db.add(capR);

      return db;
    };

    // Create and add two floating dumbbells with different colors and sizes
    const db1 = createDumbbell(neonGreenMaterial);
    db1.scale.set(0.9, 0.9, 0.9);
    db1.position.set(-3.5, 1.5, 0);
    dbGroup.add(db1);

    const db2 = createDumbbell(electricBlueMaterial);
    db2.scale.set(0.7, 0.7, 0.7);
    db2.position.set(3.5, -2.0, -1);
    dbGroup.add(db2);

    // Also add some decorative geometric toruses floating around
    const toruses: THREE.Mesh[] = [];
    const torusColors = [neonGreenMaterial, electricBlueMaterial];
    for (let i = 0; i < 4; i++) {
      const geo = new THREE.TorusGeometry(0.4, 0.05, 8, 24);
      const mat = torusColors[i % 2];
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      dbGroup.add(mesh);
      toruses.push(mesh);
    }

    // 6. Mouse Interaction State
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse to [-1, 1] range
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 7. Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // 8. Animation Loop
    const startTime = performance.now();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) / 1000;

      // Smoothly interpolate mouse position for fluid responsive feeling
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Update interactive mouse-light position
      mouseLight.position.x = mouse.x * 6;
      mouseLight.position.y = mouse.y * 4;

      // Subtle scene parallax based on mouse
      dbGroup.position.x = mouse.x * 0.5;
      dbGroup.position.y = mouse.y * 0.3;

      // Dumbbell 1 Animation (gently floats and rotates)
      db1.rotation.y = elapsedTime * 0.3;
      db1.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;
      db1.position.y = 1.5 + Math.sin(elapsedTime * 0.7) * 0.3;

      // Dumbbell 2 Animation
      db2.rotation.y = -elapsedTime * 0.4 - 1;
      db2.rotation.z = Math.cos(elapsedTime * 0.6) * 0.3;
      db2.position.y = -2.0 + Math.sin(elapsedTime * 0.5 + 2) * 0.25;

      // Decorative torus animations
      toruses.forEach((t, idx) => {
        t.rotation.x += 0.005 * (idx + 1);
        t.rotation.y += 0.003 * (idx + 1);
        t.position.y += Math.sin(elapsedTime * 0.8 + idx) * 0.002;
      });

      // Drifting star particles animation
      const pointsArray = starField.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        // Move slowly downwards
        pointsArray[i * 3 + 1] -= 0.004;
        // Float side to side using a sine wave
        pointsArray[i * 3] += Math.sin(elapsedTime * 0.2 + i) * 0.002;

        // If particle goes off screen, reset its height
        if (pointsArray[i * 3 + 1] < -10) {
          pointsArray[i * 3 + 1] = 10;
          pointsArray[i * 3] = (Math.random() - 0.5) * 20;
        }
      }
      starField.geometry.attributes.position.needsUpdate = true;
      starField.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Clean up WebGL resources
      container.removeChild(renderer.domElement);
      renderer.dispose();

      // Dispose geometries & materials
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      canvasParticle.remove();

      chromeMaterial.dispose();
      neonGreenMaterial.dispose();
      electricBlueMaterial.dispose();

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((m) => m.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
      id="three-3d-scene"
    />
  );
}
