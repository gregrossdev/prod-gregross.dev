import{u as b,r as h,a as f,o as d,c as l,b as e,w as v,d as c,v as p,e as a,t as m,f as u,g as x,h as _,i as n}from"./app-16b48706.js";const w={class:"bg-[#F4F7FF] py-8"},g={class:"container mx-auto"},y={class:"-mx-4 flex flex-wrap"},F={class:"w-full px-4"},E={class:"mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"},k=e("h2",{class:"mb-10 text-xl font-bold text-center md:mb-16"},"Login",-1),B={class:"mb-6"},C={key:0,class:"flex"},V={class:"text-red-400 text-sm m-2 p-2"},D={class:"mb-6"},L={key:0,class:"flex"},N={class:"text-red-400 text-sm m-2 p-2"},S=e("div",{class:"mb-10"},[e("button",{class:"w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white",type:"submit"}," Login ")],-1),A={class:"text-base text-[#adadad]"},R={__name:"LoginView",setup(U){const o=b(),t=h({email:"",password:""});return(M,s)=>{const i=f("RouterLink");return d(),l("section",w,[e("div",g,[e("div",y,[e("div",F,[e("article",E,[k,e("form",{onSubmit:s[2]||(s[2]=v(r=>a(o).handleLogin(t.value),["prevent"]))},[e("div",B,[c(e("input",{"onUpdate:modelValue":s[0]||(s[0]=r=>t.value.email=r),class:"border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none",placeholder:"Email",type:"email"},null,512),[[p,t.value.email]]),a(o).errors.email?(d(),l("div",C,[e("span",V,m(a(o).errors.email[0]),1)])):u("",!0)]),e("div",D,[c(e("input",{"onUpdate:modelValue":s[1]||(s[1]=r=>t.value.password=r),class:"bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none",placeholder:"Password",type:"password"},null,512),[[p,t.value.password]]),a(o).errors.password?(d(),l("div",L,[e("span",N,m(a(o).errors.password[0]),1)])):u("",!0)]),S],32),x(i,{class:"mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline",to:"/forgot-password"},{default:_(()=>[n(" Forgot Password? ")]),_:1}),e("p",A,[n(" Not a member yet? "),x(i,{class:"text-primary hover:underline",to:"/register"},{default:_(()=>[n(" Sign Up ")]),_:1})])])])])])])}}};export{R as default};
