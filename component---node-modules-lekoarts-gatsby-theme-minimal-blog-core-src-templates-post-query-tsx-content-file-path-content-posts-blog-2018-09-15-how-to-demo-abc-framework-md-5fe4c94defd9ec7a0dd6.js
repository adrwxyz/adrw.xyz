"use strict";(self.webpackChunkadrw_xyz=self.webpackChunkadrw_xyz||[]).push([[8434],{4765:function(e,t,n){n.d(t,{F:function(){return h},Z:function(){return p}});var a=n(7294),r=n(8733),o=n(795),l=n(8377),i=n(6799),s=n(8871);var c=e=>{let{post:t}=e;return null};const u=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var m=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(l.Z,null,(0,r.tZ)(o.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(i.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(c,{post:t}))};const h=e=>{var t,n,a;let{data:{post:o}}=e;return(0,r.tZ)(s.Z,{title:o.title,description:o.description?o.description:o.excerpt,image:o.banner?null===(t=o.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:o.slug,canonicalUrl:o.canonicalUrl})};function p(e){let{...t}=e;return a.createElement(m,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),o=n(1883),l=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,l.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(o.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)("/"+s+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),o=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:l="",image:i="",children:s=null,canonicalUrl:c=""}=e;const u=(0,o.Z)(),{siteTitle:m,siteTitleAlt:h,siteUrl:p,siteDescription:d,siteImage:g,author:y,siteLanguage:w}=u,E={title:t?t+" | "+m:h,description:n||d,url:""+p+(l||""),image:""+p+(i||g)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:w}),a.createElement("title",null,E.title),a.createElement("meta",{name:"description",content:E.description}),a.createElement("meta",{name:"image",content:E.image}),a.createElement("meta",{property:"og:title",content:E.title}),a.createElement("meta",{property:"og:url",content:E.url}),a.createElement("meta",{property:"og:description",content:E.description}),a.createElement("meta",{property:"og:image",content:E.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:E.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:E.title}),a.createElement("meta",{name:"twitter:url",content:E.url}),a.createElement("meta",{name:"twitter:description",content:E.description}),a.createElement("meta",{name:"twitter:image",content:E.image}),a.createElement("meta",{name:"twitter:image:alt",content:E.description}),a.createElement("meta",{name:"twitter:creator",content:y}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),c?a.createElement("link",{rel:"canonical",href:c}):null,s)}},3401:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return s}});var a=n(7294),r=n(1151);function o(e){const t=Object.assign({p:"p",strong:"strong",a:"a",ul:"ul",li:"li",em:"em",h1:"h1",h3:"h3"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,a.createElement(t.strong,null,"This post was written as part of the ",a.createElement(t.a,{href:"https://github.com/hackthenorth/hackthenorth2018-workshops/blob/master/HowToDemo.md"},"How to Demo Workshop")," Andrew & Brandon presented at Hack the North 2018.")),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Also check out ",a.createElement(t.a,{href:"/blog/how-to-demo-7tips"},"7 Tips for Doing an Kickass Demo")),"\n"),"\n",a.createElement(t.p,null,"Doing a demo can be a daunting task, especially if you’re a first-time hacker. Follow this framework to help show how awesome your hack is in the short time you have."),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"Notes")),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,'This framework works best with a "story driven" hack demo.'),"\n",a.createElement(t.li,null,"Example text below in ",a.createElement(t.em,null,"italics")," is from the example demo for ",a.createElement(t.a,{href:"https://youtu.be/juY4bwJXMVE"},"Stockslate"),"."),"\n"),"\n",a.createElement(t.h1,null,"1. Your Hack in 1 Sentence"),"\n",a.createElement(t.p,null,"Start your demo with a single sentence summary of what your hack achieves. This will give your audience immediate context for what you'll now be talking about."),"\n",a.createElement(t.p,null,a.createElement(t.em,null,'"Stockslate replaces spreadsheets for retail investors."')),"\n",a.createElement(t.h1,null,"2. Who is your hack for?"),"\n",a.createElement(t.p,null,"Who would use your hack? Describe that person, user, or group briefly, maybe it's even yourself! This can be really short because it leads really nicely into the next point: what core problem do they face?"),"\n",a.createElement(t.h1,null,"3. Core problem they face"),"\n",a.createElement(t.p,null,"Describe the problem and how it affects who your hack is for. Keep it short, 1-2 sentences should suffice."),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"“It's a lot of work for retail investors like ourselves to maintain up to date stock data”")),"\n",a.createElement(t.h1,null,"4. How your hack solves it"),"\n",a.createElement(t.p,null,'How does your hack solve the problem? How does your solution tie into the "Hack in 1 Sentence" you started your demo with?'),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"“Stockslate uses Bloomberg API to source real time data. This means no more manual updating of Excel sheets.”")),"\n",a.createElement(t.h1,null,"5. Hack Tech Stack"),"\n",a.createElement(t.p,null,"This is your chance to talk about the crazy cool tech you used to build your hack!"),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"\"Stockslate uses the Bloomberg API and is built on the MEAN stack. This means it's a single page app and requires no reloads.”")),"\n",a.createElement(t.h3,null,"a. What did you use to build it?"),"\n",a.createElement(t.p,null,"Feel free to rhyme off some of the technologies and APIs you combined to make your hack."),"\n",a.createElement(t.p,null,"Highlight how certain technologies made your hack possible but don't do this for every technology or this section will become too long."),"\n",a.createElement(t.h3,null,"b. What was challenging about it?"),"\n",a.createElement(t.p,null,"This is where you can briefly share how you overcame different challenges over your 36 hours hacking (we know it won't have been easy)!"),"\n",a.createElement(t.p,null,"Share also technologies you combined together in ways that may not have been done before. This is a great spot to talk about what makes your Hack special from a technial perspective."),"\n",a.createElement(t.h1,null,"6. Show how it works"),"\n",a.createElement(t.p,null,"This is where the focus is on your hack! Make it count!"),"\n",a.createElement(t.p,null,"Plan out 2-4 key features or points you want to highlight in your hack. Focus on these points so you don't end up rambling as you click around your hack."),"\n",a.createElement(t.p,null,"As you demonstrate your hack, make sure you narrate what you're doing, what the hack is doing, and why it's super cool!"),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"“See how easy it is to add a stock to your list”")),"\n",a.createElement(t.h1,null,"7. Say benefits, not features"),"\n",a.createElement(t.p,null,"As you plan your demo, think about highlighting benefits, not features. This means don't simply explain what your hack is doing, but hint at why that is important and valuable."),"\n",a.createElement(t.p,null,"A benefits, not features perspective will help you focus on the parts of your hack that will have greatest impact."),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"“Investor Scores mean no more manual analysis”")),"\n",a.createElement(t.h1,null,"8. What does this result in for the end user?"),"\n",a.createElement(t.p,null,"Focus on the end goal, the impact, the core value of your hack. Use situations and stories of how users could use your hack to help the audience realize why your hack is so cool!"),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"“Investor Scores are a way to intuitively test your strategy”")),"\n",a.createElement(t.h1,null,"9. Close Strong"),"\n",a.createElement(t.p,null,"Repeat your core value, why your hack is import and would have a beneficial impact on your users."),"\n",a.createElement(t.p,null,"Reiterate what tech you used to build your hack."),"\n",a.createElement(t.p,null,"Conclude with a reiteration of your single sentence description that you started your demo with."),"\n",a.createElement(t.h1,null,"Go give a great demo!"),"\n",a.createElement(t.p,null,"Voila! 9 steps that should help guide you to giving a great demo for your hack!"),"\n",a.createElement(t.h1,null,"About the Authors"),"\n",a.createElement(t.p,null,"Both Andrew and Brandon are dedicated to helping hackers get their ideas understood and seen by the world. What makes them effective is their entrepreneurial mindset and being hackers themselves. Their experience includes winning national pitch competitions and hackathons, with over $30,000 in combined winnings."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Brandon Chow")," is a digital marketer focused on helping tech companies create more predictable sales pipelines through educating customers. As a serial entrepreneur, he has started businesses in industries such as: web analytics, sports & recreation, and IT hosting. He is graduating in December 2018, and you can contact him (",a.createElement(t.a,{href:"mailto:me@branchow.com"},"me@branchow.com"),") if you are looking to scale your sales or want to learn more about startups."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Andrew Paradi")," is a software engineer at Square building scalable infrastructure for the growing Cash App. He graduated from University of Waterloo Computer Science in April 2018. Find his projects on Github (",a.createElement(t.a,{href:"https://github.com/adrw"},"@adrw"),"), portfolio on his website (",a.createElement(t.a,{href:"https://www.adrw.xyz"},"adrw.xyz"),"), or contact him (",a.createElement(t.a,{href:"mailto:andrew@adrw.ch"},"andrew@adrw.ch"),") if your team wants to ship products and marketing sales copy that better resonates with users."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},i=n(4765);function s(e){return a.createElement(i.Z,e,a.createElement(l,e))}i.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-blog-2018-09-15-how-to-demo-abc-framework-md-5fe4c94defd9ec7a0dd6.js.map