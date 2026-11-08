/* EDIT HERE */
var PROJECTS=[["Infa OS","Building","A custom Linux setup on a clean KDE Plasma desktop, tuned for speed and looks.",65],["Local AI lab","Testing","Small language models on everyday hardware. What runs well, what's hype.",40],["Hardware bench","Ongoing","PC upgrades, SBC tinkering and cable-management crimes.",80],["Aerix AI","Building","An AI project in active development.",30]];
var NOTES=[["Setting up KDE Plasma the way I like it","Guide"],["Five terminal tools I use daily","List"],["What I learned breaking my system on purpose","Story"],["Running a language model on a laptop","Experiment"]];
var TIPS=["Learn one shell tool deeply before collecting ten.","Back up your config before you break it.","Read the man page. Then read the source.","Automate any task you do three times.","A failed experiment is still data."];
/* RENDER */
var $=function(i){return document.getElementById(i)};
$("pg").innerHTML=PROJECTS.map(function(p){return '<article class="c pj"><div class="t"><h3>'+p[0]+'</h3><span class="st'+(p[3]==100?'':' w2')+'">'+p[1]+'</span></div><p>'+p[2]+'</p><div class="bar"><i style="width:'+p[3]+'%"></i></div></article>'}).join("");
$("nl").innerHTML=NOTES.map(function(n){return '<a class="row" href="#"><b>'+n[0]+'</b><span>'+n[1]+'</span></a>'}).join("");
var ti=0;function tip(){$("tip").textContent=TIPS[ti++%TIPS.length]}tip();$("nt").onclick=tip;
var t0=Date.now();setInterval(function(){var s=Math.floor((Date.now()-t0)/1000);$("up").textContent="online · session "+Math.floor(s/60)+"m "+(s%60)+"s"},1000);
$("th").onclick=function(){var r=document.documentElement,d=r.dataset.t?r.dataset.t==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.t=d?"light":"dark"};
/* TERMINAL */
var o=$("o"),c=$("c");
var CMD={about:"Sumit Kumar: tech enthusiast. Linux, hardware, AI, open source.",projects:PROJECTS.map(function(p){return "- "+p[0]+" ["+p[1]+"]"}).join("\n"),notes:NOTES.map(function(n){return "- "+n[0]}).join("\n"),whoami:"someone who can't leave a gadget alone.",neofetch:"guest@infacore\nOS: Linux, always changing\nShell: bash/zsh\nMood: curious",sudo:"nice try.",contact:"email: infactuatedcore@gmail.com\ninstagram: infacore\nyoutube: infacore"};
function say(h){o.insertAdjacentHTML("beforeend",h+"\n");o.scrollTop=o.scrollHeight}
function esc(s){return s.replace(/[<>&]/g,"")}
function run(v){say('<span class="g">guest@infacore:~$</span> <span class="y">'+esc(v)+'</span>');var k=v.trim().toLowerCase();if(!k)return;
 if(k==="clear"){o.innerHTML="";return}
 if(k==="help")return say("help, about, projects, notes, whoami, neofetch, contact, clear");
 say(CMD[k]||"command not found: "+esc(k))}
c.onkeydown=function(e){if(e.key==="Enter"){var v=c.value;c.value="";run(v)}};
run("help");
/* 3D SCENE */
var cv=$("g3"),cx=cv.getContext("2d"),W=0,H=0,mx=0,my=0,tx=0,ty=0,
 reduce=matchMedia("(prefers-reduced-motion:reduce)").matches,
 V=[],E=[],G=[],GL=["{ }","</>","01","=>","#!","&&","fn","[]","$_","//","0x","AI","git","sudo",";","10","::","if"],MONO="ui-monospace,Consolas,monospace";
for(var i=0;i<8;i++)V.push([(i&1)*2-1,((i>>1)&1)*2-1,((i>>2)&1)*2-1]);
for(i=0;i<8;i++)for(var j=0;j<3;j++){var k=i^(1<<j);if(k>i)E.push([i,k])}
for(i=0;i<42;i++){var u=Math.random()*2-1,th=Math.random()*6.283,r=1.8+Math.random()*1.6,q=Math.sqrt(1-u*u);G.push({p:[r*q*Math.cos(th),r*u,r*q*Math.sin(th)],t:GL[i%GL.length]})}
function rot(p,a,b){var x=p[0]*Math.cos(a)+p[2]*Math.sin(a),z=-p[0]*Math.sin(a)+p[2]*Math.cos(a),y=p[1];return[x,y*Math.cos(b)-z*Math.sin(b),y*Math.sin(b)+z*Math.cos(b)]}
function rs(){var r=cv.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);if(reduce)frame(0)}
function frame(t){
 var cs=getComputedStyle(document.documentElement),A=cs.getPropertyValue("--a").trim(),B=cs.getPropertyValue("--b").trim(),K=cs.getPropertyValue("--ink").trim();
 tx+=(mx-tx)*.06;ty+=(my-ty)*.06;
 var a=t*.0004+tx*1.6,b=.4+ty*.9,s=Math.min(W,H)*.19;
 function P(p,ya){var q=rot(p,ya===undefined?a:ya,b),f=6/(6+q[2]);return[W/2+q[0]*s*f,H/2+q[1]*s*f,f]}
 function L(p,q,c,al,w){cx.globalAlpha=al;cx.strokeStyle=c;cx.lineWidth=w;cx.beginPath();cx.moveTo(p[0],p[1]);cx.lineTo(q[0],q[1]);cx.stroke()}
 function D(p,c,rd,al){cx.globalAlpha=al;cx.fillStyle=c;cx.beginPath();cx.arc(p[0],p[1],rd*p[2],0,6.283);cx.fill()}
 cx.clearRect(0,0,W,H);
 G.forEach(function(g){var p=P(g.p,a*.5),f=p[2];cx.globalAlpha=Math.max(.08,Math.min(.6,(f-.7)*.9));cx.fillStyle=g.t.length>2||g.t==="AI"?A:K;cx.font="600 "+(8+7*f)+"px "+MONO;cx.fillText(g.t,p[0],p[1])});
 E.forEach(function(e){L(P(V[e[0]]),P(V[e[1]]),A,.9,1.6)});
 var c2=V.map(function(v){return P([v[0]*.5,v[1]*.5,v[2]*.5],-a*1.7)});
 E.forEach(function(e){L(c2[e[0]],c2[e[1]],B,.9,1.4)});
 V.forEach(function(v,n){L(P(v),c2[n],K,.25,1)});
 [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].forEach(function(d){var m=P(d),o=P([d[0]*1.7,d[1]*1.7,d[2]*1.7]);L(m,o,K,.5,1.2);D(o,B,4,.95)});
 var N=[];for(var n=0;n<16;n++){var k=n/16*6.283+t*.0006;N.push(P([Math.cos(k)*2.4,Math.sin(n*2+t*.001)*.5,Math.sin(k)*2.4]))}
 N.forEach(function(p,n){L(p,N[(n+1)%N.length],B,.45,1);D(p,A,3,.9)});
 cx.globalAlpha=1;
 if(!reduce)requestAnimationFrame(frame)}
addEventListener("pointermove",function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
addEventListener("resize",rs);rs();if(!reduce)requestAnimationFrame(frame);
/* CARD TILT */
if(!reduce)document.querySelectorAll(".bento .c,.pj,.cli").forEach(function(el){
 el.addEventListener("pointermove",function(e){if(e.pointerType==="touch")return;var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform="perspective(900px) rotateX("+(-y*7)+"deg) rotateY("+(x*9)+"deg) translateY(-3px)"});
 el.addEventListener("pointerleave",function(){el.style.transform=""})});
/* CONTACT */
var MAIL="infactuatedcore@gmail.com";
var FORM_ENDPOINT="https://formsubmit.co/ajax/"+MAIL;
function fv(i){return $(i).value.trim()}
function build(){return "Name: "+fv("fn")+"\nEmail: "+fv("fe")+"\nWebsite type: "+fv("ft")+"\nBudget: "+(fv("fb")||"Not sure yet")+"\nDeadline: "+(fv("fd")||"Flexible")+"\nReferences: "+(fv("fr")||"-")+"\n\nProject description:\n"+fv("fx")}
function check(){var ok=true,m=$("fs");["fn","fe","ft","fx"].forEach(function(i){$(i).classList.remove("bad")});
 [["fn",fv("fn")],["fe",/^\S+@\S+\.\S+$/.test(fv("fe"))],["ft",fv("ft")],["fx",fv("fx").length>=10]].forEach(function(p){if(!p[1]){ok=false;$(p[0]).classList.add("bad")}});
 m.textContent=ok?"":"Please fill the highlighted fields (description needs a few words).";return ok}
function panel(sub,body,msg){$("fm").value=body;
 $("gm").href="https://mail.google.com/mail/?view=cm&fs=1&to="+MAIL+"&su="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body);
 $("ml").href="mailto:"+MAIL+"?subject="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body);
 $("fs").textContent=msg||"";$("fo").classList.add("on");$("fo").scrollIntoView({behavior:"smooth",block:"nearest"})}
$("cf").onsubmit=function(e){e.preventDefault();if(!check())return;
 var sub="Website request: "+fv("ft"),body=build(),btn=$("cf").querySelector("button[type=submit]");
 btn.disabled=true;$("fs").textContent="Sending…";
 fetch(FORM_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:fv("fn"),email:fv("fe"),_subject:sub,message:body})})
 .then(function(r){return r.json()}).then(function(j){if(String(j.success)!=="true")throw 0;$("cf").reset();$("fo").classList.remove("on");$("fs").textContent="Sent! Thanks, I will reply to your email soon."})
 .catch(function(){panel(sub,body,"Could not send automatically. Use any option below instead.")})
 .then(function(){btn.disabled=false})};
$("ce").onclick=function(){var t=document.createElement("textarea"),ok=false;t.value=MAIL;t.style.cssText="position:fixed;opacity:0";document.body.appendChild(t);t.select();try{ok=document.execCommand("copy")}catch(x){}document.body.removeChild(t);$("ce").textContent=ok?"Copied!":MAIL;setTimeout(function(){$("ce").textContent="Copy email"},3000)};
$("cp2").onclick=function(){var t=$("fm"),ok=false;t.focus();t.select();try{ok=document.execCommand("copy")}catch(x){}
 if(ok){$("fs2").textContent="Copied! Paste it into an email to "+MAIL;return}
 if(navigator.clipboard){navigator.clipboard.writeText(t.value).then(function(){$("fs2").textContent="Copied! Paste it into an email to "+MAIL},function(){$("fs2").textContent="Select the text above and press Ctrl+C."})}
 else $("fs2").textContent="Select the text above and press Ctrl+C."};
/* PALETTE */
var P=[["About","#about"],["Now","#now"],["Projects","#projects"],["Notes","#notes"],["Terminal","#cli"],["Contact","#contact"],["Top","#top"]],pal=$("pal"),pq=$("pq");
function draw(){var q=pq.value.toLowerCase();$("pl").innerHTML=P.filter(function(p){return p[0].toLowerCase().indexOf(q)>-1}).map(function(p,i){return '<button data-h="'+p[1]+'"'+(i?'':' class="sel"')+'>'+p[0]+'<small>'+p[1]+'</small></button>'}).join("")}
function open_(){pal.classList.add("on");pq.value="";draw();pq.focus()}
function close_(){pal.classList.remove("on")}
$("pk").onclick=open_;pq.oninput=draw;
pal.onclick=function(e){var b=e.target.closest("button");if(b){close_();location.hash=b.dataset.h}else if(e.target===pal)close_()};
pq.onkeydown=function(e){if(e.key==="Enter"){var b=$("pl").querySelector("button");if(b){close_();location.hash=b.dataset.h}}};
addEventListener("keydown",function(e){if(e.key==="Escape")close_();else if((e.key==="/"||(e.key==="k"&&(e.ctrlKey||e.metaKey)))&&!/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)){e.preventDefault();open_()}});
