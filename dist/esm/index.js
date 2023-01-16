import{Alert as e,AlertIcon as t,AlertTitle as n,AlertDescription as l,Button as a,Flex as r,IconButton as i,Image as o,Spinner as c,Box as s,useDisclosure as m,Menu as u,MenuButton as d,Icon as p,Text as E,Spacer as f,Badge as b,Divider as h,Avatar as g,AvatarBadge as x,Heading as v,Drawer as S,DrawerOverlay as y,DrawerContent as w,DrawerCloseButton as k,DrawerHeader as z,DrawerBody as O,useBreakpointValue as C,useBoolean as I,ScaleFade as P,Center as D}from"@chakra-ui/react";import j,{useEffect as B}from"react";import{Helmet as M}from"react-helmet";import{FiAlignRight as L,FiChevronLeft as R,FiChevronRight as T}from"react-icons/fi";import{Link as A,NavLink as F,useLocation as Y,Outlet as $,Routes as _,Route as K}from"react-router-dom";import{ErrorBoundary as W}from"react-error-boundary";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function q(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n}function G(e,t,n,l){return new(n||(n=Promise))((function(a,r){function i(e){try{c(l.next(e))}catch(e){r(e)}}function o(e){try{c(l.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}c((l=l.apply(e,t||[])).next())}))}const H=({children:e,route:t})=>j.createElement(j.Fragment,null,j.createElement(M,null,j.createElement("title",null,t.title)),e);function J({error:r,resetErrorBoundary:i}){return j.createElement(e,{status:"error",variant:"subtle",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",height:"200px"},j.createElement(t,{boxSize:"40px",mr:0}),j.createElement(n,{mt:4,mb:1,fontSize:"lg"},"مشکلی رخ داده است."),j.createElement(l,{maxWidth:"sm"},r.message),j.createElement(a,{variant:"outline",colorScheme:"red",mt:"5",onClick:()=>window.location.reload()},"بارگذاری مجدد"))}const N=({toggleDrawer:e,linkProps:t,toolsBox:n})=>j.createElement(r,{bg:"white",color:"black",boxShadow:"md",justifyContent:"space-between",px:{base:"4",md:"10"},h:{base:"75px",md:"75px"},alignItems:"center",position:"relative",zIndex:10},j.createElement(i,{display:{lg:"none"},variant:"unstyled","aria-label":"اعلانات",size:"lg",icon:j.createElement(L,null),onClick:e}),j.createElement(r,null,j.createElement(A,Object.assign({to:"#"},t),j.createElement(o,{src:"/assets/Logo.svg",w:{base:"36",lg:"48"},h:{base:"12",md:"full"},mx:"auto"}))),j.createElement(j.Suspense,{fallback:j.createElement(c,{size:"xs"})},j.createElement(n,null)));function Q(e){var{sidebarSize:t,children:n,to:l}=e,a=q(e,["sidebarSize","children","to"]);return j.createElement(F,Object.assign({to:l},a,{style:{width:"large"===t?"100%":"initial"}}),(({isActive:e})=>j.createElement(s,{p:"3",bg:e?"#f2f7ff":"initial",color:e?"#0066ff":"initial",borderRadius:"lg",borderLeft:e?"5px solid #0066ff":"none",_hover:{textDecor:"none",color:"#0066ff",bg:"#f2f7ff"}},n)))}const U=({sidebarSize:e,icon:t,title:n,link:l,variant:a,badgeProps:i})=>{const{isOpen:o,onOpen:c,onClose:s}=m();return j.createElement(r,{mt:"2",flexDir:"column",w:"100%",alignItems:"small"===e?"center":"flex-start",color:"gray.600",fontSize:"sm",borderLeft:"3px"},"sidebar"===a?j.createElement(u,{placement:"start",isOpen:o},j.createElement(Q,{to:l,sidebarSize:e},j.createElement(d,{w:"full",onMouseEnter:c,onMouseLeave:s},j.createElement(r,{align:"center"},j.createElement(p,{as:t,fontSize:"xl"}),j.createElement(E,{fontSize:"md",ms:"5",display:"small"===e?"none":"flex"},n),j.createElement(f,null),!!i&&j.createElement(b,Object.assign({},i),i.children))))):j.createElement(Q,{to:l,sidebarSize:e},j.createElement(r,{align:"center"},j.createElement(p,{as:t,fontSize:"xl"}),j.createElement(E,{ms:"5",display:"small"===e?"none":"flex"},n))))},V=({sidebarSize:e,sidebarSizeSetter:t,variant:n,isDrawerOpen:l,drawerOnClose:a,ctx:o,title:c,subTitle:s,avatarSource:m})=>"sidebar"===n?j.createElement(r,{h:"calc(100vh - 75px)",overflowY:"scroll",w:"small"===e?"75px":"350px",ps:"small"===e?"initial":"50px",boxShadow:"lg",flexDir:"column",justifyContent:"space-between",transition:"all 0.5s",zIndex:1},j.createElement(r,{p:"2",flexDir:"column",alignItems:"small"===e?"center":"flex-start",as:"nav"},j.createElement(i,{"aria-label":"",_hover:{bg:"none"},variant:"outline",icon:"small"===e?j.createElement(R,null):j.createElement(T,null),onClick:()=>t("small"===e?"large":"small"),alignSelf:"small"===e?"center":"end"}),o.map((t=>j.createElement(U,{variant:n,key:t.path,icon:t.icon,sidebarSize:e,title:t.title,link:t.path,badgeProps:t.badgeProps})))),j.createElement(r,{p:"4",flexDirection:"column",w:"100%",alignItems:"small"===e?"center":"flex-start"},j.createElement(h,{display:"small"===e?"none":"flex"}),j.createElement(r,{mt:"4",align:"center"},j.createElement(g,{src:m},j.createElement(x,{boxSize:"1.25em",bg:"green.500"})),j.createElement(r,{display:"small"===e?"none":"flex",flexDir:"column",ms:"4"},j.createElement(v,{as:"h3",size:"sm"},c),j.createElement(E,{fontSize:"xs"},s))))):j.createElement(S,{isOpen:l,placement:"right",onClose:a,size:{base:"xs",sm:"sm",md:"md"}},j.createElement(y,null,j.createElement(w,null,j.createElement(k,null),j.createElement(z,null),j.createElement(O,null,o.map((t=>j.createElement(U,{variant:n,key:t.path,icon:t.icon,sidebarSize:e,title:t.title,link:t.path}))))))),X=e=>{var t=q(e,[]);const[n,l]=j.useState("large"),a={navigation:"drawer",navigationButton:!0},i=C({base:a,sm:a,md:a,lg:{navigation:"sidebar",navigationButton:!1}});let o=Y();const[c,m]=I();return j.createElement(j.Fragment,null,j.createElement(N,{toggleDrawer:m.on,linkProps:t.logoLinkProps,toolsBox:t.navbarToolsBox}),j.createElement(r,null,j.createElement(V,{ctx:[...t.sidebarRoutes],sidebarSize:n,sidebarSizeSetter:l,isDrawerOpen:c,drawerOnClose:m.off,variant:null==i?void 0:i.navigation,title:t.sidebarTitle,subTitle:t.sidebarSubTitle,avatarSource:t.sidebarAvatarSrc}),j.createElement(s,{h:"calc(100vh - 75px)",display:"inline-block",w:"sidebar"===(null==i?void 0:i.navigation)?"small"===n?"calc(100vw - 75px)":"calc(100vw - 350px)":"full",bg:"#f5f7fc",p:{base:"4",md:"6",lg:"12"},overflowY:"scroll"},j.createElement(W,{FallbackComponent:J,resetKeys:[o]},j.createElement(P,{key:o.pathname,initialScale:.6,in:!0},j.createElement($,null))))))};let Z=j.createContext(null);function ee({children:e,authStatusChecker:t}){let[n,l]=j.useState(!1);B((()=>{(()=>G(this,void 0,void 0,(function*(){t().then((()=>l(!0))).catch((()=>l(!1)))})))().catch((e=>{console.log(e)}))}),[t]);let a={isAuthenticated:n,signin:(e,t)=>{},signout:e=>{}};return n?j.createElement(Z.Provider,{value:a},e):j.createElement(D,{py:"12"},j.createElement(c,{size:"xl",colorScheme:"blue"}))}const te=e=>{var t;const n=null===(t=e.find((e=>e.isIndex)))||void 0===t?void 0:t.component;return j.createElement(j.Fragment,null,!!n&&j.createElement(K,{index:!0,element:j.createElement(j.Suspense,{fallback:j.createElement(D,{w:"full"},j.createElement(c,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"#1d68d2",size:"xl"}))},j.createElement(n,null))}),e.filter((e=>!e.isIndex&&!e.isInModal)).map((e=>{var t=e.component;return j.createElement(K,{key:e.path,path:e.path,element:j.createElement(j.Suspense,{fallback:j.createElement(D,{w:"full"},j.createElement(c,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"#1d68d2",size:"xl"}))},j.createElement(H,{route:e},j.createElement(t,null)))},!!e.childRoutes&&te(e.childRoutes))})))},ne=e=>{var t,n=q(e,[]);let l=Y(),a=n.routes.find((e=>{var t;return!!e.isInModal&&!!e.backgroundPath&&e.path===l.pathname||!!e.isInModal&&!!e.backgroundPath&&l.pathname.includes(e.path.substring(0,e.path.indexOf(null!==(t=e.routeDynamicSection)&&void 0!==t?t:"$"))||"$")}));return j.createElement(ee,{authStatusChecker:n.authStatusChecker},j.createElement(_,{location:null!==(t=null==a?void 0:a.backgroundPath)&&void 0!==t?t:l},j.createElement(K,{path:"/",element:j.createElement(X,Object.assign({},n,{sidebarRoutes:n.routes.filter((e=>e.isInSidebar)).map((e=>({description:e.description,icon:e.icon,path:e.path,title:e.title,badgeProps:e.badgeProps})))}))},te(n.routes),j.createElement(K,{path:"*",element:j.createElement(D,{w:"full"},"404")}))),a&&j.createElement(_,null,n.routes.filter((e=>!e.isIndex&&e.isInModal)).map((e=>{var t=e.component;return j.createElement(K,{key:e.path,path:e.path,element:j.createElement(j.Suspense,{fallback:j.createElement(D,{w:"full"},j.createElement(c,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"#1d68d2",size:"xl"}))},j.createElement(t,null))})}))))};export{ne as LayoutRenderer};
