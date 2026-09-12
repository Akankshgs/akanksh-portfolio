const oldProfile=document.querySelector('.profile');
const studio=document.createElement('aside');
studio.className='studio';studio.setAttribute('aria-label','Interactive 3D developer workstation');
studio.innerHTML='<div class="scene"><div class="scene-fallback"><strong>Akanksh G S</strong>Flutter · Dart · Android<br>Building apps for everyday operations.</div></div>';
oldProfile.replaceWith(studio);
const sceneHost=studio.querySelector('.scene');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let paused=reducedMotion.matches;
reducedMotion.addEventListener('change',e=>{paused=e.matches;});
const showcases=[
{name:'Sigsenz Assist',type:'WEB / DELIVERY OWNERSHIP',color:'#b49aff',features:['Ticket creation','Team assignment','Maintenance','Resolution'],stack:'Vue.js / TypeScript / .NET'},
{name:'Smart Driver',type:'ANDROID / DRIVER OPERATIONS',color:'#67dfcf',features:['Driver login','Trip workflows','GPS tracking','Acknowledgements'],stack:'Flutter / Dart / GPS'},
{name:'Senzi User',type:'ANDROID / VEHICLE MONITORING',color:'#80baff',features:['Live maps','Route history','Video playback','Incident alerts'],stack:'Flutter / Google Maps / REST'},
{name:'SigSenz Shield',type:'ANDROID / PATROL MANAGEMENT',color:'#ffa97d',features:['OTP login','Patrol dashboard','Incident details','Evidence upload'],stack:'Flutter / Dart / Geolocation'},
{name:'LMS User',type:'ANDROID / DELIVERY OPERATIONS',color:'#f3a3d3',features:['Tanker checklist','Meter readings','OCR validation','Confirmation'],stack:'Flutter / Dart / OCR'}];
let selected=0,transition=0;
const controls=document.createElement('div');controls.className='showcase-controls';
controls.innerHTML='<div class="showcase-heading" aria-live="polite"><span class="showcase-index"></span><h2></h2><p></p></div><div class="showcase-navigation"><button type="button" class="previous" aria-label="Previous project">←</button><div class="showcase-dots" aria-label="Choose project"></div><button type="button" class="next" aria-label="Next project">→</button></div>';
studio.append(controls);
showcases.forEach((p,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Show '+p.name);b.addEventListener('click',()=>selectProject(i));controls.querySelector('.showcase-dots').append(b);});
function selectProject(i){selected=(i+showcases.length)%showcases.length;transition=paused?0:1;const p=showcases[selected];controls.querySelector('.showcase-index').textContent=String(selected+1).padStart(2,'0')+' / 05 — '+p.type;controls.querySelector('h2').textContent=p.name;controls.querySelector('p').textContent=p.features.join(' · ');controls.querySelectorAll('.showcase-dots button').forEach((b,n)=>b.setAttribute('aria-pressed',String(n===selected)));studio.style.setProperty('--project-color',p.color);}
controls.querySelector('.previous').addEventListener('click',()=>selectProject(selected-1));controls.querySelector('.next').addEventListener('click',()=>selectProject(selected+1));selectProject(0);
try{
const THREE=await import('https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js');
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(37,1,.1,100);camera.position.set(3.9,4.3,10.5);camera.lookAt(0,1.4,0);
const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.4;
renderer.domElement.setAttribute('role','img');renderer.domElement.setAttribute('aria-label','Animated 3D workstation with a code editor on the monitor, keyboard, mouse, mobile device and desk.');
sceneHost.querySelector('.scene-fallback').remove();sceneHost.append(renderer.domElement);
scene.add(new THREE.HemisphereLight(0xc8c6ff,0x28233c,2.4));
const key=new THREE.DirectionalLight(0xe3cdff,4);key.position.set(2,7,6);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-6;key.shadow.camera.right=6;key.shadow.camera.top=6;key.shadow.camera.bottom=-6;scene.add(key);
const cyan=new THREE.PointLight(0x58dfff,50,15);cyan.position.set(-4,3,3);scene.add(cyan);const purple=new THREE.PointLight(0xa467ff,60,15);purple.position.set(3,4,-2);scene.add(purple);
const root=new THREE.Group();scene.add(root);
const mat=(color,metalness=.2,roughness=.4)=>new THREE.MeshStandardMaterial({color,metalness,roughness});
const dark=mat(0x171b2c,.65,.28),desk=mat(0x453157,.4,.4),silver=mat(0x78738e,.7,.3),keys=mat(0xada3cd,.2,.45),purpleMat=mat(0x996af1,.3,.4);
function box(w,h,d,material,x,y,z,parent=root){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
box(5.8,.24,3.4,desk,0,.55,.2);box(5.5,.08,3.1,dark,0,.37,.2);
box(.22,.9,.22,silver,-2.35,0,-.9);box(.22,.9,.22,silver,2.35,0,-.9);box(.22,.9,.22,silver,-2.35,0,1.35);box(.22,.9,.22,silver,2.35,0,1.35);
box(1.25,.12,.7,silver,0,.75,-.45);box(.22,.75,.22,silver,0,1.1,-.55);
box(3.9,2.35,.2,dark,0,2.3,-.55);
const screenCanvas=document.createElement('canvas');screenCanvas.width=1024;screenCanvas.height=600;const ctx=screenCanvas.getContext('2d');const texture=new THREE.CanvasTexture(screenCanvas);texture.colorSpace=THREE.SRGBColorSpace;
const monitor=new THREE.Mesh(new THREE.PlaneGeometry(3.64,2.08),new THREE.MeshBasicMaterial({map:texture}));monitor.position.set(0,2.32,-.437);root.add(monitor);
function drawScreen(t){ctx.fillStyle='#101426';ctx.fillRect(0,0,1024,600);ctx.fillStyle='#29273f';ctx.fillRect(0,0,1024,54);ctx.font='22px monospace';ctx.fillStyle='#d7c1ff';ctx.fillText('●  ●  ●     akanksh / portfolio.ts',25,35);ctx.fillStyle='#1a1b30';ctx.fillRect(0,54,195,546);ctx.font='19px monospace';['EXPLORER','› src','  portfolio.ts','  android/','  web/','  projects/'].forEach((line,i)=>{ctx.fillStyle=i===2?'#bb95ff':'#8091ae';ctx.fillText(line,17,102+i*39);});const lines=[['#8ce5df','const developer = {'],['#cfb9ff','  name: "Akanksh G S",'],['#b6ccff','  role: "Software Engineer",'],['#cfb9ff','  mobile: ["Flutter", "Dart"],'],['#b6ccff','  web: ["Vue.js", ".NET"],'],['#cfb9ff','  androidApps: 4,'],['#8ce5df','  focus: "Build. Solve. Deliver."'],['#8ce5df','};']];ctx.font='21px monospace';lines.forEach(([color,line],i)=>{ctx.fillStyle='#515b76';ctx.fillText(String(i+1),214,108+i*42);ctx.fillStyle=color;ctx.fillText(line,260,108+i*42);});ctx.fillStyle='#171c32';ctx.fillRect(195,460,829,140);ctx.font='20px monospace';ctx.fillStyle='#879ac2';ctx.fillText('TERMINAL',224,493);ctx.fillStyle='#91e9c6';ctx.fillText('> portfolio ready',224,536);if(paused||Math.floor(t*2)%2===0){ctx.fillStyle='#c09cff';ctx.fillRect(466,519,12,23);}texture.needsUpdate=true;}
const drawProfile=drawScreen;
drawScreen=function(t){
 const p=showcases[selected];ctx.fillStyle='#0b1020';ctx.fillRect(0,0,1024,600);ctx.fillStyle='#222a40';ctx.fillRect(0,0,1024,52);ctx.font='20px monospace';ctx.fillStyle=p.color;ctx.fillText('● ● ●',25,34);ctx.fillStyle='#c5cfe4';ctx.fillText('akanksh / selected-work / '+String(selected+1).padStart(2,'0'),180,34);
 ctx.fillStyle=p.color;ctx.font='18px monospace';ctx.fillText(p.type,44,105);ctx.fillStyle='#f3f5ff';ctx.font='bold 54px sans-serif';ctx.fillText(p.name,40,178);ctx.font='20px monospace';ctx.fillStyle='#aebbd4';ctx.fillText(p.stack,44,218);
 p.features.forEach((f,i)=>{const x=44+(i%2)*470,y=262+Math.floor(i/2)*116;ctx.fillStyle='#1b243b';ctx.fillRect(x,y,440,92);ctx.fillStyle=p.color;ctx.fillRect(x,y,4,92);ctx.font='18px monospace';ctx.fillText('0'+(i+1),x+22,y+32);ctx.fillStyle='#e1e9fa';ctx.font='24px sans-serif';ctx.fillText(f,x+22,y+66);});
 ctx.fillStyle=p.color;ctx.fillRect(44,530,936*((selected+1)/5),3);ctx.font='17px monospace';ctx.fillStyle='#acbddb';ctx.fillText('PROJECT CAPABILITIES / CONCEPT DISPLAY',44,576);texture.needsUpdate=true;
};
box(2.5,.13,.86,dark,-.25,.78,1.1);
for(let row=0;row<4;row++)for(let col=0;col<12;col++)box(.15,.055,.12,(col+row)%8===0?purpleMat:keys,-1.32+col*.19,.88,.81+row*.18);
box(.85,.055,.12,keys,-.3,.88,1.53);
const mouse=new THREE.Mesh(new THREE.SphereGeometry(.24,24,16),silver);mouse.scale.set(.75,.38,1.15);mouse.position.set(1.5,.83,1.15);root.add(mouse);box(.018,.04,.16,purpleMat,1.5,.925,1.08);
const phone=new THREE.Group();root.add(phone);phone.position.set(-2.18,1.16,-.1);phone.rotation.set(-.15,.25,-.12);box(.65,1.1,.09,dark,0,0,0,phone);box(.55,.94,.01,new THREE.MeshStandardMaterial({color:0x6756be,emissive:0x6756be,emissiveIntensity:.65}),0,0,.051,phone);for(let i=0;i<3;i++)box(.38,.12,.015,keys,0,.23-i*.23,.064,phone);
const tower=box(.72,1.6,1.1,dark,2.25,1.45,-.6);for(let i=0;i<2;i++){const ring=new THREE.Mesh(new THREE.TorusGeometry(.21,.024,10,40),new THREE.MeshStandardMaterial({color:0xa885ff,emissive:0x9461ff,emissiveIntensity:2}));ring.position.set(2.25,1.1+i*.65,-.037);root.add(ring);}
const platform=new THREE.Mesh(new THREE.CylinderGeometry(4.1,4.3,.18,64),mat(0x191827,.4,.5));platform.position.y=-.6;platform.receiveShadow=true;root.add(platform);
const rim=new THREE.Mesh(new THREE.TorusGeometry(4.14,.02,8,100),new THREE.MeshBasicMaterial({color:0x7964cc}));rim.rotation.x=Math.PI/2;rim.position.y=-.51;root.add(rim);
let targetX=0,targetY=0,visible=true,lastScreen=0;
sceneHost.addEventListener('pointermove',e=>{const r=sceneHost.getBoundingClientRect();targetY=((e.clientX-r.left)/r.width-.5)*.65;targetX=((e.clientY-r.top)/r.height-.5)*.13;});sceneHost.addEventListener('pointerleave',()=>{targetX=0;targetY=0;});
const resize=new ResizeObserver(()=>{const w=sceneHost.clientWidth,h=sceneHost.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();});resize.observe(sceneHost);
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;}).observe(sceneHost);
let activeTime=0,previous=0;
renderer.setAnimationLoop(ms=>{const dt=Math.min((ms-previous)/1000,.05);previous=ms;if(!visible||document.hidden)return;if(!paused){activeTime+=dt;transition=Math.max(0,transition-dt*1.8);root.rotation.y+=(targetY+Math.sin(transition*Math.PI)*.65-root.rotation.y)*.07;root.rotation.x+=(targetX-root.rotation.x)*.04;root.position.y=Math.sin(activeTime*.8)*.07;camera.position.z=10.5+Math.sin(transition*Math.PI)*1.1;}if(ms-lastScreen>100){drawScreen(activeTime);purple.color.set(showcases[selected].color);rim.material.color.set(showcases[selected].color);lastScreen=ms;}renderer.render(scene,camera);});
}catch(error){console.warn('3D workspace unavailable:',error.message);}
