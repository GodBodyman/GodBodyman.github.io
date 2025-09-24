// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Tilt on cards (CSS 3D)
const tiltEls = [...document.querySelectorAll('[data-tilt]')];
tiltEls.forEach(card=>{
  const bounds=()=>card.getBoundingClientRect();
  const onMove=e=>{
    const b=bounds();
    const x=(e.clientX - b.left)/b.width - .5;
    const y=(e.clientY - b.top)/b.height - .5;
    card.style.transform=`rotateY(${x*8}deg) rotateX(${-y*8}deg)`;
  };
  const reset=()=>{card.style.transform=''};
  card.addEventListener('mousemove',onMove);
  card.addEventListener('mouseleave',reset);
  card.addEventListener('touchmove',ev=>{const t=ev.touches[0];onMove(t)});
  card.addEventListener('touchend',reset);
});

// AJAX submit to Formspree (success message without reload)
const form = document.getElementById('leadForm');
if(form){
  form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const data=new FormData(form);
    const res=await fetch(form.action,{method:'POST',body:data,headers:{'Accept':'application/json'}});
    if(res.ok){
      form.reset();
      const msg=document.getElementById('thanks');
      if(msg) msg.style.display='block';
    }else{
      alert('Сталася помилка під час відправлення. Спробуйте ще раз.');
    }
  });
}
