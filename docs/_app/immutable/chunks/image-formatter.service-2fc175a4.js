var a=Object.defineProperty;var h=(n,i,t)=>i in n?a(n,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[i]=t;var s=(n,i,t)=>(h(n,typeof i!="symbol"?i+"":i,t),t);import{w as y}from"./website-801e2a24.js";const{cloudinaryURL:f,cloudinaryVersionFolder:$}=y,l=3,g=Symbol("imgService");class S{constructor(){s(this,"defaultCropMode","c_scale");s(this,"defaultQuality","q_auto");s(this,"defaultFormat","jpg");s(this,"defaultPictureFormat","webp");s(this,"buildCloudinaryURL",(i,t)=>{const c=`w_${t.width}`,d=t.height?`,h_${t.height}`:"",e=t.cropMode?t.cropMode:this.defaultCropMode,o=t.quality?t.quality:this.defaultQuality,r=`${c}${d},${e},${o}`,u=t.format?t.format:this.defaultFormat;return`${f}/${r}/${$}/${i}.${u}`});s(this,"getSizesSrcset",(i,t)=>{const c=[],d=t.width,e={...t};for(let o=1;o<=l;o++){e.width=d*o;const r=o===l?"":", ";c.push(`${this.buildCloudinaryURL(i,e)} ${e.width}w`+r)}return c});s(this,"getDensitySrcset",(i,t)=>{const c=[],d=t.width,e={...t};e.format=this.defaultPictureFormat;for(let o=1;o<=l;o++){e.width=d*o;const r=o===l?"":", ",u=o===1?"":` ${o}x`;c.push(`${this.buildCloudinaryURL(i,e)}`+u+r)}return c})}}export{S as I,g as k};