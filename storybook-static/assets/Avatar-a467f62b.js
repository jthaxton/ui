import{j as c}from"./jsx-runtime-ffb262ed.js";import{g as M,a as $,l as N,s as b,h as z,m as A,b as F,_ as I,e as U,f as D}from"./styled-97dc1c5a.js";import{_ as l}from"./extends-623938b0.js";import{r as m}from"./index-76fb7be0.js";import{c as X}from"./createSvgIcon-ec67558f.js";function B(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function E(t){return parseFloat(t)}function L(t){return M("MuiSkeleton",t)}$("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const T=["animation","className","component","height","style","variant","width"];let v=t=>t,R,S,_,j;const q=t=>{const{classes:a,variant:e,animation:r,hasChildren:o,width:n,height:i}=t;return D({root:["root",e,r,o&&"withChildren",o&&!n&&"fitContent",o&&!i&&"heightAuto"]},L,a)},K=N(R||(R=v`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),W=N(S||(S=v`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),H=b("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=B(t.shape.borderRadius)||"px",r=E(t.shape.borderRadius);return l({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:z(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${e}/${Math.round(r/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&A(_||(_=v`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),K),({ownerState:t,theme:a})=>t.animation==="wave"&&A(j||(j=v`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),W,(a.vars||a).palette.action.hover)),O=m.forwardRef(function(a,e){const r=F({props:a,name:"MuiSkeleton"}),{animation:o="pulse",className:n,component:i="span",height:s,style:f,variant:k="text",width:u}=r,d=I(r,T),p=l({},r,{animation:o,component:i,variant:k,hasChildren:!!d.children}),x=q(p);return c.jsx(H,l({as:i,ref:e,className:U(x.root,n),ownerState:p},d,{style:l({width:u,height:s},f)}))}),V=O,G=X(c.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function J(t){return M("MuiAvatar",t)}$("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Q=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],Y=t=>{const{classes:a,variant:e,colorDefault:r}=t;return D({root:["root",e,r&&"colorDefault"],img:["img"],fallback:["fallback"]},J,a)},Z=b("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.colorDefault&&a.colorDefault]}})(({theme:t,ownerState:a})=>l({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.variant==="square"&&{borderRadius:0},a.colorDefault&&l({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}))),tt=b("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),at=b(G,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,a)=>a.fallback})({width:"75%",height:"75%"});function et({crossOrigin:t,referrerPolicy:a,src:e,srcSet:r}){const[o,n]=m.useState(!1);return m.useEffect(()=>{if(!e&&!r)return;n(!1);let i=!0;const s=new Image;return s.onload=()=>{i&&n("loaded")},s.onerror=()=>{i&&n("error")},s.crossOrigin=t,s.referrerPolicy=a,s.src=e,r&&(s.srcset=r),()=>{i=!1}},[t,a,e,r]),o}const rt=m.forwardRef(function(a,e){const r=F({props:a,name:"MuiAvatar"}),{alt:o,children:n,className:i,component:s="div",imgProps:f,sizes:k,src:u,srcSet:d,variant:p="circular"}=r,x=I(r,Q);let h=null;const P=et(l({},f,{src:u,srcSet:d})),y=u||d,C=y&&P!=="error",g=l({},r,{colorDefault:!C,component:s,variant:p}),w=Y(g);return C?h=c.jsx(tt,l({alt:o,src:u,srcSet:d,sizes:k,ownerState:g,className:w.img},f)):n!=null?h=n:y&&o?h=o[0]:h=c.jsx(at,{ownerState:g,className:w.fallback}),c.jsx(Z,l({as:s,ownerState:g,className:U(w.root,i),ref:e},x,{children:h}))}),ot=rt;function st({alt:t,src:a,loading:e}){const r=c.jsx(ot,{width:40,height:40,variant:"circular",alt:t,src:a});return c.jsx(c.Fragment,{children:e?c.jsx(V,{width:40,height:40,variant:"circular"}):r})}st.__docgenInfo={description:"",methods:[],displayName:"Avatar"};export{st as A,V as S};
//# sourceMappingURL=Avatar-a467f62b.js.map
