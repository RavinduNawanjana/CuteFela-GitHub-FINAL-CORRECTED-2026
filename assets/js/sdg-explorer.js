(()=>{'use strict';
  const explorer=document.querySelector('[data-sdg-explorer]');
  if(!explorer)return;
  const buttons=[...explorer.querySelectorAll('[data-sdg-goal]')];
  const panels=[...explorer.querySelectorAll('[data-sdg-panel]')];
  const stage=explorer.querySelector('.sdg-target-stage');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current=panels.find(panel=>panel.dataset.sdgPanel==='4')||panels[0]||null;
  const show=goal=>{
    const next=panels.find(panel=>panel.dataset.sdgPanel===String(goal));
    if(!next)return;
    if(current===next&&!next.hidden)return;
    if(window.anime)window.anime.remove(panels);
    panels.forEach(panel=>{panel.hidden=panel!==next;panel.style.opacity='';panel.style.transform=''});
    buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.sdgGoal===String(goal))));
    next.querySelectorAll('img').forEach(image=>{image.loading='eager'});
    current=next;
    if(!reduce&&window.anime)window.anime({targets:next,opacity:[0,1],translateY:[16,0],duration:420,easing:'easeOutCubic'});
  };
  if(current)show(current.dataset.sdgPanel);
  buttons.forEach(button=>{
    button.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')show(button.dataset.sdgGoal)});
    button.addEventListener('focus',()=>show(button.dataset.sdgGoal));
    button.addEventListener('click',()=>{
      show(button.dataset.sdgGoal);
      if(matchMedia('(hover: none)').matches)stage.scrollIntoView({behavior:reduce?'auto':'smooth',block:'nearest'});
    });
  });
})();
