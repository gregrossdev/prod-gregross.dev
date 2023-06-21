import{u as m,r as x,a as b,o as d,c as l,b as e,w as _,d as n,v as i,e as a,t as p,f as c,g as v,h as f,i as h}from"./app-1ddd912d.js";const w={class:"bg-[#F4F7FF] py-20 lg:py-[120px]"},y={class:"container mx-auto"},F={class:"-mx-4 flex flex-wrap"},g={class:"w-full px-4"},E={class:"relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"},C=e("div",{class:"mb-10 text-center md:mb-16"},"Laraveller",-1),B={class:"mb-6"},D={key:0,class:"flex"},V={class:"text-red-400 text-sm m-2 p-2"},k={class:"mb-6"},A={key:0,class:"flex"},N={class:"text-red-400 text-sm m-2 p-2"},S={class:"mb-6"},U={key:0,class:"flex"},R={class:"text-red-400 text-sm m-2 p-2"},M={class:"mb-6"},P=e("div",{class:"mb-10"},[e("button",{type:"submit",class:"w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"}," Register ")],-1),T={class:"text-base text-[#adadad]"},j={__name:"RegisterView",setup(I){const r=m(),s=x({name:"",email:"",password:"",password_confirmation:""});return(L,o)=>{const u=b("router-link");return d(),l("section",w,[e("div",y,[e("div",F,[e("div",g,[e("div",E,[C,e("form",{onSubmit:o[4]||(o[4]=_(t=>a(r).handleRegister(s.value),["prevent"]))},[e("div",B,[n(e("input",{type:"text",placeholder:"Name","onUpdate:modelValue":o[0]||(o[0]=t=>s.value.name=t),class:"bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"},null,512),[[i,s.value.name]]),a(r).errors.name?(d(),l("div",D,[e("span",V,p(a(r).errors.name[0]),1)])):c("",!0)]),e("div",k,[n(e("input",{type:"email",placeholder:"Email","onUpdate:modelValue":o[1]||(o[1]=t=>s.value.email=t),class:"bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"},null,512),[[i,s.value.email]]),a(r).errors.email?(d(),l("div",A,[e("span",N,p(a(r).errors.email[0]),1)])):c("",!0)]),e("div",S,[n(e("input",{type:"password",placeholder:"Password","onUpdate:modelValue":o[2]||(o[2]=t=>s.value.password=t),class:"bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"},null,512),[[i,s.value.password]]),a(r).errors.password?(d(),l("div",U,[e("span",R,p(a(r).errors.password[0]),1)])):c("",!0)]),e("div",M,[n(e("input",{type:"password",placeholder:"Password Confirmation","onUpdate:modelValue":o[3]||(o[3]=t=>s.value.password_confirmation=t),class:"bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"},null,512),[[i,s.value.password_confirmation]])]),P],32),e("p",T,[v(u,{to:"/login",class:"text-primary hover:underline"},{default:f(()=>[h(" Sign In ")]),_:1})])])])])])])}}};export{j as default};
