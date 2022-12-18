"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[715],{19210:function(e,t,n){n.d(t,{eW:function(){return v}});var r=n(1581),o=n(82169),a=n(2593),l=n(16441);let u=new r.Logger("CeloNetworks"),i=[{name:"celo",chainId:42220},{name:"alfajores",chainId:44787},{name:"baklava",chainId:62320}];var s=n(59052),c=n(38197),f=n(83875),d=n(19485),p=n(21046);let m=new r.Logger("celo/transactions");function h(e){if("0x"!==e)try{return d.getAddress(e)}catch(t){return e}}function g(e){return"0x"===e?p._Y:a.O$.from(e)}let y=new r.Logger("CeloProvider");class v extends o.r{constructor(e,t){super(e,t);let n=this.formatter.formats.block;n.gasLimit=()=>a.O$.from(0),n.nonce=()=>"",n.difficulty=()=>0;let r=this.formatter.formats.blockWithTransactions;r.gasLimit=()=>a.O$.from(0),r.nonce=()=>"",r.difficulty=()=>0}async sendTransaction(e){await this.getNetwork();let t=await Promise.resolve(e),n=l.hexlify(t),r=function(e){let t=s.decode(e);12!==t.length&&9!==t.length&&m.throwArgumentError("invalid raw transaction","rawTransaction",e);let n={nonce:g(t[0]).toNumber(),gasPrice:g(t[1]),gasLimit:g(t[2]),feeCurrency:h(t[3]),gatewayFeeRecipient:h(t[4]),gatewayFee:g(t[5]),to:h(t[6]),value:g(t[7]),data:t[8],chainId:0};if(9===t.length)return n;try{n.v=a.O$.from(t[9]).toNumber()}catch(r){return console.log(r),n}if(n.r=l.hexZeroPad(t[10],32),n.s=l.hexZeroPad(t[11],32),a.O$.from(n.r).isZero()&&a.O$.from(n.s).isZero())n.chainId=n.v,n.v=0;else{n.chainId=Math.floor((n.v-35)/2),n.chainId<0&&(n.chainId=0);let o=n.v-27,u=t.slice(0,6);0!==n.chainId&&(u.push(l.hexlify(n.chainId)),u.push("0x"),u.push("0x"),o-=2*n.chainId+8);let i=c.keccak256(s.encode(u));try{n.from=f.recoverAddress(i,{r:l.hexlify(n.r),s:l.hexlify(n.s),recoveryParam:o})}catch(d){console.log(d)}n.hash=c.keccak256(e)}return n}(t);try{let o=await this.perform("sendTransaction",{signedTransaction:n});return this._wrapTransaction(r,o)}catch(u){throw u.transaction=r,u.transactionHash=r.hash,u}}async getGasPrice(e){return await this.getNetwork(),a.O$.from(await this.perform("getGasPrice",e?{feeCurrencyAddress:e}:{}))}prepareRequest(e,t){if("getGasPrice"===e){let n=t.feeCurrencyAddress?[t.feeCurrencyAddress]:[];return["eth_gasPrice",n]}return super.prepareRequest(e,t)}static getNetwork(e){let t=function e(t){if(null==t)return null;if("number"==typeof t){let n=i.filter(e=>e.chainId===t);return n.length?{name:n[0].name,chainId:n[0].chainId}:{name:"unknown",chainId:t}}if("string"==typeof t){let r=i.filter(e=>e.name===t);return r.length?{name:r[0].name,chainId:r[0].chainId}:null}if("string"==typeof t.name&&"number"==typeof t.chainId){let o=e(t.name),a=e(t.chainId);if(null==o&&null==a)return{name:t.name,chainId:t.chainId};if(o&&a&&o.name===a.name&&o.chainId===a.chainId)return o}return u.throwArgumentError("network chainId mismatch","network",t)}(null==e?"celo":e);return null==t?y.throwError(`unknown network: ${JSON.stringify(t)}`,r.Logger.errors.UNSUPPORTED_OPERATION,{operation:"getNetwork",value:e}):t}}new r.Logger("CeloWallet"),r.Logger.errors.INSUFFICIENT_FUNDS,r.Logger.errors.NONCE_EXPIRED,r.Logger.errors.REPLACEMENT_UNDERPRICED},89855:function(e,t,n){n.d(t,{p:function(){return R}});var r,o,a=n(67294),l=n(32984),u=n(12351),i=n(23784),s=n(19946),c=n(61363),f=n(64103),d=n(16567),p=n(16723);function m(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var h=n(15466),g=n(73781),y=((r=y||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),v=((o=v||{})[o.ToggleDisclosure=0]="ToggleDisclosure",o[o.CloseDisclosure=1]="CloseDisclosure",o[o.SetButtonId=2]="SetButtonId",o[o.SetPanelId=3]="SetPanelId",o[o.LinkPanel=4]="LinkPanel",o[o.UnlinkPanel=5]="UnlinkPanel",o);let E={0:e=>({...e,disclosureState:(0,l.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},w=(0,a.createContext)(null);function b(e){let t=(0,a.useContext)(w);if(null===t){let n=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,b),n}return t}w.displayName="DisclosureContext";let k=(0,a.createContext)(null);k.displayName="DisclosureAPIContext";let P=(0,a.createContext)(null);function I(e,t){return(0,l.E)(t.type,E,e,t)}P.displayName="DisclosurePanelContext";let C=a.Fragment,S=(0,u.yV)(function(e,t){let{defaultOpen:n=!1,...r}=e,o=`headlessui-disclosure-button-${(0,s.M)()}`,c=`headlessui-disclosure-panel-${(0,s.M)()}`,f=(0,a.useRef)(null),p=(0,i.T)(t,(0,i.h)(e=>{f.current=e},void 0===e.as||e.as===a.Fragment)),m=(0,a.useRef)(null),y=(0,a.useRef)(null),v=(0,a.useReducer)(I,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:y,panelRef:m,buttonId:o,panelId:c}),[{disclosureState:E},b]=v;(0,a.useEffect)(()=>b({type:2,buttonId:o}),[o,b]),(0,a.useEffect)(()=>b({type:3,panelId:c}),[c,b]);let P=(0,g.z)(e=>{b({type:1});let t=(0,h.r)(f);if(!t)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(o):t.getElementById(o);null==n||n.focus()}),S=(0,a.useMemo)(()=>({close:P}),[P]),O=(0,a.useMemo)(()=>({open:0===E,close:P}),[E,P]);return a.createElement(w.Provider,{value:v},a.createElement(k.Provider,{value:S},a.createElement(d.up,{value:(0,l.E)(E,{0:d.ZM.Open,1:d.ZM.Closed})},(0,u.sY)({ourProps:{ref:p},theirProps:r,slot:O,defaultTag:C,name:"Disclosure"}))))}),O=(0,u.yV)(function(e,t){let[n,r]=b("Disclosure.Button"),o=(0,a.useContext)(P),l=null!==o&&o===n.panelId,s=(0,a.useRef)(null),d=(0,i.T)(s,t,l?null:n.buttonRef),h=(0,g.z)(e=>{var t;if(l){if(1===n.disclosureState)return;switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0}),null==(t=n.buttonRef.current)||t.focus()}}else switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0})}}),y=(0,g.z)(e=>{e.key===c.R.Space&&e.preventDefault()}),v=(0,g.z)(t=>{var o;(0,f.P)(t.currentTarget)||e.disabled||(l?(r({type:0}),null==(o=n.buttonRef.current)||o.focus()):r({type:0}))}),E=(0,a.useMemo)(()=>({open:0===n.disclosureState}),[n]),w=function(e,t){let[n,r]=(0,a.useState)(()=>m(e));return(0,p.e)(()=>{r(m(e))},[e.type,e.as]),(0,p.e)(()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,s),k=l?{ref:d,type:w,onKeyDown:h,onClick:v}:{ref:d,id:n.buttonId,type:w,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:h,onKeyUp:y,onClick:v};return(0,u.sY)({ourProps:k,theirProps:e,slot:E,defaultTag:"button",name:"Disclosure.Button"})}),N=u.AN.RenderStrategy|u.AN.Static,R=Object.assign(S,{Button:O,Panel:(0,u.yV)(function(e,t){let[n,r]=b("Disclosure.Panel"),{close:o}=function e(t){let n=(0,a.useContext)(k);if(null===n){let r=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return n}("Disclosure.Panel"),l=(0,i.T)(t,n.panelRef,e=>{r({type:e?4:5})}),s=(0,d.oJ)(),c=null!==s?s===d.ZM.Open:0===n.disclosureState,f=(0,a.useMemo)(()=>({open:0===n.disclosureState,close:o}),[n,o]),p={ref:l,id:n.panelId};return a.createElement(P.Provider,{value:n.panelId},(0,u.sY)({ourProps:p,theirProps:e,slot:f,defaultTag:"div",features:N,visible:c,name:"Disclosure.Panel"}))})})},61363:function(e,t,n){n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},73781:function(e,t,n){n.d(t,{z:function(){return a}});var r=n(67294),o=n(3855);let a=function(e){let t=(0,o.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},19946:function(e,t,n){n.d(t,{M:function(){return s}});var r,o=n(67294),a=n(16723),l=n(82180);let u=0;function i(){return++u}let s=null!=(r=o.useId)?r:function(){let e=(0,l.H)(),[t,n]=o.useState(e?i:null);return(0,a.e)(()=>{null===t&&n(i())},[t]),null!=t?""+t:void 0}},16723:function(e,t,n){n.d(t,{e:function(){return o}});var r=n(67294);let o=n(43393).s?r.useEffect:r.useLayoutEffect},3855:function(e,t,n){n.d(t,{E:function(){return a}});var r=n(67294),o=n(16723);function a(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},82180:function(e,t,n){n.d(t,{H:function(){return a}});var r=n(67294);let o={serverHandoffComplete:!1};function a(){let[e,t]=(0,r.useState)(o.serverHandoffComplete);return(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>{!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)},[]),e}},23784:function(e,t,n){n.d(t,{T:function(){return u},h:function(){return l}});var r=n(67294),o=n(73781);let a=Symbol();function l(e,t=!0){return Object.assign(e,{[a]:t})}function u(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[a]))?void 0:n}},16567:function(e,t,n){n.d(t,{ZM:function(){return l},oJ:function(){return u},up:function(){return i}});var r,o=n(67294);let a=(0,o.createContext)(null);a.displayName="OpenClosedContext";var l=((r=l||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r);function u(){return(0,o.useContext)(a)}function i({value:e,children:t}){return o.createElement(a.Provider,{value:e},t)}},64103:function(e,t,n){function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},32984:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t,...n){if(e in t){let o=t[e];return"function"==typeof o?o(...n):o}let a=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,r),a}},15466:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(43393);function o(e){return r.s?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},12351:function(e,t,n){n.d(t,{AN:function(){return u},l4:function(){return i},sY:function(){return s},yV:function(){return d}});var r,o,a=n(67294),l=n(32984),u=((r=u||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),i=((o=i||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function s({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:a=!0,name:u}){let i=f(t,e);if(a)return c(i,n,r,u);let s=null!=o?o:0;if(2&s){let{static:d=!1,...p}=i;if(d)return c(p,n,r,u)}if(1&s){let{unmount:m=!0,...h}=i;return(0,l.E)(m?0:1,{0:()=>null,1:()=>c({...h,hidden:!0,style:{display:"none"}},n,r,u)})}return c(i,n,r,u)}function c(e,t={},n,r){let{as:o=n,children:l,refName:u="ref",...i}=m(e,["unmount","static"]),s=void 0!==e.ref?{[u]:e.ref}:{},c="function"==typeof l?l(t):l;i.className&&"function"==typeof i.className&&(i.className=i.className(t));let d={};if(t){let h=!1,g=[];for(let[y,v]of Object.entries(t))"boolean"==typeof v&&(h=!0),!0===v&&g.push(y);h&&(d["data-headlessui-state"]=g.join(" "))}if(o===a.Fragment&&Object.keys(p(i)).length>0){if(!(0,a.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));return(0,a.cloneElement)(c,Object.assign({},f(c.props,p(m(i,["ref"]))),d,s,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,s.ref)))}return(0,a.createElement)(o,Object.assign({},m(i,["ref"]),o!==a.Fragment&&s,o!==a.Fragment&&d),c)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&"function"==typeof r[o]?(null!=n[o]||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let a in n)Object.assign(t,{[a](e,...t){let r=n[a];for(let o of r){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;o(e,...t)}}});return t}function d(e){var t;return Object.assign((0,a.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function m(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}},43393:function(e,t,n){n.d(t,{s:function(){return r}});let r="undefined"==typeof window||"undefined"==typeof document},43407:function(e,t,n){var r=n(67294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});t.Z=o},31415:function(e,t,n){var r=n(67294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});t.Z=o}}]);