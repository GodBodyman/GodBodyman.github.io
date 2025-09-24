// Footer year
document.getElementById('year').textContent=new Date().getFullYear();

// Music toggle
const music=document.getElementById('bg-music');
const btn=document.getElementById('music-toggle');
btn.addEventListener('click',()=>{
  if(music.paused){music.play();btn.textContent='🔊';}
  else{music.pause();btn.textContent='🔈';}
});

// Three.js
const canvas=document.getElementById('webgl');
let renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

let scene=new THREE.Scene();
let camera=new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,0.1,100);
camera.position.set(0,0,7);
scene.add(camera);

// Lights
scene.add(new THREE.AmbientLight(0xffffff,0.5));
let light=new THREE.PointLight(0x60a5fa,1.2);light.position.set(3,3,5);scene.add(light);

// Group
let group=new THREE.Group();scene.add(group);

// Sphere
let wf=new THREE.LineSegments(
  new THREE.WireframeGeometry(new THREE.SphereGeometry(3.5,64,64)),
  new THREE.LineBasicMaterial({color:0x60a5fa,transparent:true,opacity:0.2})
);
group.add(wf);

// Cube with text
function createTextTexture(txt){
  let cvs=document.createElement('canvas');cvs.width=256;cvs.height=256;
  let ctx=cvs.getContext('2d');
  ctx.fillStyle='#0b0b0b';ctx.fillRect(0,0,256,256);
  ctx.fillStyle='#fff';ctx.font='bold 42px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText(txt,128,128);
  return new THREE.CanvasTexture(cvs);
}
let cubeMats=[
  new THREE.MeshStandardMaterial({map:createTextTexture("Ads")}),
  new THREE.MeshStandardMaterial({map:createTextTexture("Content")}),
  new THREE.MeshStandardMaterial({map:createTextTexture("SmartBots")}),
  new THREE.MeshStandardMaterial({map:createTextTexture("Analytics")}),
  new THREE.MeshStandardMaterial({map:createTextTexture("A/B")}),
  new THREE.MeshStandardMaterial({map:createTextTexture("ROI")})
];
let cube=new THREE.Mesh(new THREE.BoxGeometry(2,2,2),cubeMats);
group.add(cube);

// Animate
function animate(){
  requestAnimationFrame(animate);
  group.rotation.y+=0.003;group.rotation.x+=0.001;
  renderer.render(scene,camera);
}
animate();

window.addEventListener('resize',()=>{
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect=window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
});
