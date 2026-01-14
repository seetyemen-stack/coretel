const q = (s, root=document)=>root.querySelector(s);
const qa = (s, root=document)=>Array.from(root.querySelectorAll(s));

const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('active');
      io.unobserve(e.target);
    }
  });
},{threshold: 0.12});

qa('.reveal').forEach(el=>io.observe(el));

const burger = q('#burger');
const nav = q('#nav');
if(burger && nav){
  burger.addEventListener('click', ()=> nav.classList.toggle('open'));
  qa('a', nav).forEach(a=>a.addEventListener('click', ()=>nav.classList.remove('open')));
}

qa('.stagger').forEach((wrap)=>{
  Array.from(wrap.children).forEach((ch,i)=> ch.style.setProperty('--d', `${i*90}ms`));
});