(()=>{var e={};e.id=877,e.ids=[877],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4948:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>h,originalPathname:()=>d,pages:()=>u,routeModule:()=>f,tree:()=>c});var n=r(482),i=r(9108),o=r(2563),a=r.n(o),s=r(8300),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let c=["",{children:["[...slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1672)),"/home/shankar/Workspace/HNAK/hnak-next-app/src/app/[...slug]/page.js"]}]},{loading:[()=>Promise.resolve().then(r.bind(r,3072)),"/home/shankar/Workspace/HNAK/hnak-next-app/src/app/[...slug]/loading.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[async e=>(await Promise.resolve().then(r.bind(r,3601))).default(e)],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1965)),"/home/shankar/Workspace/HNAK/hnak-next-app/src/app/layout.js"],error:[()=>Promise.resolve().then(r.bind(r,4791)),"/home/shankar/Workspace/HNAK/hnak-next-app/src/app/error.js"],loading:[()=>Promise.resolve().then(r.bind(r,5593)),"/home/shankar/Workspace/HNAK/hnak-next-app/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,3243)),"/home/shankar/Workspace/HNAK/hnak-next-app/src/app/not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[async e=>(await Promise.resolve().then(r.bind(r,3601))).default(e)],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/shankar/Workspace/HNAK/hnak-next-app/src/app/[...slug]/page.js"],d="/[...slug]/page",h={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/[...slug]/page",pathname:"/[...slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2808:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},5658:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1476,23))},4861:(e,t,r)=>{Promise.resolve().then(r.bind(r,973))},6151:()=>{},5303:()=>{},973:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(5344),i=r(3729);function o({error:e,reset:t}){return(0,i.useEffect)(()=>{console.error(e)},[e]),(0,n.jsxs)("div",{children:[n.jsx("h2",{children:"Something went wrong!"}),n.jsx("button",{onClick:()=>t(),children:"Try again"})]})}},3072:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(5036);function i({children:e}){return n.jsx("div",{children:"Loading..."})}},1672:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>B});var n,i,o=r(5036);r(2);let a=require("lodash/get");var s=r.n(a);function l(e){return 9===e||32===e}function c(e){return e>=48&&e<=57}function u(e){return e>=97&&e<=122||e>=65&&e<=90}function d(e){return u(e)||95===e}let h=/\r\n|[\n\r]/g;function f(e,t){let r=0,n=1;for(let i of e.body.matchAll(h)){if("number"==typeof i.index||function(e,t){if(!e)throw Error(null!=t?t:"Unexpected invariant triggered.")}(!1),i.index>=t)break;r=i.index+i[0].length,n+=1}return{line:n,column:t+1-r}}function p(e,t){let r=e.locationOffset.column-1,n="".padStart(r)+e.body,i=t.line-1,o=e.locationOffset.line-1,a=t.line+o,s=1===t.line?r:0,l=t.column+s,c=`${e.name}:${a}:${l}
`,u=n.split(/\r\n|[\n\r]/g),d=u[i];if(d.length>120){let e=Math.floor(l/80),t=[];for(let e=0;e<d.length;e+=80)t.push(d.slice(e,e+80));return c+m([[`${a} |`,t[0]],...t.slice(1,e+1).map(e=>["|",e]),["|","^".padStart(l%80)],["|",t[e+1]]])}return c+m([[`${a-1} |`,u[i-1]],[`${a} |`,d],["|","^".padStart(l)],[`${a+1} |`,u[i+1]]])}function m(e){let t=e.filter(([e,t])=>void 0!==t),r=Math.max(...t.map(([e])=>e.length));return t.map(([e,t])=>e.padStart(r)+(t?" "+t:"")).join("\n")}class g extends Error{constructor(e,...t){var r,n,i;let{nodes:o,source:a,positions:s,path:l,originalError:c,extensions:u}=function(e){let t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t);super(e),this.name="GraphQLError",this.path=null!=l?l:void 0,this.originalError=null!=c?c:void 0,this.nodes=v(Array.isArray(o)?o:o?[o]:void 0);let d=v(null===(r=this.nodes)||void 0===r?void 0:r.map(e=>e.loc).filter(e=>null!=e));this.source=null!=a?a:null==d?void 0:null===(n=d[0])||void 0===n?void 0:n.source,this.positions=null!=s?s:null==d?void 0:d.map(e=>e.start),this.locations=s&&a?s.map(e=>f(a,e)):null==d?void 0:d.map(e=>f(e.source,e.start));let h=!function(e){return"object"==typeof e&&null!==e}(null==c?void 0:c.extensions)?void 0:null==c?void 0:c.extensions;this.extensions=null!==(i=null!=u?u:h)&&void 0!==i?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=c&&c.stack?Object.defineProperty(this,"stack",{value:c.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,g):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes){for(let r of this.nodes)if(r.loc){var t;e+="\n\n"+p((t=r.loc).source,f(t.source,t.start))}}else if(this.source&&this.locations)for(let t of this.locations)e+="\n\n"+p(this.source,t);return e}toJSON(){let e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function v(e){return void 0===e||0===e.length?void 0:e}function A(e,t,r){return new g(`Syntax Error: ${r}`,{source:e,positions:[t]})}Symbol.toStringTag;class b{constructor(e,t,r,n,i,o){this.kind=e,this.start=t,this.end=r,this.line=n,this.column=i,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(n||(n={})),function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"}(i||(i={}));class y{constructor(e){let t=new b(i.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==i.EOF)do if(e.next)e=e.next;else{let t=function(e,t){let r=e.source.body,n=r.length,o=t;for(;o<n;){let t=r.charCodeAt(o);switch(t){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++e.line,e.lineStart=o;continue;case 13:10===r.charCodeAt(o+1)?o+=2:++o,++e.line,e.lineStart=o;continue;case 35:return function(e,t){let r=e.source.body,n=r.length,o=t+1;for(;o<n;){let e=r.charCodeAt(o);if(10===e||13===e)break;if(x(e))++o;else if(_(r,o))o+=2;else break}return k(e,i.COMMENT,t,o,r.slice(t+1,o))}(e,o);case 33:return k(e,i.BANG,o,o+1);case 36:return k(e,i.DOLLAR,o,o+1);case 38:return k(e,i.AMP,o,o+1);case 40:return k(e,i.PAREN_L,o,o+1);case 41:return k(e,i.PAREN_R,o,o+1);case 46:if(46===r.charCodeAt(o+1)&&46===r.charCodeAt(o+2))return k(e,i.SPREAD,o,o+3);break;case 58:return k(e,i.COLON,o,o+1);case 61:return k(e,i.EQUALS,o,o+1);case 64:return k(e,i.AT,o,o+1);case 91:return k(e,i.BRACKET_L,o,o+1);case 93:return k(e,i.BRACKET_R,o,o+1);case 123:return k(e,i.BRACE_L,o,o+1);case 124:return k(e,i.PIPE,o,o+1);case 125:return k(e,i.BRACE_R,o,o+1);case 34:if(34===r.charCodeAt(o+1)&&34===r.charCodeAt(o+2))return function(e,t){let r=e.source.body,n=r.length,o=e.lineStart,a=t+3,s=a,c="",u=[];for(;a<n;){let n=r.charCodeAt(a);if(34===n&&34===r.charCodeAt(a+1)&&34===r.charCodeAt(a+2)){c+=r.slice(s,a),u.push(c);let n=k(e,i.BLOCK_STRING,t,a+3,(function(e){var t,r;let n=Number.MAX_SAFE_INTEGER,i=null,o=-1;for(let t=0;t<e.length;++t){let a=e[t],s=function(e){let t=0;for(;t<e.length&&l(e.charCodeAt(t));)++t;return t}(a);s!==a.length&&(i=null!==(r=i)&&void 0!==r?r:t,o=t,0!==t&&s<n&&(n=s))}return e.map((e,t)=>0===t?e:e.slice(n)).slice(null!==(t=i)&&void 0!==t?t:0,o+1)})(u).join("\n"));return e.line+=u.length-1,e.lineStart=o,n}if(92===n&&34===r.charCodeAt(a+1)&&34===r.charCodeAt(a+2)&&34===r.charCodeAt(a+3)){c+=r.slice(s,a),s=a+1,a+=4;continue}if(10===n||13===n){c+=r.slice(s,a),u.push(c),13===n&&10===r.charCodeAt(a+1)?a+=2:++a,c="",s=a,o=a;continue}if(x(n))++a;else if(_(r,a))a+=2;else throw A(e.source,a,`Invalid character within String: ${S(e,a)}.`)}throw A(e.source,a,"Unterminated string.")}(e,o);return function(e,t){let r=e.source.body,n=r.length,o=t+1,a=o,s="";for(;o<n;){let n=r.charCodeAt(o);if(34===n)return s+=r.slice(a,o),k(e,i.STRING,t,o+1,s);if(92===n){s+=r.slice(a,o);let t=117===r.charCodeAt(o+1)?123===r.charCodeAt(o+2)?function(e,t){let r=e.source.body,n=0,i=3;for(;i<12;){let e=r.charCodeAt(t+i++);if(125===e){if(i<5||!x(n))break;return{value:String.fromCodePoint(n),size:i}}if((n=n<<4|N(e))<0)break}throw A(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+i)}".`)}(e,o):function(e,t){let r=e.source.body,n=j(r,t+2);if(x(n))return{value:String.fromCodePoint(n),size:6};if(C(n)&&92===r.charCodeAt(t+6)&&117===r.charCodeAt(t+7)){let e=j(r,t+8);if(P(e))return{value:String.fromCodePoint(n,e),size:12}}throw A(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}(e,o):function(e,t){let r=e.source.body;switch(r.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw A(e.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}(e,o);s+=t.value,o+=t.size,a=o;continue}if(10===n||13===n)break;if(x(n))++o;else if(_(r,o))o+=2;else throw A(e.source,o,`Invalid character within String: ${S(e,o)}.`)}throw A(e.source,o,"Unterminated string.")}(e,o)}if(c(t)||45===t)return function(e,t,r){let n=e.source.body,o=t,a=r,s=!1;if(45===a&&(a=n.charCodeAt(++o)),48===a){if(c(a=n.charCodeAt(++o)))throw A(e.source,o,`Invalid number, unexpected digit after 0: ${S(e,o)}.`)}else o=E(e,o,a),a=n.charCodeAt(o);if(46===a&&(s=!0,a=n.charCodeAt(++o),o=E(e,o,a),a=n.charCodeAt(o)),(69===a||101===a)&&(s=!0,(43===(a=n.charCodeAt(++o))||45===a)&&(a=n.charCodeAt(++o)),o=E(e,o,a),a=n.charCodeAt(o)),46===a||d(a))throw A(e.source,o,`Invalid number, expected digit but got: ${S(e,o)}.`);return k(e,s?i.FLOAT:i.INT,t,o,n.slice(t,o))}(e,o,t);if(d(t))return function(e,t){let r=e.source.body,n=r.length,o=t+1;for(;o<n;){var a;if(u(a=r.charCodeAt(o))||c(a)||95===a)++o;else break}return k(e,i.NAME,t,o,r.slice(t,o))}(e,o);throw A(e.source,o,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":x(t)||_(r,o)?`Unexpected character: ${S(e,o)}.`:`Invalid character: ${S(e,o)}.`)}return k(e,i.EOF,n,n)}(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===i.COMMENT);return e}}function x(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function _(e,t){return C(e.charCodeAt(t))&&P(e.charCodeAt(t+1))}function C(e){return e>=55296&&e<=56319}function P(e){return e>=56320&&e<=57343}function S(e,t){let r=e.source.body.codePointAt(t);if(void 0===r)return i.EOF;if(r>=32&&r<=126){let e=String.fromCodePoint(r);return'"'===e?"'\"'":`"${e}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function k(e,t,r,n,i){let o=e.line,a=1+r-e.lineStart;return new b(t,r,n,o,a,i)}function E(e,t,r){if(!c(r))throw A(e.source,t,`Invalid number, expected digit but got: ${S(e,t)}.`);let n=e.source.body,i=t+1;for(;c(n.charCodeAt(i));)++i;return i}function j(e,t){return N(e.charCodeAt(t))<<12|N(e.charCodeAt(t+1))<<8|N(e.charCodeAt(t+2))<<4|N(e.charCodeAt(t+3))}function N(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function O(e,t){if(!e)throw Error(t)}function R(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return function(e,t){if(null===e)return"null";if(t.includes(e))return"[Circular]";let r=[...t,e];if("function"==typeof e.toJSON){let t=e.toJSON();if(t!==e)return"string"==typeof t?t:R(t,r)}else if(Array.isArray(e))return function(e,t){if(0===e.length)return"[]";if(t.length>2)return"[Array]";let r=Math.min(10,e.length),n=e.length-r,i=[];for(let n=0;n<r;++n)i.push(R(e[n],t));return 1===n?i.push("... 1 more item"):n>1&&i.push(`... ${n} more items`),"["+i.join(", ")+"]"}(e,r);return function(e,t){let r=Object.entries(e);return 0===r.length?"{}":t.length>2?"["+function(e){let t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"==typeof e.constructor){let t=e.constructor.name;if("string"==typeof t&&""!==t)return t}return t}(e)+"]":"{ "+r.map(([e,r])=>e+": "+R(r,t)).join(", ")+" }"}(e,r)}(e,t);default:return String(e)}}let w=globalThis.process&&"production"===globalThis.process.env.NODE_ENV?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;if("object"==typeof e&&null!==e){var r;let n=t.prototype[Symbol.toStringTag];if(n===(Symbol.toStringTag in e?e[Symbol.toStringTag]:null===(r=e.constructor)||void 0===r?void 0:r.name)){let t=R(e,[]);throw Error(`Cannot use ${n} "${t}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class T{constructor(e,t="GraphQL request",r={line:1,column:1}){"string"==typeof e||O(!1,`Body must be a string. Received: ${R(e,[])}.`),this.body=e,this.name=t,this.locationOffset=r,this.locationOffset.line>0||O(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||O(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}var L=r(6274);let $=()=>(0,o.jsxs)("div",{children:["Product Detail Page Here ",o.jsx("br",{}),o.jsx(L.default,{href:"/menna-o-fena/prayer-needs-mof/subha-mof",children:"Go to Product Listing Page"})]}),q=()=>(0,o.jsxs)("div",{children:["Product Listing Page Here",o.jsx("br",{}),o.jsx(L.default,{href:"/mma-lava-beads-jute-tassel",children:"Go to Product Detail Page"})]});async function I(e){let t=`query getRouteData($url: String!) {
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
  }`,r=new URLSearchParams({query:function(e){let t=w(e,T)?e:new T(e),r=t.body,n=new y(t),o="",a=!1;for(;n.advance().kind!==i.EOF;){var s;let e=n.token,t=e.kind,c=!((s=e.kind)===i.BANG||s===i.DOLLAR||s===i.AMP||s===i.PAREN_L||s===i.PAREN_R||s===i.SPREAD||s===i.COLON||s===i.EQUALS||s===i.AT||s===i.BRACKET_L||s===i.BRACKET_R||s===i.BRACE_L||s===i.PIPE||s===i.BRACE_R);a&&(c||e.kind===i.SPREAD)&&(o+=" ");let u=r.slice(e.start,e.end);t===i.BLOCK_STRING?o+=function(e,t){let r=e.replace(/"""/g,'\\"""'),n=r.split(/\r\n|[\n\r]/g),i=1===n.length,o=n.length>1&&n.slice(1).every(e=>0===e.length||l(e.charCodeAt(0))),a=r.endsWith('\\"""'),s=e.endsWith('"')&&!a,c=e.endsWith("\\"),u=s||c,d=!(null!=t&&t.minimize)&&(!i||e.length>70||u||o||a),h="",f=i&&l(e.charCodeAt(0));return(d&&!f||o)&&(h+="\n"),h+=r,(d||u)&&(h+="\n"),'"""'+h+'"""'}(e.value,{minimize:!0}):o+=u,a=c}return o}(t)}).toString(),n=new URLSearchParams({variables:JSON.stringify({url:e})}).toString();return(await fetch(`https://mcprod.hnak.com/graphql?${r}&${n}`,{method:"GET",headers:{"content-type":"application/json",store:"default"}})).json()}async function B({params:e}){let{slug:t=[]}=e||{},r=t.join("/"),n=await I(r),{type:i}=s()(n,"data.route")||{};return"PRODUCT"===i?o.jsx($,{}):"CATEGORY"===i?o.jsx(q,{}):o.jsx("div",{children:"Page Not Found"})}},4791:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>a});let n=(0,r(6843).createProxy)(String.raw`/home/shankar/Workspace/HNAK/hnak-next-app/src/app/error.js`),{__esModule:i,$$typeof:o}=n,a=n.default},1965:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h,metadata:()=>u,viewport:()=>d});var n=r(5036),i=r(1541),o=r.n(i);r(5023);let a="HNAK PWA App",s="HNAK PWA App",l="%s - HNAK PWA App",c="Best E-commerce PWA app in the world!",u={applicationName:a,title:{default:s,template:l},description:c,manifest:"/manifest.json",appleWebApp:{capable:!0,statusBarStyle:"default",title:s},formatDetection:{telephone:!1},openGraph:{type:"website",siteName:a,title:{default:s,template:l},description:c},twitter:{card:"summary",title:{default:s,template:l},description:c}},d={themeColor:"#213352"};function h({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:o().className,children:e})})}},5593:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(5036);function i({children:e}){return n.jsx("div",{children:"Loading..."})}},3243:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(5036),i=r(6274);function o(){return(0,n.jsxs)("div",{children:[n.jsx("h2",{children:"Not Found"}),n.jsx("p",{children:"Could not find requested resource"}),n.jsx(i.default,{href:"/",children:"Return Home"})]})}},3601:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(337);let i=e=>[{type:"image/png",sizes:"192x192",url:(0,n.fillMetadataSegment)(".",e.params,"apple-icon.png")+"?03a10b149f679c9c"}]},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,817],()=>r(4948));module.exports=n})();