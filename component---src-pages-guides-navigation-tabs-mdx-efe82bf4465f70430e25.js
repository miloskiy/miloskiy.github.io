(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),b=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),c=a("TSYQ"),d=a.n(c),u=a("QH2O"),p=a.n(u),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,s=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),x=a("dI71"),f=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===o,s=new RegExp(o+"/?(#.*)?$"),l=n.replace(s,a);return Object(m.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(m.b)(b.Link,{className:f.link,to:""+l},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},i))))))},t}(o.a.Component),v=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,c=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,p=c.tabs,g=c.title,x=c.theme,f=c.description,y=c.keywords,N=Object(T.a)().interiorTheme,k=Object(b.useStaticQuery)("2456312558").site.pathPrefix,P=k?n.pathname.replace(k,""):n.pathname,C=p?P.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",I=x||N;return Object(m.b)(l.a,{tabs:p,homepage:!1,theme:I,pageTitle:g,pageDescription:f,pageKeywords:y,titleType:u},Object(m.b)(h,{title:o?Object(m.b)(o,null):g,label:"label",tabs:p,theme:I}),p&&Object(m.b)(w,{title:g,slug:P,tabs:p,currentTab:C}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:d})),Object(m.b)(O.a,{pageContext:t,location:n,slug:P,tabs:p,currentTab:C}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ndPe:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n,o=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),b=a("013z"),s=(a("qKvR"),{}),l=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),c={_frontmatter:s},d=b.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(d,Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"PageDescription"},Object(r.b)("p",null,"You have the option of adding tabs to your pages. This is only recommended if\nyou have several pages that will use the same tabs. If you only have one page\nwith a set of tabs, it might be better for discoverability to change the tabs to\nmenu items.")),Object(r.b)("h2",null,"Tabs in YAML"),Object(r.b)("p",null,"To create a tabbed page, you just need to point the theme to the path of your\nfirst tab. This is the structure of the YAML configuration for this page and\nit’s siblings."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"- title: Guides\n  pages:\n    - title: Configuration\n      path: /guides/configuration\n    - title: Shadowing\n      path: /guides/shadowing\n    - title: Styling\n      path: /guides/styling\n    - title: Navigation\n      path: /guides/navigation/sidebar\n")),Object(r.b)("h2",null,"File structure"),Object(r.b)("p",null,"Let’s check out the directory structure for this page. Notice how you’ll add\nanother directory that corresponds with the one in the YAML file."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),".\n├── pages\n│   └── guides\n│       ├── configuration.mdx\n│       ├── shadowing.mdx\n│       ├── styling.mdx\n│       └── navigation\n│           ├── tabs.mdx\n│           └── sidebar.mdx\n")),Object(r.b)("h2",null,"Markdown updates"),Object(r.b)("p",null,"The last step is to add the name of your tabs to the front matter of each\nmarkdown file that has tabs."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-markdown"}),"---\ntitle: Sidebar\ntabs: ['Sidebar', 'Tabs']\n---\n")),Object(r.b)("h3",null,"Tabs with apostrophes"),Object(r.b)("p",null,"If your tab name contains an apostrophe, you only need to include the\ngrammatically correct text in the frontmatter. Your file name and\n",Object(r.b)("inlineCode",{parentName:"p"},"nav-items.yaml")," should ",Object(r.b)("strong",{parentName:"p"},"not")," include the apostrophe."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-markdown"}),"---\ntitle: Sidebar\ntabs: ['Sidebar', \"What’s new\"]\n---\n")),Object(r.b)("p",null,"For the ",Object(r.b)("em",{parentName:"p"},"“What’s new”")," tab above, the source file would be ",Object(r.b)("inlineCode",{parentName:"p"},"whats-new.mdx"),", and\nthe path would look like ",Object(r.b)("inlineCode",{parentName:"p"},"/guides/navigation/whats-new"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-navigation-tabs-mdx-efe82bf4465f70430e25.js.map