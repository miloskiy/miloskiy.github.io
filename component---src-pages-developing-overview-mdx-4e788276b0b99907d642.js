(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),s=a.n(r),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),u=a.n(b),d=a("QH2O"),m=a.n(d),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,s=o.subDirectory,i=r+"/edit/"+o.branch+s+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),x=a("dI71"),y=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),r=a===o,i=new RegExp(o+"/?(#.*)?$"),c=n.replace(i,a);return Object(p.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(p.b)(l.Link,{className:y.link,to:""+c},e))}));return Object(p.b)("div",{className:y.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:y.list},r))))))},t}(o.a.Component),v=a("MjG9"),f=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,m=b.tabs,j=b.title,x=b.theme,y=b.description,T=b.keywords,N=Object(f.a)().interiorTheme,k=Object(l.useStaticQuery)("2456312558").site.pathPrefix,P=k?n.pathname.replace(k,""):n.pathname,C=m?P.split("/").filter(Boolean).slice(-1)[0]||s()(m[0],{lower:!0}):"",I=x||N;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:I,pageTitle:j,pageDescription:y,pageKeywords:T,titleType:d},Object(p.b)(h,{title:o?Object(p.b)(o,null):j,label:"label",tabs:m,theme:I}),m&&Object(p.b)(w,{title:j,slug:P,tabs:m,currentTab:C}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:u})),Object(p.b)(O.a,{pageContext:t,location:n,slug:P,tabs:m,currentTab:C}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},sCht:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),l=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=i("PageDescription"),b=i("InlineNotification"),u={_frontmatter:l},d=s.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(d,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"},Object(r.b)("p",null,"The carbon theme uses Sass to take advantage of the carbon-components styles and\nvariables while authoring novel components. In addition, we use css modules to\nensure we don’t collide with devs and make sure our components are portable and\nshadowable.")),Object(r.b)("h2",null,"Local Styles"),Object(r.b)("p",null,"For your application’s local styles, you can just import your style sheet\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.gatsbyjs.org/docs/global-css/#adding-global-styles-without-a-layout-component"}),"directly into a ",Object(r.b)("inlineCode",{parentName:"a"},"gatsby-browser.js")),"\nfile at the root of your project."),Object(r.b)("p",null,"You can also use sass modules like we do in the theme, this would make it easier\nfor you to share your component with other theme consumers down the line."),Object(r.b)("p",null,"Every Sass file in your project automatically has access to the the following\ncarbon resources:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"colors – ",Object(r.b)("inlineCode",{parentName:"li"},"background: carbon--gray-10;")),Object(r.b)("li",{parentName:"ul"},"spacing - ",Object(r.b)("inlineCode",{parentName:"li"},"margin: $spacing-05;")),Object(r.b)("li",{parentName:"ul"},"theme-tokens - ",Object(r.b)("inlineCode",{parentName:"li"},"color: $text-01;")),Object(r.b)("li",{parentName:"ul"},"motion -\n",Object(r.b)("inlineCode",{parentName:"li"},"transition: all $duration--moderate-01 motion(entrance, productive);")),Object(r.b)("li",{parentName:"ul"},"typography - ",Object(r.b)("inlineCode",{parentName:"li"},"@include carbon--type-style('body-long-01');"))),Object(r.b)("h2",null,"Targeting theme components"),Object(r.b)(b,{mdxType:"InlineNotification"},Object(r.b)("p",null,"We reserve the right to change classes between major releases. Use this strategy\nat your own risk.")),Object(r.b)("p",null,"Theme component classes have a hash of their styles tacked on to the end. This\nis both to prevent collisions, and also to prevent sneaky breaking changes to\nyour styles if we update the class underneath you and you were relying on our\nstyles."),Object(r.b)("p",null,"However, you can target the classes without the hash by using a\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://css-tricks.com/almanac/selectors/a/attribute/"}),"partial selector"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"[class*='Banner-module--column'] {\n  color: $text-04;\n}\n")),Object(r.b)("p",null,"This will match the class that starts with ",Object(r.b)("inlineCode",{parentName:"p"},"Banner-module--column")," and would be\nimmune to any changes to the hash. We may at some point remove the hash if this\nbecomes an issue."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developing-overview-mdx-4e788276b0b99907d642.js.map