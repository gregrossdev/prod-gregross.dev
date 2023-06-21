import{j as c,u as p,r as g,o as d,c as l,e as t,t as n,f as i,b as e,d as b,v as m,w as f}from"./app-1ddd912d.js";const w={key:0,class:"m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md"},k={class:"mb-6"},x=e("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"New password",-1),y={key:0,class:"flex"},h={class:"text-red-400 text-sm m-2 p-2"},_={class:"mb-6"},v=e("label",{for:"repeat-password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Confirm Password",-1),P=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Reset Password ",-1),B={__name:"ResetPassword",setup(R){const u=c(),r=p(),o=g({password:"",password_confirmation:"",email:u.query.email,token:u.params.token});return(S,s)=>(d(),l("form",{class:"max-w-md mx-auto bg-slate-100 p-4 rounded-lg mt-12",onSubmit:s[2]||(s[2]=f(a=>t(r).handleResetPassword(o.value),["prevent"]))},[t(r).status?(d(),l("div",w,n(t(r).status),1)):i("",!0),e("div",k,[x,b(e("input",{type:"password",id:"password","onUpdate:modelValue":s[0]||(s[0]=a=>o.value.password=a),class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"},null,512),[[m,o.value.password]]),t(r).errors.password?(d(),l("div",y,[e("span",h,n(t(r).errors.password[0]),1)])):i("",!0)]),e("div",_,[v,b(e("input",{type:"password",id:"repeat-password","onUpdate:modelValue":s[1]||(s[1]=a=>o.value.password_confirmation=a),class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"},null,512),[[m,o.value.password_confirmation]])]),P],32))}};export{B as default};
