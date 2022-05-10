(()=>{"use strict";var e,t={754:(e,t,s)=>{var i=s(963);class n{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){if(void 0===e||""===e)return console.warn("wrong names"),!1;if(void 0===t)return console.warn("wrong callback"),!1;return this.resolveNames(e).forEach((e=>{const s=this.resolveName(e);this.callbacks[s.namespace]instanceof Object||(this.callbacks[s.namespace]={}),this.callbacks[s.namespace][s.value]instanceof Array||(this.callbacks[s.namespace][s.value]=[]),this.callbacks[s.namespace][s.value].push(t)})),this}off(e){if(void 0===e||""===e)return console.warn("wrong name"),!1;return this.resolveNames(e).forEach((e=>{const t=this.resolveName(e);if("base"!==t.namespace&&""===t.value)delete this.callbacks[t.namespace];else if("base"===t.namespace)for(const e in this.callbacks)this.callbacks[e]instanceof Object&&this.callbacks[e][t.value]instanceof Array&&(delete this.callbacks[e][t.value],0===Object.keys(this.callbacks[e]).length&&delete this.callbacks[e]);else this.callbacks[t.namespace]instanceof Object&&this.callbacks[t.namespace][t.value]instanceof Array&&(delete this.callbacks[t.namespace][t.value],0===Object.keys(this.callbacks[t.namespace]).length&&delete this.callbacks[t.namespace])})),this}trigger(e,t){if(void 0===e||""===e)return console.warn("wrong name"),!1;let s=null,i=null;const n=t instanceof Array?t:[];let a=this.resolveNames(e);if(a=this.resolveName(a[0]),"base"===a.namespace)for(const e in this.callbacks)this.callbacks[e]instanceof Object&&this.callbacks[e][a.value]instanceof Array&&this.callbacks[e][a.value].forEach((function(e){i=e.apply(this,n),void 0===s&&(s=i)}));else if(this.callbacks[a.namespace]instanceof Object){if(""===a.value)return console.warn("wrong name"),this;this.callbacks[a.namespace][a.value].forEach((function(e){i=e.apply(this,n),void 0===s&&(s=i)}))}return s}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},s=e.split(".");return t.original=e,t.value=s[0],t.namespace="base",s.length>1&&""!==s[1]&&(t.namespace=s[1]),t}}class a extends n{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",(e=>{this._setSize(),this.trigger("resize")})),setTimeout((()=>{this._setSize(),this.trigger("resize")}),350)}_setSize(){this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2)}}class o extends n{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.tick()}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame((()=>{this.tick()}))}}var r=s(477),c=s(365);class h{constructor(){this.experience=new P,this.size=this.experience.size,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.origin=new r.Pa4(0,2,12),this.capture=new r.Pa4(-8,1,12),this.setInstance(),this.setOrbitControls()}reset(){this.instance.position.copy(this.capture)}save(){this.position=this.instance.position.clone()}restore(){this.instance.position.copy(this.position)}setInstance(){this.instance=new r.cPb(30,this.size.width/this.size.height,.1,1e3),this.instance.position.copy(this.capture),this.instance.rotation.order="XYZ",this.scene.add(this.instance)}setOrbitControls(){this.controls=new c.z(this.instance,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=17,this.controls.minPolarAngle=Math.PI/6,this.controls.maxPolarAngle=Math.PI/2.1,this.controls.enableDamping=!0}resize(){this.instance.aspect=this.size.width/this.size.height,this.instance.updateProjectionMatrix()}update(){this.controls&&this.controls.update()}}const l=function(){const e=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);if(null==e)return!1;if(e[1].replace(/_/g,".")>="15")return!0;return!1};class d{constructor(){this.experience=new P,this.size=this.experience.size,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.setInstance()}setInstance(){const e=!l();this.instance=new r.CP7({canvas:this.canvas,antialias:e,alpha:!1}),this.instance.physicallyCorrectLights=!1,this.instance.outputEncoding=r.knz,this.instance.toneMapping=r.LY2,this.instance.toneMappingExposure=1.5,this.instance.shadowMap.enabled=!1,this.instance.shadowMap.type=r.ntZ,this.instance.setPixelRatio(this.size.pixelRatio),this.instance.setSize(this.size.width,this.size.height)}resize(){this.instance.setSize(this.size.width,this.size.height),this.instance.setPixelRatio(Math.min(this.size.pixelRatio,2))}update(){this.instance.render(this.scene,this.camera.instance)}}class p extends r.xsS{constructor(){super();const e=new r.DvJ;e.deleteAttribute("uv");const t=new r.Wid({side:r._Li}),s=new r.Wid({roughness:0}),i=new r.cek(16777215,5,28,2);i.position.set(.418,16.199,.3),this.add(i);const n=new r.Kj0(e,t);n.position.set(-.757,13.219,.717),n.scale.set(31.713,28.305,28.591),this.add(n);const a=new r.Kj0(e,s);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new r.Kj0(e,s);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new r.Kj0(e,s);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const h=new r.Kj0(e,s);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const l=new r.Kj0(e,s);l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),this.add(l);const d=new r.Kj0(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const p=new r.Kj0(e,u(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const w=new r.Kj0(e,u(350));w.position.set(-16.109,18.021,-8.207),w.scale.set(.1,2.425,2.751),this.add(w);const v=new r.Kj0(e,u(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);const f=new r.Kj0(e,u(63));f.position.set(1.462,10.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const b=new r.Kj0(e,u(10));b.position.set(3.235,7,-9.6),b.scale.set(3.5,3,.3),this.add(b);const m=new r.Kj0(e,u(60));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m);const g=new r.Kj0(e,u(5));g.rotation.x=Math.PI/3,g.position.set(0,.5,3),g.scale.set(.2,.1,1),this.add(g);const x=new r.Kj0(e,u(5));x.rotation.x=-Math.PI/3,x.position.set(0,.5,-3),x.scale.set(.2,.1,1),this.add(x)}}function u(e){const t=new r.vBJ;return t.color.setScalar(.7*e),t}class w{constructor(){this.experience=new P,this.resource=this.experience.resource,this.renderer=this.experience.renderer,this.scene=this.experience.scene,this.setLights(),this.setEnvMap()}setEnvMap(){const e=new r.anP(this.renderer.instance).fromScene(new p);this.scene.environment=e.texture}setLights(){}}class v{constructor(){this.experience=new P,this.scene=this.experience.scene,this.camera=this.experience.camera,this.resource=this.experience.resource,this.renderer=this.experience.renderer.instance,this.resource.on("ready",(()=>{this.environment=new w}))}update(){}}var f=s(854),b=s(217),m=s(853),g=s(992),x=s(666);const k="";class y extends n{constructor(e){super(),this.source=e,this.items={},this.toLoad=this.source.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new b.E,this.loaders.dracoLoader=new f._,this.loaders.dracoLoader.setDecoderPath(`${k}/draco/`),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader),this.loaders.exrLoader=new m.I,this.loaders.textureLoader=new r.dpR,this.loaders.cubeTextureLoader=new r.cBK,this.loaders.ddsLoader=new g.R,this.loaders.rgbeLoader=new x.x}startLoading(){for(const e of this.source){const t=k+e.path;"gltfModel"==e.type?this.loaders.gltfLoader.load(t,(t=>{this.sourceLoaded(e,t)})):"texture"==e.type?this.loaders.textureLoader.load(t,(t=>{this.sourceLoaded(e,t)})):"cubeTexture"==e.type?this.loaders.cubeTextureLoader.load(t,(t=>{this.sourceLoaded(e,t)})):"exrTexture"==e.type?this.loaders.exrLoader.load(t,(t=>{this.sourceLoaded(e,t)})):"ddsTexture"==e.type?this.loaders.ddsLoader.load(t,(t=>{this.sourceLoaded(e,t)})):"rgbeTexture"==e.type&&this.loaders.rgbeLoader.load(t,(t=>{this.sourceLoaded(e,t)}))}}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}}var L=s(637);class z{constructor(){this.active="#debug"===window.location.hash,this.active&&(this.ui=new L.ZP)}}const j=[];let O=null;class P{constructor(e){if(O)return O;O=this,window.experience=this,this.canvas=e,this.debug=new z,this.size=new a,this.time=new o,this.scene=new r.xsS,this.resource=new y(j),this.camera=new h,this.renderer=new d,this.world=new v,this.size.on("resize",(()=>{this.resize()})),this.time.on("tick",(()=>{this.update()}))}resize(){this.camera.resize(),this.renderer.resize()}update(){this.camera.update(),this.world.update(),this.renderer.update()}destroy(){this.sizes.off("resize"),this.time.off("tick"),this.scene.traverse((e=>{if(e instanceof r.Kj0){e.geometry.dispose();for(const t in e.material){const s=e.material[t];s&&"function"==typeof s.dispose&&s.dispose()}}})),this.camera.controls.dispose(),this.renderer.instance.dispose(),this.debug.active&&this.debug.ui.destroy()}}var K=s(252);const M={class:"ui"};const S={},A=(0,s(744).Z)(S,[["render",function(e,t){return(0,K.wg)(),(0,K.iD)("div",M)}],["__scopeId","data-v-3b6791c0"]]);new P(document.querySelector("#webgl"));(0,i.ri)(A).mount("#ui")}},s={};function i(e){var n=s[e];if(void 0!==n)return n.exports;var a=s[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.m=t,e=[],i.O=(t,s,n,a)=>{if(!s){var o=1/0;for(l=0;l<e.length;l++){for(var[s,n,a]=e[l],r=!0,c=0;c<s.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](s[c])))?s.splice(c--,1):(r=!1,a<o&&(o=a));if(r){e.splice(l--,1);var h=n();void 0!==h&&(t=h)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[s,n,a]},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={143:0};i.O.j=t=>0===e[t];var t=(t,s)=>{var n,a,[o,r,c]=s,h=0;if(o.some((t=>0!==e[t]))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(c)var l=c(i)}for(t&&t(s);h<o.length;h++)a=o[h],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(l)},s=self.webpackChunkthreejs_template=self.webpackChunkthreejs_template||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var n=i.O(void 0,[216],(()=>i(754)));n=i.O(n)})();