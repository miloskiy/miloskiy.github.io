(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),b=a.n(i),l=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),m=a.n(p),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,b=r.subDirectory,o=i+"/edit/"+r.branch+b+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},h=a("FCXl"),y=a("dI71"),f=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),i=a===r,o=new RegExp(r+"/?(#.*)?$"),c=n.replace(o,a);return Object(u.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(u.b)(l.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},i))))))},t}(r.a.Component),N=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,p=t.titleType,m=s.tabs,j=s.title,y=s.theme,f=s.description,w=s.keywords,T=Object(v.a)().interiorTheme,k=Object(l.useStaticQuery)("2456312558").site.pathPrefix,A=k?n.pathname.replace(k,""):n.pathname,C=m?A.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",M=y||T;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:M,pageTitle:j,pageDescription:f,pageKeywords:w,titleType:p},Object(u.b)(g,{title:r?Object(u.b)(r,null):j,label:"label",tabs:m,theme:M}),m&&Object(u.b)(x,{title:j,slug:A,tabs:m,currentTab:C}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:d})),Object(u.b)(h.a,{pageContext:t,location:n,slug:A,tabs:m,currentTab:C}),Object(u.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},LvKH:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return O}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),b=a("013z"),l=(a("qKvR"),{}),o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},c=o("PageDescription"),s=o("InlineNotification"),d=o("Title"),p=o("Row"),m=o("Column"),u=o("Aside"),g={_frontmatter:l},j=b.a;function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(j,Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c,{mdxType:"PageDescription"},Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<Aside>")," component is a wrapper component that adds styling to make the\ntext display smaller than the default body text; using ",Object(i.b)("inlineCode",{parentName:"p"},"body-long-01")," and adds\nthe correct top border styles."),Object(i.b)("p",null,"It should only be used within a ",Object(i.b)("inlineCode",{parentName:"p"},"<Column>")," component with specific parameters.\n",Object(i.b)("inlineCode",{parentName:"p"},"<Column colMd={2} colLg={3} offsetMd={1} offsetLg={1}>"))),Object(i.b)(s,{kind:"warning",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Warning:")," If you use more than one ",Object(i.b)("inlineCode",{parentName:"p"},"<Aside>")," component on a single page, you\nneed to provide an accessibility label so that someone using assistive\ntechnology can quickly understand the purpose of the landmark. See\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Complementary_role#Labeling_landmarks"}),"Mozilla Developer Network’s documentation"),"\nfor more information. Props for accessibility labels are described in the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#props"}),"Props section")," below.")),Object(i.b)("h2",null,"Example"),Object(i.b)(d,{mdxType:"Title"},"With hanging rule"),Object(i.b)(p,{mdxType:"Row"},Object(i.b)(m,{colMd:5,colLg:8,mdxType:"Column"},Object(i.b)("p",null,"It is more important than ever that we own our own ethos, make palpable our\nbrand values, and incorporate an instantly identifiable IBMness in everything we\ndo."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Without aesthetic, design is either the humdrum repetition of familiar clichés\nor a wild scramble for novelty. Without aesthetic, the computer is but a\nmindless speed machine, producing effects without substance, form without\nrelevant content, or content without meaningful form."),Object(i.b)("cite",null,"– Paul Rand")),Object(i.b)("p",null,"Aesthetic is defined as the philosophical theory or set of principles governing\noutward appearance or actions.")),Object(i.b)(m,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},Object(i.b)(u,{"aria-label":"Example aside",mdxType:"Aside"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Good design is always good design.")),Object(i.b)("p",null,"What we borrow from our own design history is not a mid-century aesthetic in\nstylistic terms, but the modernist attitudes and approach used at the time.")))),Object(i.b)(d,{mdxType:"Title"},"Without hanging rule"),Object(i.b)(p,{mdxType:"Row"},Object(i.b)(m,{colMd:5,colLg:8,mdxType:"Column"},Object(i.b)("p",null,"Like our brand values, our design ethos must be palpable in everything we\nproduce. Our philosophy and principles are for designers and non-designers\nalike–anyone authoring or authorizing any form of design on behalf of IBM."),Object(i.b)("p",null,"They provide clear criteria for the conception, creativity and craftsmanship our\nbrand demands and our clients deserve. The expression of our philosophy may\nevolve and expand over time, but our principles are designed to endure, ensuring\neverything IBM is distinctly IBM.")),Object(i.b)(m,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},Object(i.b)(u,{"aria-label":"Example aside",hideRule:!0,mdxType:"Aside"},Object(i.b)("p",null,"A by-product of every experience with IBM should be time—time saved or time\nwell-spent.")))),Object(i.b)("h2",null,"Code"),Object(i.b)(d,{mdxType:"Title"},"With hanging rule"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-mdx",metastring:"path=components/Aside/Aside.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Aside",path:"components/Aside/Aside.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Aside"}),"<Column colMd={2} colLg={3} offsetMd={1} offsetLg={1}>\n  <Aside>\n\n**Good design is always good design.** What we borrow from our own design\nhistory is not a mid-century aesthetic in stylistic terms, but the modernist\nattitudes and approach used at the time.\n\n  </Aside>\n</Column>\n")),Object(i.b)(d,{mdxType:"Title"},"Without hanging rule"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-mdx",metastring:"path=components/Aside/Aside.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Aside",path:"components/Aside/Aside.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Aside"}),"<Column colMd={2} colLg={3} offsetMd={1} offsetLg={1} hideRule>\n  <Aside>\n\nA by-product of every experience with IBM should be time—time saved or time\nwell-spent.\n\n  </Aside>\n</Column>\n")),Object(i.b)("h3",null,"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"property"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"propType"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aria-label"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify an ",Object(i.b)("inlineCode",{parentName:"td"},"aria-label")," value to provide a label to the inner aside element.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aria-labelledBy"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify an ",Object(i.b)("inlineCode",{parentName:"td"},"aria-labelledby")," value that references the id of an existing element to serve as a label for the inner aside element.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"children"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"node"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"className"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add custom class name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hideRule"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hide the hanging rule")))))}O.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-aside-mdx-ed69c7a071b84b4a8f67.js.map