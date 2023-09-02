import{_ as g}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-6f09c02c.js";import{r as h}from"./index-76fb7be0.js";import{g as I,a as C,s as w,c as v,b as R,_ as b,j as S,e as j,f as N}from"./styled-c7b98436.js";function A(o){return I("MuiSvgIcon",o)}C("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const B=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],M=o=>{const{color:e,fontSize:t,classes:i}=o,n={root:["root",e!=="inherit"&&`color${v(e)}`,`fontSize${v(t)}`]};return N(n,A,i)},T=w("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${v(t.color)}`],e[`fontSize${v(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,i,n,u,m,a,f,p,d,l,s,c,r;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(i=t.create)==null?void 0:i.call(t,"fill",{duration:(n=o.transitions)==null||(n=n.duration)==null?void 0:n.shorter}),fontSize:{inherit:"inherit",small:((u=o.typography)==null||(m=u.pxToRem)==null?void 0:m.call(u,20))||"1.25rem",medium:((a=o.typography)==null||(f=a.pxToRem)==null?void 0:f.call(a,24))||"1.5rem",large:((p=o.typography)==null||(d=p.pxToRem)==null?void 0:d.call(p,35))||"2.1875rem"}[e.fontSize],color:(l=(s=(o.vars||o).palette)==null||(s=s[e.color])==null?void 0:s.main)!=null?l:{action:(c=(o.vars||o).palette)==null||(c=c.action)==null?void 0:c.active,disabled:(r=(o.vars||o).palette)==null||(r=r.action)==null?void 0:r.disabled,inherit:void 0}[e.color]}}),_=h.forwardRef(function(e,t){const i=R({props:e,name:"MuiSvgIcon"}),{children:n,className:u,color:m="inherit",component:a="svg",fontSize:f="medium",htmlColor:p,inheritViewBox:d=!1,titleAccess:l,viewBox:s="0 0 24 24"}=i,c=b(i,B),r=h.isValidElement(n)&&n.type==="svg",y=g({},i,{color:m,component:a,fontSize:f,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:s,hasSvgAsChild:r}),x={};d||(x.viewBox=s);const z=M(y);return S.jsxs(T,g({as:a,className:j(z.root,u),focusable:"false",color:p,"aria-hidden":l?void 0:!0,role:l?"img":void 0,ref:t},x,c,r&&n.props,{ownerState:y,children:[r?n.props.children:n,l?S.jsx("title",{children:l}):null]}))});_.muiName="SvgIcon";const $=_;function k(o,e){function t(i,n){return S.jsx($,g({"data-testid":`${e}Icon`,ref:n},i,{children:o}))}return t.muiName=$.muiName,h.memo(h.forwardRef(t))}export{k as c};
//# sourceMappingURL=createSvgIcon-381aa49e.js.map
