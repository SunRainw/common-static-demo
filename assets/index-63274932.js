import{c as Y,i as se,o as ee,p as oe,g as Ne,a as f,b as V,d as j,w as xe,e as Ie,f as P,s as Se,h as R,P as g,j as ae,k as De,l as X,K as N,B as te,m as Ce,n as Ee,q as Z,r as je,t as Re,u as A,v as ze,x as Ae,T as We,y as re,z as Ue,A as Ge,C as Ke,D as Xe,E as Ye,F as Je,G as D,H as I,I as qe,J as Qe,L as z,M as Ze,N as ie,O,Q as le,R as et,S as tt,U as ue,V as nt,W as st,X as W,_ as ot}from"./index-68f79261.js";import{c as at,M as rt,F as it}from"./index-ff5e9c20.js";const ce=Symbol("ContextProps"),de=Symbol("InternalContextProps"),he={id:Y(()=>{}),onFieldBlur:()=>{},onFieldChange:()=>{},clearValidate:()=>{}},fe={addFormItemField:()=>{},removeFormItemField:()=>{}},lt=()=>{const e=se(de,fe),n=Symbol("FormItemFieldKey"),t=Ne();return e.addFormItemField(n,t.type),ee(()=>{e.removeFormItemField(n)}),oe(de,fe),oe(ce,he),se(ce,he)};at({});const $e=(e,n)=>{let{attrs:t}=n;const{included:s,vertical:o,style:a,class:r}=t;let{length:i,offset:l,reverse:u}=t;i<0&&(u=!u,i=Math.abs(i),l=100-l);const c=o?{[u?"top":"bottom"]:`${l}%`,[u?"bottom":"top"]:"auto",height:`${i}%`}:{[u?"right":"left"]:`${l}%`,[u?"left":"right"]:"auto",width:`${i}%`},m=f(f({},a),c);return s?V("div",{class:r,style:m},null):null};$e.inheritAttrs=!1;const Ve=$e,ut=(e,n,t,s,o,a)=>{xe();const r=Object.keys(n).map(parseFloat).sort((i,l)=>i-l);if(t&&s)for(let i=o;i<=a;i+=s)r.indexOf(i)===-1&&r.push(i);return r},Be=(e,n)=>{let{attrs:t}=n;const{prefixCls:s,vertical:o,reverse:a,marks:r,dots:i,step:l,included:u,lowerBound:c,upperBound:m,max:b,min:$,dotStyle:y,activeDotStyle:T}=t,h=b-$,x=ut(o,r,i,l,$,b).map(d=>{const C=`${Math.abs(d-$)/h*100}%`,B=!u&&d===m||u&&d<=m&&d>=c;let S=o?f(f({},y),{[a?"top":"bottom"]:C}):f(f({},y),{[a?"right":"left"]:C});B&&(S=f(f({},S),T));const v=j({[`${s}-dot`]:!0,[`${s}-dot-active`]:B,[`${s}-dot-reverse`]:a});return V("span",{class:v,style:S,key:d},null)});return V("div",{class:`${s}-step`},[x])};Be.inheritAttrs=!1;const ct=Be,Te=(e,n)=>{let{attrs:t,slots:s}=n;const{class:o,vertical:a,reverse:r,marks:i,included:l,upperBound:u,lowerBound:c,max:m,min:b,onClickLabel:$}=t,y=Object.keys(i),T=s.mark,h=m-b,x=y.map(parseFloat).sort((d,C)=>d-C).map(d=>{const C=typeof i[d]=="function"?i[d]():i[d],B=typeof C=="object"&&!Ie(C);let S=B?C.label:C;if(!S&&S!==0)return null;T&&(S=T({point:d,label:S}));const v=!l&&d===u||l&&d<=u&&d>=c,p=j({[`${o}-text`]:!0,[`${o}-text-active`]:v}),w={marginBottom:"-50%",[r?"top":"bottom"]:`${(d-b)/h*100}%`},F={transform:`translateX(${r?"50%":"-50%"})`,msTransform:`translateX(${r?"50%":"-50%"})`,[r?"right":"left"]:`${(d-b)/h*100}%`},M=a?w:F,L=B?f(f({},M),C.style):M,H={[Se?"onTouchstartPassive":"onTouchstart"]:k=>$(k,d)};return V("span",P({class:p,style:L,key:d,onMousedown:k=>$(k,d)},H),[S])});return V("div",{class:o},[x])};Te.inheritAttrs=!1;const dt=Te,we=R({compatConfig:{MODE:3},name:"Handle",inheritAttrs:!1,props:{prefixCls:String,vertical:{type:Boolean,default:void 0},offset:Number,disabled:{type:Boolean,default:void 0},min:Number,max:Number,value:Number,tabindex:g.oneOfType([g.number,g.string]),reverse:{type:Boolean,default:void 0},ariaLabel:String,ariaLabelledBy:String,ariaValueTextFormatter:Function,onMouseenter:{type:Function},onMouseleave:{type:Function},onMousedown:{type:Function}},setup(e,n){let{attrs:t,emit:s,expose:o}=n;const a=ae(!1),r=ae(),i=()=>{document.activeElement===r.value&&(a.value=!0)},l=h=>{a.value=!1,s("blur",h)},u=()=>{a.value=!1},c=()=>{var h;(h=r.value)===null||h===void 0||h.focus()},m=()=>{var h;(h=r.value)===null||h===void 0||h.blur()},b=()=>{a.value=!0,c()},$=h=>{h.preventDefault(),c(),s("mousedown",h)};o({focus:c,blur:m,clickFocus:b,ref:r});let y=null;De(()=>{y=X(document,"mouseup",i)}),ee(()=>{y==null||y.remove()});const T=Y(()=>{const{vertical:h,offset:x,reverse:d}=e;return h?{[d?"top":"bottom"]:`${x}%`,[d?"bottom":"top"]:"auto",transform:d?null:"translateY(+50%)"}:{[d?"right":"left"]:`${x}%`,[d?"left":"right"]:"auto",transform:`translateX(${d?"+":"-"}50%)`}});return()=>{const{prefixCls:h,disabled:x,min:d,max:C,value:B,tabindex:S,ariaLabel:v,ariaLabelledBy:p,ariaValueTextFormatter:w,onMouseenter:F,onMouseleave:M}=e,L=j(t.class,{[`${h}-handle-click-focused`]:a.value}),H={"aria-valuemin":d,"aria-valuemax":C,"aria-valuenow":B,"aria-disabled":!!x},k=[t.style,T.value];let _=S||0;(x||S===null)&&(_=null);let G;w&&(G=w(B));const q=f(f(f(f({},t),{role:"slider",tabindex:_}),H),{class:L,onBlur:l,onKeydown:u,onMousedown:$,onMouseenter:F,onMouseleave:M,ref:r,style:k});return V("div",P(P({},q),{},{"aria-label":v,"aria-labelledby":p,"aria-valuetext":G}),null)}}});function Q(e,n){try{return Object.keys(n).some(t=>e.target===n[t].ref)}catch{return!1}}function Me(e,n){let{min:t,max:s}=n;return e<t||e>s}function pe(e){return e.touches.length>1||e.type.toLowerCase()==="touchend"&&e.touches.length>0}function me(e,n){let{marks:t,step:s,min:o,max:a}=n;const r=Object.keys(t).map(parseFloat);if(s!==null){const l=Math.pow(10,Pe(s)),u=Math.floor((a*l-o*l)/(s*l)),c=Math.min((e-o)/s,u),m=Math.round(c)*s+o;r.push(m)}const i=r.map(l=>Math.abs(e-l));return r[i.indexOf(Math.min(...i))]}function Pe(e){const n=e.toString();let t=0;return n.indexOf(".")>=0&&(t=n.length-n.indexOf(".")-1),t}function ge(e,n){let t=1;return window.visualViewport&&(t=+(window.visualViewport.width/document.body.getBoundingClientRect().width).toFixed(2)),(e?n.clientY:n.pageX)/t}function ve(e,n){let t=1;return window.visualViewport&&(t=+(window.visualViewport.width/document.body.getBoundingClientRect().width).toFixed(2)),(e?n.touches[0].clientY:n.touches[0].pageX)/t}function be(e,n){const t=n.getBoundingClientRect();return e?t.top+t.height*.5:window.pageXOffset+t.left+t.width*.5}function ne(e,n){let{max:t,min:s}=n;return e<=s?s:e>=t?t:e}function He(e,n){const{step:t}=n,s=isFinite(me(e,n))?me(e,n):0;return t===null?s:parseFloat(s.toFixed(Pe(t)))}function U(e){e.stopPropagation(),e.preventDefault()}function ht(e,n,t){const s={increase:(r,i)=>r+i,decrease:(r,i)=>r-i},o=s[e](Object.keys(t.marks).indexOf(JSON.stringify(n)),1),a=Object.keys(t.marks)[o];return t.step?s[e](n,t.step):Object.keys(t.marks).length&&t.marks[a]?t.marks[a]:n}function Oe(e,n,t){const s="increase",o="decrease";let a=s;switch(e.keyCode){case N.UP:a=n&&t?o:s;break;case N.RIGHT:a=!n&&t?o:s;break;case N.DOWN:a=n&&t?s:o;break;case N.LEFT:a=!n&&t?s:o;break;case N.END:return(r,i)=>i.max;case N.HOME:return(r,i)=>i.min;case N.PAGE_UP:return(r,i)=>r+i.step*2;case N.PAGE_DOWN:return(r,i)=>r-i.step*2;default:return}return(r,i)=>ht(a,r,i)}var ft=globalThis&&globalThis.__rest||function(e,n){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)n.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(t[s[o]]=e[s[o]]);return t};function E(){}function Fe(e){const n={id:String,min:Number,max:Number,step:Number,marks:g.object,included:{type:Boolean,default:void 0},prefixCls:String,disabled:{type:Boolean,default:void 0},handle:Function,dots:{type:Boolean,default:void 0},vertical:{type:Boolean,default:void 0},reverse:{type:Boolean,default:void 0},minimumTrackStyle:g.object,maximumTrackStyle:g.object,handleStyle:g.oneOfType([g.object,g.arrayOf(g.object)]),trackStyle:g.oneOfType([g.object,g.arrayOf(g.object)]),railStyle:g.object,dotStyle:g.object,activeDotStyle:g.object,autofocus:{type:Boolean,default:void 0},draggableTrack:{type:Boolean,default:void 0}};return R({compatConfig:{MODE:3},name:"CreateSlider",mixins:[te,e],inheritAttrs:!1,props:Ce(n,{prefixCls:"rc-slider",min:0,max:100,step:1,marks:{},included:!0,disabled:!1,dots:!1,vertical:!1,reverse:!1,trackStyle:[{}],handleStyle:[{}],railStyle:{},dotStyle:{},activeDotStyle:{}}),emits:["change","blur","focus"],data(){return xe(),this.handlesRefs={},{}},mounted(){this.$nextTick(()=>{this.document=this.sliderRef&&this.sliderRef.ownerDocument;const{autofocus:t,disabled:s}=this;t&&!s&&this.focus()})},beforeUnmount(){this.$nextTick(()=>{this.removeDocumentEvents()})},methods:{defaultHandle(t){var{index:s,directives:o,className:a,style:r}=t,i=ft(t,["index","directives","className","style"]);if(delete i.dragging,i.value===null)return null;const l=f(f({},i),{class:a,style:r,key:s});return V(we,l,null)},onDown(t,s){let o=s;const{draggableTrack:a,vertical:r}=this.$props,{bounds:i}=this.$data,l=a&&this.positionGetValue?this.positionGetValue(o)||[]:[],u=Q(t,this.handlesRefs);if(this.dragTrack=a&&i.length>=2&&!u&&!l.map((c,m)=>{const b=m?!0:c>=i[m];return m===l.length-1?c<=i[m]:b}).some(c=>!c),this.dragTrack)this.dragOffset=o,this.startBounds=[...i];else{if(!u)this.dragOffset=0;else{const c=be(r,t.target);this.dragOffset=o-c,o=c}this.onStart(o)}},onMouseDown(t){if(t.button!==0)return;this.removeDocumentEvents();const s=this.$props.vertical,o=ge(s,t);this.onDown(t,o),this.addDocumentMouseEvents()},onTouchStart(t){if(pe(t))return;const s=this.vertical,o=ve(s,t);this.onDown(t,o),this.addDocumentTouchEvents(),U(t)},onFocus(t){const{vertical:s}=this;if(Q(t,this.handlesRefs)&&!this.dragTrack){const o=be(s,t.target);this.dragOffset=0,this.onStart(o),U(t),this.$emit("focus",t)}},onBlur(t){this.dragTrack||this.onEnd(),this.$emit("blur",t)},onMouseUp(){this.handlesRefs[this.prevMovedHandleIndex]&&this.handlesRefs[this.prevMovedHandleIndex].clickFocus()},onMouseMove(t){if(!this.sliderRef){this.onEnd();return}const s=ge(this.vertical,t);this.onMove(t,s-this.dragOffset,this.dragTrack,this.startBounds)},onTouchMove(t){if(pe(t)||!this.sliderRef){this.onEnd();return}const s=ve(this.vertical,t);this.onMove(t,s-this.dragOffset,this.dragTrack,this.startBounds)},onKeyDown(t){this.sliderRef&&Q(t,this.handlesRefs)&&this.onKeyboard(t)},onClickMarkLabel(t,s){t.stopPropagation(),this.onChange({sValue:s}),this.setState({sValue:s},()=>this.onEnd(!0))},getSliderStart(){const t=this.sliderRef,{vertical:s,reverse:o}=this,a=t.getBoundingClientRect();return s?o?a.bottom:a.top:window.pageXOffset+(o?a.right:a.left)},getSliderLength(){const t=this.sliderRef;if(!t)return 0;const s=t.getBoundingClientRect();return this.vertical?s.height:s.width},addDocumentTouchEvents(){this.onTouchMoveListener=X(this.document,"touchmove",this.onTouchMove),this.onTouchUpListener=X(this.document,"touchend",this.onEnd)},addDocumentMouseEvents(){this.onMouseMoveListener=X(this.document,"mousemove",this.onMouseMove),this.onMouseUpListener=X(this.document,"mouseup",this.onEnd)},removeDocumentEvents(){this.onTouchMoveListener&&this.onTouchMoveListener.remove(),this.onTouchUpListener&&this.onTouchUpListener.remove(),this.onMouseMoveListener&&this.onMouseMoveListener.remove(),this.onMouseUpListener&&this.onMouseUpListener.remove()},focus(){var t;this.$props.disabled||(t=this.handlesRefs[0])===null||t===void 0||t.focus()},blur(){this.$props.disabled||Object.keys(this.handlesRefs).forEach(t=>{var s,o;(o=(s=this.handlesRefs[t])===null||s===void 0?void 0:s.blur)===null||o===void 0||o.call(s)})},calcValue(t){const{vertical:s,min:o,max:a}=this,r=Math.abs(Math.max(t,0)/this.getSliderLength());return s?(1-r)*(a-o)+o:r*(a-o)+o},calcValueByPos(t){const o=(this.reverse?-1:1)*(t-this.getSliderStart());return this.trimAlignValue(this.calcValue(o))},calcOffset(t){const{min:s,max:o}=this,a=(t-s)/(o-s);return Math.max(0,a*100)},saveSlider(t){this.sliderRef=t},saveHandle(t,s){this.handlesRefs[t]=s}},render(){const{prefixCls:t,marks:s,dots:o,step:a,included:r,disabled:i,vertical:l,reverse:u,min:c,max:m,maximumTrackStyle:b,railStyle:$,dotStyle:y,activeDotStyle:T,id:h}=this,{class:x,style:d}=this.$attrs,{tracks:C,handles:B}=this.renderSlider(),S=j(t,x,{[`${t}-with-marks`]:Object.keys(s).length,[`${t}-disabled`]:i,[`${t}-vertical`]:l,[`${t}-horizontal`]:!l}),v={vertical:l,marks:s,included:r,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:m,min:c,reverse:u,class:`${t}-mark`,onClickLabel:i?E:this.onClickMarkLabel},p={[Se?"onTouchstartPassive":"onTouchstart"]:i?E:this.onTouchStart};return V("div",P(P({id:h,ref:this.saveSlider,tabindex:"-1",class:S},p),{},{onMousedown:i?E:this.onMouseDown,onMouseup:i?E:this.onMouseUp,onKeydown:i?E:this.onKeyDown,onFocus:i?E:this.onFocus,onBlur:i?E:this.onBlur,style:d}),[V("div",{class:`${t}-rail`,style:f(f({},b),$)},null),C,V(ct,{prefixCls:t,vertical:l,reverse:u,marks:s,dots:o,step:a,included:r,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:m,min:c,dotStyle:y,activeDotStyle:T},null),B,V(dt,v,{mark:this.$slots.mark}),Ee(this)])}})}const pt=R({compatConfig:{MODE:3},name:"Slider",mixins:[te],inheritAttrs:!1,props:{defaultValue:Number,value:Number,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0},tabindex:g.oneOfType([g.number,g.string]),reverse:{type:Boolean,default:void 0},min:Number,max:Number,ariaLabelForHandle:String,ariaLabelledByForHandle:String,ariaValueTextFormatterForHandle:String,startPoint:Number},emits:["beforeChange","afterChange","change"],data(){const e=this.defaultValue!==void 0?this.defaultValue:this.min,n=this.value!==void 0?this.value:e;return{sValue:this.trimAlignValue(n),dragging:!1}},watch:{value:{handler(e){this.setChangeValue(e)},deep:!0},min(){const{sValue:e}=this;this.setChangeValue(e)},max(){const{sValue:e}=this;this.setChangeValue(e)}},methods:{setChangeValue(e){const n=e!==void 0?e:this.sValue,t=this.trimAlignValue(n,this.$props);t!==this.sValue&&(this.setState({sValue:t}),Me(n,this.$props)&&this.$emit("change",t))},onChange(e){const n=!Z(this,"value"),t=e.sValue>this.max?f(f({},e),{sValue:this.max}):e;n&&this.setState(t);const s=t.sValue;this.$emit("change",s)},onStart(e){this.setState({dragging:!0});const{sValue:n}=this;this.$emit("beforeChange",n);const t=this.calcValueByPos(e);this.startValue=t,this.startPosition=e,t!==n&&(this.prevMovedHandleIndex=0,this.onChange({sValue:t}))},onEnd(e){const{dragging:n}=this;this.removeDocumentEvents(),(n||e)&&this.$emit("afterChange",this.sValue),this.setState({dragging:!1})},onMove(e,n){U(e);const{sValue:t}=this,s=this.calcValueByPos(n);s!==t&&this.onChange({sValue:s})},onKeyboard(e){const{reverse:n,vertical:t}=this.$props,s=Oe(e,t,n);if(s){U(e);const{sValue:o}=this,a=s(o,this.$props),r=this.trimAlignValue(a);if(r===o)return;this.onChange({sValue:r}),this.$emit("afterChange",r),this.onEnd()}},getLowerBound(){const e=this.$props.startPoint||this.$props.min;return this.$data.sValue>e?e:this.$data.sValue},getUpperBound(){return this.$data.sValue<this.$props.startPoint?this.$props.startPoint:this.$data.sValue},trimAlignValue(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e===null)return null;const t=f(f({},this.$props),n),s=ne(e,t);return He(s,t)},getTrack(e){let{prefixCls:n,reverse:t,vertical:s,included:o,minimumTrackStyle:a,mergedTrackStyle:r,length:i,offset:l}=e;return V(Ve,{class:`${n}-track`,vertical:s,included:o,offset:l,reverse:t,length:i,style:f(f({},a),r)},null)},renderSlider(){const{prefixCls:e,vertical:n,included:t,disabled:s,minimumTrackStyle:o,trackStyle:a,handleStyle:r,tabindex:i,ariaLabelForHandle:l,ariaLabelledByForHandle:u,ariaValueTextFormatterForHandle:c,min:m,max:b,startPoint:$,reverse:y,handle:T,defaultHandle:h}=this,x=T||h,{sValue:d,dragging:C}=this,B=this.calcOffset(d),S=x({class:`${e}-handle`,prefixCls:e,vertical:n,offset:B,value:d,dragging:C,disabled:s,min:m,max:b,reverse:y,index:0,tabindex:i,ariaLabel:l,ariaLabelledBy:u,ariaValueTextFormatter:c,style:r[0]||r,ref:w=>this.saveHandle(0,w),onFocus:this.onFocus,onBlur:this.onBlur}),v=$!==void 0?this.calcOffset($):0,p=a[0]||a;return{tracks:this.getTrack({prefixCls:e,reverse:y,vertical:n,included:t,offset:v,minimumTrackStyle:o,mergedTrackStyle:p,length:B-v}),handles:S}}}}),mt=Fe(pt),K=e=>{let{value:n,handle:t,bounds:s,props:o}=e;const{allowCross:a,pushable:r}=o,i=Number(r),l=ne(n,o);let u=l;return!a&&t!=null&&s!==void 0&&(t>0&&l<=s[t-1]+i&&(u=s[t-1]+i),t<s.length-1&&l>=s[t+1]-i&&(u=s[t+1]-i)),He(u,o)},gt={defaultValue:g.arrayOf(g.number),value:g.arrayOf(g.number),count:Number,pushable:je(g.oneOfType([g.looseBool,g.number])),allowCross:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},reverse:{type:Boolean,default:void 0},tabindex:g.arrayOf(g.number),prefixCls:String,min:Number,max:Number,autofocus:{type:Boolean,default:void 0},ariaLabelGroupForHandles:Array,ariaLabelledByGroupForHandles:Array,ariaValueTextFormatterGroupForHandles:Array,draggableTrack:{type:Boolean,default:void 0}},vt=R({compatConfig:{MODE:3},name:"Range",mixins:[te],inheritAttrs:!1,props:Ce(gt,{count:1,allowCross:!0,pushable:!1,tabindex:[],draggableTrack:!1,ariaLabelGroupForHandles:[],ariaLabelledByGroupForHandles:[],ariaValueTextFormatterGroupForHandles:[]}),emits:["beforeChange","afterChange","change"],displayName:"Range",data(){const{count:e,min:n,max:t}=this,s=Array(...Array(e+1)).map(()=>n),o=Z(this,"defaultValue")?this.defaultValue:s;let{value:a}=this;a===void 0&&(a=o);const r=a.map((l,u)=>K({value:l,handle:u,props:this.$props}));return{sHandle:null,recent:r[0]===t?0:r.length-1,bounds:r}},watch:{value:{handler(e){const{bounds:n}=this;this.setChangeValue(e||n)},deep:!0},min(){const{value:e}=this;this.setChangeValue(e||this.bounds)},max(){const{value:e}=this;this.setChangeValue(e||this.bounds)}},methods:{setChangeValue(e){const{bounds:n}=this;let t=e.map((s,o)=>K({value:s,handle:o,bounds:n,props:this.$props}));if(n.length===t.length){if(t.every((s,o)=>s===n[o]))return null}else t=e.map((s,o)=>K({value:s,handle:o,props:this.$props}));if(this.setState({bounds:t}),e.some(s=>Me(s,this.$props))){const s=e.map(o=>ne(o,this.$props));this.$emit("change",s)}},onChange(e){if(!Z(this,"value"))this.setState(e);else{const o={};["sHandle","recent"].forEach(a=>{e[a]!==void 0&&(o[a]=e[a])}),Object.keys(o).length&&this.setState(o)}const s=f(f({},this.$data),e).bounds;this.$emit("change",s)},positionGetValue(e){const n=this.getValue(),t=this.calcValueByPos(e),s=this.getClosestBound(t),o=this.getBoundNeedMoving(t,s),a=n[o];if(t===a)return null;const r=[...n];return r[o]=t,r},onStart(e){const{bounds:n}=this;this.$emit("beforeChange",n);const t=this.calcValueByPos(e);this.startValue=t,this.startPosition=e;const s=this.getClosestBound(t);this.prevMovedHandleIndex=this.getBoundNeedMoving(t,s),this.setState({sHandle:this.prevMovedHandleIndex,recent:this.prevMovedHandleIndex});const o=n[this.prevMovedHandleIndex];if(t===o)return;const a=[...n];a[this.prevMovedHandleIndex]=t,this.onChange({bounds:a})},onEnd(e){const{sHandle:n}=this;this.removeDocumentEvents(),n||(this.dragTrack=!1),(n!==null||e)&&this.$emit("afterChange",this.bounds),this.setState({sHandle:null})},onMove(e,n,t,s){U(e);const{$data:o,$props:a}=this,r=a.max||100,i=a.min||0;if(t){let b=a.vertical?-n:n;b=a.reverse?-b:b;const $=r-Math.max(...s),y=i-Math.min(...s),T=Math.min(Math.max(b/(this.getSliderLength()/100),y),$),h=s.map(x=>Math.floor(Math.max(Math.min(x+T,r),i)));o.bounds.map((x,d)=>x===h[d]).some(x=>!x)&&this.onChange({bounds:h});return}const{bounds:l,sHandle:u}=this,c=this.calcValueByPos(n),m=l[u];c!==m&&this.moveTo(c)},onKeyboard(e){const{reverse:n,vertical:t}=this.$props,s=Oe(e,t,n);if(s){U(e);const{bounds:o,sHandle:a}=this,r=o[a===null?this.recent:a],i=s(r,this.$props),l=K({value:i,handle:a,bounds:o,props:this.$props});if(l===r)return;const u=!0;this.moveTo(l,u)}},getClosestBound(e){const{bounds:n}=this;let t=0;for(let s=1;s<n.length-1;s+=1)e>=n[s]&&(t=s);return Math.abs(n[t+1]-e)<Math.abs(n[t]-e)&&(t+=1),t},getBoundNeedMoving(e,n){const{bounds:t,recent:s}=this;let o=n;const a=t[n+1]===t[n];return a&&t[s]===t[n]&&(o=s),a&&e!==t[n+1]&&(o=e<t[n+1]?n:n+1),o},getLowerBound(){return this.bounds[0]},getUpperBound(){const{bounds:e}=this;return e[e.length-1]},getPoints(){const{marks:e,step:n,min:t,max:s}=this,o=this.internalPointsCache;if(!o||o.marks!==e||o.step!==n){const a=f({},e);if(n!==null)for(let i=t;i<=s;i+=n)a[i]=i;const r=Object.keys(a).map(parseFloat);r.sort((i,l)=>i-l),this.internalPointsCache={marks:e,step:n,points:r}}return this.internalPointsCache.points},moveTo(e,n){const t=[...this.bounds],{sHandle:s,recent:o}=this,a=s===null?o:s;t[a]=e;let r=a;this.$props.pushable!==!1?this.pushSurroundingHandles(t,r):this.$props.allowCross&&(t.sort((i,l)=>i-l),r=t.indexOf(e)),this.onChange({recent:r,sHandle:r,bounds:t}),n&&(this.$emit("afterChange",t),this.setState({},()=>{this.handlesRefs[r].focus()}),this.onEnd())},pushSurroundingHandles(e,n){const t=e[n],{pushable:s}=this,o=Number(s);let a=0;if(e[n+1]-t<o&&(a=1),t-e[n-1]<o&&(a=-1),a===0)return;const r=n+a,i=a*(e[r]-t);this.pushHandle(e,r,a,o-i)||(e[n]=e[r]-a*o)},pushHandle(e,n,t,s){const o=e[n];let a=e[n];for(;t*(a-o)<s;){if(!this.pushHandleOnePoint(e,n,t))return e[n]=o,!1;a=e[n]}return!0},pushHandleOnePoint(e,n,t){const s=this.getPoints(),a=s.indexOf(e[n])+t;if(a>=s.length||a<0)return!1;const r=n+t,i=s[a],{pushable:l}=this,u=Number(l),c=t*(e[r]-i);return this.pushHandle(e,r,t,u-c)?(e[n]=i,!0):!1},trimAlignValue(e){const{sHandle:n,bounds:t}=this;return K({value:e,handle:n,bounds:t,props:this.$props})},ensureValueNotConflict(e,n,t){let{allowCross:s,pushable:o}=t;const a=this.$data||{},{bounds:r}=a;if(e=e===void 0?a.sHandle:e,o=Number(o),!s&&e!=null&&r!==void 0){if(e>0&&n<=r[e-1]+o)return r[e-1]+o;if(e<r.length-1&&n>=r[e+1]-o)return r[e+1]-o}return n},getTrack(e){let{bounds:n,prefixCls:t,reverse:s,vertical:o,included:a,offsets:r,trackStyle:i}=e;return n.slice(0,-1).map((l,u)=>{const c=u+1,m=j({[`${t}-track`]:!0,[`${t}-track-${c}`]:!0});return V(Ve,{class:m,vertical:o,reverse:s,included:a,offset:r[c-1],length:r[c]-r[c-1],style:i[u],key:c},null)})},renderSlider(){const{sHandle:e,bounds:n,prefixCls:t,vertical:s,included:o,disabled:a,min:r,max:i,reverse:l,handle:u,defaultHandle:c,trackStyle:m,handleStyle:b,tabindex:$,ariaLabelGroupForHandles:y,ariaLabelledByGroupForHandles:T,ariaValueTextFormatterGroupForHandles:h}=this,x=u||c,d=n.map(S=>this.calcOffset(S)),C=`${t}-handle`,B=n.map((S,v)=>{let p=$[v]||0;(a||$[v]===null)&&(p=null);const w=e===v;return x({class:j({[C]:!0,[`${C}-${v+1}`]:!0,[`${C}-dragging`]:w}),prefixCls:t,vertical:s,dragging:w,offset:d[v],value:S,index:v,tabindex:p,min:r,max:i,reverse:l,disabled:a,style:b[v],ref:F=>this.saveHandle(v,F),onFocus:this.onFocus,onBlur:this.onBlur,ariaLabel:y[v],ariaLabelledBy:T[v],ariaValueTextFormatter:h[v]})});return{tracks:this.getTrack({bounds:n,prefixCls:t,reverse:l,vertical:s,included:o,offsets:d,trackStyle:m}),handles:B}}}}),bt=Fe(vt),yt=R({compatConfig:{MODE:3},name:"SliderTooltip",inheritAttrs:!1,props:Re(),setup(e,n){let{attrs:t,slots:s}=n;const o=A(null),a=A(null);function r(){re.cancel(a.value),a.value=null}function i(){a.value=re(()=>{var u;(u=o.value)===null||u===void 0||u.forcePopupAlign(),a.value=null})}const l=()=>{r(),e.open&&i()};return ze([()=>e.open,()=>e.title],()=>{l()},{flush:"post",immediate:!0}),Ae(()=>{l()}),ee(()=>{r()}),()=>V(We,P(P({ref:o},e),t),s)}}),xt=e=>{const{componentCls:n,controlSize:t,dotSize:s,marginFull:o,marginPart:a,colorFillContentHover:r}=e;return{[n]:f(f({},Xe(e)),{position:"relative",height:t,margin:`${a}px ${o}px`,padding:0,cursor:"pointer",touchAction:"none","&-vertical":{margin:`${o}px ${a}px`},[`${n}-rail`]:{position:"absolute",backgroundColor:e.colorFillTertiary,borderRadius:e.borderRadiusXS,transition:`background-color ${e.motionDurationMid}`},[`${n}-track`]:{position:"absolute",backgroundColor:e.colorPrimaryBorder,borderRadius:e.borderRadiusXS,transition:`background-color ${e.motionDurationMid}`},"&:hover":{[`${n}-rail`]:{backgroundColor:e.colorFillSecondary},[`${n}-track`]:{backgroundColor:e.colorPrimaryBorderHover},[`${n}-dot`]:{borderColor:r},[`${n}-handle::after`]:{boxShadow:`0 0 0 ${e.handleLineWidth}px ${e.colorPrimaryBorderHover}`},[`${n}-dot-active`]:{borderColor:e.colorPrimary}},[`${n}-handle`]:{position:"absolute",width:e.handleSize,height:e.handleSize,outline:"none",[`${n}-dragging`]:{zIndex:1},"&::before":{content:'""',position:"absolute",insetInlineStart:-e.handleLineWidth,insetBlockStart:-e.handleLineWidth,width:e.handleSize+e.handleLineWidth*2,height:e.handleSize+e.handleLineWidth*2,backgroundColor:"transparent"},"&::after":{content:'""',position:"absolute",insetBlockStart:0,insetInlineStart:0,width:e.handleSize,height:e.handleSize,backgroundColor:e.colorBgElevated,boxShadow:`0 0 0 ${e.handleLineWidth}px ${e.colorPrimaryBorder}`,borderRadius:"50%",cursor:"pointer",transition:`
            inset-inline-start ${e.motionDurationMid},
            inset-block-start ${e.motionDurationMid},
            width ${e.motionDurationMid},
            height ${e.motionDurationMid},
            box-shadow ${e.motionDurationMid}
          `},"&:hover, &:active, &:focus":{"&::before":{insetInlineStart:-((e.handleSizeHover-e.handleSize)/2+e.handleLineWidthHover),insetBlockStart:-((e.handleSizeHover-e.handleSize)/2+e.handleLineWidthHover),width:e.handleSizeHover+e.handleLineWidthHover*2,height:e.handleSizeHover+e.handleLineWidthHover*2},"&::after":{boxShadow:`0 0 0 ${e.handleLineWidthHover}px ${e.colorPrimary}`,width:e.handleSizeHover,height:e.handleSizeHover,insetInlineStart:(e.handleSize-e.handleSizeHover)/2,insetBlockStart:(e.handleSize-e.handleSizeHover)/2}}},[`${n}-mark`]:{position:"absolute",fontSize:e.fontSize},[`${n}-mark-text`]:{position:"absolute",display:"inline-block",color:e.colorTextDescription,textAlign:"center",wordBreak:"keep-all",cursor:"pointer",userSelect:"none","&-active":{color:e.colorText}},[`${n}-step`]:{position:"absolute",background:"transparent",pointerEvents:"none"},[`${n}-dot`]:{position:"absolute",width:s,height:s,backgroundColor:e.colorBgElevated,border:`${e.handleLineWidth}px solid ${e.colorBorderSecondary}`,borderRadius:"50%",cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,"&-active":{borderColor:e.colorPrimaryBorder}},[`&${n}-disabled`]:{cursor:"not-allowed",[`${n}-rail`]:{backgroundColor:`${e.colorFillSecondary} !important`},[`${n}-track`]:{backgroundColor:`${e.colorTextDisabled} !important`},[`
          ${n}-dot
        `]:{backgroundColor:e.colorBgElevated,borderColor:e.colorTextDisabled,boxShadow:"none",cursor:"not-allowed"},[`${n}-handle::after`]:{backgroundColor:e.colorBgElevated,cursor:"not-allowed",width:e.handleSize,height:e.handleSize,boxShadow:`0 0 0 ${e.handleLineWidth}px ${new Ke(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexString()}`,insetInlineStart:0,insetBlockStart:0},[`
          ${n}-mark-text,
          ${n}-dot
        `]:{cursor:"not-allowed !important"}}})}},ke=(e,n)=>{const{componentCls:t,railSize:s,handleSize:o,dotSize:a}=e,r=n?"paddingBlock":"paddingInline",i=n?"width":"height",l=n?"height":"width",u=n?"insetBlockStart":"insetInlineStart",c=n?"top":"insetInlineStart";return{[r]:s,[l]:s*3,[`${t}-rail`]:{[i]:"100%",[l]:s},[`${t}-track`]:{[l]:s},[`${t}-handle`]:{[u]:(s*3-o)/2},[`${t}-mark`]:{insetInlineStart:0,top:0,[c]:o,[i]:"100%"},[`${t}-step`]:{insetInlineStart:0,top:0,[c]:s,[i]:"100%",[l]:s},[`${t}-dot`]:{position:"absolute",[u]:(s-a)/2}}},St=e=>{const{componentCls:n,marginPartWithMark:t}=e;return{[`${n}-horizontal`]:f(f({},ke(e,!0)),{[`&${n}-with-marks`]:{marginBottom:t}})}},Ct=e=>{const{componentCls:n}=e;return{[`${n}-vertical`]:f(f({},ke(e,!1)),{height:"100%"})}},$t=Ue("Slider",e=>{const n=Ge(e,{marginPart:(e.controlHeight-e.controlSize)/2,marginFull:e.controlSize/2,marginPartWithMark:e.controlHeightLG-e.controlSize});return[xt(n),St(n),Ct(n)]},e=>{const t=e.controlHeightLG/4,s=e.controlHeightSM/2,o=e.lineWidth+1,a=e.lineWidth+1*3;return{controlSize:t,railSize:4,handleSize:t,handleSizeHover:s,dotSize:8,handleLineWidth:o,handleLineWidthHover:a}});var ye=globalThis&&globalThis.__rest||function(e,n){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)n.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(t[s[o]]=e[s[o]]);return t};const Vt=e=>typeof e=="number"?e.toString():"",Bt=()=>({id:String,prefixCls:String,tooltipPrefixCls:String,range:D([Boolean,Object]),reverse:I(),min:Number,max:Number,step:D([Object,Number]),marks:qe(),dots:I(),value:D([Array,Number]),defaultValue:D([Array,Number]),included:I(),disabled:I(),vertical:I(),tipFormatter:D([Function,Object],()=>Vt),tooltipOpen:I(),tooltipVisible:I(),tooltipPlacement:Qe(),getTooltipPopupContainer:z(),autofocus:I(),handleStyle:D([Array,Object]),trackStyle:D([Array,Object]),onChange:z(),onAfterChange:z(),onFocus:z(),onBlur:z(),"onUpdate:value":z()}),Tt=R({compatConfig:{MODE:3},name:"ASlider",inheritAttrs:!1,props:Bt(),slots:Object,setup(e,n){let{attrs:t,slots:s,emit:o,expose:a}=n;const{prefixCls:r,rootPrefixCls:i,direction:l,getPopupContainer:u,configProvider:c}=Je("slider",e),[m,b]=$t(r),$=lt(),y=A(),T=A({}),h=(p,w)=>{T.value[p]=w},x=Y(()=>e.tooltipPlacement?e.tooltipPlacement:e.vertical?l.value==="rtl"?"left":"right":"top"),d=()=>{var p;(p=y.value)===null||p===void 0||p.focus()},C=()=>{var p;(p=y.value)===null||p===void 0||p.blur()},B=p=>{o("update:value",p),o("change",p),$.onFieldChange()},S=p=>{o("blur",p)};a({focus:d,blur:C});const v=p=>{var{tooltipPrefixCls:w}=p,F=p.info,{value:M,dragging:L,index:H}=F,k=ye(F,["value","dragging","index"]);const{tipFormatter:_,tooltipOpen:G=e.tooltipVisible,getTooltipPopupContainer:q}=e,_e=_?T.value[H]||L:!1,Le=G||G===void 0&&_e;return V(yt,{prefixCls:w,title:_?_(M):"",open:Le,placement:x.value,transitionName:`${i.value}-zoom-down`,key:H,overlayClassName:`${r.value}-tooltip`,getPopupContainer:q||(u==null?void 0:u.value)},{default:()=>[V(we,P(P({},k),{},{value:M,onMouseenter:()=>h(H,!0),onMouseleave:()=>h(H,!1)}),null)]})};return()=>{const{tooltipPrefixCls:p,range:w,id:F=$.id.value}=e,M=ye(e,["tooltipPrefixCls","range","id"]),L=c.getPrefixCls("tooltip",p),H=j(t.class,{[`${r.value}-rtl`]:l.value==="rtl"},b.value);l.value==="rtl"&&!M.vertical&&(M.reverse=!M.reverse);let k;return typeof w=="object"&&(k=w.draggableTrack),m(w?V(bt,P(P(P({},t),M),{},{step:M.step,draggableTrack:k,class:H,ref:y,handle:_=>v({tooltipPrefixCls:L,prefixCls:r.value,info:_}),prefixCls:r.value,onChange:B,onBlur:S}),{mark:s.mark}):V(mt,P(P(P({},t),M),{},{id:F,step:M.step,class:H,ref:y,handle:_=>v({tooltipPrefixCls:L,prefixCls:r.value,info:_}),prefixCls:r.value,onChange:B,onBlur:S}),{mark:s.mark}))}}}),wt=Ye(Tt),J=e=>(nt("data-v-fcf3b072"),e=e(),st(),e),Mt={class:"olympic-container"},Pt={class:"slider-wrp"},Ht=J(()=>O("span",null,"单环大小",-1)),Ot={class:"olympic-rings"},Ft=J(()=>O("p",null,[W(" 1. 使用 "),O("span",{class:"hight"},"transform: preserve-3d; "),W(" ：表示所有子元素在3D空间中呈现 ")],-1)),kt=J(()=>O("p",null,[W("2. 利用"),O("span",{class:"hight"},"rotateX"),W("将子元素绕X轴旋转")],-1)),_t=J(()=>O("p",null,[W(" 3. 由于旋转轴如果在正中心，无法达到效果，需要使用 "),O("span",{class:"hight"},"transform-origin"),W(" 变化圆心 ")],-1)),Lt=R({__name:"index",setup(e){Ze(a=>({d0c35a28:t.value}));const n=A(100),t=Y(()=>`${n.value||0}px`),s=A(!1),o=()=>{s.value=!0};return(a,r)=>{const i=wt,l=it,u=rt;return ue(),ie(le,null,[O("div",Mt,[O("div",Pt,[Ht,V(i,{value:n.value,"onUpdate:value":r[0]||(r[0]=c=>n.value=c),min:100,max:200},null,8,["value"])]),O("div",Ot,[(ue(),ie(le,null,et(5,c=>O("div",{class:"ring",key:c})),64))]),V(l,{onClick:o,shape:"circle",style:{right:"50px"}})]),V(u,{open:s.value,"onUpdate:open":r[1]||(r[1]=c=>s.value=c),title:"实现分析",footer:null},{default:tt(()=>[Ft,kt,_t]),_:1},8,["open"])],64)}}});const Dt=ot(Lt,[["__scopeId","data-v-fcf3b072"]]);export{Dt as default};
