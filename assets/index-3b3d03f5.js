import{h as M,M as y,u as c,$ as V,a0 as B,N as C,O as t,b as f,S as I,Q as S,U as k,V as w,W as N,X as a,_ as O}from"./index-68f79261.js";import{M as R,F as z}from"./index-ff5e9c20.js";const u=n=>(w("data-v-42f9b256"),n=n(),N(),n),E={class:"card-container"},F=["src"],X=u(()=>t("p",null,[a(" 1. 设置x和y轴最大旋转范围，使用 "),t("span",{class:"light"},"perspective(500px)"),a(" 指定观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果 ")],-1)),$=u(()=>t("p",null,"2. 通过判断鼠标在容器中的位置，计算出卡片相对于最大值旋转的角度",-1)),j=u(()=>t("p",null,[a(" 3: 使用 "),t("span",{class:"light"},"v-bind()"),a(" 绑定 "),t("span",{class:"light"},"rotateX和rotateY"),a("的旋转角度 ")],-1)),L=M({__name:"index",setup(n){y(e=>({e35e8004:l.value,e35e8002:d.value}));const v=Object.freeze([-10,10]),h=Object.freeze([-10,10]),p=(e,o,s)=>o/s*(e[1]-e[0])+e[0],l=c("0deg"),d=c("0deg"),_=c(!1),m=()=>{_.value=!0},i=c("");V(()=>{B(()=>import("./sun-0f13feec.js"),[]).then(({default:e})=>{i.value=e})});const g=e=>{const o=document.querySelector(".card-wrp"),{offsetWidth:s,offsetHeight:r}=o;d.value=`${-p(h,e.offsetX,s)}deg`,l.value=`${p(v,e.offsetY,r)}deg`},x=()=>{l.value="0deg",d.value="0deg"};return(e,o)=>{const s=z,r=R;return k(),C(S,null,[t("div",E,[t("div",{class:"card-wrp",onMousemove:g,onMouseleave:x},[t("img",{src:i.value,alt:""},null,8,F),f(s,{onClick:m,shape:"circle",style:{right:"50px"}})],32)]),f(r,{open:_.value,"onUpdate:open":o[0]||(o[0]=b=>_.value=b),title:"实现分析",footer:null},{default:I(()=>[X,$,j]),_:1},8,["open"])],64)}}});const U=O(L,[["__scopeId","data-v-42f9b256"]]);export{U as default};