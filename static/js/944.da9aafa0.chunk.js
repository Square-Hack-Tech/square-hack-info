"use strict";(self.webpackChunksquare_hack=self.webpackChunksquare_hack||[]).push([[944],{4944:(e,n,s)=>{s.r(n),s.d(n,{default:()=>_});var t=s(2444),a=s(4647),r=s(9281),i=s(5043),l=s(80),d=s(854),o=s.n(d);const c=e=>{const[n,s]=(0,i.useState)({}),[t,a]=(0,i.useState)({}),[r,d]=(0,i.useState)(!1),[c,h]=(0,i.useState)(!1);(0,i.useEffect)((()=>{0===Object.keys(t).length&&r&&(s({}),l.Ay.success({message:"Success",description:"Your message has been sent!"}),d(!1),h(!1))}),[t,r]);return{handleChange:e=>{e.persist(),s((n=>({...n,[e.target.name]:e.target.value}))),a((n=>({...n,[e.target.name]:""})))},handleSubmit:s=>{s.preventDefault(),a(e(n));3===Object.keys(n).length&&(h(!0),o().post("https://contact-us-server-ypg1.onrender.com/send-email",{...n}).then((()=>{d(!0)})))},values:n,errors:t,isLoading:c}};function h(e){let n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var m,x,u,p=s(5639),g=s(7528),j=s(2119);const v=(0,j.Ay)("p")(m||(m=(0,g.A)(["\n  margin-top: 0rem;\n"]))),A=(0,j.Ay)("div")(x||(x=(0,g.A)(["\n  position: relative;\n  max-width: 700px;\n"]))),y=(0,j.Ay)("div")(u||(u=(0,g.A)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"])));var b=s(579);const f=(0,r.C)()((e=>{let{title:n,content:s,t:t}=e;return(0,b.jsxs)(A,{children:[(0,b.jsx)("h6",{children:t(n)}),(0,b.jsx)(y,{children:(0,b.jsx)(v,{children:t(s)})})]})}));var C,S;const k=(0,j.Ay)("div")(C||(C=(0,g.A)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),w=(0,j.Ay)("input")(S||(S=(0,g.A)(["\n  font-size: 0.875rem;\n"])));var q,E,z;const Y=(0,j.Ay)("div")(q||(q=(0,g.A)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),I=(0,j.Ay)("textarea")(E||(E=(0,g.A)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"]))),L=(0,j.Ay)("label")(z||(z=(0,g.A)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),P=(0,r.C)()((e=>{let{name:n,value:s,placeholder:t,onChange:a,t:r}=e;return(0,b.jsxs)(k,{children:[(0,b.jsx)(L,{htmlFor:n,children:r(n)}),(0,b.jsx)(w,{placeholder:r(t),value:s,name:n,id:n,onChange:a})]})})),W=(0,r.C)()((e=>{let{name:n,value:s,placeholder:t,onChange:a,t:r}=e;return(0,b.jsxs)(Y,{children:[(0,b.jsx)(L,{htmlFor:n,children:r(n)}),(0,b.jsx)(I,{placeholder:r(t),id:n,value:s,name:n,onChange:a})]})}));var F=s(4850),M=s(1362),N=s(6491),O=s(1637);const _=(0,r.C)()((e=>{let{title:n,content:s,id:r,t:l}=e;const{values:d,errors:o,handleChange:m,handleSubmit:x,isLoading:u}=c(h),[g,j]=(0,i.useState)("Please Wait .."),v=".....",A=e=>{let{type:n}=e;const s=o[n];return(0,b.jsx)(M.GP,{direction:"left",children:(0,b.jsx)(F.L9,{erros:o[n],children:s})})};return(0,i.useEffect)((()=>{if(u){let e=0;const n=setInterval((()=>{j((n=>n+v[e])),e+=1,5===e&&(j("Please Wait .."),e=0)}),200);return()=>clearInterval(n)}}),[u]),(0,b.jsxs)(F.YC,{id:r,children:[(0,b.jsxs)(t.A,{justify:"space-between",align:"middle",children:[(0,b.jsx)(a.A,{lg:12,md:12,sm:24,xs:24,children:(0,b.jsx)(M.q7,{direction:"left",children:(0,b.jsx)(f,{title:n,content:s})})}),(0,b.jsx)(a.A,{lg:12,md:12,sm:24,xs:24,children:(0,b.jsx)(M.q7,{direction:"right",children:(0,b.jsxs)(F.gE,{autoComplete:"off",onSubmit:x,children:[(0,b.jsxs)(a.A,{span:24,children:[(0,b.jsx)(P,{type:"text",name:"name",placeholder:"Your Name",value:d.name||"",onChange:m}),(0,b.jsx)(A,{type:"name"})]}),(0,b.jsxs)(a.A,{span:24,children:[(0,b.jsx)(P,{type:"text",name:"email",placeholder:"Your Email",value:(null===d||void 0===d?void 0:d.email)||"",onChange:m}),(0,b.jsx)(A,{type:"email"})]}),(0,b.jsxs)(a.A,{span:24,children:[(0,b.jsx)(W,{placeholder:"Your Message",value:d.message||"",name:"message",onChange:m}),(0,b.jsx)(A,{type:"message"})]}),(0,b.jsx)(F.Ef,{children:(0,b.jsx)(p.$,{name:"submit",children:l("Submit")})})]})})})]}),(0,b.jsx)(N.A,{sx:e=>({color:"rgb(255, 130, 92)",zIndex:e.zIndex.drawer+1}),open:u,children:(0,b.jsxs)("div",{style:{textAlign:"center"},children:[(0,b.jsx)(O.A,{color:"inherit"}),(0,b.jsx)("p",{style:{fontWeight:"bolder",color:"rgb(255, 130, 92)"},children:g})]})})]})}))}}]);
//# sourceMappingURL=944.da9aafa0.chunk.js.map