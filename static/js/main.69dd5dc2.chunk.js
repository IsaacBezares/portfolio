(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(21),i=a.n(o),s=(a(55),a(5)),r=a(6),l=a(19),j=a(8),h=a(7),d=a(48),m=a(9),b=(a(56),a(90)),u=a(95),p=(a(57),a(0)),O=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("a",{className:"button",href:this.props.url,children:[Object(p.jsx)("button",{children:this.props.text}),Object(p.jsx)("button",{className:"button_bottom",children:this.props.text})]})}}]),a}(n.Component),x=(a(59),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"letterActive",value:function(e){var t=e.target;(t.classList.contains("word-top")||t.classList.contains("word-bottom"))&&(t.parentNode.classList.add("word-active"),setTimeout((function(){t.parentNode.classList.remove("word-active")}),2e3))}},{key:"render",value:function(){var e=this.props.text.split(" ").map((function(e){return Object(p.jsxs)("div",{className:"word",children:[Object(p.jsx)("div",{className:"word-top",children:e}),Object(p.jsx)("div",{className:"word-bottom",children:e})]})}));return Object(p.jsx)("sub",{className:"subtitle",onMouseOver:this.letterActive,children:e})}}]),a}(n.Component)),f=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={loading:!1},n.load(),n}return Object(r.a)(a,[{key:"load",value:function(){var e=this;setTimeout((function(){e.setState({loading:!0})}),200),setTimeout((function(){e.props.onStateChange(!0)}),500)}},{key:"componentWillUnmount",value:function(){this.props.onStateChange(!1)}},{key:"render",value:function(){return Object(p.jsx)("main",{children:Object(p.jsx)(b.a,{in:this.state.loading,timeout:500,children:Object(p.jsxs)(u.a,{container:!0,alignItems:"center",item:!0,direction:"column",justify:"center",className:"about",children:[Object(p.jsx)("h1",{className:"title",children:"Hey, it's Isaac Bezares"}),Object(p.jsx)(x,{text:"I'm a mobile & back-end devoloper currently based in Chiapas, Mexico"}),Object(p.jsx)(x,{text:"Hit me up and let's create something special"}),Object(p.jsx)(O,{text:"view projects",url:"/portfolio"})]})})})}}]),a}(n.Component),g=(a(63),a(64),a(94)),v=a(96),k=a(16),y=(a(68),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={showProject:!1},n.showProject=n.showProject.bind(Object(l.a)(n)),n.hideProject=n.hideProject.bind(Object(l.a)(n)),n}return Object(r.a)(a,[{key:"showProject",value:function(e){this.setState({showProject:!0})}},{key:"hideProject",value:function(e){this.setState({showProject:!1})}},{key:"render",value:function(){var e=this.props.project,t="private"===e.code;return Object(p.jsxs)("div",{className:"project",children:[Object(p.jsxs)("div",{className:"project-item",children:[Object(p.jsx)("img",{className:"project-img",src:e.img,alt:"Isaac Bezares Brand Logo"}),Object(p.jsx)("div",{className:"project-overlay",children:Object(p.jsx)("div",{className:"project-buttons",children:Object(p.jsxs)("button",{className:"project-button",onClick:this.showProject,children:[Object(p.jsx)(k.a,{icon:"eye"}),"View Project"]})})})]}),Object(p.jsx)("div",{className:"project-background ".concat(this.state.showProject?"project-background-show":""," "),children:Object(p.jsxs)("div",{className:"project-modal ".concat(this.state.showProject?"project-modal-show":""),children:[Object(p.jsx)("button",{className:"project-close",onClick:this.hideProject,children:Object(p.jsx)(k.a,{icon:"times"})}),Object(p.jsx)("div",{className:"project-left",children:Object(p.jsx)("img",{className:"project-img-modal",src:e.img,alt:"Project Image"})}),Object(p.jsxs)("div",{className:"project-right",children:[Object(p.jsx)("div",{className:"project-label",children:"Project"}),Object(p.jsx)("div",{className:"project-name",children:e.name}),Object(p.jsx)("ul",{className:"project-skills",children:e.technologies.map((function(e){return Object(p.jsx)("li",{className:"project-skill",children:e.name})}))}),Object(p.jsx)("div",{className:"project-label",children:"About"}),Object(p.jsx)("p",{className:"project-summary",children:e.summary}),Object(p.jsxs)("a",{href:e.demo,className:"project-button project-button-modal",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)(k.a,{icon:"eye"}),"Demo"]}),t?Object(p.jsxs)("button",{className:"project-button project-button-modal",disabled:t,children:[Object(p.jsx)(k.a,{icon:"eye"}),"Private"]}):Object(p.jsxs)("a",{href:e.code,className:"project-button project-button-modal",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)(k.a,{icon:"code"}),"Code"]})]})]})})]})}}]),a}(n.Component)),w=a.p+"static/media/portfolio.1652c2b7.png",N=a.p+"static/media/kitchef.05035e94.png",S=a.p+"static/media/ecommerce.25f35be5.png",A=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={loading:!1},n.load=n.load.bind(Object(l.a)(n)),n.load(),n.projects={ecommerce:{name:"E-Commerce",summary:"The reason behind this project was to test my skills and reinforce my knowledge by developing a fully functional traditional ecommerce application, with payment processing, shopping cart, search interface, session manager, orders, etc.\n\nOne of my objectives was to do the project correctly, with the best practices that I knew of and that i could find, throughout the development I improved as a programmer because trying to do the best possible presented many challenges that I had to solve on my own. I learned to read documentation and improved my research skills.\n\nWith this project I learned functional programming, consume third-party apis in Android native, to use projections in Rest API\u2019s, implement authentication by token, consume an API with Retrofit2 and use observers with RxJava",img:S,demo:"https://play.google.com/store/apps/details?id=com.bessarez.ecommercemobile",code:"https://github.com/IsaacBezares/ecommerce-mobile",technologies:[{name:"Java"},{name:"Spring Boot"},{name:"JWT"},{name:"Projections"},{name:"RxJava"},{name:"Error handling"},{name:"Stripe"},{name:"PostgreSQL"},{name:"Jetpack"},{name:"Android studio"},{name:"Retrofit2"},{name:"Streams"},{name:"Multilingual"}]},kitchef:{name:"Kitchef",summary:"Has it ever happened to you that you have no idea what to do for lunch today or throughout the week?\nKitchef is a meal planner that provides you with a menu of 3 meals per day so that you don't have to think or decide what to cook, the application adapts to your tastes and opens a world to new recipes that you did not know of.\n\nIn this project I was responsible for the backend implementation, to expand my repertoire of skills I decided to implement a non-relational database like MongoDB, use a framework that I hadn't used actively like NodeJS, and a API language different from rest like GraphQL .\n\nThanks to my previous experience with API development I managed to adapt to this new environment easily, the most challenging thing in this project was the change of thinking from SQL to NOSQL as I didn't want to make the mistake of relating all the collections as I would in SQL, I had to research from different sources to implement a schema that would take all the advantages of a non-relational database.",img:N,demo:"https://github.com/IsaacBezares/kitchef-back",code:"https://github.com/IsaacBezares/kitchef-back",technologies:[{name:"NodeJS"},{name:"ExpressJS"},{name:"MongoDB"},{name:"Mongoose"},{name:"GraphQL"},{name:"JWT"},{name:"SendGrid"}]},portfolio:{name:"Portfolio",summary:"The idea behind this project was to create a showcase of all my big projects for the past year. I tried to keep the UI as simple as possible without any fluff. \n\n This is a Single Page Application and is built using ReactJS.",img:w,demo:"https://isaacbezares.github.io/",code:"https://github.com/IsaacBezares/portfolio",technologies:[{name:"HTML & CSS"},{name:"JavaScript"},{name:"ReactJS"},{name:"Responsive"},{name:"UI/UX"}]}},n}return Object(r.a)(a,[{key:"load",value:function(){var e=this;setTimeout((function(){e.setState({loading:!0})}),200)}},{key:"render",value:function(){var e=this.state.loading;return Object(p.jsx)("div",{className:"portfolio",children:Object(p.jsxs)(u.a,{container:!0,spacing:6,children:[Object(p.jsxs)(g.a,{mdUp:!0,children:[Object(p.jsx)(v.a,{direction:"right",in:e,mountOnEnter:!0,unmountOnExit:!0,timeout:500,children:Object(p.jsx)(u.a,{container:!0,item:!0,children:Object(p.jsx)(y,{project:this.projects.ecommerce})})}),Object(p.jsx)(v.a,{direction:"left",in:e,mountOnEnter:!0,unmountOnExit:!0,timeout:500,children:Object(p.jsx)(u.a,{container:!0,item:!0,children:Object(p.jsx)(y,{project:this.projects.kitchef})})}),Object(p.jsx)(v.a,{direction:"right",in:e,mountOnEnter:!0,unmountOnExit:!0,timeout:500,children:Object(p.jsx)(u.a,{container:!0,item:!0,children:Object(p.jsx)(y,{project:this.projects.portfolio})})})]}),Object(p.jsxs)(g.a,{smDown:!0,children:[Object(p.jsxs)(u.a,{container:!0,item:!0,direction:"row",spacing:6,xs:12,children:[Object(p.jsx)(v.a,{direction:"right",in:e,mountOnEnter:!0,unmountOnExit:!0,timeout:500,children:Object(p.jsx)(u.a,{container:!0,item:!0,sm:6,xs:12,children:Object(p.jsx)(y,{project:this.projects.ecommerce})})}),Object(p.jsx)(v.a,{direction:"left",in:e,mountOnEnter:!0,unmountOnExit:!0,timeout:500,children:Object(p.jsx)(u.a,{container:!0,item:!0,sm:6,xs:12,children:Object(p.jsx)(y,{project:this.projects.kitchef})})})]}),Object(p.jsx)(u.a,{container:!0,item:!0,direction:"row",xs:12,spacing:6,children:Object(p.jsx)(v.a,{direction:"right",in:e,mountOnEnter:!0,unmountOnExit:!0,timeout:500,children:Object(p.jsx)(u.a,{container:!0,item:!0,sm:6,xs:12,children:Object(p.jsx)(y,{project:this.projects.portfolio})})})})]})]})})}}]),a}(n.Component),I=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={loading:!1},n.load(),n}return Object(r.a)(a,[{key:"load",value:function(){var e=this;setTimeout((function(){e.setState({loading:!0})}),100),setTimeout((function(){e.props.onStateChange(!0)}),500)}},{key:"componentWillUnmount",value:function(){this.props.onStateChange(!1)}},{key:"render",value:function(){return Object(p.jsxs)("main",{className:"main",children:[Object(p.jsx)(v.a,{direction:"down",in:this.state.loading,mountOnEnter:!0,unmountOnExit:!0,timeout:500,children:Object(p.jsxs)(u.a,{container:!0,direction:"column",children:[Object(p.jsx)("h2",{className:"portfolio-title",children:"Portfolio"}),Object(p.jsx)("span",{className:"portfolio-sub",children:"// These are my favorite projects I've worked on for the past year. Have a look around and make sure to hit me up!"})]})}),Object(p.jsx)(A,{})]})}}]),a}(n.Component),E=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsx)(d.a,{basename:"/",children:Object(p.jsxs)(m.c,{children:[Object(p.jsx)(m.a,{exact:!0,path:"/",children:Object(p.jsx)(f,{onStateChange:this.props.onStateChange})}),Object(p.jsx)(m.a,{exact:!0,path:"/portfolio",children:Object(p.jsx)(I,{onStateChange:this.props.onStateChange})})]})})}}]),a}(n.Component),C=(a(70),"data:image/png;base64,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"),P=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"header",children:Object(p.jsxs)("a",{href:"/",className:"brand_logo",children:[Object(p.jsx)("source",{srcSet:C+" 1x",media:"(min-width: 120em)"}),Object(p.jsx)("img",{srcSet:C+" 1x",alt:"Isaac B. Brand Logo"})]})})}}]),a}(n.Component),B=(a(71),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"contact",children:Object(p.jsxs)("ul",{className:"contact-list",children:[Object(p.jsx)("li",{className:"contact-item",children:Object(p.jsxs)("a",{href:"https://www.linkedin.com/in/isaac-bezares-barajas-b290a6196/",className:"contact-link contact-link-linkedin",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("span",{className:"contact-label",children:"Linkedin"}),Object(p.jsx)(k.a,{icon:["fab","linkedin"]})]})}),Object(p.jsx)("li",{className:"contact-item",children:Object(p.jsxs)("a",{href:"https://github.com/IsaacBezares",className:"contact-link contact-link-github",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("span",{className:"contact-label",children:"Github"}),Object(p.jsx)(k.a,{icon:["fab","github"]})]})}),Object(p.jsx)("li",{className:"contact-item",children:Object(p.jsxs)("a",{href:"mailto:isaacbezares@hotmail.com",className:"contact-link contact-link-email",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("span",{className:"contact-label",children:"Email"}),Object(p.jsx)(k.a,{icon:["fas","envelope"]})]})}),Object(p.jsx)("li",{className:"contact-item",children:Object(p.jsxs)("a",{href:"https://drive.google.com/file/d/1r3q2ONimoPdr9J5EpscNW2EL_qyyH2Y1/view?usp=sharing",className:"contact-link contact-link-resume",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("span",{className:"contact-label",children:"Resume"}),Object(p.jsx)(k.a,{icon:["fas","portrait"]})]})})]})})}}]),a}(n.Component)),D=(a(72),a(27)),L=a(42),H=a(24),K=(a(73),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(u.a,{container:!0,item:!0,direction:"row",justify:"center",alignItems:"center",className:"footer",children:[Object(p.jsx)(u.a,{item:!0,sm:6,children:Object(p.jsx)("span",{className:"gray-text",children:"\xa9 2021 Isaac Bezares. All Rights Reserved."})}),Object(p.jsxs)(u.a,{item:!0,container:!0,sm:6,justify:"space-around",children:[Object(p.jsxs)(u.a,{item:!0,children:[Object(p.jsx)("span",{className:"gray-text",children:"Email: "}),Object(p.jsx)("span",{className:"white-text",children:"isaacbezares@hotmail.com"})]}),Object(p.jsxs)(u.a,{item:!0,children:[Object(p.jsx)("span",{className:"gray-text",children:"Tel: "}),Object(p.jsx)("span",{className:"white-text",children:"+52 9616571174"})]})]})]})}}]),a}(n.Component));H.b.add(D.c,D.a,D.d,D.e,L.a,L.b,D.b);var T=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={loadState:!1},n.handleLoadChange=n.handleLoadChange.bind(Object(l.a)(n)),n}return Object(r.a)(a,[{key:"handleLoadChange",value:function(e){this.setState({loadState:e})}},{key:"render",value:function(){var e=this.state.loadState;return Object(p.jsxs)("div",{children:[Object(p.jsx)(B,{}),Object(p.jsxs)(u.a,{container:!0,direction:"column",justify:"space-between",children:[Object(p.jsx)(P,{}),Object(p.jsx)(E,{onStateChange:this.handleLoadChange}),e&&Object(p.jsx)(K,{})]})]})}}]),a}(n.Component);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.69dd5dc2.chunk.js.map