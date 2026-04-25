"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  color: string;
  className?: string;
};

/**
 * Particle sphere orb — interactive (mouse influence).
 * This is a lightweight, self-contained Three.js implementation intended to
 * match the feel of the referenced HUD orb demos (vignette + glow + brackets).
 */
export function AgentOrb({ color, className = "" }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 200);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Geometry: points distributed on a sphere
    const POINTS = 1700;
    const positions = new Float32Array(POINTS * 3);
    for (let i = 0; i < POINTS; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 1.25 + (Math.random() - 0.5) * 0.06;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const points = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        color: new THREE.Color(color),
        size: 0.012,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
      })
    );
    group.add(points);

    // Soft glow shell (wireframe-ish)
    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(1.28, 42, 42),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.08,
        side: THREE.BackSide,
      })
    );
    group.add(shell);

    // Subtle ring
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.55, 0.01, 10, 160),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.25,
      })
    );
    ring.rotation.x = Math.PI / 2.5;
    group.add(ring);

    const mouse = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      mouse.x = (nx - 0.5) * 2;
      mouse.y = (ny - 0.5) * 2;
    };
    mount.addEventListener("pointermove", onMove);

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    const clock = new THREE.Clock();
    const tick = () => {
      const t = clock.getElapsedTime();
      // idle rotation + mouse influence
      group.rotation.y = t * 0.25 + mouse.x * 0.25;
      group.rotation.x = t * 0.12 - mouse.y * 0.18;
      ring.rotation.z = t * 0.4;
      renderer.render(scene, camera);
      rafRef.current = window.requestAnimationFrame(tick);
    };
    tick();

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      mount.removeEventListener("pointermove", onMove);
      geometry.dispose();
      (points.material as THREE.Material).dispose();
      (shell.material as THREE.Material).dispose();
      (ring.material as THREE.Material).dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [color]);

  return (
    <div className={`relative h-full w-full ${className}`}>
      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%)",
        }}
        aria-hidden
      />
      {/* HUD brackets */}
      <span
        className="pointer-events-none absolute left-3 top-3 z-20 h-4 w-4 border-l border-t"
        style={{ borderColor: `${color}80` }}
        aria-hidden
      />
      <span
        className="pointer-events-none absolute right-3 top-3 z-20 h-4 w-4 border-r border-t"
        style={{ borderColor: `${color}55` }}
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-3 left-3 z-20 h-4 w-4 border-b border-l"
        style={{ borderColor: `${color}55` }}
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-3 right-3 z-20 h-4 w-4 border-b border-r"
        style={{ borderColor: `${color}40` }}
        aria-hidden
      />

      <div
        ref={mountRef}
        className="absolute inset-0 z-0 h-full w-full"
        aria-hidden
      />
    </div>
  );
}

