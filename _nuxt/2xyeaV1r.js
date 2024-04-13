import{am as N,an as Y,ao as z,ap as K,aq as R,ar as ee,as as q,at as te,v as H,E as _,g as $,y as E,u as ie,R as U,Q as ne,_ as C,o as v,c as x,b as w,F as re,q as oe,l as I,w as M,a as k,t as se,j as b,ah as D,d as ae,z as ce,r as de,n as ue}from"./DZkfNCa3.js";import F from"./C8idRC0g.js";import{_ as le}from"./BCn7ufXw.js";import{_ as T}from"./BxhkeDMC.js";import{e as V}from"./D6PpEwZq.js";import{a as G,u as J}from"./iTtZMQIQ.js";import"./qsMMcMsd.js";async function fe(e,t){return await me(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function me(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,n)=>{const i=new Image;i.onload=()=>{const r={width:i.width,height:i.height,ratio:i.width/i.height};t(r)},i.onerror=r=>n(r),i.src=e})}function P(e){return t=>t?e[t]||t:e.missingValue}function ge({formatter:e,keyMap:t,joinWith:n="/",valueMap:i}={}){e||(e=(o,s)=>`${o}=${s}`),t&&typeof t!="function"&&(t=P(t));const r=i||{};return Object.keys(r).forEach(o=>{typeof r[o]!="function"&&(r[o]=P(r[o]))}),(o={})=>Object.entries(o).filter(([a,d])=>typeof d<"u").map(([a,d])=>{const u=r[a];return typeof u=="function"&&(d=u(o[a])),a=typeof t=="function"?t(a):a,e(a,d)}).join(n)}function g(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function he(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const n of e.split(" ")){const i=parseInt(n.replace("x",""));i&&t.add(i)}return Array.from(t)}function pe(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function _e(e){const t={};if(typeof e=="string")for(const n of e.split(/[\s,]+/).filter(i=>i)){const i=n.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function ve(e){const t={options:e},n=(r,o={})=>Q(t,r,o),i=(r,o={},s={})=>n(r,{...s,modifiers:R(o,s.modifiers||{})}).url;for(const r in e.presets)i[r]=(o,s,a)=>i(o,s,{...e.presets[r],...a});return i.options=e,i.getImage=n,i.getMeta=(r,o)=>ye(t,r,o),i.getSizes=(r,o)=>xe(t,r,o),t.$img=i,i}async function ye(e,t,n){const i=Q(e,t,{...n});return typeof i.getMeta=="function"?await i.getMeta():await fe(e,i.url)}function Q(e,t,n){var u,l;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:r}=we(e,n.provider||e.options.provider),o=Se(e,n.preset);if(t=N(t)?t:Y(t),!i.supportsAlias)for(const h in e.options.alias)t.startsWith(h)&&(t=z(e.options.alias[h],t.substr(h.length)));if(i.validateDomains&&N(t)){const h=K(t).host;if(!e.options.domains.find(S=>S===h))return{url:t}}const s=R(n,o,r);s.modifiers={...s.modifiers};const a=s.modifiers.format;(u=s.modifiers)!=null&&u.width&&(s.modifiers.width=g(s.modifiers.width)),(l=s.modifiers)!=null&&l.height&&(s.modifiers.height=g(s.modifiers.height));const d=i.getImage(t,s,e);return d.format=d.format||a||"",d}function we(e,t){const n=e.options.providers[t];if(!n)throw new Error("Unknown provider: "+t);return n}function Se(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function xe(e,t,n){var m,W,L,j,A;const i=g((m=n.modifiers)==null?void 0:m.width),r=g((W=n.modifiers)==null?void 0:W.height),o=_e(n.sizes),s=(L=n.densities)!=null&&L.trim()?he(n.densities.trim()):e.options.densities;pe(s);const a=i&&r?r/i:0,d=[],u=[];if(Object.keys(o).length>=1){for(const f in o){const p=B(f,String(o[f]),r,a,e);if(p!==void 0){d.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const y of s)u.push({width:p._cWidth*y,src:O(e,t,n,p,y)})}}be(d)}else for(const f of s){const p=Object.keys(o)[0];let y=B(p,String(o[p]),r,a,e);y===void 0&&(y={size:"",screenMaxWidth:0,_cWidth:(j=n.modifiers)==null?void 0:j.width,_cHeight:(A=n.modifiers)==null?void 0:A.height}),u.push({width:f,src:O(e,t,n,y,f)})}$e(u);const l=u[u.length-1],h=d.length?d.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,S=h?"w":"x",c=u.map(f=>`${f.src} ${f.width}${S}`).join(", ");return{sizes:h,srcset:c,src:l==null?void 0:l.src}}function B(e,t,n,i,r){const o=r.options.screens&&r.options.screens[e]||parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let a=parseInt(t);if(!o||!a)return;s&&(a=Math.round(a/100*o));const d=i?Math.round(a*i):n;return{size:t,screenMaxWidth:o,_cWidth:a,_cHeight:d}}function O(e,t,n,i,r){return e.$img(t,{...n.modifiers,width:i._cWidth?i._cWidth*r:void 0,height:i._cHeight?i._cHeight*r:void 0},n)}function be(e){var n;e.sort((i,r)=>i.screenMaxWidth-r.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const r=e[i];r.media===t&&e.splice(i,1),t=r.media}for(let i=0;i<e.length;i++)e[i].media=((n=e[i+1])==null?void 0:n.media)||""}function $e(e){e.sort((n,i)=>n.width-i.width);let t=null;for(let n=e.length-1;n>=0;n--){const i=e[n];i.width===t&&e.splice(n,1),t=i.width}}const ze=ge({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>q(e)+"_"+q(t)}),Ie=(e,{modifiers:t={},baseURL:n}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const r=ze(t)||"_";return n||(n=z(i.options.nuxt.baseURL,"/_ipx")),{url:z(n,r,ee(e))}},Me=!0,ke=!0,We=Object.freeze(Object.defineProperty({__proto__:null,getImage:Ie,supportsAlias:ke,validateDomains:Me},Symbol.toStringTag,{value:"Module"})),Z={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};Z.providers={ipxStatic:{provider:We,defaults:{}}};const X=()=>{const e=te(),t=H();return t.$img||t._img||(t._img=ve({...Z,nuxt:{baseURL:e.app.baseURL}}))};function Le(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const je={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},Ae=e=>{const t=_(()=>({provider:e.provider,preset:e.preset})),n=_(()=>({width:g(e.width),height:g(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=X(),r=_(()=>({...e.modifiers,width:g(e.width),height:g(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:n,modifiers:r}},Ne={...je,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},qe=$({name:"NuxtImg",props:Ne,emits:["load","error"],setup:(e,t)=>{const n=X(),i=Ae(e),r=E(!1),o=_(()=>n.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:g(e.width),height:g(e.height)}})),s=_(()=>{const c={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||r.value)&&(c.sizes=o.value.sizes,c.srcset=o.value.srcset),c}),a=_(()=>{let c=e.placeholder;if(c===""&&(c=!0),!c||r.value)return!1;if(typeof c=="string")return c;const m=Array.isArray(c)?c:typeof c=="number"?[c,c]:[10,10];return n(e.src,{...i.modifiers.value,width:m[0],height:m[1],quality:m[2]||50,blur:m[3]||3},i.options.value)}),d=_(()=>e.sizes?o.value.src:n(e.src,i.modifiers.value,i.options.value)),u=_(()=>a.value?a.value:d.value);if(e.preload){const c=Object.values(o.value).every(m=>m);ie({link:[{rel:"preload",as:"image",nonce:e.nonce,...c?{href:o.value.src,imagesizes:o.value.sizes,imagesrcset:o.value.srcset}:{href:u.value}}]})}const l=E(),S=H().isHydrating;return U(()=>{if(a.value){const c=new Image;c.src=d.value,e.sizes&&(c.sizes=o.value.sizes||"",c.srcset=o.value.srcset),c.onload=m=>{r.value=!0,t.emit("load",m)},Le("nuxt-image");return}l.value&&(l.value.complete&&S&&(l.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),l.value.onload=c=>{t.emit("load",c)},l.value.onerror=c=>{t.emit("error",c)})}),()=>ne("img",{ref:l,src:u.value,...s.value,...t.attrs})}}),Ee={},Pe={class:"wrapper"};function Be(e,t){const n=qe;return v(),x("div",Pe,[w(n,{src:"/loader.svg",alt:"loading...",width:"220"})])}const Oe=C(Ee,[["render",Be],["__scopeId","data-v-a1a1b36a"]]),Re=[{icon:"radix-icons:dashboard",name:"Главная",url:"/"},{icon:"fluent:receipt-28-regular",name:"Точки",url:"/customers"},{icon:"radix-icons:gear",name:"Настройки",url:"/setting"},{name:"Feedback",icon:"fluent:person-feedback-48-regular",url:"/feedback"},{name:"Help center",icon:"radix-icons:question-mark",url:"/help"}],He={class:"mt-3.5"},Ue=$({__name:"Menu",setup(e){return(t,n)=>{const i=F,r=T;return v(),x("div",He,[(v(!0),x(re,null,oe(b(Re),o=>(v(),I(r,{class:"flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all mt-2.5",key:o.name,to:o.url},{default:M(()=>[w(i,{name:o.icon,class:"mr-3"},null,8,["name"]),k("span",null,se(o.name),1)]),_:2},1032,["to"]))),128))])}}}),Ce={class:"flex h-screen px-5 py-8 bg-sidebar relative flex-col"},De=k("p",{class:"text-center font-bold text-2xl"},"CenterPlast",-1),Fe=$({__name:"Sidebar",setup(e){const t=G(),n=J(),i=D(),r=async()=>{n.set(!0),await V.deleteSession("current"),t.clear(),await i.push("/login"),n.set(!1)};return(o,s)=>{const a=F,d=le,u=T,l=Ue;return v(),x("aside",Ce,[w(d,{onClick:r,class:"flex mx-auto transition-colors gap-1"},{default:M(()=>[ae(" Выйти"),w(a,{name:"line-md:logout"})]),_:1}),w(u,{to:"/",class:"mx-auto pt-9"},{default:M(()=>[De]),_:1}),w(l)])}}}),Te=$({__name:"default",setup(e){const t=J(),n=G(),i=D();return U(async()=>{try{const r=await V.get();r&&n.set(r)}catch{await i.push("/login")}finally{t.set(!1)}}),(r,o)=>{const s=Oe,a=Fe;return b(t).isLoading?(v(),I(s,{key:0})):(v(),x("section",{key:1,class:ue({grid:b(n).isAuth}),style:{"min-height":"100vh"}},[b(n).isAuth?(v(),I(a,{key:0})):ce("",!0),k("div",null,[de(r.$slots,"default",{},void 0,!0)])],2))}}}),Ke=C(Te,[["__scopeId","data-v-b39e9780"]]);export{Ke as default};