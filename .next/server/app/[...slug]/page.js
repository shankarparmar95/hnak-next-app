(()=>{var e={};e.id=877,e.ids=[877],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4948:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>a.a,__next_app__:()=>h,originalPathname:()=>d,pages:()=>u,routeModule:()=>p,tree:()=>c});var r=n(482),i=n(9108),o=n(2563),a=n.n(o),s=n(8300),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);n.d(t,l);let c=["",{children:["[...slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,1672)),"/home/shankar/Workspace/HNAK/hnak-next-app/src/app/[...slug]/page.js"]}]},{loading:[()=>Promise.resolve().then(n.bind(n,3072)),"/home/shankar/Workspace/HNAK/hnak-next-app/src/app/[...slug]/loading.js"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,3881))).default(e)],apple:[async e=>(await Promise.resolve().then(n.bind(n,3601))).default(e)],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,1965)),"/home/shankar/Workspace/HNAK/hnak-next-app/src/app/layout.js"],error:[()=>Promise.resolve().then(n.bind(n,4791)),"/home/shankar/Workspace/HNAK/hnak-next-app/src/app/error.js"],loading:[()=>Promise.resolve().then(n.bind(n,5593)),"/home/shankar/Workspace/HNAK/hnak-next-app/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(n.bind(n,3243)),"/home/shankar/Workspace/HNAK/hnak-next-app/src/app/not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,3881))).default(e)],apple:[async e=>(await Promise.resolve().then(n.bind(n,3601))).default(e)],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/shankar/Workspace/HNAK/hnak-next-app/src/app/[...slug]/page.js"],d="/[...slug]/page",h={require:n,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/[...slug]/page",pathname:"/[...slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2808:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2583,23)),Promise.resolve().then(n.t.bind(n,6840,23)),Promise.resolve().then(n.t.bind(n,8771,23)),Promise.resolve().then(n.t.bind(n,3225,23)),Promise.resolve().then(n.t.bind(n,9295,23)),Promise.resolve().then(n.t.bind(n,3982,23))},5658:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,1476,23))},6470:()=>{},4861:(e,t,n)=>{Promise.resolve().then(n.bind(n,973))},5303:()=>{},973:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(5344),i=n(3729);function o({error:e,reset:t}){return(0,i.useEffect)(()=>{},[e]),(0,r.jsxs)("div",{children:[r.jsx("h2",{children:"Something went wrong!"}),r.jsx("button",{onClick:()=>t(),children:"Try again"})]})}},3072:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(5036);function i({children:e}){return r.jsx("div",{children:"Loading..."})}},1672:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>B});var r,i,o=n(5036);n(2);let a=require("lodash/get");var s=n.n(a);function l(e){return 9===e||32===e}function c(e){return e>=48&&e<=57}function u(e){return e>=97&&e<=122||e>=65&&e<=90}function d(e){return u(e)||95===e}let h=/\r\n|[\n\r]/g;function p(e,t){let n=0,r=1;for(let i of e.body.matchAll(h)){if("number"==typeof i.index||function(e,t){if(!e)throw Error(null!=t?t:"Unexpected invariant triggered.")}(!1),i.index>=t)break;n=i.index+i[0].length,r+=1}return{line:r,column:t+1-n}}function f(e,t){let n=e.locationOffset.column-1,r="".padStart(n)+e.body,i=t.line-1,o=e.locationOffset.line-1,a=t.line+o,s=1===t.line?n:0,l=t.column+s,c=`${e.name}:${a}:${l}
`,u=r.split(/\r\n|[\n\r]/g),d=u[i];if(d.length>120){let e=Math.floor(l/80),t=[];for(let e=0;e<d.length;e+=80)t.push(d.slice(e,e+80));return c+m([[`${a} |`,t[0]],...t.slice(1,e+1).map(e=>["|",e]),["|","^".padStart(l%80)],["|",t[e+1]]])}return c+m([[`${a-1} |`,u[i-1]],[`${a} |`,d],["|","^".padStart(l)],[`${a+1} |`,u[i+1]]])}function m(e){let t=e.filter(([e,t])=>void 0!==t),n=Math.max(...t.map(([e])=>e.length));return t.map(([e,t])=>e.padStart(n)+(t?" "+t:"")).join("\n")}class g extends Error{constructor(e,...t){var n,r,i;let{nodes:o,source:a,positions:s,path:l,originalError:c,extensions:u}=function(e){let t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t);super(e),this.name="GraphQLError",this.path=null!=l?l:void 0,this.originalError=null!=c?c:void 0,this.nodes=v(Array.isArray(o)?o:o?[o]:void 0);let d=v(null===(n=this.nodes)||void 0===n?void 0:n.map(e=>e.loc).filter(e=>null!=e));this.source=null!=a?a:null==d?void 0:null===(r=d[0])||void 0===r?void 0:r.source,this.positions=null!=s?s:null==d?void 0:d.map(e=>e.start),this.locations=s&&a?s.map(e=>p(a,e)):null==d?void 0:d.map(e=>p(e.source,e.start));let h=!function(e){return"object"==typeof e&&null!==e}(null==c?void 0:c.extensions)?void 0:null==c?void 0:c.extensions;this.extensions=null!==(i=null!=u?u:h)&&void 0!==i?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=c&&c.stack?Object.defineProperty(this,"stack",{value:c.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,g):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes){for(let n of this.nodes)if(n.loc){var t;e+="\n\n"+f((t=n.loc).source,p(t.source,t.start))}}else if(this.source&&this.locations)for(let t of this.locations)e+="\n\n"+f(this.source,t);return e}toJSON(){let e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function v(e){return void 0===e||0===e.length?void 0:e}function b(e,t,n){return new g(`Syntax Error: ${n}`,{source:e,positions:[t]})}Symbol.toStringTag;class A{constructor(e,t,n,r,i,o){this.kind=e,this.start=t,this.end=n,this.line=r,this.column=i,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(r||(r={})),function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"}(i||(i={}));class x{constructor(e){let t=new A(i.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==i.EOF)do if(e.next)e=e.next;else{let t=function(e,t){let n=e.source.body,r=n.length,o=t;for(;o<r;){let t=n.charCodeAt(o);switch(t){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++e.line,e.lineStart=o;continue;case 13:10===n.charCodeAt(o+1)?o+=2:++o,++e.line,e.lineStart=o;continue;case 35:return function(e,t){let n=e.source.body,r=n.length,o=t+1;for(;o<r;){let e=n.charCodeAt(o);if(10===e||13===e)break;if(y(e))++o;else if(_(n,o))o+=2;else break}return k(e,i.COMMENT,t,o,n.slice(t+1,o))}(e,o);case 33:return k(e,i.BANG,o,o+1);case 36:return k(e,i.DOLLAR,o,o+1);case 38:return k(e,i.AMP,o,o+1);case 40:return k(e,i.PAREN_L,o,o+1);case 41:return k(e,i.PAREN_R,o,o+1);case 46:if(46===n.charCodeAt(o+1)&&46===n.charCodeAt(o+2))return k(e,i.SPREAD,o,o+3);break;case 58:return k(e,i.COLON,o,o+1);case 61:return k(e,i.EQUALS,o,o+1);case 64:return k(e,i.AT,o,o+1);case 91:return k(e,i.BRACKET_L,o,o+1);case 93:return k(e,i.BRACKET_R,o,o+1);case 123:return k(e,i.BRACE_L,o,o+1);case 124:return k(e,i.PIPE,o,o+1);case 125:return k(e,i.BRACE_R,o,o+1);case 34:if(34===n.charCodeAt(o+1)&&34===n.charCodeAt(o+2))return function(e,t){let n=e.source.body,r=n.length,o=e.lineStart,a=t+3,s=a,c="",u=[];for(;a<r;){let r=n.charCodeAt(a);if(34===r&&34===n.charCodeAt(a+1)&&34===n.charCodeAt(a+2)){c+=n.slice(s,a),u.push(c);let r=k(e,i.BLOCK_STRING,t,a+3,(function(e){var t,n;let r=Number.MAX_SAFE_INTEGER,i=null,o=-1;for(let t=0;t<e.length;++t){let a=e[t],s=function(e){let t=0;for(;t<e.length&&l(e.charCodeAt(t));)++t;return t}(a);s!==a.length&&(i=null!==(n=i)&&void 0!==n?n:t,o=t,0!==t&&s<r&&(r=s))}return e.map((e,t)=>0===t?e:e.slice(r)).slice(null!==(t=i)&&void 0!==t?t:0,o+1)})(u).join("\n"));return e.line+=u.length-1,e.lineStart=o,r}if(92===r&&34===n.charCodeAt(a+1)&&34===n.charCodeAt(a+2)&&34===n.charCodeAt(a+3)){c+=n.slice(s,a),s=a+1,a+=4;continue}if(10===r||13===r){c+=n.slice(s,a),u.push(c),13===r&&10===n.charCodeAt(a+1)?a+=2:++a,c="",s=a,o=a;continue}if(y(r))++a;else if(_(n,a))a+=2;else throw b(e.source,a,`Invalid character within String: ${S(e,a)}.`)}throw b(e.source,a,"Unterminated string.")}(e,o);return function(e,t){let n=e.source.body,r=n.length,o=t+1,a=o,s="";for(;o<r;){let r=n.charCodeAt(o);if(34===r)return s+=n.slice(a,o),k(e,i.STRING,t,o+1,s);if(92===r){s+=n.slice(a,o);let t=117===n.charCodeAt(o+1)?123===n.charCodeAt(o+2)?function(e,t){let n=e.source.body,r=0,i=3;for(;i<12;){let e=n.charCodeAt(t+i++);if(125===e){if(i<5||!y(r))break;return{value:String.fromCodePoint(r),size:i}}if((r=r<<4|O(e))<0)break}throw b(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)}(e,o):function(e,t){let n=e.source.body,r=E(n,t+2);if(y(r))return{value:String.fromCodePoint(r),size:6};if(C(r)&&92===n.charCodeAt(t+6)&&117===n.charCodeAt(t+7)){let e=E(n,t+8);if(P(e))return{value:String.fromCodePoint(r,e),size:12}}throw b(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}(e,o):function(e,t){let n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw b(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}(e,o);s+=t.value,o+=t.size,a=o;continue}if(10===r||13===r)break;if(y(r))++o;else if(_(n,o))o+=2;else throw b(e.source,o,`Invalid character within String: ${S(e,o)}.`)}throw b(e.source,o,"Unterminated string.")}(e,o)}if(c(t)||45===t)return function(e,t,n){let r=e.source.body,o=t,a=n,s=!1;if(45===a&&(a=r.charCodeAt(++o)),48===a){if(c(a=r.charCodeAt(++o)))throw b(e.source,o,`Invalid number, unexpected digit after 0: ${S(e,o)}.`)}else o=j(e,o,a),a=r.charCodeAt(o);if(46===a&&(s=!0,a=r.charCodeAt(++o),o=j(e,o,a),a=r.charCodeAt(o)),(69===a||101===a)&&(s=!0,(43===(a=r.charCodeAt(++o))||45===a)&&(a=r.charCodeAt(++o)),o=j(e,o,a),a=r.charCodeAt(o)),46===a||d(a))throw b(e.source,o,`Invalid number, expected digit but got: ${S(e,o)}.`);return k(e,s?i.FLOAT:i.INT,t,o,r.slice(t,o))}(e,o,t);if(d(t))return function(e,t){let n=e.source.body,r=n.length,o=t+1;for(;o<r;){var a;if(u(a=n.charCodeAt(o))||c(a)||95===a)++o;else break}return k(e,i.NAME,t,o,n.slice(t,o))}(e,o);throw b(e.source,o,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":y(t)||_(n,o)?`Unexpected character: ${S(e,o)}.`:`Invalid character: ${S(e,o)}.`)}return k(e,i.EOF,r,r)}(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===i.COMMENT);return e}}function y(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function _(e,t){return C(e.charCodeAt(t))&&P(e.charCodeAt(t+1))}function C(e){return e>=55296&&e<=56319}function P(e){return e>=56320&&e<=57343}function S(e,t){let n=e.source.body.codePointAt(t);if(void 0===n)return i.EOF;if(n>=32&&n<=126){let e=String.fromCodePoint(n);return'"'===e?"'\"'":`"${e}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function k(e,t,n,r,i){let o=e.line,a=1+n-e.lineStart;return new A(t,n,r,o,a,i)}function j(e,t,n){if(!c(n))throw b(e.source,t,`Invalid number, expected digit but got: ${S(e,t)}.`);let r=e.source.body,i=t+1;for(;c(r.charCodeAt(i));)++i;return i}function E(e,t){return O(e.charCodeAt(t))<<12|O(e.charCodeAt(t+1))<<8|O(e.charCodeAt(t+2))<<4|O(e.charCodeAt(t+3))}function O(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function w(e,t){if(!e)throw Error(t)}function R(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return function(e,t){if(null===e)return"null";if(t.includes(e))return"[Circular]";let n=[...t,e];if("function"==typeof e.toJSON){let t=e.toJSON();if(t!==e)return"string"==typeof t?t:R(t,n)}else if(Array.isArray(e))return function(e,t){if(0===e.length)return"[]";if(t.length>2)return"[Array]";let n=Math.min(10,e.length),r=e.length-n,i=[];for(let r=0;r<n;++r)i.push(R(e[r],t));return 1===r?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}(e,n);return function(e,t){let n=Object.entries(e);return 0===n.length?"{}":t.length>2?"["+function(e){let t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"==typeof e.constructor){let t=e.constructor.name;if("string"==typeof t&&""!==t)return t}return t}(e)+"]":"{ "+n.map(([e,n])=>e+": "+R(n,t)).join(", ")+" }"}(e,n)}(e,t);default:return String(e)}}let N=globalThis.process&&"production"===globalThis.process.env.NODE_ENV?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;if("object"==typeof e&&null!==e){var n;let r=t.prototype[Symbol.toStringTag];if(r===(Symbol.toStringTag in e?e[Symbol.toStringTag]:null===(n=e.constructor)||void 0===n?void 0:n.name)){let t=R(e,[]);throw Error(`Cannot use ${r} "${t}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class T{constructor(e,t="GraphQL request",n={line:1,column:1}){"string"==typeof e||w(!1,`Body must be a string. Received: ${R(e,[])}.`),this.body=e,this.name=t,this.locationOffset=n,this.locationOffset.line>0||w(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||w(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}var L=n(6274);let $=()=>(0,o.jsxs)("div",{children:["Product Detail Page Here ",o.jsx("br",{}),o.jsx(L.default,{href:"/menna-o-fena/prayer-needs-mof/subha-mof",children:"Go to Product Listing Page"})]}),q=()=>(0,o.jsxs)("div",{children:["Product Listing Page Here",o.jsx("br",{}),o.jsx(L.default,{href:"/mma-lava-beads-jute-tassel",children:"Go to Product Detail Page"})]});async function I(e){let t=`query getRouteData($url: String!) {
    route(url: $url) {
      type
      __typename
      relative_url
      redirect_code
      ... on BrandDetailRoute {
        option_id
      }
      ... on CmsPage {
        identifier
        __typename
      }
      ... on CategoryInterface {
        id
        uid
        is_enabled
        is_landing_page
        is_enabled
        meta_title
        meta_description
        meta_keywords
        image
        url_path
        __typename
      }
      ... on ProductInterface {
        uid
        sku
        name
        rating_summary
        review_count
        meta_title
        meta_description
        meta_keyword
        url_key
        small_image {
          url
        }

        description {
          html
        }
        short_description {
          html
        }
        price_range {
          maximum_price {
            final_price {
              currency
              value
            }
            regular_price {
              currency
              value
            }
            discount {
              amount_off
              percent_off
            }
          }
          minimum_price {
            final_price {
              currency
              value
            }
            regular_price {
              currency
              value
            }
            discount {
              amount_off
              percent_off
            }
          }
        }
        media_gallery {
          url
          label
          position
          disabled
          ... on ProductVideo {
            video_content {
              media_type
              video_provider
              video_url
              video_title
              video_description
              video_metadata
            }
          }
        }
        ... on ConfigurableProduct {
          variants {
            product {
              sku
            }
          }
        }
        __typename
      }
    }
  }`,n=new URLSearchParams({query:function(e){let t=N(e,T)?e:new T(e),n=t.body,r=new x(t),o="",a=!1;for(;r.advance().kind!==i.EOF;){var s;let e=r.token,t=e.kind,c=!((s=e.kind)===i.BANG||s===i.DOLLAR||s===i.AMP||s===i.PAREN_L||s===i.PAREN_R||s===i.SPREAD||s===i.COLON||s===i.EQUALS||s===i.AT||s===i.BRACKET_L||s===i.BRACKET_R||s===i.BRACE_L||s===i.PIPE||s===i.BRACE_R);a&&(c||e.kind===i.SPREAD)&&(o+=" ");let u=n.slice(e.start,e.end);t===i.BLOCK_STRING?o+=function(e,t){let n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),i=1===r.length,o=r.length>1&&r.slice(1).every(e=>0===e.length||l(e.charCodeAt(0))),a=n.endsWith('\\"""'),s=e.endsWith('"')&&!a,c=e.endsWith("\\"),u=s||c,d=!(null!=t&&t.minimize)&&(!i||e.length>70||u||o||a),h="",p=i&&l(e.charCodeAt(0));return(d&&!p||o)&&(h+="\n"),h+=n,(d||u)&&(h+="\n"),'"""'+h+'"""'}(e.value,{minimize:!0}):o+=u,a=c}return o}(t)}).toString(),r=new URLSearchParams({variables:JSON.stringify({url:e})}).toString();return(await fetch(`https://mcprod.hnak.com/graphql?${n}&${r}`,{method:"GET",headers:{"content-type":"application/json",store:"default"}})).json()}async function B({params:e}){let{slug:t=[]}=e||{},n=t.join("/"),r=await I(n),{type:i}=s()(r,"data.route")||{};return"PRODUCT"===i?o.jsx($,{}):"CATEGORY"===i?o.jsx(q,{}):o.jsx("div",{children:"Page Not Found"})}},4791:(e,t,n)=>{"use strict";n.r(t),n.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>a});let r=(0,n(6843).createProxy)(String.raw`/home/shankar/Workspace/HNAK/hnak-next-app/src/app/error.js`),{__esModule:i,$$typeof:o}=r,a=r.default},1965:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(5036),i=n(1541),o=n.n(i);function a({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[r.jsx("meta",{name:"application-name",content:"PWA App"}),r.jsx("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),r.jsx("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),r.jsx("meta",{name:"apple-mobile-web-app-title",content:"PWA App"}),r.jsx("meta",{name:"description",content:"Best PWA App in the world"}),r.jsx("meta",{name:"format-detection",content:"telephone=no"}),r.jsx("meta",{name:"mobile-web-app-capable",content:"yes"}),r.jsx("meta",{name:"msapplication-TileColor",content:"#2B5797"}),r.jsx("meta",{name:"msapplication-tap-highlight",content:"no"}),r.jsx("meta",{name:"theme-color",content:"#000000"}),r.jsx("link",{rel:"shortcut icon",href:"/favicon.ico"}),r.jsx("link",{rel:"manifest",href:"/manifest.json"})]}),r.jsx("body",{className:o().className,children:e})]})}n(5023)},5593:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(5036);function i({children:e}){return r.jsx("div",{children:"Loading..."})}},3243:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(5036),i=n(6274);function o(){return(0,r.jsxs)("div",{children:[r.jsx("h2",{children:"Not Found"}),r.jsx("p",{children:"Could not find requested resource"}),r.jsx(i.default,{href:"/",children:"Return Home"})]})}},3601:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(337);let i=e=>[{type:"image/png",sizes:"192x192",url:(0,r.fillMetadataSegment)(".",e.params,"apple-icon.png")+"?03a10b149f679c9c"}]},3881:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[638,817],()=>n(4948));module.exports=r})();