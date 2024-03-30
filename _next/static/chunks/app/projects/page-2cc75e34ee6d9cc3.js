(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{632:function(e,t,n){Promise.resolve().then(n.bind(n,7805)),Promise.resolve().then(n.t.bind(n,1305,23)),Promise.resolve().then(n.t.bind(n,2573,23)),Promise.resolve().then(n.t.bind(n,4983,23))},1848:function(e,t,n){"use strict";n.d(t,{x:function(){return fetchGithubProjectData},v:function(){return fetchGithubSingleProject}});let a="opensac.org";var c=n(7371);let fetchGithubProjectData=async e=>{let t=await Promise.all(e.map(fetchGithubSingleProject));return t.filter(e=>null!==e)},fetchGithubSingleProject=async e=>{let t=mapGhData(e),n=await fetchMetaFile(t.full_name);return n?{...t,meta:n}:null},mapGhData=e=>({id:e.id,homepage:e.homepage,full_name:e.full_name,html_url:e.html_url,api_url:e.url,created_at:e.created_at,updated_at:e.updated_at}),fetchMetaFile=async e=>{console.dir("".concat(e,"/").concat(a)),console.dir(r),"".concat("code4sac","/").concat(a);let t=await fetch("https://raw.githubusercontent.com/".concat(e,"/main/").concat("meta.yml"));if(404===t.status)return null;if(!t.ok)throw Error("Error fetching meta file: ".concat(t.text()));let n=await t.text();return c.Qc(n)},r=c.Qc("\ntitle: OpenSac.org\nproject_type: website\nproject_status: active\ndescription: The Open Sacramento website serves as a hub for technologists, developers, and civic-minded individuals to collaborate, access resources, and engage in projects aimed at enhancing civic innovation in the Sacramento area and beyond through technology\nimage_url: opensac.jpg\nproject_partner: Dan Fey\nproject_lead: Brianda Hernandez\ntechnical_lead: Nate Bass\nlead_designer: Help Needed\ntags: html,css,javascript,react,github,figma\ncontributing:\n  designer:\n    difficulty: easy\n    technologies: Figma\n    ways_to_contribute: improve existing designs, design new pages\n  developer:\n    difficulty: easy\n    frontend: html,css,javascript,react\n    backend: n/a\n    ways_to_contribute: Bug fixing, testing, maintenance; see issues on github\n  project_manager:\n    difficulty: easy\n    technologies: github, slack\n    ways_to_contribute: organize and create issues & milestones, work with team members to stay and track and remove roadblocks\nroadmap:\n  research:\n    time_range: July 1, 2023 - August 31, 2023\n    objective: Understand what we want from the new website\n    outcome: Goals and direction for design and development\n  design:\n    time_range: September 1, 2023 - October 5, 2023\n    objective: Create and iterate on figma designs for the website\n    outcome: Completed figma desgins for all pages, enabling development to begin\n  development:\n    time_range: October 6, 2023 - April 1, 2023\n    objective: Create react application reflecting figma designs\n    outcome: Completed code for website reflecting the figma designs\n  deployment:\n    time_range: April 2, 2023 - April 9, 2023\n    objective: Deploy react application to opensac.org\n    outcome: Live hosted opensac.org website\n  launch:\n    time_range: April 10, 2023 - April 24, 2023\n    objective: Raise awareness of new website and branding on social media\n    outcome: People interested in Code for Sacramento are now aware of OpenSac.org\nresources:\nscreenshots:\n  - opensac.jpg\n")},7805:function(e,t,n){"use strict";n.r(t),n.d(t,{SectionType:function(){return l},default:function(){return Projects}});var a=n(7437);function ProjectCard(e){let{sectionType:t,projectTitle:n,projectText:c,imgUrl:r,pageUrl:i,githubUrl:o,tags:s,lastUpdatedTimestamp:l}=e;return(0,a.jsxs)("section",{className:"projects-section-".concat(t," project-card-container"),children:[(0,a.jsxs)("div",{className:"project-card-img-container",children:[(0,a.jsx)("div",{className:"project-card-img-status",children:"Active"}),(0,a.jsx)("img",{className:"project-card-img",src:r})]}),(0,a.jsx)("ul",{className:"project-card-tags",children:s.map(e=>(0,a.jsx)("div",{className:"project-card-tag",children:e}))}),(0,a.jsx)("h2",{className:"project-card-heading",children:n}),(0,a.jsx)("div",{children:(0,a.jsx)("p",{children:c})}),(0,a.jsxs)("div",{className:"project-card-last-updated",children:["Last Updated: ",l.format("ddd MMM D, H:mma")]}),(0,a.jsxs)("div",{className:"project-card-buttons-container",children:[(0,a.jsx)("a",{className:"project-card-button-dark",href:i,children:"Learn More"}),(0,a.jsx)("a",{className:"project-card-button-light",href:o,children:"Source Code"})]})]})}function ProjectsSectionStart(e){let{sectionType:t}=e;return(0,a.jsxs)("section",{className:"projects-section-".concat(t),children:[(0,a.jsxs)("div",{className:"projects-section-".concat(t,"-container projects-section-heading-underline"),children:[(0,a.jsx)("h1",{className:"projects-heading-section",children:"PROJECTS"}),(0,a.jsx)("h2",{className:"projects-heading-section-sub",children:"Building a Better Community"})]}),(0,a.jsx)("div",{className:"projects-section-".concat(t,"-container"),children:(0,a.jsx)("p",{className:"projects-section-paragraph",children:"Discover the diverse range of projects at Open Sacramento, where we're using technology and collaboration to tackle civic challenges and enhance public services. Join our dedicated team of designers, developers, and passionate individuals to make a lasting impact on our community through innovative solutions."})})]})}var c=n(42),r=n(2067),i=n.n(r),o=n(2853),s=n(1848);let l={light:"light",dark:"dark"},fetcher=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(c.w).then(s.x)};function Projects(e){let{githubOwner:t}=e,{data:n,error:c,isLoading:r}=(0,o.ZP)("https://api.github.com/orgs/".concat(t,"/repos?per_page=20&sort=updated&direction=desc"),fetcher,{shouldRetryOnError:!1});return c?(0,a.jsx)("div",{children:"failed to load"}):r?(0,a.jsx)("div",{children:"loading..."}):(console.dir(n),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"projects-main",children:[(0,a.jsx)(ProjectsSectionStart,{sectionType:l.light}),(0,a.jsx)("div",{className:"project-cards-container",children:n.map(e=>(0,a.jsx)(ProjectCard,{sectionType:l.light,projectTitle:e.meta.title,projectText:e.meta.description,imgUrl:"https://raw.githubusercontent.com/".concat(e.full_name,"/main/").concat(e.meta.screenshots[0]),pageUrl:e.homepage,githubUrl:e.html_url,tags:e.meta.tags.split(","),lastUpdatedTimestamp:i()(e.updated_at)}))})]})}))}},42:function(e,t,n){"use strict";n.d(t,{w:function(){return jsonResponse}});let jsonResponse=e=>e.json()},1305:function(){},2573:function(){},4983:function(){}},function(e){e.O(0,[990,647,971,472,744],function(){return e(e.s=632)}),_N_E=e.O()}]);