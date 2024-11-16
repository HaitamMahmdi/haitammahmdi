"use strict";(self["webpackChunkmy"]=self["webpackChunkmy"]||[]).push([[717],{717:function(e,t,l){l.r(t),l.d(t,{default:function(){return F}});l(4114);var a=l(6768),i=l(144),s=l(5130),n=l(4232),r=l(3129);const c={key:0,class:""},o={class:"container d-flex flex-wrap justify-content-between"},u={class:"serchBox w-100 text-center"},v={class:"serch-for d-flex mt-5 me-auto ms-auto"},d={class:"articles"},p={class:"d-flex mb- flex-wrap justify-content-between"},h=["src"],g={class:"py-3 ps-3"},f=["title"],m={class:"description sub-text"},k={class:"d-flex author-publishedAt"},b={key:0,class:"me-2 primary-color bold-text"},x={class:"sub-text"},y={key:0,class:"found-nothing"},L={class:"recipe-img"},w=["src"],C={class:"ps-2 primary-color"},T={class:"pagination-nav w-100"},E={"aria-label":"Page navigation example"},K={class:"pagination my-auto justify-content-center flex-wrap"},R={class:"page-item mb-2"},S={class:"page-item mx-2 mb-2"},_={class:"page-item mb-2"},j=4;var X={__name:"BlogArticle",setup(e){(0,r.u)({title:"Blog & Article  ",meta:[{name:"description",content:"Explore a wide range of insightful blog posts and articles. Discover the latest trends, expert opinions, and in-depth analysis on various topics. Search and browse through articles that cater to your interests and knowledge."},{name:"keywords",content:"blog, articles, search blog, browse articles, latest trends, expert opinions, in-depth articles, blog posts, news articles, article categories, tech blogs, lifestyle articles, entertainment blogs, health articles, educational blogs"}]});let t=(0,i.KR)(null);const l=(0,i.KR)([1,2,3,4,5]),X=(0,i.KR)(null),$=(0,i.KR)(null);let A=(0,i.KR)(0),F=null;const B=(0,i.KR)(null),D=e=>{isNaN(e.target.innerText)||(F&&F.classList.remove("active"),e.target.parentElement.classList.add("active"),F=e.target.parentElement,A.value=(+e.target.innerText-1)*j)},I=()=>{if(F&&+F.nextSibling.firstChild.innerText!==l.value[l.value.length-1]&&+F.nextSibling.firstChild.innerText>=l.value[l.value.length-1])return F.classList.remove("active"),F=F.nextSibling,F.classList.add("active"),A.value=(+F.nextSibling.firstChild.innerText-1)*j;if(l.value[l.value.length-1]<X.value/5){let e=[];for(let t=l.value[l.value.length-1];t<l.value[l.value.length-1]+5;t++)e.push(t);F.classList.remove("active"),F=F.nextSibling,F.classList.add("active"),l.value=e}else if(+F.nextSibling.firstChild.innerText===l.value[l.value.length-1])return F.classList.remove("active"),F=F.nextSibling,F.classList.add("active"),$.value.disabled=!0,A.value=(+F.firstChild.innerText-1)*j},q=()=>{if(F&&F.previousSibling&&+F.firstChild.innerText!==l.value[0])F.classList.remove("active"),F=F.previousSibling,F.classList.add("active"),A.value=(+F.firstChild.innerText-2)*j;else if(l.value[0]>1){let e=[];for(let t=l.value[0];t>l.value[0]-5;t--)e.unshift(t);return setTimeout((()=>{F=F.parentElement.children[5],console.log(F)}),0),console.log(F.firstChild.innerText,F.parentElement.children[5]),F.classList.add("active"),l.value=e,A.value=(+F.firstChild.innerText-1)*j}},P=async()=>{try{let e=await fetch("https://newsapi.org/v2/everything?q=food+chef+guide&apiKey=1e4f3628160f4bfb8d6e380d56aa703c");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);t.value=await e.json(),X.value=t.value.articles.length}catch(e){console.error(`Error fetching random recipes: ${e.message}`)}};P();const Q=()=>{if(l.value[l.value.length-1]<Math.ceil(X.value/5)){console.log(l.value[l.value.length-1]);let e=[];for(let t=l.value[l.value.length-1];t<=l.value[l.value.length-1]+5;t++)e.push(t);l.value=e}},H=async()=>{try{let e=await fetch("https://api.spoonacular.com/recipes/random?apiKey=cd216c403a9948fbaab18df612d15354&number=10\n");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);B.value=await e.json(),console.log(B.value)}catch(e){console.error(`Error fetching random recipes: ${e.message}`)}},V=(0,i.KR)(null),M=async()=>{if(V.value)try{let e=await fetch(`https://newsapi.org/v2/everything?q=${V.value}&apiKey=1e4f3628160f4bfb8d6e380d56aa703c`);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);if(t.value=await e.json(),X.value=t.value.articles.length,console.log(t.value.articles,X.value),X.value<=5){l.value=[];for(let e=1;e<Math.ceil(X.value/j);e++)l.value.push(e);console.log(l.value)}else l.value=[1,2,3,4,5]}catch(e){console.error(`Error fetching random recipes: ${e.message}`)}};return H(),(0,a.sV)((()=>{t.value&&console.log("ss")})),(e,r)=>{const X=(0,a.g2)("SectionTital"),F=(0,a.g2)("TheBotton"),P=(0,a.g2)("RouterLink"),H=(0,a.g2)("FooterCom");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,i.R1)(t)&&B.value?((0,a.uX)(),(0,a.CE)("main",c,[(0,a.Lk)("div",o,[(0,a.Lk)("div",u,[(0,a.bF)(X,{title:!0,class:"recipe-tital",subtitle:!0,subtitleText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",type:"main-tital",titalText:"Blog & Article"}),(0,a.Lk)("div",v,[(0,a.bo)((0,a.Lk)("input",{required:"","onUpdate:modelValue":r[0]||(r[0]=e=>V.value=e),type:"text",placeholder:"Search article, news or recipe...",class:"flex-grow-1 bg-transparent",name:"",id:""},null,512),[[s.Jo,V.value]]),(0,a.bF)(F,{onClick:M,type:"primary",class:"p-3 d-flex ms-auto align-items-center justify-content-center serch-button"},{Text:(0,a.k6)((()=>r[1]||(r[1]=[(0,a.Lk)("p",{class:"m-0 me-1"},"Serch",-1)]))),_:1})])]),(0,a.Lk)("section",d,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)((0,i.R1)(t).articles.slice((0,i.R1)(A),(0,i.R1)(A)+j),(e=>((0,a.uX)(),(0,a.Wv)(P,{key:e.source.name,to:{name:"ArticleVue",query:{title:e.title,publishedAt:e.publishedAt.slice(0,10),author:e.author},params:{id:e.title}}},{default:(0,a.k6)((()=>[(0,a.Lk)("article",p,[r[3]||(r[3]=(0,a.Lk)("div",{style:{position:"absolute",top:"50%","background-color":"blue",color:"white"}},null,-1)),(0,a.Lk)("header",null,[(0,a.Lk)("img",{class:"w-100 h-100",src:e.urlToImage,alt:""},null,8,h)]),(0,a.Lk)("section",g,[(0,a.Lk)("h4",{title:e.title,class:"primary-color bold-text"},(0,n.v_)(e.title.slice(0,30))+"... ",9,f),(0,a.Lk)("p",m,(0,n.v_)(e.description),1),r[2]||(r[2]=(0,a.Lk)("div",null,[(0,a.Lk)("img",{src:"",alt:""})],-1)),(0,a.Lk)("div",k,[e.author?((0,a.uX)(),(0,a.CE)("p",b,(0,n.v_)(e.author.slice(0,e.author.indexOf(",")||e.author.length-1)),1)):(0,a.Q3)("",!0),(0,a.Lk)("p",x,(0,n.v_)(e.publishedAt),1)])])])])),_:2},1032,["to"])))),128)),0===(0,i.R1)(t).articles.length?((0,a.uX)(),(0,a.CE)("div",y,r[4]||(r[4]=[(0,a.Lk)("i",{class:"fa-regular fa-face-kiss"},null,-1),(0,a.Lk)("p",null,"ther is nothing",-1)]))):(0,a.Q3)("",!0)]),(0,a.Lk)("aside",null,[(0,a.bF)(X,{title:!0,class:"aside-tital mb-4",subtitle:!1,type:"small-tital",titalText:"Tasty Recipes"}),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(B.value.recipes.slice(0,4),(e=>((0,a.uX)(),(0,a.CE)("div",{class:"recipe d-flex align-items-center p-3",key:e.id},[(0,a.Lk)("div",L,[(0,a.Lk)("img",{width:"100%",src:e.image,alt:""},null,8,w)]),(0,a.Lk)("h4",C,(0,n.v_)(e.title),1)])))),128))]),(0,a.Lk)("section",T,[(0,a.Lk)("nav",E,[(0,a.Lk)("ul",K,[(0,a.Lk)("li",R,[l.value[l.value.length-1]>6?((0,a.uX)(),(0,a.CE)("a",{key:0,onClick:(0,s.D$)(q,["prevent"]),class:"page-link d-flex align-items-center justify-content-center",href:"#"},r[5]||(r[5]=[(0,a.Lk)("i",{class:"fa-solid fa-chevron-left"},null,-1)]))):(0,a.Q3)("",!0)]),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.value,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e,class:"page-item mx-2 mb-2"},[(0,a.Lk)("a",{onClick:(0,s.D$)(D,["prevent"]),class:"page-link primary-color d-flex align-items-center justify-content-center",href:"#"},(0,n.v_)(e),1)])))),128)),(0,a.Lk)("li",S,[(0,a.Lk)("a",{onClick:(0,s.D$)(Q,["prevent"]),class:"page-link primary-color d-flex align-items-center justify-content-center",href:"#"},"...")]),(0,a.Lk)("li",_,[(0,a.Lk)("a",{ref_key:"nextpageB",ref:$,onClick:(0,s.D$)(I,["prevent"]),class:"page-link primary-color d-flex align-items-center justify-content-center",href:""},r[6]||(r[6]=[(0,a.Lk)("i",{class:"fa-solid fa-chevron-right"},null,-1)]),512)])])])])])])):(0,a.Q3)("",!0),(0,a.bF)(H)],64)}}},$=l(1241);const A=(0,$.A)(X,[["__scopeId","data-v-41ca6417"]]);var F=A}}]);
//# sourceMappingURL=717.22797eaf.js.map