import{q as $,H as xe,w as H,J as he,r as v,_ as U,j as a,t as z,v as _,n as K,c as Y,o as re,s as L,p as q,V as ye,U as be,W,O as je,X as Ce,x as ke,aR as $e,aS as Se,aT as D,aU as oe,ai as we,aV as Ie,u as F,d as Ae,z as Pe,a6 as Te,ay as Ee,aW as Ne,m as ie,aX as le,h as A,aY as Me,aZ as Oe,T as R,a_ as Re}from"./index.2cf54ca8.js";import{s as Le,o as J,p as X,l as Z,c as Q,b as ce,T as ue,M as Fe,a as ee,j as de,f as We,D as ze,B as Be,A as De,h as Ve}from"./mui.Toolbar.c29f3336.js";const Ge=["className","component","disableGutters","fixed","maxWidth","classes"],He=xe(),Ue=Le("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${H(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),_e=e=>he({props:e,name:"MuiContainer",defaultTheme:He}),Ke=(e,t)=>{const n=u=>K(t,u),{classes:r,fixed:l,disableGutters:s,maxWidth:o}=e,i={root:["root",o&&`maxWidth${H(String(o))}`,l&&"fixed",s&&"disableGutters"]};return _(i,n,r)};function Ye(e={}){const{createStyledComponent:t=Ue,useThemeProps:n=_e,componentName:r="MuiContainer"}=e,l=t(({theme:o,ownerState:i})=>$({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}}),({theme:o,ownerState:i})=>i.fixed&&Object.keys(o.breakpoints.values).reduce((u,f)=>{const g=f,y=o.breakpoints.values[g];return y!==0&&(u[o.breakpoints.up(g)]={maxWidth:`${y}${o.breakpoints.unit}`}),u},{}),({theme:o,ownerState:i})=>$({},i.maxWidth==="xs"&&{[o.breakpoints.up("xs")]:{maxWidth:Math.max(o.breakpoints.values.xs,444)}},i.maxWidth&&i.maxWidth!=="xs"&&{[o.breakpoints.up(i.maxWidth)]:{maxWidth:`${o.breakpoints.values[i.maxWidth]}${o.breakpoints.unit}`}}));return v.forwardRef(function(i,u){const f=n(i),{className:g,component:y="div",disableGutters:S=!1,fixed:j=!1,maxWidth:h="lg"}=f,x=U(f,Ge),m=$({},f,{component:y,disableGutters:S,fixed:j,maxWidth:h}),p=Ke(m,r);return a.jsx(l,$({as:y,ownerState:m,className:z(p.root,g),ref:u},x))})}const qe=Y(a.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Je(e){return K("MuiAvatar",e)}re("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Xe=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],Ze=e=>{const{classes:t,variant:n,colorDefault:r}=e;return _({root:["root",n,r&&"colorDefault"],img:["img"],fallback:["fallback"]},Je,t)},Qe=L("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>$({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.variant==="square"&&{borderRadius:0},t.colorDefault&&$({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}))),et=L("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),tt=L(qe,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function nt({crossOrigin:e,referrerPolicy:t,src:n,srcSet:r}){const[l,s]=v.useState(!1);return v.useEffect(()=>{if(!n&&!r)return;s(!1);let o=!0;const i=new Image;return i.onload=()=>{o&&s("loaded")},i.onerror=()=>{o&&s("error")},i.crossOrigin=e,i.referrerPolicy=t,i.src=n,r&&(i.srcset=r),()=>{o=!1}},[e,t,n,r]),l}const st=v.forwardRef(function(t,n){const r=q({props:t,name:"MuiAvatar"}),{alt:l,children:s,className:o,component:i="div",imgProps:u,sizes:f,src:g,srcSet:y,variant:S="circular"}=r,j=U(r,Xe);let h=null;const x=nt($({},u,{src:g,srcSet:y})),m=g||y,p=m&&x!=="error",d=$({},r,{colorDefault:!p,component:i,variant:S}),b=Ze(d);return p?h=a.jsx(et,$({alt:l,srcSet:y,src:g,sizes:f,ownerState:d,className:b.img},u)):s!=null?h=s:m&&l?h=l[0]:h=a.jsx(tt,{ownerState:d,className:b.fallback}),a.jsx(Qe,$({as:i,ownerState:d,className:z(b.root,o),ref:n},j,{children:h}))}),at=st,rt=Ye({createStyledComponent:L("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${H(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>q({props:e,name:"MuiContainer"})}),ot=rt;function it(e){return K("MuiMenuItem",e)}const lt=re("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),O=lt,ct=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],ut=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},dt=e=>{const{disabled:t,dense:n,divider:r,disableGutters:l,selected:s,classes:o}=e,u=_({root:["root",n&&"dense",t&&"disabled",!l&&"gutters",r&&"divider",s&&"selected"]},it,o);return $({},o,u)},pt=L(ye,{shouldForwardProp:e=>be(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ut})(({theme:e,ownerState:t})=>$({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${O.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:W(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${O.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:W(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${O.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:W(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:W(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${O.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${O.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${X.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${X.inset}`]:{marginLeft:52},[`& .${Z.root}`]:{marginTop:0,marginBottom:0},[`& .${Z.inset}`]:{paddingLeft:36},[`& .${J.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&$({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${J.root} svg`]:{fontSize:"1.25rem"}}))),ft=v.forwardRef(function(t,n){const r=q({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:s="li",dense:o=!1,divider:i=!1,disableGutters:u=!1,focusVisibleClassName:f,role:g="menuitem",tabIndex:y,className:S}=r,j=U(r,ct),h=v.useContext(Q),x=v.useMemo(()=>({dense:o||h.dense||!1,disableGutters:u}),[h.dense,o,u]),m=v.useRef(null);je(()=>{l&&m.current&&m.current.focus()},[l]);const p=$({},r,{dense:x.dense,divider:i,disableGutters:u}),d=dt(r),b=Ce(m,n);let w;return r.disabled||(w=y!==void 0?y:-1),a.jsx(Q.Provider,{value:x,children:a.jsx(pt,$({ref:b,role:g,tabIndex:w,component:s,focusVisibleClassName:z(d.focusVisible,f),className:z(d.root,S)},j,{ownerState:p,classes:d}))})}),te=ft;var mt={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const gt=ke(mt);var vt=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function ne(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(gt[n[1]]||e.charAt(e.length-2)==="/")&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("-->");return{type:"comment",comment:r!==-1?e.slice(4,r):""}}for(var l=new RegExp(vt),s=null;(s=l.exec(e))!==null;)if(s[0].trim())if(s[1]){var o=s[1].trim(),i=[o,""];o.indexOf("=")>-1&&(i=o.split("=")),t.attrs[i[0]]=i[1],l.lastIndex--}else s[2]&&(t.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return t}var xt=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,ht=/^\s*$/,yt=Object.create(null);function pe(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(n){var r=[];for(var l in n)r.push(l+'="'+n[l]+'"');return r.length?" "+r.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(pe,"")+"</"+t.name+">";case"comment":return e+"<!--"+t.comment+"-->"}}var bt={parse:function(e,t){t||(t={}),t.components||(t.components=yt);var n,r=[],l=[],s=-1,o=!1;if(e.indexOf("<")!==0){var i=e.indexOf("<");r.push({type:"text",content:i===-1?e:e.substring(0,i)})}return e.replace(xt,function(u,f){if(o){if(u!=="</"+n.name+">")return;o=!1}var g,y=u.charAt(1)!=="/",S=u.startsWith("<!--"),j=f+u.length,h=e.charAt(j);if(S){var x=ne(u);return s<0?(r.push(x),r):((g=l[s]).children.push(x),r)}if(y&&(s++,(n=ne(u)).type==="tag"&&t.components[n.name]&&(n.type="component",o=!0),n.voidElement||o||!h||h==="<"||n.children.push({type:"text",content:e.slice(j,e.indexOf("<",j))}),s===0&&r.push(n),(g=l[s-1])&&g.children.push(n),l[s]=n),(!y||n.voidElement)&&(s>-1&&(n.voidElement||n.name===u.slice(2,-1))&&(s--,n=s===-1?r:l[s]),!o&&h!=="<"&&h)){g=s===-1?r:l[s].children;var m=e.indexOf("<",j),p=e.slice(j,m===-1?void 0:m);ht.test(p)&&(p=" "),(m>-1&&s+g.length>=0||p!==" ")&&g.push({type:"text",content:p})}}),r},stringify:function(e){return e.reduce(function(t,n){return t+pe("",n)},"")}};function V(e,t){if(!e)return!1;const n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function G(e){if(!e)return[];const t=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?M(t):t}function jt(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(t=>v.isValidElement(t))}function M(e){return Array.isArray(e)?e:[e]}function Ct(e,t){const n={...t};return n.props=Object.assign(e.props,t.props),n}function fe(e,t){if(!e)return"";let n="";const r=M(e),l=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return r.forEach((s,o)=>{if(typeof s=="string")n+=`${s}`;else if(v.isValidElement(s)){const i=Object.keys(s.props).length,u=l.indexOf(s.type)>-1,f=s.props.children;if(!f&&u&&i===0)n+=`<${s.type}/>`;else if(!f&&(!u||i!==0))n+=`<${o}></${o}>`;else if(s.props.i18nIsDynamicList)n+=`<${o}></${o}>`;else if(u&&i===1&&typeof f=="string")n+=`<${s.type}>${f}</${s.type}>`;else{const g=fe(f,t);n+=`<${o}>${g}</${o}>`}}else if(s===null)D("Trans: the passed in value is invalid - seems you passed in a null child.");else if(typeof s=="object"){const{format:i,...u}=s,f=Object.keys(u);if(f.length===1){const g=i?`${f[0]}, ${i}`:f[0];n+=`{{${g}}}`}else D("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else D("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),n}function kt(e,t,n,r,l,s){if(t==="")return[];const o=r.transKeepBasicHtmlNodesFor||[],i=t&&new RegExp(o.map(m=>`<${m}`).join("|")).test(t);if(!e&&!i&&!s)return[t];const u={};function f(m){M(m).forEach(d=>{typeof d!="string"&&(V(d)?f(G(d)):typeof d=="object"&&!v.isValidElement(d)&&Object.assign(u,d))})}f(e);const g=bt.parse(`<0>${t}</0>`),y={...u,...l};function S(m,p,d){const b=G(m),w=h(b,p.children,d);return jt(b)&&w.length===0||m.props&&m.props.i18nIsDynamicList?b:w}function j(m,p,d,b,w){m.dummy?(m.children=p,d.push(v.cloneElement(m,{key:b},w?void 0:p))):d.push(...v.Children.map([m],C=>{const c={...C.props};return delete c.i18nIsDynamicList,we.createElement(C.type,$({},c,{key:b,ref:C.ref},w?{}:{children:p}))}))}function h(m,p,d){const b=M(m);return M(p).reduce((C,c,T)=>{const E=c.children&&c.children[0]&&c.children[0].content&&n.services.interpolator.interpolate(c.children[0].content,y,n.language);if(c.type==="tag"){let P=b[parseInt(c.name,10)];d.length===1&&!P&&(P=d[0][c.name]),P||(P={});const k=Object.keys(c.attrs).length!==0?Ct({props:c.attrs},P):P,N=v.isValidElement(k),B=N&&V(c,!0)&&!c.voidElement,ge=i&&typeof k=="object"&&k.dummy&&!N,ve=typeof e=="object"&&e!==null&&Object.hasOwnProperty.call(e,c.name);if(typeof k=="string"){const I=n.services.interpolator.interpolate(k,y,n.language);C.push(I)}else if(V(k)||B){const I=S(k,c,d);j(k,I,C,T)}else if(ge){const I=h(b,c.children,d);j(k,I,C,T)}else if(Number.isNaN(parseFloat(c.name)))if(ve){const I=S(k,c,d);j(k,I,C,T,c.voidElement)}else if(r.transSupportBasicHtmlNodes&&o.indexOf(c.name)>-1)if(c.voidElement)C.push(v.createElement(c.name,{key:`${c.name}-${T}`}));else{const I=h(b,c.children,d);C.push(v.createElement(c.name,{key:`${c.name}-${T}`},I))}else if(c.voidElement)C.push(`<${c.name} />`);else{const I=h(b,c.children,d);C.push(`<${c.name}>${I}</${c.name}>`)}else if(typeof k=="object"&&!N){const I=c.children[0]?E:null;I&&C.push(I)}else j(k,E,C,T,c.children.length!==1||!E)}else if(c.type==="text"){const P=r.transWrapTextNodes,k=s?r.unescape(n.services.interpolator.interpolate(c.content,y,n.language)):n.services.interpolator.interpolate(c.content,y,n.language);P?C.push(v.createElement(P,{key:`${c.name}-${T}`},k)):C.push(k)}return C},[])}const x=h([{dummy:!0,children:e||[]}],g,M(e||[]));return G(x[0])}function $t(e){let{children:t,count:n,parent:r,i18nKey:l,context:s,tOptions:o={},values:i,defaults:u,components:f,ns:g,i18n:y,t:S,shouldUnescape:j,...h}=e;const x=y||oe();if(!x)return $e("You will need to pass in an i18next instance by using i18nextReactModule"),t;const m=S||x.t.bind(x)||(B=>B);s&&(o.context=s);const p={...Se(),...x.options&&x.options.react};let d=g||m.ns||x.options&&x.options.defaultNS;d=typeof d=="string"?[d]:d||["translation"];const b=fe(t,p),w=u||b||p.transEmptyNodeValue||l,{hashTransKey:C}=p,c=l||(C?C(b||w):b||w);x.options&&x.options.interpolation&&x.options.interpolation.defaultVariables&&(i=i&&Object.keys(i).length>0?{...i,...x.options.interpolation.defaultVariables}:{...x.options.interpolation.defaultVariables});const T=i?o.interpolation:{interpolation:{...o.interpolation,prefix:"#$?",suffix:"?$#"}},E={...o,count:n,...i,...T,defaultValue:w,ns:d},P=c?m(c,E):w,k=kt(f||t,P,x,p,E,j),N=r!==void 0?r:p.defaultTransParent;return N?v.createElement(N,h,k):k}function St(e){let{children:t,count:n,parent:r,i18nKey:l,context:s,tOptions:o={},values:i,defaults:u,components:f,ns:g,i18n:y,t:S,shouldUnescape:j,...h}=e;const{i18n:x,defaultNS:m}=v.useContext(Ie)||{},p=y||x||oe(),d=S||p&&p.t.bind(p);return $t({children:t,count:n,parent:r,i18nKey:l,context:s,tOptions:o,values:i,defaults:u,components:f,ns:g||d&&d.ns||m||p&&p.options&&p.options.defaultNS,i18n:p,t:S,shouldUnescape:j,...h})}const wt=e=>v.createElement("svg",{id:"UserSvg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 55 55",style:{enableBackground:"new 0 0 55 55"},xmlSpace:"preserve",...e},v.createElement("path",{d:"M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752 c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348 c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98 c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033 c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55 c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287 c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104 c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1 c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764 l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5 c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957 c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545 c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.52,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8 s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.346-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545 c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313 c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z"})),It=Y(a.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout"),At=Y(a.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings"),Pt=function(e){const{t}=F(),[n,r]=v.useState(null),l=Ae(),s=()=>{f(),l({pathname:Te})},o=()=>{f(),l({pathname:Ee})},i=!!n,u=g=>{r(g.currentTarget)},f=()=>{r(null)};return a.jsxs(v.Fragment,{children:[a.jsx(ce,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:a.jsx(ue,{title:t("Account Settings"),children:a.jsx(Pe,{onClick:u,size:"small",sx:{ml:2},"aria-controls":i?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":i?"true":void 0,children:a.jsx(at,{sx:{width:32,height:32},children:e.userInfo.display_name.charAt(0).toUpperCase()})})})}),a.jsxs(Fe,{anchorEl:n,id:"account-menu",open:i,onClose:f,onClick:f,slotProps:{paper:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[a.jsxs(te,{onClick:s,children:[a.jsx(ee,{children:a.jsx(At,{fontSize:"small"})}),"Settings"]}),a.jsxs(te,{onClick:o,children:[a.jsx(ee,{children:a.jsx(It,{fontSize:"small"})}),"Logout"]})]})]})},me=function(e){const{t}=F(),n=Ne();return a.jsx(v.Fragment,{children:a.jsx(de,{...e,href:n,target:"_blank",rel:"noopener",underline:"hover",children:t("Privacy Policy")})})},Tt="https://www.authelia.com",Et=function(e){const{t}=F(),n=Nt(),r=le();return a.jsxs(A,{item:!0,container:!0,xs:12,alignItems:"center",justifyContent:"center",children:[a.jsx(A,{item:!0,xs:4,children:a.jsxs(de,{href:Tt,target:"_blank",underline:"hover",className:n.links,children:[t("Powered by")," Authelia"]})}),r?a.jsxs(v.Fragment,{children:[a.jsx(We,{orientation:"vertical",flexItem:!0,variant:"middle"}),a.jsx(A,{item:!0,xs:4,children:a.jsx(me,{className:n.links})})]}):null]})},Nt=ie(e=>({links:{fontSize:"0.7em",color:Me[500]}}));class Mt{getItem(t){const n=localStorage.getItem(t);if(n!==null){if(n==="null")return null;if(n!=="undefined"){try{return JSON.parse(n)}catch{}return n}}}setItem(t,n){n===void 0?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(n))}}class Ot{getItem(){return null}setItem(){}}const se=window!=null&&window.localStorage?new Mt:new Ot;function Rt(e,t){const[n,r]=v.useState(()=>{const l=se.getItem(e);return typeof t=="object"&&!Array.isArray(t)&&t!==null?{...t,...l}:l||t});return v.useEffect(()=>{se.setItem(e,n)},[e,n]),[n,r]}const Lt=function(e){const{t}=F(),n=le(),r=Oe(),[l,s]=Rt("privacy-policy-accepted",!1);return n&&r&&!l?a.jsx(ze,{...e,anchor:"bottom",open:!l,children:a.jsxs(A,{container:!0,alignItems:"center",justifyContent:"center",textAlign:"center","aria-labelledby":"privacy-policy-drawer-title","aria-describedby":"privacy-policy-drawer-description",children:[a.jsx(A,{container:!0,item:!0,xs:12,paddingY:2,children:a.jsx(A,{item:!0,xs:12,children:a.jsx(R,{id:"privacy-policy-drawer-title",variant:"h6",component:"h2",children:t("Privacy Policy")})})}),a.jsx(A,{item:!0,xs:12,children:a.jsxs(R,{id:"privacy-policy-drawer-description",children:[a.jsx(St,{i18nKey:"You must view and accept the Privacy Policy before using",components:[a.jsx(me,{})]})," ","Authelia."]})}),a.jsx(A,{item:!0,xs:12,paddingY:2,children:a.jsx(Be,{onClick:()=>{s(!0)},children:t("Accept")})})]})}):null},ae=function(e){return a.jsx(v.Fragment,{children:e.tooltip?a.jsx(ue,{title:e.tooltip,children:a.jsx(R,{variant:e.variant,children:e.value})}):a.jsx(R,{variant:e.variant,children:e.value})})},Bt=function(e){const{t}=F(),n=Ft(),r=Re()?a.jsx("img",{src:"./static/media/logo.png",alt:"Logo",className:n.icon}):a.jsx(wt,{className:n.icon});return v.useEffect(()=>{document.title=`${t("Login")} - Authelia`},[t]),a.jsxs(ce,{children:[a.jsx(De,{position:"static",color:"transparent",elevation:0,children:a.jsxs(Ve,{variant:"regular",children:[a.jsx(R,{style:{flexGrow:1}}),e.userInfo?a.jsx(Pt,{userInfo:e.userInfo}):null]})}),a.jsxs(A,{id:e.id,className:n.root,container:!0,spacing:0,alignItems:"center",justifyContent:"center",children:[a.jsx(ot,{maxWidth:"xs",className:n.rootContainer,children:a.jsxs(A,{container:!0,children:[a.jsx(A,{item:!0,xs:12,children:r}),e.title?a.jsx(A,{item:!0,xs:12,children:a.jsx(ae,{variant:"h5",value:e.title,tooltip:e.titleTooltip!==null?e.titleTooltip:void 0})}):null,e.subtitle?a.jsx(A,{item:!0,xs:12,children:a.jsx(ae,{variant:"h6",value:e.subtitle,tooltip:e.subtitleTooltip!==null?e.subtitleTooltip:void 0})}):null,a.jsx(A,{item:!0,xs:12,className:n.body,children:e.children}),e.showBrand?a.jsx(Et,{}):null]})}),a.jsx(Lt,{})]})]})},Ft=ie(e=>({root:{minHeight:"90vh",textAlign:"center"},rootContainer:{paddingLeft:32,paddingRight:32},title:{},subtitle:{},icon:{margin:e.spacing(),width:"64px",fill:e.custom.icon},body:{marginTop:e.spacing(),paddingTop:e.spacing(),paddingBottom:e.spacing()}}));export{ot as C,Bt as L};