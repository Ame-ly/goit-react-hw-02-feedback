(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),o=n.n(r),i=(n(13),n(4)),s=n(5),d=n(6),l=n(8),u=n(7),b=n(0),j=function(e){var t=e.onLeaveFeedback,n=e.options;return Object(b.jsx)("div",{children:n.map((function(e){return Object(b.jsx)("button",{type:"button",onClick:function(){return t(e)},children:e},e)}))})},h=function(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:t}),n]})};h.defaultProps={title:""};var v=h,O=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage,o=void 0===r?0:r;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["good: ",t]}),Object(b.jsxs)("li",{children:["neutral: ",n]}),Object(b.jsxs)("li",{children:["bad: ",c]}),Object(b.jsxs)("li",{children:["total: ",a]}),Object(b.jsxs)("li",{children:["POSITIVE FEEDBACK: ",o,"% "]})]})})};O.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var f=O,g=function(e){var t=e.message;return Object(b.jsx)("p",{children:t})};g.defaultProps={message:""};var x=g,p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return Math.round(t/n*100)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage(),o=Object.keys(this.state);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{title:"Please leave feedback",children:Object(b.jsx)(j,{options:o,onLeaveFeedback:this.onLeaveFeedback})}),Object(b.jsx)(v,{title:"Statistics",children:a>0?Object(b.jsx)(f,{good:t,neutral:n,bad:c,total:a,positivePercentage:r}):Object(b.jsx)(x,{message:"No feedback given"})})]})}}]),n}(c.Component);n(15);o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1cdc74de.chunk.js.map