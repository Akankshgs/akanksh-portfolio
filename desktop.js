const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const profile = document.querySelector('.profile');
profile.setAttribute('aria-label', 'Interactive developer terminal');
profile.querySelector('.profiletop').innerHTML = '<span>● ● ●</span><span>akanksh — developer terminal</span>';
const terminal = document.createElement('div');
terminal.className = 'terminal';
terminal.innerHTML = '<div class="window-actions"><span>~/portfolio</span><button class="motion-toggle" type="button" aria-pressed="false">Pause motion</button></div><p><span class="prompt">❯ </span><span class="terminal-command"></span><span class="cursor" aria-hidden="true"></span></p><div class="terminal-result"><p class="answer">Akanksh G S<br>Junior Software Engineer</p><p>Web + Android development<br>Sigsenz Technologies Pvt. Ltd.</p><p><span class="prompt">stack</span> Flutter / Vue.js / .NET<br><span class="prompt">work </span> 4 Android apps + Sigsenz Assist</p></div>';
profile.append(terminal);
const bottom = document.createElement('div');
bottom.className = 'terminal-bottom';
bottom.innerHTML = '<span>Explore:</span><a href="#projects">projects/</a><a href="#experience">experience/</a><a href="#contact">contact/</a>';
profile.append(bottom);
const command = terminal.querySelector('.terminal-command');
const toggle = terminal.querySelector('button');
let timer;
let stopped = reduced.matches;
const text = 'developer --profile akanksh';
let index = 0;
function type(){command.textContent=text.slice(0,++index);if(index<text.length&&!stopped)timer=setTimeout(type,65);}
function setMotion(off){stopped=off;document.body.classList.toggle('motion-off',off);toggle.setAttribute('aria-pressed',String(off));toggle.textContent=off?'Enable motion':'Pause motion';if(off){clearTimeout(timer);command.textContent=text;}}
setMotion(stopped);
if(!stopped)type();
toggle.addEventListener('click',()=>setMotion(!stopped));
reduced.addEventListener('change',event=>setMotion(event.matches));
if('IntersectionObserver' in window&&!reduced.matches){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}},{threshold:0.08});document.querySelectorAll('.project,.experience,.skill').forEach(el=>{el.classList.add('reveal-ready');observer.observe(el);});}
