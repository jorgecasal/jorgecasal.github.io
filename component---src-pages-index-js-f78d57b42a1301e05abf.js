(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{D1l4:function(e,t,l){e.exports=l.p+"static/project03-80f6632047dbf5ec0c981da498e31592.gif"},D5Hz:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var a=l("MkV5");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return a.EmailJSResponseStatus}});var r=l("USkh"),n=null,o="https://api.emailjs.com";function c(e,t,l){return void 0===l&&(l={}),new Promise((function(r,n){var o=new XMLHttpRequest;for(var c in o.addEventListener("load",(function(e){var t=new a.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?r(t):n(t)})),o.addEventListener("error",(function(e){n(new a.EmailJSResponseStatus(e.target))})),o.open("POST",e,!0),l)o.setRequestHeader(c,l[c]);o.send(t)}))}function i(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function s(e,t){n=e,o=t||"https://api.emailjs.com"}function h(e,t,l,a){var r={lib_version:"2.6.4",user_id:a||n,service_id:e,template_id:t,template_params:i(l)};return c(o+"/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})}function m(e,t,l,a){var i;if("string"==typeof l&&(l=document.querySelector("#"!==(i=l)[0]&&"."!==i[0]?"#"+i:i)),!l||"FORM"!==l.nodeName)throw"Expected the HTML form element or the style selector of form";r.UI.progressState(l);var s=new FormData(l);return s.append("lib_version","2.6.4"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",a||n),c(o+"/api/v1.0/email/send-form",s).then((function(e){return r.UI.successState(l),e}),(function(e){return r.UI.errorState(l),Promise.reject(e)}))}t.init=s,t.send=h,t.sendForm=m,t.default={init:s,send:h,sendForm:m}},JwsL:function(e,t,l){"use strict";l.d(t,"a",(function(){return c}));var a=l("q1tI"),r=l.n(a),n=l("obyI"),o=l.n(n);function c(){return r.a.createElement("section",{id:"footer"},r.a.createElement("ul",{className:"icons"},o.a.socialLinks.map((function(e){var t=e.icon,l=e.name,a=e.url;return r.a.createElement("li",{key:a},r.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer",className:"icon "+t},r.a.createElement("span",{className:"label"},l)))}))))}},MkV5:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var a=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=a},RXBc:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),r=l.n(a),n=l("7oih");var o=l("dI71"),c=l("dwco"),i=l.n(c),s=function(e){return e.children},h=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(o.a)(t,e);var l=t.prototype;return l.componentDidMount=function(){i.a.polyfill()},l.handleClick=function(e){e.preventDefault();var t=0,l=!0,a=this.props,r=a.type,n=a.element,o=a.offset,c=a.timeout;if(r&&n)switch(r){case"class":l=!!(t=document.getElementsByClassName(n)[0]);break;case"id":l=!!(t=document.getElementById(n))}l?this.scrollTo(t,o,c):console.log("Element not found: "+n)},l.scrollTo=function(e,t,l){void 0===t&&(t=-150),void 0===l&&(l=null);var a=e?e.getBoundingClientRect().top+window.pageYOffset:0;l?setTimeout((function(){window.scroll({top:a+t,left:0,behavior:"smooth"})}),l):window.scroll({top:a+t,left:0,behavior:"smooth"})},l.render=function(){return r.a.createElement(s,null,"object"==typeof this.props.children?r.a.cloneElement(this.props.children,{onClick:this.handleClick}):r.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(r.a.Component),m=l("obyI"),u=l.n(m);function p(e){e.title,e.heading,e.avatar;return r.a.createElement("section",{id:"header"},r.a.createElement("header",null,r.a.createElement("h1",null,u.a.authorName),r.a.createElement("p",null,u.a.heading)),r.a.createElement("footer",null,r.a.createElement(h,{type:"id",element:"bannerh1"},r.a.createElement("a",{href:"#bannerh1",className:"button style2 "},"about"))))}var v=l("JwsL"),f=l("D5Hz"),d=l.n(f),E=function(){return r.a.createElement("article",{className:"container box style4"},r.a.createElement("header",null,r.a.createElement("h2",null,"contact"),r.a.createElement("p",null,"Would you like us to work together? Awesome!")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d.a.sendForm("service_wrx924k","template_jyqyf5i",e.target,"user_lIbYK4GRNYH01DTmvg804").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()}},r.a.createElement("div",{className:"row gtr-50"},r.a.createElement("div",{className:"col-6 col-12-mobile"},r.a.createElement("input",{type:"text",className:"text",name:"name",placeholder:"Name",required:!0})),r.a.createElement("div",{className:"col-6 col-12-mobile"},r.a.createElement("input",{type:"text",className:"text",name:"email",placeholder:"Email",required:!0})),r.a.createElement("div",{className:"col-12"},r.a.createElement("textarea",{name:"message",placeholder:"Message"})),r.a.createElement("div",{className:"col-12"},r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,r.a.createElement("input",{type:"submit",value:"Send"})))))))},g=l("hkX0"),b=l.n(g),w=l("aigP"),y=l.n(w),S=l("D1l4"),x=l.n(S),k=l("woKR"),C=l.n(k);t.default=function(){return r.a.createElement(n.a,null,r.a.createElement(p,null),r.a.createElement("section",{id:"banner"},r.a.createElement("header",null,r.a.createElement("h2",{id:"bannerh1"},"innovating solutions")),r.a.createElement("p",null,"With a track record of taking web applications",r.a.createElement("br",null),"from the mind ➜ to development with my team ➜ to production.",r.a.createElement("br",null),"(YES! always a team player)",r.a.createElement("br",null),"Proficient with modern web technologies and highly adaptable to any business requirements."),r.a.createElement("footer",null)),r.a.createElement("article",{className:"container box style4"},r.a.createElement("header",null,r.a.createElement("h2",null,"SKILLS"),r.a.createElement("p",null,"full stack js dev"),r.a.createElement("div",{id:"skills"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",role:"img",viewBox:"0 0 24 24",height:"30px",width:"30px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null),r.a.createElement("path",{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"})),r.a.createElement("h1",null,"JavaScript")),r.a.createElement("li",null,r.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",role:"img",viewBox:"0 0 24 24",height:"30px",width:"30px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null),r.a.createElement("path",{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"})),r.a.createElement("h1",null,"CSS")),r.a.createElement("li",null,r.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",role:"img",viewBox:"0 0 24 24",height:"30px",width:"30px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null),r.a.createElement("path",{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"})),r.a.createElement("h1",null,"HTML")),r.a.createElement("li",null,r.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",role:"img",viewBox:"0 0 24 24",height:"30px",width:"30px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null),r.a.createElement("path",{d:"M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"})),r.a.createElement("h1",null,"React"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",role:"img",viewBox:"0 0 24 24",height:"30px",width:"30px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null),r.a.createElement("path",{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"})),r.a.createElement("h1",null,"Node.js")),r.a.createElement("li",null,r.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",role:"img",viewBox:"0 0 24 24",height:"30px",width:"30px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null),r.a.createElement("path",{d:"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"})),r.a.createElement("h1",null,"Git")),r.a.createElement("li",null,r.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",role:"img",viewBox:"0 0 24 24",height:"30px",width:"30px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null),r.a.createElement("path",{d:"M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"},r.a.createElement("path",{d:"M12.001.007C5.326.007.007 5.326.007 12S5.326 23.995 12 23.995s11.994-5.319 11.994-11.994S18.676.007 12.001.007zM2.614 12.105l9.283 9.283c-5.111 0-9.283-4.172-9.283-9.283zm11.473 9.074L2.823 9.915C3.76 5.743 7.516 2.614 12 2.614a9.476 9.476 0 0 1 7.614 3.86L18.259 7.62a7.657 7.657 0 0 0-6.362-3.337A7.555 7.555 0 0 0 4.7 9.393l9.804 9.805c2.4-.835 4.276-2.92 4.798-5.424h-4.068v-1.773h6.154c0 4.485-3.129 8.24-7.301 9.178z"}))),r.a.createElement("h1",null,"TypeScript")),r.a.createElement("li",null,r.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",role:"img",viewBox:"0 0 24 24",height:"30px",width:"30px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null),r.a.createElement("path",{d:"M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z"})),r.a.createElement("h1",null,"MongoDB")))))),r.a.createElement("article",{id:"first",className:"container box style1 right"},r.a.createElement("a",{href:"/#",className:"image fit"},r.a.createElement("img",{src:b.a,alt:""})),r.a.createElement("div",{className:"inner"},r.a.createElement("header",null,r.a.createElement("h2",null,"Reminders App",r.a.createElement("br",null),"REACT/REDUX")),r.a.createElement("p",null,"A platform where users can create reminders featuring Authorization and authentication."),r.a.createElement("a",{href:"https://theremindersapp.herokuapp.com/",target:"_blank",rel:"noreferrer",className:"button style1 "},"See Live"),r.a.createElement("a",{href:"https://github.com/jorgecasal/reminderApp",target:"_blank",rel:"noreferrer",className:"button style1 "},"Source Code"))),r.a.createElement("article",{className:"container box style1 left"},r.a.createElement("a",{href:"/#",className:"image fit"},r.a.createElement("img",{src:y.a,alt:""})),r.a.createElement("div",{className:"inner"},r.a.createElement("header",null,r.a.createElement("h2",null,"Weather API",r.a.createElement("br",null),"Express/api")),r.a.createElement("p",null,"A fullstack JavaScript app fetching OWM API & Google API to display your locations weather."),r.a.createElement("a",{href:"https://geolocationweatherapi.netlify.app/",target:"_blank",rel:"noreferrer",className:"button style1 "},"See Live"),r.a.createElement("a",{href:"https://github.com/jorgecasal/weatherAPI",target:"_blank",rel:"noreferrer",className:"button style1 "},"Source Code"))),r.a.createElement("article",{id:"first",className:"container box style1 right"},r.a.createElement("a",{href:"/#",className:"image fit"},r.a.createElement("img",{src:x.a,alt:""})),r.a.createElement("div",{className:"inner"},r.a.createElement("header",null,r.a.createElement("h2",null,"Post to DB",r.a.createElement("br",null),"Node/MongoDB")),r.a.createElement("p",null,"A react app that handles GET/POST/PUT/DELETE requests to a database using Redux.        "),r.a.createElement("a",{href:"https://post-to-database.herokuapp.com/",target:"_blank",rel:"noreferrer",className:"button style1 "},"See Live"),r.a.createElement("a",{href:"https://github.com/jorgecasal/postToDatabase",target:"_blank",rel:"noreferrer",className:"button style1 "},"Source Code"))),r.a.createElement("article",{className:"container box style1 left"},r.a.createElement("a",{href:"/#",className:"image fit"},r.a.createElement("img",{src:C.a,alt:""})),r.a.createElement("div",{className:"inner"},r.a.createElement("header",null,r.a.createElement("h2",null,"Simplest ToDo",r.a.createElement("br",null),"HTML/CSS/JS")),r.a.createElement("p",null,"A simple but terrific ToDo list that lets you add, edit, and remove items using local storage."),r.a.createElement("a",{href:"https://simplest-todo.netlify.app/",target:"_blank",rel:"noreferrer",className:"button style1 "},"See Live"),r.a.createElement("a",{href:"https://github.com/jorgecasal/simplest-todo",target:"_blank",rel:"noreferrer",className:"button style1 "},"Source Code"))),r.a.createElement("article",{className:"container box style4"},r.a.createElement("header",null,r.a.createElement("h2",null,"check out Blog Repo"),r.a.createElement("p",null,"Hello World, I have a blog! Would you like to learn more about JavaScript? Blog Repo is a tech blog where I explain Javascript stuff"),r.a.createElement("a",{href:"#bannerh1",className:"button style2 "},"blog"))),r.a.createElement(E,null),r.a.createElement(v.a,null))}},USkh:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=a},aigP:function(e,t,l){e.exports=l.p+"static/project02-88ee83b1de10d0fd03215994191d47b5.gif"},dwco:function(e,t,l){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var l,a=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:a.prototype.scroll||c,scrollIntoView:a.prototype.scrollIntoView},n=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,o=(l=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?v.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):v.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},a.prototype.scroll=a.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;v.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},a.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},a.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var l=u(this),a=l.getBoundingClientRect(),n=this.getBoundingClientRect();l!==t.body?(v.call(this,l,l.scrollLeft+n.left-a.left,l.scrollTop+n.top-a.top),"fixed"!==e.getComputedStyle(l).position&&e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})):e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+o<e.scrollHeight:"X"===t?e.clientWidth+o<e.scrollWidth:void 0}function h(t,l){var a=e.getComputedStyle(t,null)["overflow"+l];return"auto"===a||"scroll"===a}function m(e){var t=s(e,"Y")&&h(e,"Y"),l=s(e,"X")&&h(e,"X");return t||l}function u(e){for(;e!==t.body&&!1===m(e);)e=e.parentNode||e.host;return e}function p(t){var l,a,r,o,c=(n()-t.startTime)/468;o=c=c>1?1:c,l=.5*(1-Math.cos(Math.PI*o)),a=t.startX+(t.x-t.startX)*l,r=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,a,r),a===t.x&&r===t.y||e.requestAnimationFrame(p.bind(e,t))}function v(l,a,o){var i,s,h,m,u=n();l===t.body?(i=e,s=e.scrollX||e.pageXOffset,h=e.scrollY||e.pageYOffset,m=r.scroll):(i=l,s=l.scrollLeft,h=l.scrollTop,m=c),p({scrollable:i,method:m,startTime:u,startX:s,startY:h,x:a,y:o})}}}}()},hkX0:function(e,t,l){e.exports=l.p+"static/project01-13b16ef53506fa14ace4160b505f61bf.gif"},obyI:function(e,t){e.exports={siteTitle:"JC portfolio",manifestName:"Overflow",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#000",manifestThemeColor:"#000",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/jorgecasal.github.io/jorgecasal.github.io",authorName:"Jorge Casal",heading:"Software Developer",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/jorgecasal"},{icon:"fa-codepen",name:"Codepen",url:"https://codepen.io/jorgecasal"},{icon:"fa-envelope-o",name:"Email",url:"mailto:casaldelacruz@gmail.com"},{icon:"fa-linkedin-square",name:"linkedin",url:"https://www.linkedin.com/in/casaljorge"}]}},woKR:function(e,t,l){e.exports=l.p+"static/project04-ac1fbfdc6451ec4142f474d4a30fa488.gif"}}]);
//# sourceMappingURL=component---src-pages-index-js-f78d57b42a1301e05abf.js.map