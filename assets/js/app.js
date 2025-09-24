document.getElementById('year').textContent = new Date().getFullYear();

// ===== Formspree
const form=document.getElementById('leadForm');
if(form){
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const res=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
    if(res.ok){form.reset();document.getElementById('thanks').style.display='block';}
    else{alert('Сталася помилка. Спробуйте ще раз.');}
  });
}

// ===== Music toggle
const music=document.getElementById('bg-music');
const btn=document.getElementById('music-toggle');
if(btn&&music){
  btn.addEventListener('click',()=>{
    if(music.paused){music.play();btn.textContent='🔊';}
    else{music.pause();btn.textContent='🔈';}
  });
}

// ===== Three.js scene
const canvas=document.getElementById('webgl');
let renderer,scene,camera,group,wf,clock,width,height;

function init3D(){
  width=window.innerWidth;height=window.innerHeight;
  renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
  renderer.setSize(width,height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

  scene=new THREE.Scene();
  camera=new THREE.PerspectiveCamera(55,width/height,0.1,100);
  camera.position.set(0,0,6);
  scene.add(camera);

  const amb=new THREE.AmbientLight(0xffffff,0.5);
  const key=new THREE.PointLight(0x60a5fa,1.2,20);key.position.set(4,3,5);
  const fill=new THREE.PointLight(0x9ae6b4,0.8,20);fill.position.set(-3,-2,4);
  scene.add(amb,key,fill);

  group=new THREE.Group();scene.add(group);

  const box=new THREE.Mesh(
    new THREE.BoxGeometry(2.1,2.1,2.1),
    new THREE.MeshStandardMaterial({color:0x0b1222,metalness:0.4,roughness:0.35,
      emissive:0x0d1b2a,emissiveIntensity:0.25})
  );
  group.add(box);

  wf=new THREE.LineSegments(
    new THREE.WireframeGeometry(new THREE.SphereGeometry(3.2,64,48)),
    new THREE.LineBasicMaterial({color:0xc084fc,transparent:true,opacity:0.15})
  );
  group.add(wf);

  clock=new THREE.Clock();
  animate();
  window.addEventListener('resize',onResize);
}

function animate(){
  const t=clock.getElapsedTime();
  group.rotation.y+=0.0015;
  group.rotation.x+=0.0008;
  wf.rotation.y+=0.0006; // плавне автообертання сфери
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}

function onResize(){
  width=window.innerWidth;height=window.innerHeight;
  camera.aspect=width/height;camera.updateProjectionMatrix();
  renderer.setSize(width,height);
}

if(window.WebGLRenderingContext){init3D();}
