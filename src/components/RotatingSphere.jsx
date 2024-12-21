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

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2); // Slightly increase intensity
    scene.add(ambientLight);

    // Sphere geometry with icons
    const icons = [
      "/assets/javascript.png",
      "/assets/microsoft-azure.png",
      "/assets/nodejs.png",
      "/assets/react.png",
      "/assets/mongodb.png",
      "/assets/css.png",
      "/assets/html.png",
      "/assets/python.png",
      "/assets/typescript.png",
      "/assets/cpp.png",
      "/assets/express.png",
      "/assets/framer.png",
      "/assets/ansible.png",
      "/assets/nextjs.png",
      "/assets/redux.png",
      "/assets/bootstrap.png",
      "/assets/c.png",
      "/assets/git.png",
      "/assets/github.png",
      "/assets/postman.png",
      "/assets/microsoft-word.png",
      "/assets/linux.png",
      // "/assets/cloud.svg",
      // "/assets/typescript.svg",
    ];

    const radius = 3; // Sphere radius
    const sphereGroup = new THREE.Group();

    icons.forEach((icon, index) => {
      const texture = new THREE.TextureLoader().load(icon);
      const material = new THREE.SpriteMaterial({
        map: texture,
        alphaTest: 0.5,
      });
      const sprite = new THREE.Sprite(material);
      sprite.scale.set(1, 1, 1); // Set sprite size

      // Distribute sprites on a sphere
      const phi = Math.acos(-1 + (2 * index) / icons.length);
      const theta = Math.sqrt(icons.length * Math.PI) * phi;

      sprite.position.setFromSphericalCoords(radius, phi, theta);
      sphereGroup.add(sprite);
    });

    // Add an initial tilt to the group to prevent alignment with the rotation axis
    sphereGroup.rotation.x = 0.5; // Rotate around the X-axis
    sphereGroup.rotation.y = 0.5; // Rotate around the Y-axis

    scene.add(sphereGroup);

    // Orbit Controls for interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      sphereGroup.rotation.y += 0.005; // Rotation around Y-axis
      sphereGroup.rotation.x += 0.002; // Small rotation around X-axis for dynamic movement
      renderer.render(scene, camera);
      controls.update();
    };
    animate();

    // Handle resizing
    const handleResize = () => {
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
