import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const RotatingSphere = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Icons to be mapped on the sphere
    const icons = [
      "/assets/javascript.png",
      "/assets/microsoft-azure.png",
      "/assets/nodejs.png",
      "/assets/react.png",
      "/assets/mongodb.png",
      "/assets/css.png",
      "/assets/html.png",
      "/assets/framer.svg",
      "/assets/python.png",
      "/assets/typescript.png",
      "/assets/cpp.png",
      "/assets/ansible.png",
      "/assets/express.png",
      "/assets/redux.png",
      "/assets/bootstrap.png",
      "/assets/c.png",
      "/assets/nextjs.png",
      "/assets/git.png",
      "/assets/github.svg",
      "/assets/postman.png",
      "/assets/microsoft-word.png",
      "/assets/linux.png",
    ];

    const radius = 3; // Sphere radius
    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    // Preload textures and create sprites
    const loadIcons = async () => {
      const textureLoader = new THREE.TextureLoader();
      const textures = await Promise.all(
        icons.map(
          (icon) =>
            new Promise((resolve, reject) => {
              textureLoader.load(
                icon,
                (texture) => resolve(texture),
                undefined,
                (err) => reject(err)
              );
            })
        )
      );

      textures.forEach((texture, index) => {
        const material = new THREE.SpriteMaterial({
          map: texture,
          transparent: true,
          alphaTest: 0.5,
        });

        const sprite = new THREE.Sprite(material);
        sprite.scale.set(0.8, 0.8, 0.8); // Adjust scale as needed

        // Distribute sprites on a sphere
        const phi = Math.acos(-1 + (2 * index) / icons.length);
        const theta = Math.sqrt(icons.length * Math.PI) * phi;
        sprite.position.setFromSphericalCoords(radius, phi, theta);

        sphereGroup.add(sprite);
      });
    };

    loadIcons();

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphereGroup.rotation.y += 0.005; // Y-axis rotation
      sphereGroup.rotation.x += 0.002; // X-axis slight rotation
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing
    const handleResize = () => {
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      sphereGroup.clear();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "400px",
        position: "relative",
        backgroundColor: "#050505",
      }}
    />
  );
};

export default RotatingSphere;
