import{S as T,i as G,s as U,C as V,D as q,q as y,E as C,m as g,r as B,h as u,n as d,F as W,b as E,G as _,H as oe,B as z,I as X,k as w,a as P,l as b,c as D,f as L,g as ie,d as ce,t as x,O as ne,w as A,x as F,y as N,u as ae,z as O,e as Z,Y as fe}from"../../../chunks/index-c0b2aefd.js";import{b as ee}from"../../../chunks/paths-9ec6a9c9.js";import{I as ue}from"../../../chunks/Image-4e478b08.js";function he(i){let e,s,l,t,r,n=[{viewBox:"0 0 16 16"},{version:"1.1"},{xmlns:"http://www.w3.org/2000/svg"},i[0]],o={};for(let m=0;m<n.length;m+=1)o=V(o,n[m]);return{c(){e=q("svg"),s=q("title"),l=y("more-icon"),t=q("g"),r=q("path"),this.h()},l(m){e=C(m,"svg",{viewBox:!0,version:!0,xmlns:!0});var a=g(e);s=C(a,"title",{});var f=g(s);l=B(f,"more-icon"),f.forEach(u),t=C(a,"g",{id:!0,"stroke-width":!0,"fill-rule":!0,"stroke-linecap":!0});var c=g(t);r=C(c,"path",{d:!0,id:!0}),g(r).forEach(u),c.forEach(u),a.forEach(u),this.h()},h(){d(r,"d","M1.5,14.5 L14.5,1 M15,0.5 L3,0.5 M15,0.5 L15,14.5"),d(r,"id","arrow"),d(t,"id","more-icon"),d(t,"stroke-width","1"),d(t,"fill-rule","evenodd"),d(t,"stroke-linecap","square"),W(e,o)},m(m,a){E(m,e,a),_(e,s),_(s,l),_(e,t),_(t,r)},p(m,[a]){W(e,o=oe(n,[{viewBox:"0 0 16 16"},{version:"1.1"},{xmlns:"http://www.w3.org/2000/svg"},a&1&&m[0]]))},i:z,o:z,d(m){m&&u(e)}}}function me(i,e,s){return i.$$set=l=>{s(0,e=V(V({},e),X(l)))},e=X(e),[e]}class _e extends T{constructor(e){super(),G(this,e,me,he,U,{})}}function te(i,e,s){const l=i.slice();return l[3]=e[s],l}function le(i,e,s){const l=i.slice();return l[6]=e[s],l}function de(i){let e,s;return{c(){e=w("li"),s=y("Design")},l(l){e=b(l,"LI",{});var t=g(e);s=B(t,"Design"),t.forEach(u)},m(l,t){E(l,e,t),_(e,s)},p:z,d(l){l&&u(e)}}}function ge(i){let e,s=i[3].roles,l=[];for(let t=0;t<s.length;t+=1)l[t]=se(le(i,s,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=Z()},l(t){for(let r=0;r<l.length;r+=1)l[r].l(t);e=Z()},m(t,r){for(let n=0;n<l.length;n+=1)l[n].m(t,r);E(t,e,r)},p(t,r){if(r&1){s=t[3].roles;let n;for(n=0;n<s.length;n+=1){const o=le(t,s,n);l[n]?l[n].p(o,r):(l[n]=se(o),l[n].c(),l[n].m(e.parentNode,e))}for(;n<l.length;n+=1)l[n].d(1);l.length=s.length}},d(t){ne(l,t),t&&u(e)}}}function se(i){let e,s=i[6]+"",l;return{c(){e=w("li"),l=y(s)},l(t){e=b(t,"LI",{});var r=g(e);l=B(r,s),r.forEach(u)},m(t,r){E(t,e,r),_(e,l)},p(t,r){r&1&&s!==(s=t[6]+"")&&ae(l,s)},d(t){t&&u(e)}}}function re(i){let e,s,l,t,r,n,o=i[3].title+"",m,a,f,c,p,k,M,H,I;t=new ue({props:{imgPath:i[3].thumbnailID,params:i[1],sizes:"(max-width: 700px) 100vw, 350px",alt:i[3].title+" thumbnail"}});function Y(h,v){return h[3].roles?ge:de}let S=Y(i),j=S(i);return k=new _e({props:{class:"more-icon"}}),{c(){e=w("div"),s=w("a"),l=w("div"),A(t.$$.fragment),r=P(),n=w("h2"),m=y(o),a=P(),f=w("ul"),j.c(),c=P(),p=w("div"),A(k.$$.fragment),H=P(),this.h()},l(h){e=b(h,"DIV",{class:!0});var v=g(e);s=b(v,"A",{class:!0,href:!0});var $=g(s);l=b($,"DIV",{class:!0});var J=g(l);F(t.$$.fragment,J),J.forEach(u),r=D($),n=b($,"H2",{class:!0});var K=g(n);m=B(K,o),K.forEach(u),a=D($),f=b($,"UL",{class:!0});var Q=g(f);j.l(Q),Q.forEach(u),c=D($),p=b($,"DIV",{class:!0});var R=g(p);F(k.$$.fragment,R),R.forEach(u),$.forEach(u),H=D(v),v.forEach(u),this.h()},h(){d(l,"class","project-thumbnail svelte-f7nm5f"),d(n,"class","project-title svelte-f7nm5f"),d(f,"class","roles svelte-f7nm5f"),d(p,"class","icon-container svelte-f7nm5f"),d(s,"class","card-grid svelte-f7nm5f"),d(s,"href",M=i[2]+"/projects/"+i[3].slug),d(e,"class","project-card svelte-f7nm5f")},m(h,v){E(h,e,v),_(e,s),_(s,l),N(t,l,null),_(s,r),_(s,n),_(n,m),_(s,a),_(s,f),j.m(f,null),_(s,c),_(s,p),N(k,p,null),_(e,H),I=!0},p(h,v){const $={};v&1&&($.imgPath=h[3].thumbnailID),v&1&&($.alt=h[3].title+" thumbnail"),t.$set($),(!I||v&1)&&o!==(o=h[3].title+"")&&ae(m,o),S===(S=Y(h))&&j?j.p(h,v):(j.d(1),j=S(h),j&&(j.c(),j.m(f,null))),(!I||v&1&&M!==(M=h[2]+"/projects/"+h[3].slug))&&d(s,"href",M)},i(h){I||(L(t.$$.fragment,h),L(k.$$.fragment,h),I=!0)},o(h){x(t.$$.fragment,h),x(k.$$.fragment,h),I=!1},d(h){h&&u(e),O(t),j.d(),O(k)}}}function pe(i){let e,s,l,t,r,n=i[0],o=[];for(let a=0;a<n.length;a+=1)o[a]=re(te(i,n,a));const m=a=>x(o[a],1,1,()=>{o[a]=null});return{c(){e=w("h1"),s=y("Projects"),l=P(),t=w("section");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=b(a,"H1",{});var f=g(e);s=B(f,"Projects"),f.forEach(u),l=D(a),t=b(a,"SECTION",{class:!0});var c=g(t);for(let p=0;p<o.length;p+=1)o[p].l(c);c.forEach(u),this.h()},h(){d(t,"class","project-grid svelte-f7nm5f")},m(a,f){E(a,e,f),_(e,s),E(a,l,f),E(a,t,f);for(let c=0;c<o.length;c+=1)o[c].m(t,null);r=!0},p(a,[f]){if(f&7){n=a[0];let c;for(c=0;c<n.length;c+=1){const p=te(a,n,c);o[c]?(o[c].p(p,f),L(o[c],1)):(o[c]=re(p),o[c].c(),L(o[c],1),o[c].m(t,null))}for(ie(),c=n.length;c<o.length;c+=1)m(c);ce()}},i(a){if(!r){for(let f=0;f<n.length;f+=1)L(o[f]);r=!0}},o(a){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)x(o[f]);r=!1},d(a){a&&u(e),a&&u(l),a&&u(t),ne(o,a)}}}function ve(i,e,s){let{projects:l}=e;const t={width:350},r=ee===void 0?"":ee;return i.$$set=n=>{"projects"in n&&s(0,l=n.projects)},[l,t,r]}class $e extends T{constructor(e){super(),G(this,e,ve,pe,U,{projects:0})}}function je(i){let e,s,l,t;return l=new $e({props:{projects:i[0].projects}}),{c(){e=w("meta"),s=P(),A(l.$$.fragment),this.h()},l(r){const n=fe("svelte-10jm0h7",document.head);e=b(n,"META",{name:!0,content:!0}),n.forEach(u),s=D(r),F(l.$$.fragment,r),this.h()},h(){document.title="Projects",d(e,"name","description"),d(e,"content","Full list of projects")},m(r,n){_(document.head,e),E(r,s,n),N(l,r,n),t=!0},p(r,[n]){const o={};n&1&&(o.projects=r[0].projects),l.$set(o)},i(r){t||(L(l.$$.fragment,r),t=!0)},o(r){x(l.$$.fragment,r),t=!1},d(r){u(e),r&&u(s),O(l,r)}}}function we(i,e,s){let{data:l}=e;return i.$$set=t=>{"data"in t&&s(0,l=t.data)},[l]}class Ie extends T{constructor(e){super(),G(this,e,we,je,U,{data:0})}}export{Ie as default};