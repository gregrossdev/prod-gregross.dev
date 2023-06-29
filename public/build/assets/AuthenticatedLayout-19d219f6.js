import{o as N,_ as D}from"./_plugin-vue_export-helper-35031b9b.js";import{o as E,G as B,z as v,r as m,i as c,j as h,p as e,E as p,A as $,H as C,k as r,m as a,t as g,I as M,q as x,u as y,C as w,f as O,s as d,x as _,y as R}from"./app-920d65cd.js";import{F}from"./Footer-dab36cad.js";const S={class:"relative"},V={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-primary"]}},setup(n){const t=n,l=f=>{s.value&&f.key==="Escape"&&(s.value=!1)};E(()=>document.addEventListener("keydown",l)),B(()=>document.removeEventListener("keydown",l));const u=v(()=>({48:"w-48"})[t.width.toString()]),o=v(()=>t.align==="left"?"origin-top-left left-0":t.align==="right"?"origin-top-right right-0":"origin-top"),s=m(!1);return(f,i)=>(c(),h("div",S,[e("div",{onClick:i[0]||(i[0]=k=>s.value=!s.value)},[p(f.$slots,"trigger")]),$(e("div",{class:"fixed inset-0 z-40",onClick:i[1]||(i[1]=k=>s.value=!1)},null,512),[[C,s.value]]),r(M,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[$(e("div",{class:g(["absolute z-50 mt-2 rounded-md shadow-lg",[u.value,o.value]]),style:{display:"none"},onClick:i[2]||(i[2]=k=>s.value=!1)},[e("div",{class:g(["rounded-md ring-1 ring-black ring-opacity-5",n.contentClasses])},[p(f.$slots,"content")],2)],2),[[C,s.value]])]),_:3})]))}},L={__name:"DropdownLink",setup(n){return(t,l)=>(c(),x(y(w),{class:"block w-full px-4 py-2 text-left leading-5 focus:outline-none transition duration-150 ease-in-out"},{default:a(()=>[p(t.$slots,"default")]),_:3}))}},z={__name:"NavLink",props:["href","active"],setup(n){const t=n,l=v(()=>t.active?'class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary border-b-2 border-indigo-400"':'class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"');return(u,o)=>(c(),x(y(w),{href:n.href,class:g(l.value)},{default:a(()=>[p(u.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:["href","active"],setup(n){const t=n,l=v(()=>t.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(u,o)=>(c(),x(y(w),{href:n.href,class:g(l.value)},{default:a(()=>[p(u.$slots,"default")]),_:3},8,["href","class"]))}},A={class:"rounded bg-[#EDF2F3] text-white py-6"},I={class:"container lg:mx-auto"},P={class:"flex"},H=e("figure",{class:"mr-2"},[e("img",{alt:"logo",src:D})],-1),T={"aria-controls":"navbar-default","aria-expanded":"false",class:"flex items-center lg:hidden","data-collapse-toggle":"navbar-default",type:"button"},j=e("i",{class:"bx mr-8 cursor-pointer text-3xl text-primary dark:text-white"},null,-1),q=e("g",{"fill-rule":"evenodd"},[e("rect",{height:"3",rx:"1.5",width:"24"}),e("rect",{height:"3",rx:"1.5",width:"16",x:"8",y:"6"}),e("rect",{height:"3",rx:"1.5",width:"20",x:"4",y:"12"})],-1),G=[q],U={class:"hidden w-full md:block md:w-auto"},J={class:"flex pt-2"},K={class:"ml-auto"},Q={class:"hidden sm:flex sm:items-center sm:ml-6"},W={class:"ml-3 relative"},X={class:"inline-flex rounded-md"},Y={type:"button",class:"inline-flex text-black items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md focus:outline-none transition ease-in-out duration-150"},Z=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ee={class:"ml-auto w-2/3 bg-green p-4 md:w-1/3"},te={class:"px-4"},se={class:"font-medium text-base text-gray-800"},oe={class:"font-medium text-sm text-gray-500"},ae={class:"mt-3 space-y-1"},re={__name:"AuthHeader",setup(n){const t=m(!1),l=m(null),u=m(null);return N(l,()=>{t.value=!1},{ignore:[u]}),m(!1),(o,s)=>{const f=O("Link");return c(),h("header",null,[e("nav",A,[e("div",I,[e("div",P,[r(f,{class:"flex items-center",href:"/",onClick:s[0]||(s[0]=i=>t.value=!1)},{default:a(()=>[H]),_:1}),e("button",T,[j,(c(),h("svg",{ref_key:"mobileNavIconRef",ref:u,"aria-label":"menu",class:"fill-current text-primary dark:text-white",height:"15",width:"24",xmlns:"http://www.w3.org/2000/svg",onClick:s[1]||(s[1]=i=>t.value=!0)},G,512))])]),e("div",U,[e("ul",J,[e("li",null,[r(z,{href:o.route("dashboard"),active:o.route().current("dashboard")},{default:a(()=>[d(" Dashboard ")]),_:1},8,["href","active"])]),e("li",null,[r(z,{href:o.route("create.post"),active:o.route().current("create.post")},{default:a(()=>[d(" Create Post ")]),_:1},8,["href","active"])]),e("li",K,[e("div",Q,[e("div",W,[r(V,{align:"right",width:"48"},{trigger:a(()=>[e("span",X,[e("button",Y,[d(_(o.$page.props.auth.user.name)+" ",1),Z])])]),content:a(()=>[r(L,{href:o.route("profile.edit")},{default:a(()=>[d(" Profile ")]),_:1},8,["href"]),r(L,{href:o.route("logout"),method:"post",as:"button"},{default:a(()=>[d(" Log Out ")]),_:1},8,["href"])]),_:1})])])])])])])]),e("nav",{class:g([t.value?"opacity-100 pointer-events-auto":"","pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden"])},[e("div",ee,[e("i",{class:"bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white",onClick:s[2]||(s[2]=i=>t.value=!1)}),e("ul",{ref_key:"mobileMenuRef",ref:l,class:"mt-8 flex flex-col"},[e("li",null,[r(f,{class:"mb-3 block px-2 font-body text-lg font-medium text-white",href:"/blog",onClick:s[3]||(s[3]=i=>t.value=!1)},{default:a(()=>[d("Blog ")]),_:1})]),e("li",null,[r(b,{href:o.route("dashboard"),active:o.route().current("dashboard"),onClick:s[4]||(s[4]=i=>t.value=!1)},{default:a(()=>[d(" Dashboard ")]),_:1},8,["href","active"])]),e("li",null,[e("div",te,[e("div",se,_(o.$page.props.auth.user.name),1),e("div",oe,_(o.$page.props.auth.user.email),1)]),e("div",ae,[r(b,{href:o.route("profile.edit")},{default:a(()=>[d(" Profile ")]),_:1},8,["href"]),r(b,{href:o.route("logout"),method:"post",as:"button"},{default:a(()=>[d(" Log Out ")]),_:1},8,["href"])])])],512)])],2)])}}},ne={class:"layout-wrapper"},le={key:0,class:"bg-white shadow"},ie={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},de={class:"md:container p-4 mx-auto bg-grey-lightest"},pe={__name:"AuthenticatedLayout",setup(n){return(t,l)=>(c(),h("div",ne,[r(re),t.$slots.header?(c(),h("header",le,[e("div",ie,[p(t.$slots,"header")])])):R("",!0),e("main",de,[p(t.$slots,"default")]),r(F)]))}};export{pe as _};
