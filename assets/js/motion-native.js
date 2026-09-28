import {animate,inView,hover} from 'https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm';
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  inView('[data-motion-in]',el=>{animate(el,{opacity:[0,1],transform:['translateY(22px)','translateY(0px)']},{duration:.65,easing:'ease-out'});return()=>{}},{margin:'0px 0px -10% 0px'});
  inView('#impact-island',el=>{animate(el,{opacity:[0,1],transform:['translateY(18px)','translateY(0px)']},{duration:.7,easing:'ease-out'});return()=>{}},{margin:'0px 0px -5% 0px'});
  document.querySelectorAll('.button,.species-card,.work-card').forEach(el=>hover(el,()=>{animate(el,{transform:'translateY(-3px)'},{duration:.18});return()=>animate(el,{transform:'translateY(0px)'},{duration:.22})}));
}
