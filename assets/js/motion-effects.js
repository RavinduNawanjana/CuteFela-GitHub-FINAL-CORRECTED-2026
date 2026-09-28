(()=>{'use strict';
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduce)return;
const $$=(s,c=document)=>[...c.querySelectorAll(s)];
// Anime: editorial word entrances
if(window.anime){$$('[data-split]').forEach((el,idx)=>{if(el.dataset.done)return;el.dataset.done='1';const txt=el.textContent.trim();el.setAttribute('aria-label',txt);el.innerHTML=txt.split(/(\s+)/).map(t=>/^\s+$/.test(t)?t:`<span class="word" aria-hidden="true">${t}</span>`).join('');anime({targets:el.querySelectorAll('.word'),opacity:[0,1],translateY:[42,0],rotateX:[-25,0],delay:anime.stagger(34,{start:120+idx*40}),duration:950,easing:'easeOutExpo'})});anime({targets:'.brand img',translateY:[0,-3,0],duration:5000,easing:'easeInOutSine',loop:true})}
// Reveal the complete goal set as a sequence before the detailed target cards.
const goalGrid=document.querySelector('.sdg-goal-grid');
if(goalGrid&&window.anime&&'IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)return;observer.disconnect();anime({targets:goalGrid.querySelectorAll('.sdg-goal'),opacity:[0,1],translateY:[18,0],scale:[.94,1],delay:anime.stagger(48),duration:620,easing:'easeOutCubic'});},{threshold:.12});observer.observe(goalGrid)}
if(!window.gsap)return;const gsap=window.gsap;if(window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);
// Generic reveals
$$('[data-reveal],.section-intro,.editorial-card,.work-card,.phase,.response-item,.need,.species-card,.related-card').forEach((el,i)=>gsap.from(el,{y:34,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true},delay:Math.min((i%3)*.05,.12)}));
// Images breathe as they enter the viewport
$$('[data-parallax-img]').forEach(img=>gsap.fromTo(img,{scale:1.09},{scale:1,ease:'none',scrollTrigger:{trigger:img.parentElement,start:'top bottom',end:'bottom top',scrub:true}}));
// Homepage media river tracks sideways while scrolling
$$('[data-river-track]').forEach(track=>{const wrap=track.parentElement;gsap.fromTo(track,{x:0},{x:()=>Math.min(0,innerWidth-track.scrollWidth-40),ease:'none',scrollTrigger:{trigger:wrap,start:'top bottom',end:'bottom top',scrub:1,invalidateOnRefresh:true}})});
// Accreditation cards subtle stagger / depth
$$('.accred-card').forEach((card,i)=>gsap.from(card,{x:i%2?35:18,y:28,opacity:0,rotateY:-4,duration:.85,ease:'power3.out',scrollTrigger:{trigger:card,start:'top 88%',once:true}}));
// SDG cards reveal cleanly without decorative rotation
$$('.sdg-card').forEach((card,i)=>gsap.from(card,{y:34,opacity:0,duration:.75,ease:'power3.out',scrollTrigger:{trigger:card,start:'top 92%',once:true},delay:Math.min(i*.025,.16)}));
// Conference chronology uses the responsive editorial grid defined in CSS.
// Species hero media reveal
$$('.media-window').forEach(w=>gsap.from(w,{clipPath:'inset(10% 0 0 18% round 28px)',scale:.97,opacity:.6,duration:1.2,ease:'power3.out',delay:.15}));
// Footer background pointer response
const footer=document.querySelector('[data-footer]'),word=document.querySelector('.footer-bg-word');footer?.addEventListener('pointermove',e=>{const r=footer.getBoundingClientRect();gsap.to(word,{x:((e.clientX-r.left)/r.width-.5)*-24,y:((e.clientY-r.top)/r.height-.5)*-13,duration:.7,ease:'power2.out',overwrite:true})});
})();
