// ===== Year
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Formspree (AJAX)
const form = document.getElementById('leadForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      form.reset();
      const msg = document.getElementById('thanks');
      if (msg) msg.style.display = 'block';
    } else {
      alert('Сталася помилка під час відправлення. Спробуйте ще раз.');
    }
  });
}

// ===== Neon background parallax (cheap)
const setBgParallax = () => {
  const y = window.scrollY;
  document.body.style.setProperty('--scrollY', (y * 0.18) + 'px');
  document.body.classList.add('scrolled');
};
window.addEventListener('scroll', setBgParallax);
setBgParallax();

// ===== 3D SCENE (Three.js) — легка, у стилі Cuban’s Edge
const canvas = document.getElementById('webgl');
let renderer, scene, camera, group, width, height, clock;

function init3D() {
  width = window.innerWidth; height = window.innerHeight;
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
  camera.position.set(0, 0, 6);
  scene.add(camera);

  // Світло
  const amb = new THREE.AmbientLight(0xffffff, 0.5);
  const key = new THREE.PointLight(0x60a5fa, 1.2, 20); key.position.set(4, 3, 5);
  const fill = new THREE.PointLight(0x9ae6b4, 0.8, 20); fill.position.set(-3, -2, 4);
  scene.add(amb, key, fill);

  // Група об'єктів
  group = new THREE.Group();
  scene.add(group);

  // Основний «куб резюме»
  const boxGeo = new THREE.BoxGeometry(2.1, 2.1, 2.1);
  const boxMat = new THREE.MeshStandardMaterial({
    color: 0x0b1222, metalness: 0.4, roughness: 0.35,
    emissive: 0x0d1b2a, emissiveIntensity: 0.25
  });
  const box = new THREE.Mesh(boxGeo, boxMat);
  box.castShadow = false; box.receiveShadow = false;
  group.add(box);

  // Wireframe-сфера навколо (неоновий вінок)
  const wf = new THREE.LineSegments(
    new THREE.WireframeGeometry(new THREE.SphereGeometry(3.2, 18, 12)),
    new THREE.LineBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.35 })
  );
  group.add(wf);

  // Маленькі «пікселі» — частинки (маркетингові точки дотику)
  const ptsGeo = new THREE.BufferGeometry();
  const count = 800;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i*3+0] = (Math.random() - .5) * 16;
    positions[i*3+1] = (Math.random() - .5) * 10;
    positions[i*3+2] = (Math.random() - .5) * 16;
  }
  ptsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const pts = new THREE.Points(ptsGeo, new THREE.PointsMaterial({ color: 0x93c5fd, size: 0.015, transparent: true, opacity: 0.65 }));
  scene.add(pts);

  clock = new THREE.Clock();
  animate();

  // Scroll-анімації (GSAP)
  gsap.registerPlugin(ScrollTrigger);

  // 1) На секції «Навички» — підлітаємо ближче
  gsap.to(group.rotation, {
    x: "+=0.6", y: "+=0.8",
    scrollTrigger: { trigger: "#skills", start: "top bottom", end: "top top", scrub: 1 }
  });
  gsap.to(camera.position, {
    z: 4.6,
    scrollTrigger: { trigger: "#skills", start: "top bottom", end: "top center", scrub: 1 }
  });

  // 2) На «Контент/Автоматизація» — плавний поворот і зміщення
  gsap.to(group.rotation, {
    x: "+=0.5", y: "+=0.5",
    scrollTrigger: { trigger: "#content", start: "top bottom", end: "top center", scrub: 1 }
  });
  gsap.to(group.position, {
    x: 0.6, y: -0.2,
    scrollTrigger: { trigger: "#content", start: "top bottom", end: "top center", scrub: 1 }
  });

  // 3) На «Досвід» — легкий зум-аут і підсвітка
  gsap.to(camera.position, {
    z: 6.2,
    scrollTrigger: { trigger: "#experience", start: "top bottom", end: "top center", scrub: 1 }
  });
  gsap.to(box.material, {
    emissiveIntensity: 0.55,
    scrollTrigger: { trigger: "#experience", start: "top bottom", end: "top center", scrub: 1 }
  });

  // 4) На «Контакти» — повернення в центр
  gsap.to(group.position, {
    x: 0, y: 0,
    scrollTrigger: { trigger: "#contacts", start: "top bottom", end: "top center", scrub: 1 }
  });
  gsap.to(group.rotation, {
    x: "+=0.4", y: "+=0.6",
    scrollTrigger: { trigger: "#contacts", start: "top bottom", end: "top center", scrub: 1 }
  });

  window.addEventListener('resize', onResize);
}

function animate() {
  const t = clock.getElapsedTime();
  // Базова анімація
  group.rotation.y += 0.0015;
  group.rotation.x += 0.0008;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function onResize() {
  width = window.innerWidth; height = window.innerHeight;
  camera.aspect = width / height; camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

// З урахуванням «зменшити анімацію»
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced && window.WebGLRenderingContext) {
  init3D();
} else {
  // прибираємо canvas якщо нема WebGL/або користувач просить менше анімацій
  const c = document.getElementById('webgl'); if (c) c.remove();
}
