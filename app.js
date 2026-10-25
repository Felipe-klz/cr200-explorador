import * as THREE from 'three';
import {OrbitControls} from './vendor/OrbitControls.js';

const $=s=>document.querySelector(s);
const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize=value=>String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const titles={function:'Función',material:'Material',design_basis:'Base de diseño',manufacturing:'Fabricación o compra',assembly:'Montaje',verification:'Verificación pendiente',maintenance:'Mantenimiento',provenance:'Procedencia'};
const groupLabels={FRAME:'Bastidor',DRAW:'Lanza y enganche',SUSP:'Suspensión',RUN:'Ejes, frenos y ruedas',BODY:'Guardabarros y apoyos',ELEC:'Electricidad y señalización'};
let data,renderer,scene,camera,controls,ground,selectionBox;
const meshes=new Map(),enabled=new Set(Object.keys(groupLabels)),hidden=new Set();
let selected=null,isolateId=null,xray=false,ready=false,topicIds=null;
const initialInspector=$('#inspector').innerHTML;
const loading=$('#loading'),progress=$('#load-progress');
const viewport=$('#viewport');
const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();

function render(){if(renderer)renderer.render(scene,camera);}
function resetMaterial(mesh){
 mesh.material.emissive.setHex(0);mesh.material.emissiveIntensity=0;
 mesh.material.transparent=false;mesh.material.opacity=1;mesh.material.depthWrite=true;
}
function applyVisibility(){
 let count=0;
 for(const [id,mesh] of meshes){
   mesh.visible=enabled.has(mesh.userData.group)&&!hidden.has(id)&&(!isolateId||id===isolateId)&&(!topicIds||topicIds.has(id));
   resetMaterial(mesh);
   if(mesh.visible)count++;
   if(xray&&selected&&id!==selected){mesh.material.transparent=true;mesh.material.opacity=.12;mesh.material.depthWrite=false;}
 }
 const mesh=meshes.get(selected);
 if(mesh){mesh.material.emissive.setHex(0xc77e30);mesh.material.emissiveIntensity=.44;}
 if(selectionBox){selectionBox.visible=!!mesh?.visible;if(mesh?.visible)selectionBox.setFromObject(mesh);}
 $('#visible-count').textContent=count+' / '+(data?.objects.length||336)+' elementos visibles';
 render();renderGroups();
}
function renderGroups(){
 $('#groups').innerHTML=Object.entries(groupLabels).map(([id,name])=>'<label class="group-row"><input type="checkbox" data-group="'+id+'" '+(enabled.has(id)?'checked':'')+'><span class="group-name">'+name+'</span><span class="group-count">'+(data?.objects.filter(p=>p.group===id).length||0)+'</span></label>').join('');
 $('#groups').querySelectorAll('input').forEach(input=>input.onchange=()=>{input.checked?enabled.add(input.dataset.group):enabled.delete(input.dataset.group);isolateId=null;applyVisibility();renderList();});
}
function renderList(){
 const term=normalize($('#search').value);
 const parts=data.objects.filter(p=>enabled.has(p.group)&&(!topicIds||topicIds.has(p.id))&&(!term||p.search.includes(term)));
 $('#list-count').textContent=parts.length+' fichas disponibles';
 $('#part-list').innerHTML=parts.length?parts.map(p=>'<button class="part-row '+(p.id===selected?'active':'')+'" data-id="'+escapeHTML(p.id)+'" aria-pressed="'+(p.id===selected)+'"><code>'+escapeHTML(p.id)+'</code>'+escapeHTML(p.name)+'</button>').join(''):'<div class="no-results">No hay coincidencias. Probá otro nombre o activá más conjuntos.</div>';
 $('#part-list').querySelectorAll('button').forEach(button=>button.onclick=()=>selectPart(button.dataset.id,true));
}
function selectPart(id,focus=false){
 const part=data.objects.find(p=>p.id===id);if(!part)return;
 selected=id;hidden.delete(id);enabled.add(part.group);if(isolateId)isolateId=id;if(focus&&ready)xray=true;
 const notes=part.notes.map(n=>'<details '+(['function','material'].includes(n.title)?'open':'')+'><summary>'+escapeHTML(titles[n.title]||n.title)+'</summary><p>'+escapeHTML(n.body)+'</p></details>').join('');
 const decisions=(part.decisions||[]).map(key=>data.decisions.find(d=>d.id===key)).filter(Boolean).map(d=>'<details class="decision-note" open><summary>'+escapeHTML(d.title)+'</summary><p>'+escapeHTML(d.body)+'</p><strong>Para validar</strong><p>'+escapeHTML(d.validation)+'</p>'+sourceLinks(d)+'</details>').join('');
 $('#inspector').innerHTML='<div class="inspector-head"><code>'+escapeHTML(id)+'</code><h2>'+escapeHTML(part.name)+'</h2><span class="inspector-label">Ficha de desarrollo · '+escapeHTML(groupLabels[part.group])+'</span><p class="audit-label '+(part.audit?'audit-checked':'')+'">'+(part.auditLabel?escapeHTML(part.auditLabel):(part.audit?'S01 · Geometría nominal revisada. Función y resistencia pendientes.':'Pendiente de auditoría por subensamble.'))+'</p><div class="selection-actions"><button id="focus-part">Acercar</button><button id="isolate-part">'+(isolateId?'Ver conjunto':'Aislar')+'</button><button id="hide-part">Ocultar</button><button id="xray-part">'+(xray?'Opaco':'Ver interior')+'</button></div></div><div class="info-notes">'+decisions+notes+'<p class="small-note">Las referencias de catálogo no acreditan homologación de esta pieza ni del vehículo completo. Consultá la sección Normativa.</p></div>';
 $('#inspector').scrollTop=0;
 $('#focus-part').onclick=()=>focusPart(id);
 $('#isolate-part').onclick=()=>{isolateId=isolateId?null:id;applyVisibility();$('#isolate-part').textContent=isolateId?'Ver conjunto':'Aislar';if(isolateId)focusPart(id);};
 $('#hide-part').onclick=()=>{hidden.add(id);clearSelection();applyVisibility();};
 $('#xray-part').onclick=()=>{xray=!xray;applyVisibility();$('#xray-part').textContent=xray?'Opaco':'Ver interior';};
 $('#selection-tag').hidden=false;$('#selection-tag').textContent=id;
 $('#clear-selection').hidden=false;
 renderList();applyVisibility();if(focus&&ready)focusPart(id);
}
function clearSelection(){
 selected=null;isolateId=null;xray=false;$('#inspector').innerHTML=initialInspector;
 $('#selection-tag').hidden=true;$('#clear-selection').hidden=true;wireDiscover();applyVisibility();if(data)renderList();
}
function focusPart(id){
 const mesh=meshes.get(id);if(!mesh)return;
 const box=new THREE.Box3().setFromObject(mesh),center=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3());
 const distance=Math.max(.24,size.length()*1.9);
 camera.position.copy(center).add(new THREE.Vector3(1,.7,1).normalize().multiplyScalar(distance));
 controls.target.copy(center);controls.update();render();
}
function setView(view){
 if(!ready)return;
 isolateId=null;topicIds=null;$('#topic-status').hidden=true;hidden.clear();xray=false;
 Object.keys(groupLabels).forEach(g=>enabled.add(g));
 let target=new THREE.Vector3(0,.48,0),position=new THREE.Vector3(7.2,5.3,8.8);
 if(view==='suspension'){
   enabled.clear();enabled.add('SUSP');enabled.add('RUN');
   target.set(1.24,.38,0);position.set(3.5,-1.15,4.3);
 }else if(view==='top'){position.set(0,8.3,.001);target.set(0,.3,0);
 }else if(view==='bottom'){position.set(3.8,-3.5,5.2);target.set(.5,.35,0);}
 camera.position.copy(position);controls.target.copy(target);controls.update();
 document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('selected',b.dataset.view===view));
 applyVisibility();renderList();
 if(selected){const part=data.objects.find(p=>p.id===selected);if(enabled.has(part.group))selectPart(selected);else clearSelection();}
}
function wireDiscover(){const button=$('#discover-suspension');if(button)button.onclick=()=>{setView('suspension');selectPart('SU-EQUALIZER--1',true);};}
async function loadGeometry(){
 const manifest=await fetch('assets/geometry.json?r=S02A').then(checkResponse).then(r=>r.json());
 if(manifest.revision!==data.revision)throw new Error('La geometría y las fichas corresponden a revisiones distintas. Recargá la página.');
 let bytes=0;
 const chunks=await Promise.all(manifest.files.map(async file=>{
   const response=await fetch('assets/'+file);checkResponse(response);
   const body=new Uint8Array(await response.arrayBuffer());bytes+=body.length;
   progress.textContent='Descargando modelo · '+Math.round(bytes/manifest.compressedBytes*100)+'%';return body;
 }));
 const combined=new Uint8Array(manifest.compressedBytes);let offset=0;
 for(const chunk of chunks){combined.set(chunk,offset);offset+=chunk.length;}
 progress.textContent='Construyendo los '+data.objects.length+' elementos…';
 if(!('DecompressionStream' in window))throw new Error('El navegador no admite descompresión del modelo. Usá una versión reciente de Chrome, Edge, Safari o Firefox.');
 const buffer=await new Response(new Blob([combined]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
 if(buffer.byteLength!==manifest.bytes)throw new Error('La descarga de la geometría está incompleta.');
 return buffer;
}
function checkResponse(r){if(!r.ok)throw new Error('No se pudo cargar '+r.url+' ('+r.status+').');return r;}
function initRenderer(){
 renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0x000000,0);
 renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;
 renderer.domElement.tabIndex=0;renderer.domElement.setAttribute('aria-label','Modelo 3D. Arrastrar para girar, rueda para acercar y clic para seleccionar una pieza.');
 viewport.appendChild(renderer.domElement);
 scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(38,1,.005,100);camera.position.set(7.2,5.3,8.8);
 scene.add(new THREE.HemisphereLight(0xf9fcff,0xa0b4a6,2.5));
 const key=new THREE.DirectionalLight(0xfff4df,4);key.position.set(3,6,4);scene.add(key);
 const fill=new THREE.DirectionalLight(0xddefff,2);fill.position.set(-4,2,-3);scene.add(fill);
 const grid=new THREE.GridHelper(12,48,0xc0ccbf,0xd4ddd0);grid.position.y=-.025;
 grid.material.transparent=true;grid.material.opacity=.3;scene.add(grid);ground=grid;
 controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,.48,0);
 controls.enableDamping=true;controls.dampingFactor=.08;controls.minDistance=.08;controls.maxDistance=18;controls.maxPolarAngle=Math.PI;
 controls.addEventListener('change',()=>{ground.visible=camera.position.y>-.1;render();});controls.listenToKeyEvents(renderer.domElement);
 const resize=()=>{const width=viewport.clientWidth,height=viewport.clientHeight;renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();render();};
 new ResizeObserver(resize).observe(viewport);resize();
 let start;
 renderer.domElement.addEventListener('pointerdown',e=>{start={x:e.clientX,y:e.clientY};});
 renderer.domElement.addEventListener('pointerup',e=>{
   if(!start||Math.hypot(e.clientX-start.x,e.clientY-start.y)>5||!ready||e.button!==0)return;
   const rect=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);
   raycaster.setFromCamera(pointer,camera);
   const hits=raycaster.intersectObjects([...meshes.values()].filter(m=>m.visible&&m.material.opacity>.3),false);
   if(hits.length)selectPart(hits[0].object.userData.id);else clearSelection();
 });
 renderer.domElement.addEventListener('keydown',e=>{if(e.key==='Escape')clearSelection();if(e.key==='Home')setView('general');});
 const animate=()=>{requestAnimationFrame(animate);controls.update();};animate();
}
function createMeshes(buffer){
 for(const part of data.objects){
   const geometry=new THREE.BufferGeometry();
   geometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(buffer,part.positionOffset,part.positionCount),3));
   geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(buffer,part.indexOffset,part.indexCount),1));
   geometry.computeVertexNormals();geometry.computeBoundingSphere();
   const color=new THREE.Color().setRGB(...part.color,THREE.SRGBColorSpace);
   const metal=!['RU-TIRE','SU-BUMP','EL-'].some(prefix=>part.id.startsWith(prefix));
   const material=new THREE.MeshStandardMaterial({color,roughness:metal?.62:.88,metalness:metal?.28:0,side:THREE.DoubleSide});
   const mesh=new THREE.Mesh(geometry,material);mesh.name=part.id;mesh.userData={id:part.id,group:part.group};
   scene.add(mesh);meshes.set(part.id,mesh);
 }
 selectionBox=new THREE.BoxHelper(undefined,0xb7752b);selectionBox.material.depthTest=false;selectionBox.material.transparent=true;selectionBox.material.opacity=.6;selectionBox.renderOrder=10;selectionBox.visible=false;scene.add(selectionBox);
 ready=true;controls.update();applyVisibility();loading.hidden=true;render();
 const requested=new URLSearchParams(location.search).get('pieza');if(requested&&meshes.has(requested))selectPart(requested,true);
}
function fallback(error){
 console.error(error);loading.hidden=true;
 const box=document.createElement('div');box.id='viewport-error';
 box.innerHTML='<strong>El visor 3D no pudo iniciarse.</strong><p>'+escapeHTML(error.message)+'</p><img src="assets/overview.png" alt="Vista estática del chasis"><p>Las fichas, la normativa y las descargas siguen disponibles. Podés elegir una pieza en la lista.</p>';
 viewport.parentElement.appendChild(box);
}
$('#search').addEventListener('input',()=>{if(data)renderList();});
$('#restore').onclick=()=>{topicIds=null;$('#topic-status').hidden=true;hidden.clear();enabled.clear();Object.keys(groupLabels).forEach(g=>enabled.add(g));$('#search').value='';clearSelection();setView('general');};
$('#clear-selection').onclick=clearSelection;
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));
document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>{document.querySelectorAll('.nav-link').forEach(x=>x.classList.toggle('active',x===a));}));
wireDiscover();
function sourceLinks(decision){return '<div class="source-links">'+(decision.sources||[]).map(key=>data.sources.find(s=>s.id===key)).filter(Boolean).map(s=>'<a target="_blank" rel="noopener" href="'+escapeHTML(s.source_url)+'">'+escapeHTML(s.title)+' ↗</a>').join('')+'</div>';}
function showTopic(id){
 const d=data.decisions.find(d=>d.id===id);if(!d)return;
 topicIds=new Set(d.parts);isolateId=null;hidden.clear();xray=false;selected=null;$('#search').value='';
 Object.keys(groupLabels).forEach(g=>enabled.add(g));
 $('#topic-status').hidden=false;$('#topic-status').innerHTML='<span>'+escapeHTML(d.title)+' · '+d.parts.length+' elementos</span><button id="close-topic">Ver todo ×</button>';
 $('#close-topic').onclick=()=>{topicIds=null;$('#topic-status').hidden=true;clearSelection();setView('general');};
 clearSelection();
 if(ready){const box=new THREE.Box3();d.parts.forEach(id=>{const m=meshes.get(id);if(m)box.expandByObject(m);});if(!box.isEmpty()){const c=box.getCenter(new THREE.Vector3()),distance=Math.max(1.3,box.getSize(new THREE.Vector3()).length()*1.6);camera.position.copy(c).add(new THREE.Vector3(1,.75,1).normalize().multiplyScalar(distance));controls.target.copy(c);controls.update();render();}}
 document.querySelector('.workspace').scrollIntoView({behavior:'smooth',block:'start'});
}
function renderKnowledge(){
 $('#knowledge-count').textContent=data.decisions.length+' decisiones · '+data.relationCount+' relaciones explícitas en Nav IA';
 $('#knowledge-cards').innerHTML=data.decisions.map((d,i)=>'<details class="knowledge-card" '+(i===0?'open':'')+'><summary><span class="decision-number">'+String(i+1).padStart(2,'0')+'</span>'+escapeHTML(d.title)+'</summary><div class="knowledge-body"><p>'+escapeHTML(d.body)+'</p><div class="validation"><strong>Falta validar</strong><p>'+escapeHTML(d.validation)+'</p></div>'+sourceLinks(d)+'<button class="topic-button" data-topic="'+escapeHTML(d.id)+'">Ver '+d.parts.length+' elementos del modelo ↗</button></div></details>').join('');
 $('#knowledge-cards').querySelectorAll('[data-topic]').forEach(b=>b.onclick=()=>showTopic(b.dataset.topic));
 const s02Button=$('#explore-s02a');if(s02Button)s02Button.onclick=()=>showTopic('S02-A-D01');
 const auditButton=$('#explore-audit');if(auditButton)auditButton.onclick=()=>showTopic('S01-D01');
}
try{
 data=await fetch('assets/parts.json?r=S02A').then(checkResponse).then(r=>r.json());
 for(const part of data.objects)part.search=normalize(part.id+' '+part.name+' '+part.notes.map(n=>n.body).join(' '));
 renderGroups();renderList();renderKnowledge();
 initRenderer();const buffer=await loadGeometry();createMeshes(buffer);
}catch(error){fallback(error);}


// Navegación desde la BOM:filtra IDs explícitos del mismo CAD, sin alterar geometría.
document.addEventListener('cr200:budget-select',event=>{
 if(!data||!ready)return;
 const ids=event.detail.ids.filter(id=>meshes.has(id));if(!ids.length)return;
 topicIds=new Set(ids);isolateId=null;hidden.clear();xray=false;selected=null;$('#search').value='';
 Object.keys(groupLabels).forEach(g=>enabled.add(g));
 $('#topic-status').hidden=false;$('#topic-status').innerHTML='<span>'+escapeHTML(event.detail.title)+' · '+ids.length+' elementos</span><button id="close-topic">Ver todo ×</button>';
 $('#close-topic').onclick=()=>{topicIds=null;$('#topic-status').hidden=true;clearSelection();setView('general');};
 clearSelection();renderList();applyVisibility();
 const box=new THREE.Box3();ids.forEach(id=>box.expandByObject(meshes.get(id)));const c=box.getCenter(new THREE.Vector3()),distance=Math.max(1.3,box.getSize(new THREE.Vector3()).length()*1.6);camera.position.copy(c).add(new THREE.Vector3(1,.75,1).normalize().multiplyScalar(distance));controls.target.copy(c);controls.update();render();
 if(event.detail.select)selectPart(ids[0],true);
 document.querySelector('.workspace').scrollIntoView({behavior:'smooth',block:'start'});
});
