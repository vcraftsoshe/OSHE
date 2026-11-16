/* Features dropdown (desktop) and expandable list (mobile menu). */
(function(){
  var dd=document.querySelector('.has-dd');
  if(dd){
    var btn=dd.querySelector('.dd-btn');
    var close=function(){dd.classList.remove('open');btn.setAttribute('aria-expanded','false');};
    btn.addEventListener('click',function(e){
      e.preventDefault();
      var open=!dd.classList.contains('open');
      dd.classList.toggle('open',open);dd.classList.remove('closed');
      btn.setAttribute('aria-expanded',open?'true':'false');
      if(open){var f=dd.querySelector('.dd a');if(f)f.focus();}
    });
    dd.addEventListener('mouseenter',function(){dd.classList.remove('closed');btn.setAttribute('aria-expanded','true');});
    dd.addEventListener('mouseleave',function(){if(!dd.classList.contains('open'))btn.setAttribute('aria-expanded','false');});
    dd.addEventListener('keydown',function(e){
      if(e.key==='Escape'){close();dd.classList.add('closed');btn.focus();}
      var items=[].slice.call(dd.querySelectorAll('.dd a'));var i=items.indexOf(document.activeElement);
      if(e.key==='ArrowDown'){e.preventDefault();(items[i+1]||items[0]).focus();}
      if(e.key==='ArrowUp'){e.preventDefault();(items[i-1]||items[items.length-1]).focus();}
    });
    dd.addEventListener('focusout',function(){setTimeout(function(){if(!dd.contains(document.activeElement)){close();dd.classList.remove('closed');}},0);});
    document.addEventListener('click',function(e){if(!dd.contains(e.target))close();});
  }
  var mx=document.querySelector('.m-exp');
  if(mx){
    var sub=document.getElementById(mx.getAttribute('aria-controls'));
    mx.addEventListener('click',function(){
      var open=mx.getAttribute('aria-expanded')!=='true';
      mx.setAttribute('aria-expanded',open?'true':'false');
      sub.hidden=!open;
    });
  }
})();
