import{S as I,i as y,s as p,k as u,a as P,l as g,m as C,c as k,h as d,n as r,Z as z,X as E,b,G as _,B as v,_ as q}from"./index-2c550787.js";import{k as A}from"./image-formatter.service-4cc2bfe8.js";function G(l){let t,a,f,e,n,o;return{c(){t=u("picture"),a=u("source"),f=P(),e=u("img"),this.h()},l(i){t=g(i,"PICTURE",{});var s=C(t);a=g(s,"SOURCE",{srcset:!0,type:!0}),f=k(s),e=g(s,"IMG",{loading:!0,decoding:!0,src:!0,srcset:!0,width:!0,sizes:!0,alt:!0,class:!0}),s.forEach(d),this.h()},h(){r(a,"srcset",l[4]),r(a,"type","image/webp"),r(e,"loading","lazy"),r(e,"decoding","async"),z(e.src,n=l[5])||r(e,"src",n),r(e,"srcset",l[3]),r(e,"width",o=l[1].width),r(e,"sizes",l[0]),r(e,"alt","Lift Sample Images"),r(e,"class","svelte-9cm4o4"),E(e,"hoverEffect",l[2]==="true")},m(i,s){b(i,t,s),_(t,a),_(t,f),_(t,e)},p(i,[s]){s&16&&r(a,"srcset",i[4]),s&32&&!z(e.src,n=i[5])&&r(e,"src",n),s&8&&r(e,"srcset",i[3]),s&2&&o!==(o=i[1].width)&&r(e,"width",o),s&1&&r(e,"sizes",i[0]),s&4&&E(e,"hoverEffect",i[2]==="true")},i:v,o:v,d(i){i&&d(t)}}}function R(l,t,a){let{imgPath:f}=t,{sizes:e}=t,{params:n}=t,{hoverEffect:o="true"}=t,i="",s="",S="";const m=q(A);if(m){const c=m.getSizesSrcset(f,n),w=m.getDensitySrcset(f,n);S=c[0].split(" ")[0],c.forEach(h=>{a(3,i+=h)}),w.forEach(h=>{a(4,s+=h)})}else console.log("Image service not initialized");return l.$$set=c=>{"imgPath"in c&&a(6,f=c.imgPath),"sizes"in c&&a(0,e=c.sizes),"params"in c&&a(1,n=c.params),"hoverEffect"in c&&a(2,o=c.hoverEffect)},[e,n,o,i,s,S,f]}class D extends I{constructor(t){super(),y(this,t,R,G,p,{imgPath:6,sizes:0,params:1,hoverEffect:2})}}export{D as I};