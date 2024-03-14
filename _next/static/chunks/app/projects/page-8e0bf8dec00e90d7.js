(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{5335:function(e,t,n){Promise.resolve().then(n.bind(n,1918)),Promise.resolve().then(n.t.bind(n,1305,23)),Promise.resolve().then(n.t.bind(n,4983,23)),Promise.resolve().then(n.t.bind(n,2573,23))},1918:function(e,t,n){"use strict";n.r(t),n.d(t,{SectionType:function(){return c},default:function(){return Projects}});var a=n(7437);function ProjectsSectionStart(e){let{sectionType:t}=e;return(0,a.jsxs)("section",{className:"faq-section-".concat(t),children:[(0,a.jsxs)("div",{className:"faq-section-".concat(t,"-container faq-section-heading-underline"),children:[(0,a.jsx)("h1",{className:"faq-heading-section",children:"PROJECTS"}),(0,a.jsx)("h2",{className:"faq-heading-section-sub",children:"Building a Better Community"})]}),(0,a.jsx)("div",{className:"faq-section-".concat(t,"-container"),children:(0,a.jsx)("p",{className:"faq-section-paragraph",children:"Discover the diverse range of projects at Open Sacramento, where we're using technology and collaboration to tackle civic challenges and enhance public services. Join our dedicated team of designers, developers, and passionate individuals to make a lasting impact on our community through innovative solutions."})})]})}let fetchJson=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())};var i=n(2853),r=n(7371);let c={light:"light",dark:"dark"};function Projects(){let{data:e,error:t,isLoading:n}=(0,i.ZP)("https://api.github.com/orgs/code4sac/repos?per_page=20&sort=updated&direction=desc",fetchGithubProjectData,{shouldRetryOnError:!1});return t?(0,a.jsx)("div",{children:"failed to load"}):n?(0,a.jsx)("div",{children:"loading..."}):(console.dir(e),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"faq-main",children:(0,a.jsx)(ProjectsSectionStart,{sectionType:c.light})})}))}let fetchGithubProjectData=async function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let a=await fetchJson(...t),i=await Promise.all(a.map(async e=>{let t=mapGhData(e),n=await fetchMetaFile(t.full_name);return n?{...t,meta:n}:null}));return i.filter(e=>null!==e)},mapGhData=e=>({id:e.id,homepage:e.homepage,full_name:e.full_name,html_url:e.html_url,api_url:e.url,created_at:e.created_at,updated_at:e.updated_at}),fetchMetaFile=async e=>{let t=await fetch("https://raw.githubusercontent.com/".concat(e,"/main/").concat("meta.yml"));if(404===t.status)return null;if(!t.ok)throw Error("Error fetching meta file: ".concat(t.text()));let n=await t.text();return r.Qc(n)}},1305:function(){},2573:function(){},4983:function(){}},function(e){e.O(0,[647,971,472,744],function(){return e(e.s=5335)}),_N_E=e.O()}]);