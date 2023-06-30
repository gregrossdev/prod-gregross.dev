import{z as w,A as b,B as x,i as m,j as h,T as v,q as u,m as d,k as o,u as s,Z as y,x as V,y as c,p as r,C as B,s as p,t as C,v as $}from"./app-e590cbb8.js";import{_ as q}from"./GuestLayout-c7cd356e.js";import{_ as f}from"./InputError-9de8655d.js";import{_,a as g}from"./TextInput-5a4ebe03.js";import{_ as N}from"./PrimaryButton-22216f5a.js";import"./_plugin-vue_export-helper-ef607624.js";import"./Footer-8edf49ad.js";const S=["value"],U={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const i=l,n=w({get(){return i.checked},set(t){e("update:checked",t)}});return(t,a)=>b((m(),h("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":a[0]||(a[0]=k=>n.value=k),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,S)),[[x,n.value]])}},L={key:0,class:"mb-4 font-medium text-sm text-green-600"},P=["onSubmit"],R={class:"mt-4"},j={class:"block mt-4"},z={class:"flex items-center"},A=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),D={class:"flex items-center justify-end mt-4"},I={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=v({email:"",password:"",remember:!1}),i=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,t)=>(m(),u(q,null,{default:d(()=>[o(s(y),{title:"Log in"}),l.status?(m(),h("div",L,V(l.status),1)):c("",!0),r("form",{onSubmit:$(i,["prevent"])},[r("div",null,[o(_,{for:"email",value:"Email"}),o(g,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=a=>s(e).email=a),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(f,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",R,[o(_,{for:"password",value:"Password"}),o(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=a=>s(e).password=a),required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(f,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",j,[r("label",z,[o(U,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=a=>s(e).remember=a)},null,8,["checked"]),A])]),r("div",D,[l.canResetPassword?(m(),u(s(B),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>[p(" Forgot your password? ")]),_:1},8,["href"])):c("",!0),o(N,{class:C(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[p(" Log in ")]),_:1},8,["class","disabled"])])],40,P)]),_:1}))}};export{I as default};
