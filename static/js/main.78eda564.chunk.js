(this["webpackJsonpreact-movies"]=this["webpackJsonpreact-movies"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(7),r=a.n(s),i=(a(13),a(2)),l=a(3),o=a(5),h=a(4),j=a(0);function d(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"green darken-1",children:Object(j.jsxs)("div",{className:"nav-wrapper",children:[Object(j.jsx)("a",{href:"#",className:"brand-logo",children:"React Movies"}),Object(j.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down ",children:Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"!#",children:"Repo"})})})]})})})}function b(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("footer",{className:"page-footer  green lighten-2",children:Object(j.jsx)("div",{className:"footer-copyright",children:Object(j.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(j.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})})}var p=a(8);function m(e){var t=e.Title,a=e.Year,n=e.imdbID,c=e.Type,s=e.Poster;return Object(j.jsxs)("div",{id:n,className:"card movie",children:[Object(j.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===s?Object(j.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x445?text=".concat(t)}):Object(j.jsx)("img",{className:"activator",src:s})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(j.jsxs)("p",{children:[a," ",Object(j.jsxs)("span",{className:"right",children:[" ",c," "]})]})]})]})}function u(e){var t=e.movies,a=void 0===t?[]:t;return Object(j.jsx)("div",{className:"movies",children:a.length?a.map((function(e){return Object(j.jsx)(m,Object(p.a)({},e),e.imdbID)})):Object(j.jsx)("span",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e..."})})}var O=function(){return Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"indeterminate"})})},v=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={search:"",type:"all"},e.handleKey=function(t){"Enter"===t.key&&e.props.handlePress(e.state.search)},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.handlePress(e.state.search,e.state.type)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col s12",children:Object(j.jsxs)("div",{className:"input-field ",children:[Object(j.jsx)("input",{className:"validate",placeholder:"search",type:"search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey}),Object(j.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.handlePress(e.state.search,e.state.type)},children:"Search"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:[Object(j.jsxs)("label",{className:"radio",children:[Object(j.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(j.jsx)("span",{children:"All"})]}),Object(j.jsxs)("label",{className:"radio",children:[Object(j.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(j.jsx)("span",{children:"Movies only"})]}),Object(j.jsxs)("label",{className:"radio",children:[Object(j.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(j.jsx)("span",{children:"Series only"})]})]})})]})}}]),a}(c.a.Component),x="207af2f4",f=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={movies:[],loading:!0},e.handlePress=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("http://www.omdbapi.com/?apikey=".concat(x,"&s=").concat(t).concat("all"!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.omdbapi.com/?apikey=".concat(x,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(j.jsxs)("main",{className:"container content",children:[Object(j.jsx)(v,{handlePress:this.handlePress}),a?Object(j.jsx)(O,{}):Object(j.jsx)(u,{movies:t})]})}}]),a}(c.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(f,{}),Object(j.jsx)(b,{})]})}}]),a}(c.a.Component);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.78eda564.chunk.js.map