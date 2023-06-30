import{o as C,_ as L}from"./_plugin-vue_export-helper-ef607624.js";import{_ as x,a as N}from"./DropdownLink-de54daaf.js";import{z as y,i as u,q as w,m as s,E as h,t as _,u as k,C as $,r as f,f as z,j as m,p as e,k as r,s as l,x as p,y as B}from"./app-e590cbb8.js";import{F as M}from"./Footer-8edf49ad.js";const b={__name:"NavLink",props:["href","active"],setup(n){const t=n,i=y(()=>t.active?'class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary border-b-2 border-indigo-400"':'class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"');return(d,o)=>(u(),w(k($),{href:n.href,class:_(i.value)},{default:s(()=>[h(d.$slots,"default")]),_:3},8,["href","class"]))}},g={__name:"ResponsiveNavLink",props:["href","active"],setup(n){const t=n,i=y(()=>t.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(d,o)=>(u(),w(k($),{href:n.href,class:_(i.value)},{default:s(()=>[h(d.$slots,"default")]),_:3},8,["href","class"]))}},R={class:"rounded bg-[#EDF2F3] text-white py-6"},D={class:"container lg:mx-auto"},F={class:"flex"},O=e("figure",{class:"mr-2"},[e("img",{alt:"logo",src:L})],-1),V={"aria-controls":"navbar-default","aria-expanded":"false",class:"flex items-center lg:hidden","data-collapse-toggle":"navbar-default",type:"button"},E=e("i",{class:"bx mr-8 cursor-pointer text-3xl text-primary dark:text-white"},null,-1),P=e("g",{"fill-rule":"evenodd"},[e("rect",{height:"3",rx:"1.5",width:"24"}),e("rect",{height:"3",rx:"1.5",width:"16",x:"8",y:"6"}),e("rect",{height:"3",rx:"1.5",width:"20",x:"4",y:"12"})],-1),A=[P],I={class:"hidden w-full md:block md:w-auto"},S={class:"flex pt-2"},j={class:"ml-auto"},q={class:"hidden sm:flex sm:items-center sm:ml-6"},H={class:"ml-3 relative"},T={class:"inline-flex rounded-md"},G={type:"button",class:"inline-flex text-black items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md focus:outline-none transition ease-in-out duration-150"},J=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),K={class:"ml-auto w-2/3 bg-green p-4 md:w-1/3"},Q={class:"px-4"},U={class:"font-medium text-base text-gray-800"},W={class:"font-medium text-sm text-gray-500"},X={class:"mt-3 space-y-1"},Y={__name:"AuthHeader",setup(n){const t=f(!1),i=f(null),d=f(null);return C(i,()=>{t.value=!1},{ignore:[d]}),f(!1),(o,a)=>{const v=z("Link");return u(),m("header",null,[e("nav",R,[e("div",D,[e("div",F,[r(v,{class:"flex items-center",href:"/",onClick:a[0]||(a[0]=c=>t.value=!1)},{default:s(()=>[O]),_:1}),e("button",V,[E,(u(),m("svg",{ref_key:"mobileNavIconRef",ref:d,"aria-label":"menu",class:"fill-current text-primary dark:text-white",height:"15",width:"24",xmlns:"http://www.w3.org/2000/svg",onClick:a[1]||(a[1]=c=>t.value=!0)},A,512))])]),e("div",I,[e("ul",S,[e("li",null,[r(b,{href:o.route("dashboard"),active:o.route().current("dashboard")},{default:s(()=>[l(" Dashboard ")]),_:1},8,["href","active"])]),e("li",null,[r(b,{href:o.route("create.post"),active:o.route().current("create.post")},{default:s(()=>[l(" Create Post ")]),_:1},8,["href","active"])]),e("li",j,[e("div",q,[e("div",H,[r(N,{align:"right",width:"48"},{trigger:s(()=>[e("span",T,[e("button",G,[l(p(o.$page.props.auth.user.name)+" ",1),J])])]),content:s(()=>[r(x,{href:o.route("profile.edit")},{default:s(()=>[l(" Profile ")]),_:1},8,["href"]),r(x,{href:o.route("logout"),method:"post",as:"button"},{default:s(()=>[l(" Log Out ")]),_:1},8,["href"])]),_:1})])])])])])])]),e("nav",{class:_([t.value?"opacity-100 pointer-events-auto":"","pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden"])},[e("div",K,[e("i",{class:"bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white",onClick:a[2]||(a[2]=c=>t.value=!1)}),e("ul",{ref_key:"mobileMenuRef",ref:i,class:"mt-8 flex flex-col"},[e("li",null,[r(v,{class:"mb-3 block px-2 font-body text-lg font-medium text-white",href:"/blog",onClick:a[3]||(a[3]=c=>t.value=!1)},{default:s(()=>[l("Blog ")]),_:1})]),e("li",null,[r(g,{href:o.route("dashboard"),active:o.route().current("dashboard"),onClick:a[4]||(a[4]=c=>t.value=!1)},{default:s(()=>[l(" Dashboard ")]),_:1},8,["href","active"])]),e("li",null,[e("div",Q,[e("div",U,p(o.$page.props.auth.user.name),1),e("div",W,p(o.$page.props.auth.user.email),1)]),e("div",X,[r(g,{href:o.route("profile.edit")},{default:s(()=>[l(" Profile ")]),_:1},8,["href"]),r(g,{href:o.route("logout"),method:"post",as:"button"},{default:s(()=>[l(" Log Out ")]),_:1},8,["href"])])])],512)])],2)])}}},Z={class:"layout-wrapper"},ee={key:0,class:"bg-white shadow"},te={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},oe={class:"md:container p-4 mx-auto bg-grey-lightest"},ne={__name:"AuthenticatedLayout",setup(n){return(t,i)=>(u(),m("div",Z,[r(Y),t.$slots.header?(u(),m("header",ee,[e("div",te,[h(t.$slots,"header")])])):B("",!0),e("main",oe,[h(t.$slots,"default")]),r(M)]))}};export{ne as _};