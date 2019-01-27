(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return E});var n=t(0),l=t.n(n),r=t(4),c=t.n(r),i=t(148),s=t.n(i);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return i.withPrefix}),t.d(a,"navigate",function(){return i.navigate}),t.d(a,"push",function(){return i.push}),t.d(a,"replace",function(){return i.replace}),t.d(a,"navigateTo",function(){return i.navigateTo});var o=t(159),u=t.n(o);t.d(a,"PageRenderer",function(){return u.a});var m=t(48);t.d(a,"parsePath",function(){return m.a});var d=l.a.createContext({}),E=function(e){return l.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}E.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},149:function(e,a,t){"use strict";var n=t(7),l=t.n(n),r=t(51),c=t.n(r),i=t(0),s=t.n(i),o=t(4),u=t.n(o),m=(t(161),t(147)),d=function(e){return s.a.createElement("header",{id:"header",className:"alt"},s.a.createElement(m.Link,{to:"/",className:"logo"},s.a.createElement("span",null,s.a.createElement("span",{className:"tedx"},"TEDx"),"MCInnsbruck"),s.a.createElement("span",{className:"tedx-note"},s.a.createElement("span",{className:"x"},"x")," = independently organized TED event")),s.a.createElement("nav",null,s.a.createElement(m.Link,{to:"/callforpapers"},"Call for Papers"),s.a.createElement(m.Link,{to:"#tickets"},"Tickets"),s.a.createElement(m.Link,{to:"#contact"},"Contact")))};d.propTypes={onToggleMenu:u.a.func};var E=d,f=function(e){return s.a.createElement("nav",{id:"menu"},s.a.createElement("div",{className:"inner"},s.a.createElement("ul",{className:"links"},s.a.createElement("li",null,s.a.createElement(m.Link,{onClick:e.onToggleMenu,to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(m.Link,{onClick:e.onToggleMenu,to:"/landing"},"Landing")),s.a.createElement("li",null,s.a.createElement(m.Link,{onClick:e.onToggleMenu,to:"/generic"},"Generic")),s.a.createElement("li",null,s.a.createElement(m.Link,{onClick:e.onToggleMenu,to:"/elements"},"Elements"))),s.a.createElement("ul",{className:"actions vertical"},s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"button special fit"},"Get Started")),s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"button fit"},"Log In")))),s.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))};f.propTypes={onToggleMenu:u.a.func};var p=f,g=function(e){return s.a.createElement("section",{id:"contact"},s.a.createElement("div",{className:"inner"},s.a.createElement("section",null,s.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.3201115086594!2d11.395278215646982!3d47.26899661923139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d6bfc185d925b%3A0xcdad4d9263a755a6!2sUniversit%C3%A4tsstra%C3%9Fe+7%2C+6020+Innsbruck!5e0!3m2!1sen!2sat!4v1546513241848",width:"700",title:"location-map",height:"350",frameBorder:"0",style:{border:0}})),s.a.createElement("section",{className:"split"},s.a.createElement("section",null,s.a.createElement("div",{className:"contact-method"},s.a.createElement("span",{className:"icon alt fa-home"}),s.a.createElement("h3",null,"Address"),s.a.createElement("span",null,"Management Center Innsbruck",s.a.createElement("br",null),"Universitätsstraße 7",s.a.createElement("br",null),"6020 Innsbruck",s.a.createElement("br",null),"Tirol, Austria"))))))},h=function(e){return s.a.createElement("footer",{id:"footer"},s.a.createElement("div",{className:"inner"},s.a.createElement("section",null,s.a.createElement("ul",{className:"icons"},s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"icon alt fa-twitter"},s.a.createElement("span",{className:"label"},"Twitter"))),s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"icon alt fa-facebook"},s.a.createElement("span",{className:"label"},"Facebook"))),s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"icon alt fa-instagram"},s.a.createElement("span",{className:"label"},"Instagram"))),s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"icon alt fa-linkedin"},s.a.createElement("span",{className:"label"},"LinkedIn"))),s.a.createElement("li",null,s.a.createElement("a",{href:"mailto:info@tedxmcinnsbruck.at",className:"icon alt fa-envelope"},s.a.createElement("span",{className:"label"},"Email"))))),s.a.createElement("ul",{className:"copyright"},s.a.createElement("li",null,"© TEDxMCInnsbruck 2019"),s.a.createElement("li",null,s.a.createElement(m.Link,{to:"/imprint"},"Imprint")),s.a.createElement("li",null,"This independent TEDx event is operated under license from"," ",s.a.createElement("a",{href:"http://www.ted.com/tedx",target:"_blank"},"TED"),"."))))},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(c()(c()(t))),t}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},t.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},s.a.createElement("div",{id:"wrapper"},s.a.createElement(E,{onToggleMenu:this.handleToggleMenu}),e,s.a.createElement(g,null),s.a.createElement(h,null)),s.a.createElement(p,{onToggleMenu:this.handleToggleMenu}))},a}(s.a.Component);a.a=b},159:function(e,a,t){var n;e.exports=(n=t(162))&&n.default||n},161:function(e,a,t){},162:function(e,a,t){"use strict";t.r(a);t(32);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),i=t(68),s=t(2),o=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return l.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o}}]);
//# sourceMappingURL=0-9d18e01ae352f7b7eec7.js.map