"use strict";(self.webpackChunkadrw_xyz=self.webpackChunkadrw_xyz||[]).push([[5371],{4765:function(e,t,n){n.d(t,{F:function(){return d},Z:function(){return p}});var l=n(7294),r=n(8733),a=n(795),o=n(8377),i=n(6799),c=n(8871);var s=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(o.Z,null,(0,r.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(l.Fragment,null," — ",(0,r.tZ)(i.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(s,{post:t}))};const d=e=>{var t,n,l;let{data:{post:a}}=e;return(0,r.tZ)(c.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function p(e){let{...t}=e;return l.createElement(u,t)}},6799:function(e,t,n){var l=n(8733),r=n(7294),a=n(1883),o=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,o.Z)();return(0,l.tZ)(r.Fragment,null,t.map(((e,t)=>(0,l.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,l.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var l=n(7294),r=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:o="",image:i="",children:c=null,canonicalUrl:s=""}=e;const m=(0,a.Z)(),{siteTitle:u,siteTitleAlt:d,siteUrl:p,siteDescription:g,siteImage:h,author:E,siteLanguage:b}=m,f={title:t?t+" | "+u:d,description:n||g,url:""+p+(o||""),image:""+p+(i||h)};return l.createElement(l.Fragment,null,l.createElement("html",{lang:b}),l.createElement("title",null,f.title),l.createElement("meta",{name:"description",content:f.description}),l.createElement("meta",{name:"image",content:f.image}),l.createElement("meta",{property:"og:title",content:f.title}),l.createElement("meta",{property:"og:url",content:f.url}),l.createElement("meta",{property:"og:description",content:f.description}),l.createElement("meta",{property:"og:image",content:f.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:f.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:f.title}),l.createElement("meta",{name:"twitter:url",content:f.url}),l.createElement("meta",{name:"twitter:description",content:f.description}),l.createElement("meta",{name:"twitter:image",content:f.image}),l.createElement("meta",{name:"twitter:image:alt",content:f.description}),l.createElement("meta",{name:"twitter:creator",content:E}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),s?l.createElement("link",{rel:"canonical",href:s}):null,c)}},9334:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return c}});var l=n(7294),r=n(1151);function a(e){const t=Object.assign({p:"p",strong:"strong",h2:"h2",a:"a",em:"em",ul:"ul",li:"li",code:"code"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,l.createElement(t.strong,null,"The university CS servers were down, so I built a Docker image and build-test script to let me keep working.")),"\n",l.createElement(t.h2,null,l.createElement(t.a,{href:"https://github.com/adrw/docker-cs350-os161"},"Check out the repo on GitHub.")),"\n",l.createElement(t.p,null,"University of Waterloo's third year curriculum for Computer Science holds one of the more challenging courses of the program: ",l.createElement(t.strong,null,l.createElement(t.em,null,"CS350 Operating Systems"))," (known by students as 'OS')."),"\n",l.createElement(t.p,null,"The OS course has students add core functionality to an existing operating system, Harvard's os161, written in C in 2000."),"\n",l.createElement(t.p,null,"Given the bare bones nature of the OS, it has very specific build version requirements for GDB, G++, and Make that makes it very difficult to run locally on macOS."),"\n",l.createElement(t.p,null,"With the school servers down at the beginning of the summer semester I was in a tight bind since I couldn't do my work for the first assignment. This led me to ",l.createElement(t.a,{href:"https://github.com/Uberi"},"@Uberi"),"'s ",l.createElement(t.a,{href:"https://github.com/Uberi/uw-cs350-development-environment"},"uw-cs350-development-environment")," repo which inspired me to build my own local setup."),"\n",l.createElement(t.p,null,"My ",l.createElement(t.a,{href:"https://github.com/adrw/docker-cs350-os161"},"docker-cs350-os161")," repo contains a lean Docker container built on Debian with all of the specific requirements to build os161. It is 24% smaller than any other images on Docker Hub."),"\n",l.createElement(t.p,null,"I also built a comprehensive build script that includes many useful options and built in tests."),"\n",l.createElement(t.h2,null,"build-and-run.sh options"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"default: builds from source, runs side by side with GDB in Tmux"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"-b")," - only build, don't run after"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"-c")," - continuous build loop"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"-d")," - set debug mode to output debug text"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"-m")," - only run, with gdb tmux panels"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"-r")," - only run, don't build, don't run with gdb"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"-t <opt>")," - run test test alias"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"-l <opt>")," - loop all following tests # times and log result in logs/ directory"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"-w")," - clear all logs"),"\n"),"\n",l.createElement(t.p,null,"It was a fun project to keep adding in functionality that let me be more productive as I worked through assignments."),"\n",l.createElement(t.p,null,"If you're going into CS350 soon, good luck! Feel free to use or fork ",l.createElement(t.a,{href:"https://github.com/adrw/docker-cs350-os161"},"my repo")," to get started faster."),"\n",l.createElement(t.h2,null,"Resources"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://github.com/adrw/docker-os161"},l.createElement(t.strong,null,"Source Code on GitHub"))),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://hub.docker.com/r/andrewparadi/cs350-os161/"},l.createElement(t.strong,null,"Docker Hub andrewparadi/cs350-os161 Image"))),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://github.com/Uberi/uw-cs350-development-environment"},l.createElement(t.strong,null,"Uberi/uw-cs350-development-environment"))),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.student.cs.uwaterloo.ca/~cs350/"},l.createElement(t.strong,null,"University of Waterloo CS350 Operating Systems Course Site"))),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(4765);function c(e){return l.createElement(i.Z,e,l.createElement(o,e))}i.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-projects-2017-05-09-docker-cs-350-os-161-md-45ec1eb612f996ca93f6.js.map