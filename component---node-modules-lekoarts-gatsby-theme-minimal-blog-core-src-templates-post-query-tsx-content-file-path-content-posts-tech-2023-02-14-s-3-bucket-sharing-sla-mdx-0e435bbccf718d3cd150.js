"use strict";(self.webpackChunkadrw_xyz=self.webpackChunkadrw_xyz||[]).push([[91],{4765:function(e,t,n){n.d(t,{F:function(){return d},Z:function(){return h}});var a=n(7294),r=n(8733),l=n(795),i=n(8377),o=n(6799),s=n(8871);var c=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(c,{post:t}))};const d=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(s.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function h(e){let{...t}=e;return a.createElement(u,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+s+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:s=null,canonicalUrl:c=""}=e;const m=(0,l.Z)(),{siteTitle:u,siteTitleAlt:d,siteUrl:h,siteDescription:p,siteImage:f,author:g,siteLanguage:y}=m,E={title:t?t+" | "+u:d,description:n||p,url:""+h+(i||""),image:""+h+(o||f)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:y}),a.createElement("title",null,E.title),a.createElement("meta",{name:"description",content:E.description}),a.createElement("meta",{name:"image",content:E.image}),a.createElement("meta",{property:"og:title",content:E.title}),a.createElement("meta",{property:"og:url",content:E.url}),a.createElement("meta",{property:"og:description",content:E.description}),a.createElement("meta",{property:"og:image",content:E.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:E.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:E.title}),a.createElement("meta",{name:"twitter:url",content:E.url}),a.createElement("meta",{name:"twitter:description",content:E.description}),a.createElement("meta",{name:"twitter:image",content:E.image}),a.createElement("meta",{name:"twitter:image:alt",content:E.description}),a.createElement("meta",{name:"twitter:creator",content:g}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),c?a.createElement("link",{rel:"canonical",href:c}):null,s)}},3225:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return s}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({p:"p",h2:"h2",sup:"sup",a:"a",section:"section",ol:"ol",li:"li",code:"code"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"S3 style object storage best practices would generally steer any software design doc away from sharing S3 buckets between microservices."),"\n",a.createElement(t.p,null,"Keeping buckets for single-service use simplifies access, read/write locking, schema migration, and many other issues."),"\n",a.createElement(t.p,null,"Yet, consider this case."),"\n",a.createElement(t.h2,null,"Case Study: Lettuce Weather"),"\n",a.createElement(t.p,null,"Consider an app Lettuce Weather. It has mobile apps. It also has a microservice backend architecture."),"\n",a.createElement(t.p,null,"To collect data to do forecasting, it has many crawler microservices which run constantly polling government and other weather data sources."),"\n",a.createElement(t.p,null,"The crawler services then send any new data of varying size (small 1kb JSON up to large radar files or 30mb images) to the main backend service: Weatherly",a.createElement(t.sup,null,a.createElement(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label"},"1")),"."),"\n",a.createElement(t.p,null,"Weatherly accepts streams of data from the crawlers, then dumps them to S3 for later post-processing."),"\n",a.createElement(t.p,null,"Weatherly has a background task which regularly handles the new data added to the S3 bucket, and precomputes new temperatures and forecasts into a database."),"\n",a.createElement(t.p,null,"To serve data to the mobile clients, Weatherly can do a quick lookup in database (or even Redis) since the longer computational work from the raw data in S3 has already been done."),"\n",a.createElement(t.p,null,"The mobile clients then cache forecasts locally so if Weatherly is down when the app is opened, the user still sees the most recent forecast while magically in the background newer ones are requested."),"\n",a.createElement(t.h2,null,"Poor Service SLAs"),"\n",a.createElement(t.p,null,"What if Weatherly has poor SLAs?"),"\n",a.createElement(t.p,null,"For example, say Weatherly is undergoing rapid development to support a new radar feature and frequent deploys (even occasional runtime failures) are causing material downtime."),"\n",a.createElement(t.p,null,"In the existing architecture, crawlers will start falling behind as they encounter failed requests trying to send the data to Weatherly which returns a 503 because it is down or the proxy router returns a 500 because the service isn't even online."),"\n",a.createElement(t.p,null,"When Weatherly comes back online, it may even be DOS'd (denial of service) by internal crawler services trying to send queued crawled data. Or if data wasn't queued since it waits on per-batch configuration from Weatherly, then potentially the crawlers have fallen behind and will have delayed data."),"\n",a.createElement(t.p,null,'While obviously the "correct" fix is to improve Weatherly SLAs with deploy and development process improvements, a shared S3 bucket provides an alternative path.'),"\n",a.createElement(t.h2,null,"Shared S3 Bucket Fixes SLAs"),"\n",a.createElement(t.p,null,"Consider a change to the above architecture where instead of crawler services sending data to Weatherly by RPC directly, they dump any crawled data into a shared S3 bucket."),"\n",a.createElement(t.p,null,"Then, when Weatherly is back online, it checks the shared S3 bucket for new data and does the regular post-processing."),"\n",a.createElement(t.p,null,"This fixes the previous architecture failure where the SLA of Weatherly ripples downstream to also decimate the SLA of the crawler services and data freshness."),"\n",a.createElement(t.p,null,"Notably, this assumes your S3 infrastructure has an excellent SLA. Generally, this is a safe assumption as even a self-hosted ",a.createElement(t.a,{href:"https://min.io"},"Minio")," cluster doesn't require frequent deploys and in my experience has yet to require downtime."),"\n",a.createElement(t.h2,null,"tl;dr"),"\n",a.createElement(t.p,null,"Consider intentional shared S3 buckets to prevent poor SLA in one service causing poor SLAs for your entire architecture."),"\n",a.createElement(t.section,{"data-footnotes":!0,className:"footnotes"},a.createElement(t.h2,{className:"sr-only",id:"footnote-label"},"Footnotes"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,{id:"user-content-fn-1"},"\n",a.createElement(t.p,null,"Thankfully, this is only an example service name, an entire cloud of microservices named with ",a.createElement(t.code,null,"-ly")," suffixes is insufferable. ",a.createElement(t.a,{href:"#user-content-fnref-1","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content"},"↩")),"\n"),"\n"),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},o=n(4765);function s(e){return a.createElement(o.Z,e,a.createElement(i,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-tech-2023-02-14-s-3-bucket-sharing-sla-mdx-0e435bbccf718d3cd150.js.map