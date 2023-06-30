import{T as c,i as f,q as w,m as d,k as e,u as o,Z as _,p as t,s as V,t as g,v as k}from"./app-e590cbb8.js";import{_ as v}from"./GuestLayout-c7cd356e.js";import{_ as l}from"./InputError-9de8655d.js";import{_ as i,a as m}from"./TextInput-5a4ebe03.js";import{_ as b}from"./PrimaryButton-22216f5a.js";import"./_plugin-vue_export-helper-ef607624.js";import"./Footer-8edf49ad.js";const x=["onSubmit"],y={class:"mt-4"},P={class:"mt-4"},$={class:"flex items-center justify-end mt-4"},T={__name:"ResetPassword",props:{email:String,token:String},setup(p){const n=p,s=c({token:n.token,email:n.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(q,a)=>(f(),w(v,null,{default:d(()=>[e(o(_),{title:"Reset Password"}),t("form",{onSubmit:k(u,["prevent"])},[t("div",null,[e(i,{for:"email",value:"Email"}),e(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>o(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),t("div",y,[e(i,{for:"password",value:"Password"}),e(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>o(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),t("div",P,[e(i,{for:"password_confirmation",value:"Confirm Password"}),e(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>o(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),t("div",$,[e(b,{class:g({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:d(()=>[V(" Reset Password ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{T as default};
