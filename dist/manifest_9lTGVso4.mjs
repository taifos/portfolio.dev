import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_z4dmLtv-.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"const l=document.querySelector(\"#navbar-sticky\"),r=document.querySelector(\"#navbar-aside ul\");l.addEventListener(\"click\",function(){r.classList.contains(\"hidden\")?r.classList.remove(\"hidden\"):r.classList.add(\"hidden\")});r.addEventListener(\"click\",function(){r.classList.add(\"hidden\")});const i=document,d=i.querySelectorAll(\"section[data-scroll-spy]\"),a=e=>{e.forEach(o=>{const n=o.target.getAttribute(\"id\"),t=i.querySelector(`a[data-scroll-spy][href=\"#${n}\"]~.absolute`);o.isIntersecting?(t.style.visibility=\"visible\",t.style.opacity=\"1\"):(t.style.visibility=\"hidden\",t.style.opacity=\"0\")})},y=new IntersectionObserver(a,{rootMargin:\"-250px\",threshold:[.25]});d.forEach(e=>y.observe(e));const u=document.querySelector(\"#landing-header\"),h={root:null,rootMargin:\"0px\",threshold:.9},p=new IntersectionObserver(e=>{e.forEach(o=>{const{isIntersecting:n}=o;if(n){const t=o.target.getAttribute(\"data-header-color\");u.style.color=t}})},h),v=document.querySelectorAll(\".landing-section\");v.forEach(e=>p.observe(e));const b=document.querySelectorAll(\"#landing-header li\"),s=document.querySelector(\"#menu-backdrop\");b.forEach(e=>{e.addEventListener(\"mouseenter\",()=>{const{left:o,top:n,width:t,height:c}=e.getBoundingClientRect();s.style.setProperty(\"--left\",`${o}px`),s.style.setProperty(\"--top\",`${n}px`),s.style.setProperty(\"--width\",`${t}px`),s.style.setProperty(\"--height\",`${c}px`),s.style.opacity=\"1\",s.style.visibility=\"visible\"}),e.addEventListener(\"mouseleave\",()=>{s.style.opacity=\"0\",s.style.visibility=\"hidden\"})});\n"},{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[]).concat([\"dataLayer.push\"])})(window,'partytown','forward');/* Partytown 0.8.1 - MIT builder.io */\n!function(t,e,n,i,o,r,a,s,d,c,l,p){function u(){p||(p=1,\"/\"==(a=(r.lib||\"/~partytown/\")+(r.debug?\"debug/\":\"\"))[0]&&(d=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(s=setTimeout(f,1e4),e.addEventListener(\"pt0\",w),o?h(1):n.serviceWorker?n.serviceWorker.register(a+(r.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.style.display=\"block\",c.style.width=\"0\",c.style.height=\"0\",c.style.border=\"0\",c.style.visibility=\"hidden\",c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.8.1\":\"sandbox-sw.html?\"+Date.now()),e.querySelector(r.sandboxParent||\"body\").appendChild(c)}function f(n,o){for(w(),i==t&&(r.forward||[]).map((function(e){delete t[e.split(\".\")[0]]})),n=0;n<d.length;n++)(o=e.createElement(\"script\")).innerHTML=d[n].innerHTML,o.nonce=r.nonce,e.head.appendChild(o);c&&c.parentNode.removeChild(c)}function w(){clearTimeout(s)}r=t.partytown||{},i==t&&(r.forward||[]).map((function(e){l=t,e.split(\".\").map((function(e,n,i){l=l[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:l[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);"}],"styles":[{"type":"external","src":"/_astro/index.RUpMTkSV.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Juan/Documents/cursos/portfolio/exotic-escape/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_xWJHjG_Y.mjs","\u0000@astrojs-manifest":"manifest_9lTGVso4.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.ZjNgpwzn.js","astro:scripts/before-hydration.js":""},"assets":["/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"]});

export { manifest };
