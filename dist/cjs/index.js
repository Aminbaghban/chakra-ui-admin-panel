"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@chakra-ui/react"),t=require("react"),l=require("react-helmet"),a=require("react-icons/fi"),n=require("react-router-dom"),r=require("@chakra-ui/icons"),i=require("react-error-boundary");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=o(t);
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
<<<<<<< HEAD
***************************************************************************** */function c(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(l[a[n]]=e[a[n]])}return l}function d(e,t,l,a){return new(l||(l=Promise))((function(n,r){function i(e){try{u(a.next(e))}catch(e){r(e)}}function o(e){try{u(a.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof l?t:new l((function(e){e(t)}))).then(i,o)}u((a=a.apply(e,t||[])).next())}))}const s=({children:e,route:t})=>u.default.createElement(u.default.Fragment,null,u.default.createElement(l.Helmet,null,u.default.createElement("title",null,t.title)),e);function f({error:t,resetErrorBoundary:l}){return u.default.createElement(e.Alert,{status:"error",variant:"subtle",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",height:"200px"},u.default.createElement(e.AlertIcon,{boxSize:"40px",mr:0}),u.default.createElement(e.AlertTitle,{mt:4,mb:1,fontSize:"lg"},"مشکلی رخ داده است."),u.default.createElement(e.AlertDescription,{maxWidth:"sm"},t.message),u.default.createElement(e.Button,{variant:"outline",colorScheme:"red",mt:"5",onClick:()=>window.location.reload()},"بارگذاری مجدد"))}const m=({toggleDrawer:t,linkProps:l,toolsBox:r})=>u.default.createElement(e.Flex,{bg:"white",color:"black",boxShadow:"md",justifyContent:"space-between",px:{base:"4",md:"10"},h:{base:"60px","2xl":"75px"},alignItems:"center",position:"relative",zIndex:10},u.default.createElement(e.IconButton,{display:{lg:"none"},variant:"unstyled","aria-label":"اعلانات",size:"lg",icon:u.default.createElement(a.FiAlignRight,null),onClick:t},u.default.createElement(e.Badge,null,"1")),u.default.createElement(e.Flex,null,u.default.createElement(n.Link,Object.assign({to:"#"},l),u.default.createElement(e.Image,{src:"/assets/Logo.svg",w:{base:"36",lg:"48"},h:{base:"12",md:"full"},mx:"auto"}))),u.default.createElement(u.default.Suspense,{fallback:u.default.createElement(e.Spinner,{size:"xs"})},u.default.createElement(r,null)));function p(t){var{sidebarSize:l,to:a,children:r}=t,i=c(t,["sidebarSize","to","children"]);return u.default.createElement(n.NavLink,Object.assign({to:a},i,{style:{width:"large"===l?"100%":"initial"}}),(({isActive:t})=>u.default.createElement(e.Box,{p:"3",bg:t?"#f2f7ff":"initial",color:t?"#0066ff":"initial",borderRadius:"lg",borderLeft:t?"5px solid #0066ff":"none",_hover:{textDecor:"none",color:"#0066ff",bg:"#f2f7ff"}},r(t))))}const E=t=>{var l,a,n=c(t,[]);const{isOpen:i,onOpen:o,onClose:d,onToggle:s}=e.useDisclosure();return u.default.createElement(u.default.Fragment,null,u.default.createElement(e.Flex,{mt:"2",flexDir:"column",w:"100%",alignItems:"small"===n.sidebarSize?"center":"flex-start",color:"gray.600",fontSize:"sm",borderLeft:"3px",onClick:e=>{s(),e.stopPropagation()}},"sidebar"===n.variant?u.default.createElement(e.Menu,{placement:"start",isOpen:i},u.default.createElement(p,{to:null!==(l=n.path)&&void 0!==l?l:"#",sidebarSize:n.sidebarSize,onClick:e=>{n.children&&e.preventDefault()}},(t=>u.default.createElement(e.MenuButton,{w:"full"},u.default.createElement(e.Flex,{align:"center"},u.default.createElement(e.Icon,{as:n.icon,fontSize:"xl"}),u.default.createElement(e.Text,{fontSize:{xl:"sm","2xl":"md"},ms:"5",display:"small"===n.sidebarSize?"none":"flex"},n.title),u.default.createElement(e.Spacer,null),!!n.badgeProps&&"large"===n.sidebarSize&&u.default.createElement(e.Badge,Object.assign({},n.badgeProps),n.badgeProps.children),!!n.children&&u.default.createElement(r.ChevronDownIcon,null)))))):u.default.createElement(p,{to:null!==(a=n.path)&&void 0!==a?a:"#",sidebarSize:n.sidebarSize,onClick:e=>{n.children&&e.preventDefault()}},(t=>u.default.createElement(e.Flex,{align:"center"},u.default.createElement(e.Icon,{as:n.icon,fontSize:"xl"}),u.default.createElement(e.Text,{ms:"5",display:"small"===n.sidebarSize?"none":"flex"},n.title),u.default.createElement(e.Spacer,null),!!n.children&&u.default.createElement(r.ChevronDownIcon,null))))),n.children&&u.default.createElement(e.Box,{bg:"#f9fcff",rounded:"md",w:"full"},u.default.createElement(e.Collapse,{in:i,animateOpacity:!0,style:{width:"100%"}},n.children.map((e=>u.default.createElement(E,Object.assign({},e,{sidebarSize:n.sidebarSize,variant:n.variant})))))))},h=({sidebarSize:t,sidebarSizeSetter:l,variant:n,isDrawerOpen:r,drawerOnClose:i,ctx:o,title:c,subTitle:d,avatarSource:s})=>"sidebar"===n?u.default.createElement(e.Flex,{h:{xl:"calc(100vh - 60px)","2xl":"calc(100vh - 75px)"},overflowY:"scroll",w:"small"===t?"75px":{xl:"300px","2xl":"350px"},ps:"small"===t?"initial":{xl:"30px","2xl":"50px"},boxShadow:"lg",flexDir:"column",justifyContent:"space-between",transition:"all 0.5s",zIndex:1},u.default.createElement(e.Flex,{p:"2",flexDir:"column",alignItems:"small"===t?"center":"flex-start",as:"nav"},u.default.createElement(e.IconButton,{"aria-label":"",_hover:{bg:"none"},variant:"outline",icon:"small"===t?u.default.createElement(a.FiChevronLeft,null):u.default.createElement(a.FiChevronRight,null),onClick:()=>l("small"===t?"large":"small"),alignSelf:"small"===t?"center":"end"}),o.filter((e=>!!e.show)).map((e=>u.default.createElement(E,{variant:n,key:e.path,icon:e.icon,sidebarSize:t,title:e.title,path:e.path,badgeProps:e.badgeProps,children:e.children})))),u.default.createElement(e.Flex,{p:"4",flexDirection:"column",w:"100%",alignItems:"small"===t?"center":"flex-start"},u.default.createElement(e.Divider,{display:"small"===t?"none":"flex"}),u.default.createElement(e.Flex,{mt:"4",align:"center"},u.default.createElement(e.Avatar,{src:s,objectFit:"contain"},u.default.createElement(e.AvatarBadge,{boxSize:"1.25em",bg:"green.500"})),u.default.createElement(e.Flex,{display:"small"===t?"none":"flex",flexDir:"column",ms:"4"},u.default.createElement(e.Heading,{as:"h3",size:"sm"},c),u.default.createElement(e.Text,{fontSize:"xs"},d))))):u.default.createElement(e.Drawer,{isOpen:r,placement:"right",onClose:i,size:{base:"xs",sm:"sm",md:"md"}},u.default.createElement(e.DrawerOverlay,null,u.default.createElement(e.DrawerContent,null,u.default.createElement(e.DrawerCloseButton,null),u.default.createElement(e.DrawerHeader,null),u.default.createElement(e.DrawerBody,null,o.filter((e=>!!e.show)).map((e=>u.default.createElement(E,{variant:n,key:e.path,icon:e.icon,sidebarSize:t,title:e.title,path:e.path,children:e.children}))))))),x=t=>{var l=c(t,[]);const[a,r]=u.default.useState("large"),o={navigation:"drawer",navigationButton:!0},d=e.useBreakpointValue({base:o,sm:o,md:o,lg:{navigation:"sidebar",navigationButton:!1}});let s=n.useLocation();const{isOpen:p,onClose:E,onOpen:x}=e.useDisclosure();return u.default.useEffect((()=>{E()}),[s]),u.default.createElement(u.default.Fragment,null,u.default.createElement(m,{toggleDrawer:x,linkProps:l.logoLinkProps,toolsBox:l.navbarToolsBox}),u.default.createElement(e.Flex,null,u.default.createElement(h,{ctx:[...l.sidebarRoutes],sidebarSize:a,sidebarSizeSetter:r,isDrawerOpen:p,drawerOnClose:E,variant:null==d?void 0:d.navigation,title:l.sidebarTitle,subTitle:l.sidebarSubTitle,avatarSource:l.sidebarAvatarSrc}),u.default.createElement(e.Box,{h:{xl:"calc(100vh - 60px)","2xl":"calc(100vh - 75px)"},display:"inline-block",w:"sidebar"===(null==d?void 0:d.navigation)?"small"===a?"calc(100vw - 75px)":{xl:"calc(100vw - 300px)","2xl":"calc(100vw - 350px)"}:"full",bg:"#f5f7fc",p:{base:"4",md:"6","2xl":"12"},overflowY:"scroll",minH:{base:"100vh",lg:"initial"}},u.default.createElement(i.ErrorBoundary,{FallbackComponent:f,resetKeys:[s]},u.default.createElement(e.ScaleFade,{key:s.pathname,initialScale:.6,in:!0},u.default.createElement(n.Outlet,null))))))};let b=u.default.createContext(null);function v({children:l,authStatusChecker:a,userRoles:n}){let[r,i]=u.default.useState(!1);t.useEffect((()=>{(()=>d(this,void 0,void 0,(function*(){a().then((()=>i(!0))).catch((()=>i(!1)))})))().catch((e=>{console.log(e)}))}),[a]);let o={isAuthenticated:r,signin:(e,t)=>{},signout:e=>{},userRoles:n};return r?u.default.createElement(b.Provider,{value:o},l):u.default.createElement(e.Center,{py:"12"},u.default.createElement(e.Spinner,{size:"xl",colorScheme:"blue"}))}const g=({allowedRoles:e})=>{const t=n.useLocation(),{userRoles:l}=u.default.useContext(b);return e&&!e.every((e=>null==l?void 0:l.includes(e)))?u.default.createElement(n.Navigate,{to:"/unauthorized",state:{from:t},replace:!0}):u.default.createElement(n.Outlet,null)},S=t=>{var l;const a=null===(l=t.find((e=>e.isIndex)))||void 0===l?void 0:l.component;return u.default.createElement(u.default.Fragment,null,!!a&&u.default.createElement(n.Route,{index:!0,element:u.default.createElement(u.default.Suspense,{fallback:u.default.createElement(e.Center,{w:"full"},u.default.createElement(e.Spinner,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"primary.500",size:"xl",mb:"4"}))},u.default.createElement(a,null))}),t.filter((e=>!e.isIndex&&!e.isInModal)).map((t=>{var l=t.component;return u.default.createElement(n.Route,{element:u.default.createElement(g,{allowedRoles:t.allowedRoles})},u.default.createElement(n.Route,{key:t.path,path:t.path,element:u.default.createElement(u.default.Suspense,{fallback:u.default.createElement(e.Center,{w:"full"},u.default.createElement(e.Spinner,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"primary.500",size:"xl",mb:"4"}))},u.default.createElement(s,{route:t},u.default.createElement(l,null)))},!!t.childRoutes&&S(t.childRoutes)))})))};exports.LayoutRenderer=t=>{var l,a=c(t,[]);let r=n.useLocation(),i=a.routes.find((e=>{var t,l;return!!e.isInModal&&!!e.backgroundPath&&e.path===r.pathname||!!e.isInModal&&!!e.backgroundPath&&r.pathname.includes((null===(t=e.path)||void 0===t?void 0:t.substring(0,e.path.indexOf(null!==(l=e.routeDynamicSection)&&void 0!==l?l:"$")))||"$")}));return u.default.createElement(v,{authStatusChecker:a.authStatusChecker,userRoles:a.userRoles},u.default.createElement(n.Routes,{location:null!==(l=null==i?void 0:i.backgroundPath)&&void 0!==l?l:r},u.default.createElement(n.Route,{path:"/",element:u.default.createElement(x,Object.assign({},a,{sidebarRoutes:a.routes.map((function e(t){var l,n,r;return{description:t.description,icon:t.icon,path:t.path,title:t.title,badgeProps:t.badgeProps,children:null===(l=t.childRoutes)||void 0===l?void 0:l.map(e),show:!!t.isInSidebar&&(!(null===(n=t.allowedRoles)||void 0===n?void 0:n.length)||(null===(r=t.allowedRoles)||void 0===r?void 0:r.every((e=>{var t;return null===(t=a.userRoles)||void 0===t?void 0:t.includes(e)}))))}}))}))},S(a.routes),u.default.createElement(n.Route,{path:"*",element:u.default.createElement(e.Center,{w:"full"},"404")}))),i&&u.default.createElement(n.Routes,null,a.routes.filter((e=>!e.isIndex&&e.isInModal)).map((t=>{var l=t.component;return u.default.createElement(n.Route,{key:t.path,path:t.path,element:u.default.createElement(u.default.Suspense,{fallback:u.default.createElement(e.Center,{w:"full"},u.default.createElement(e.Spinner,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"#1d68d2",size:"xl"}))},u.default.createElement(l,null))})}))))};
=======
***************************************************************************** */function c(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(l[a[n]]=e[a[n]])}return l}function d(e,t,l,a){return new(l||(l=Promise))((function(n,r){function i(e){try{u(a.next(e))}catch(e){r(e)}}function o(e){try{u(a.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof l?t:new l((function(e){e(t)}))).then(i,o)}u((a=a.apply(e,t||[])).next())}))}const s=({children:e,route:t})=>u.default.createElement(u.default.Fragment,null,u.default.createElement(l.Helmet,null,u.default.createElement("title",null,t.title)),e);function f({error:t,resetErrorBoundary:l}){return u.default.createElement(e.Alert,{status:"error",variant:"subtle",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",height:"200px"},u.default.createElement(e.AlertIcon,{boxSize:"40px",mr:0}),u.default.createElement(e.AlertTitle,{mt:4,mb:1,fontSize:"lg"},"مشکلی رخ داده است."),"development"===process.env.NODE_ENV&&u.default.createElement(e.AlertDescription,{maxWidth:"sm"},t.message),u.default.createElement(e.Button,{variant:"outline",colorScheme:"red",mt:"5",onClick:()=>window.location.reload()},"بارگذاری مجدد"))}const m=({toggleDrawer:t,linkProps:l,toolsBox:r})=>u.default.createElement(e.Flex,{bg:"white",color:"black",boxShadow:"md",justifyContent:"space-between",px:{base:"4",md:"10"},h:{base:"60px","2xl":"75px"},alignItems:"center",position:"relative",zIndex:10},u.default.createElement(e.IconButton,{display:{lg:"none"},variant:"unstyled","aria-label":"اعلانات",size:"lg",icon:u.default.createElement(a.FiAlignRight,null),onClick:t},u.default.createElement(e.Badge,null,"1")),u.default.createElement(e.Flex,null,u.default.createElement(n.Link,Object.assign({to:"#"},l),u.default.createElement(e.Image,{src:"/assets/Logo.svg",w:{base:"36",lg:"48"},h:{base:"12",md:"full"},mx:"auto"}))),u.default.createElement(u.default.Suspense,{fallback:u.default.createElement(e.Spinner,{size:"xs"})},u.default.createElement(r,null)));function p(t){var{sidebarSize:l,to:a,children:r}=t,i=c(t,["sidebarSize","to","children"]);return u.default.createElement(n.NavLink,Object.assign({to:a},i,{style:{width:"large"===l?"100%":"initial"}}),(({isActive:t})=>u.default.createElement(e.Box,{p:"3",bg:t?"#f2f7ff":"initial",color:t?"#0066ff":"initial",borderRadius:"lg",borderLeft:t?"5px solid #0066ff":"none",_hover:{textDecor:"none",color:"#0066ff",bg:"#f2f7ff"}},r(t))))}const E=t=>{var l,a,n=c(t,[]);const{isOpen:i,onOpen:o,onClose:d,onToggle:s}=e.useDisclosure();return u.default.createElement(u.default.Fragment,null,u.default.createElement(e.Flex,{mt:"2",flexDir:"column",w:"100%",alignItems:"small"===n.sidebarSize?"center":"flex-start",color:"gray.600",fontSize:"sm",borderLeft:"3px",onClick:e=>{s(),e.stopPropagation()}},"sidebar"===n.variant?u.default.createElement(e.Menu,{placement:"start",isOpen:i},u.default.createElement(p,{to:null!==(l=n.path)&&void 0!==l?l:"#",sidebarSize:n.sidebarSize,onClick:e=>{n.children&&e.preventDefault()}},(t=>u.default.createElement(e.MenuButton,{w:"full"},u.default.createElement(e.Flex,{align:"center"},u.default.createElement(e.Icon,{as:n.icon,fontSize:"xl"}),u.default.createElement(e.Text,{fontSize:{xl:"sm","2xl":"md"},ms:"5",display:"small"===n.sidebarSize?"none":"flex"},n.title),u.default.createElement(e.Spacer,null),!!n.badgeProps&&"large"===n.sidebarSize&&u.default.createElement(e.Badge,Object.assign({},n.badgeProps),n.badgeProps.children),!!n.children&&u.default.createElement(r.ChevronDownIcon,null)))))):u.default.createElement(p,{to:null!==(a=n.path)&&void 0!==a?a:"#",sidebarSize:n.sidebarSize,onClick:e=>{n.children&&e.preventDefault()}},(t=>u.default.createElement(e.Flex,{align:"center"},u.default.createElement(e.Icon,{as:n.icon,fontSize:"xl"}),u.default.createElement(e.Text,{ms:"5",display:"small"===n.sidebarSize?"none":"flex"},n.title),u.default.createElement(e.Spacer,null),!!n.children&&u.default.createElement(r.ChevronDownIcon,null))))),n.children&&u.default.createElement(e.Box,{bg:"#f9fcff",rounded:"md",w:"full"},u.default.createElement(e.Collapse,{in:i,animateOpacity:!0,style:{width:"100%"}},n.children.map((e=>u.default.createElement(E,Object.assign({},e,{sidebarSize:n.sidebarSize,variant:n.variant})))))))},h=({sidebarSize:t,sidebarSizeSetter:l,variant:n,isDrawerOpen:r,drawerOnClose:i,ctx:o,title:c,subTitle:d,avatarSource:s})=>"sidebar"===n?u.default.createElement(e.Flex,{h:{xl:"calc(100vh - 60px)","2xl":"calc(100vh - 75px)"},overflowY:"scroll",w:"small"===t?"75px":{xl:"300px","2xl":"350px"},ps:"small"===t?"initial":{xl:"30px","2xl":"50px"},boxShadow:"lg",flexDir:"column",justifyContent:"space-between",transition:"all 0.5s",zIndex:1},u.default.createElement(e.Flex,{p:"2",flexDir:"column",alignItems:"small"===t?"center":"flex-start",as:"nav"},u.default.createElement(e.IconButton,{"aria-label":"",_hover:{bg:"none"},variant:"outline",icon:"small"===t?u.default.createElement(a.FiChevronLeft,null):u.default.createElement(a.FiChevronRight,null),onClick:()=>l("small"===t?"large":"small"),alignSelf:"small"===t?"center":"end"}),o.filter((e=>!!e.show)).map((e=>u.default.createElement(E,{variant:n,key:e.path,icon:e.icon,sidebarSize:t,title:e.title,path:e.path,badgeProps:e.badgeProps,children:e.children})))),u.default.createElement(e.Flex,{p:"4",flexDirection:"column",w:"100%",alignItems:"small"===t?"center":"flex-start"},u.default.createElement(e.Divider,{display:"small"===t?"none":"flex"}),u.default.createElement(e.Flex,{mt:"4",align:"center"},u.default.createElement(e.Avatar,{src:s,objectFit:"contain"},u.default.createElement(e.AvatarBadge,{boxSize:"1.25em",bg:"green.500"})),u.default.createElement(e.Flex,{display:"small"===t?"none":"flex",flexDir:"column",ms:"4"},u.default.createElement(e.Heading,{as:"h3",size:"sm"},c),u.default.createElement(e.Text,{fontSize:"xs"},d))))):u.default.createElement(e.Drawer,{isOpen:r,placement:"right",onClose:i,size:{base:"xs",sm:"sm",md:"md"}},u.default.createElement(e.DrawerOverlay,null,u.default.createElement(e.DrawerContent,null,u.default.createElement(e.DrawerCloseButton,null),u.default.createElement(e.DrawerHeader,null),u.default.createElement(e.DrawerBody,null,o.filter((e=>!!e.show)).map((e=>u.default.createElement(E,{variant:n,key:e.path,icon:e.icon,sidebarSize:t,title:e.title,path:e.path,children:e.children}))))))),x=t=>{var l=c(t,[]);const[a,r]=u.default.useState("large"),o={navigation:"drawer",navigationButton:!0},d=e.useBreakpointValue({base:o,sm:o,md:o,lg:{navigation:"sidebar",navigationButton:!1}});let s=n.useLocation();const{isOpen:p,onClose:E,onOpen:x}=e.useDisclosure();return u.default.useEffect((()=>{E()}),[s]),u.default.createElement(u.default.Fragment,null,u.default.createElement(m,{toggleDrawer:x,linkProps:l.logoLinkProps,toolsBox:l.navbarToolsBox}),u.default.createElement(e.Flex,null,u.default.createElement(h,{ctx:[...l.sidebarRoutes],sidebarSize:a,sidebarSizeSetter:r,isDrawerOpen:p,drawerOnClose:E,variant:null==d?void 0:d.navigation,title:l.sidebarTitle,subTitle:l.sidebarSubTitle,avatarSource:l.sidebarAvatarSrc}),u.default.createElement(e.Box,{h:{xl:"calc(100vh - 60px)","2xl":"calc(100vh - 75px)"},display:"inline-block",w:"sidebar"===(null==d?void 0:d.navigation)?"small"===a?"calc(100vw - 75px)":{xl:"calc(100vw - 300px)","2xl":"calc(100vw - 350px)"}:"full",bg:"#f5f7fc",p:{base:"4",md:"6","2xl":"12"},overflowY:"scroll",minH:{base:"100vh",lg:"initial"}},u.default.createElement(i.ErrorBoundary,{FallbackComponent:f,resetKeys:[s]},u.default.createElement(e.ScaleFade,{key:s.pathname,initialScale:.6,in:!0},u.default.createElement(n.Outlet,null))))))};let b=u.default.createContext(null);function v({children:l,authStatusChecker:a,userRoles:n}){let[r,i]=u.default.useState(!1);t.useEffect((()=>{(()=>d(this,void 0,void 0,(function*(){a().then((()=>i(!0))).catch((()=>i(!1)))})))().catch((e=>{console.log(e)}))}),[a]);let o={isAuthenticated:r,signin:(e,t)=>{},signout:e=>{},userRoles:n};return r?u.default.createElement(b.Provider,{value:o},l):u.default.createElement(e.Center,{py:"12"},u.default.createElement(e.Spinner,{size:"xl",colorScheme:"blue"}))}const g=({allowedRoles:e})=>{const t=n.useLocation(),{userRoles:l}=u.default.useContext(b);return e&&!e.every((e=>null==l?void 0:l.includes(e)))?u.default.createElement(n.Navigate,{to:"/unauthorized",state:{from:t},replace:!0}):u.default.createElement(n.Outlet,null)},S=t=>{var l;const a=null===(l=t.find((e=>e.isIndex)))||void 0===l?void 0:l.component;return u.default.createElement(u.default.Fragment,null,!!a&&u.default.createElement(n.Route,{index:!0,element:u.default.createElement(u.default.Suspense,{fallback:u.default.createElement(e.Center,{w:"full"},u.default.createElement(e.Spinner,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"primary.500",size:"xl",mb:"4"}))},u.default.createElement(a,null))}),t.filter((e=>!e.isIndex&&!e.isInModal)).map((t=>{var l=t.component;return u.default.createElement(n.Route,{element:u.default.createElement(g,{allowedRoles:t.allowedRoles})},u.default.createElement(n.Route,{key:t.path,path:t.path,element:u.default.createElement(u.default.Suspense,{fallback:u.default.createElement(e.Center,{w:"full"},u.default.createElement(e.Spinner,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"primary.500",size:"xl",mb:"4"}))},u.default.createElement(s,{route:t},u.default.createElement(l,null)))},!!t.childRoutes&&S(t.childRoutes)))})))};exports.LayoutRenderer=t=>{var l,a=c(t,[]);let r=n.useLocation(),i=a.routes.find((e=>{var t,l;return!!e.isInModal&&!!e.backgroundPath&&e.path===r.pathname||!!e.isInModal&&!!e.backgroundPath&&r.pathname.includes((null===(t=e.path)||void 0===t?void 0:t.substring(0,e.path.indexOf(null!==(l=e.routeDynamicSection)&&void 0!==l?l:"$")))||"$")}));return u.default.createElement(v,{authStatusChecker:a.authStatusChecker,userRoles:a.userRoles},u.default.createElement(n.Routes,{location:null!==(l=null==i?void 0:i.backgroundPath)&&void 0!==l?l:r},u.default.createElement(n.Route,{path:"/",element:u.default.createElement(x,Object.assign({},a,{sidebarRoutes:a.routes.map((function e(t){var l,n,r;return{description:t.description,icon:t.icon,path:t.path,title:t.title,badgeProps:t.badgeProps,children:null===(l=t.childRoutes)||void 0===l?void 0:l.map(e),show:!!t.isInSidebar&&(!(null===(n=t.allowedRoles)||void 0===n?void 0:n.length)||(null===(r=t.allowedRoles)||void 0===r?void 0:r.every((e=>{var t;return null===(t=a.userRoles)||void 0===t?void 0:t.includes(e)}))))}}))}))},S(a.routes),u.default.createElement(n.Route,{path:"*",element:u.default.createElement(e.Center,{w:"full"},"404")}))),i&&u.default.createElement(n.Routes,null,a.routes.filter((e=>!e.isIndex&&e.isInModal)).map((t=>{var l=t.component;return u.default.createElement(n.Route,{key:t.path,path:t.path,element:u.default.createElement(u.default.Suspense,{fallback:u.default.createElement(e.Center,{w:"full"},u.default.createElement(e.Spinner,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"#1d68d2",size:"xl"}))},u.default.createElement(l,null))})}))))};
>>>>>>> 208dee2c6bfe405a883577f07f1755c720f780ea
