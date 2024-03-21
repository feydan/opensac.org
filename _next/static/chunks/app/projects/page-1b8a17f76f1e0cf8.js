(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{632:function(e,t,n){Promise.resolve().then(n.bind(n,4782)),Promise.resolve().then(n.t.bind(n,1305,23)),Promise.resolve().then(n.t.bind(n,2573,23)),Promise.resolve().then(n.t.bind(n,4983,23))},9601:function(e,t,n){"use strict";n.d(t,{v:function(){return fetchGithubSingleProject},x:function(){return fetchGithubProjectData}});var a=n(7371);let fetchGithubProjectData=async e=>{let t=await Promise.all(e.map(fetchGithubSingleProject));return t.filter(e=>null!==e)},fetchGithubSingleProject=async e=>{let t=mapGhData(e),n=await fetchMetaFile(t.full_name);return n?{...t,meta:n}:null},mapGhData=e=>({id:e.id,homepage:e.homepage,full_name:e.full_name,html_url:e.html_url,api_url:e.url,created_at:e.created_at,updated_at:e.updated_at}),fetchMetaFile=async e=>{let t=await fetch("https://raw.githubusercontent.com/".concat(e,"/main/").concat("meta.yml"));if(404===t.status)return null;if(!t.ok)throw Error("Error fetching meta file: ".concat(t.text()));let n=await t.text();return a.Qc(n)}},4782:function(e,t,n){"use strict";n.r(t),n.d(t,{SectionType:function(){return o},default:function(){return Projects}});var a=n(7437),i=n(42),r=n(2853),c=n(9601);function ProjectsSectionStart(e){let{sectionType:t}=e;return(0,a.jsxs)("section",{className:"faq-section-".concat(t),children:[(0,a.jsxs)("div",{className:"faq-section-".concat(t,"-container faq-section-heading-underline"),children:[(0,a.jsx)("h1",{className:"faq-heading-section",children:"PROJECTS"}),(0,a.jsx)("h2",{className:"faq-heading-section-sub",children:"Building a Better Community"})]}),(0,a.jsx)("div",{className:"faq-section-".concat(t,"-container"),children:(0,a.jsx)("p",{className:"faq-section-paragraph",children:"Discover the diverse range of projects at Open Sacramento, where we're using technology and collaboration to tackle civic challenges and enhance public services. Join our dedicated team of designers, developers, and passionate individuals to make a lasting impact on our community through innovative solutions."})})]})}let o={light:"light",dark:"dark"},fetcher=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(i.w).then(c.x)};function Projects(e){let{githubOwner:t}=e,{data:n,error:i,isLoading:c}=(0,r.ZP)("https://api.github.com/orgs/".concat(t,"/repos?per_page=20&sort=updated&direction=desc"),fetcher,{shouldRetryOnError:!1});return i?(0,a.jsx)("div",{children:"failed to load"}):c?(0,a.jsx)("div",{children:"loading..."}):(console.dir(n),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"projects-main",children:(0,a.jsx)(ProjectsSectionStart,{sectionType:o.light})})}))}},42:function(e,t,n){"use strict";n.d(t,{w:function(){return jsonResponse}});let jsonResponse=e=>e.json()},1305:function(){},2573:function(){},4983:function(){}},function(e){e.O(0,[647,971,472,744],function(){return e(e.s=632)}),_N_E=e.O()}]);