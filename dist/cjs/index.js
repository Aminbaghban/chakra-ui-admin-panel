"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@chakra-ui/react"),t=require("react"),l=require("@chakra-ui/icons"),a=require("react-icons/fi"),n=require("react-router-dom"),r=require("react-error-boundary");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(t);
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
***************************************************************************** */function u(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(l[a[n]]=e[a[n]])}return l}function c(e,t,l,a){return new(l||(l=Promise))((function(n,r){function i(e){try{u(a.next(e))}catch(e){r(e)}}function o(e){try{u(a.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof l?t:new l((function(e){e(t)}))).then(i,o)}u((a=a.apply(e,t||[])).next())}))}function d({error:t,resetErrorBoundary:l}){return o.default.createElement(e.Alert,{status:"error",variant:"subtle",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",height:"200px"},o.default.createElement(e.AlertIcon,{boxSize:"40px",mr:0}),o.default.createElement(e.AlertTitle,{mt:4,mb:1,fontSize:"lg"},"مشکلی رخ داده است."),o.default.createElement(e.AlertDescription,{maxWidth:"sm"},t.message),o.default.createElement(e.Button,{variant:"outline",colorScheme:"red",mt:"5",onClick:()=>window.location.reload()},"بارگذاری مجدد"))}const s=({toggleDrawer:t,userName:n})=>o.default.createElement(e.Flex,{bg:"white",color:"black",boxShadow:"md",justifyContent:"space-between",px:{base:"4",md:"12"},h:{base:"75px",md:"100px"},alignItems:"center",position:"relative",zIndex:10},o.default.createElement(e.IconButton,{display:{md:"none"},variant:"unstyled","aria-label":"اعلانات",size:"lg",icon:o.default.createElement(a.FiAlignRight,null),onClick:t}),o.default.createElement(e.Flex,null,o.default.createElement(e.Image,{src:"/assets/Logo.svg",w:"36",h:{base:"12",md:"full"},mx:"auto"})),o.default.createElement(e.Flex,{display:{base:"none",md:"flex"},align:"center",justifyContent:"end"},o.default.createElement(e.HStack,{spacing:"4"},o.default.createElement(e.IconButton,{variant:"ghost","aria-label":"علاقه‌مندی ها",icon:o.default.createElement(a.FiHeart,null)}),o.default.createElement(e.IconButton,{variant:"ghost","aria-label":"اعلانات",icon:o.default.createElement(a.FiBell,null)}),o.default.createElement(e.Avatar,null),o.default.createElement(e.Menu,null,o.default.createElement(e.MenuButton,{as:e.Button,rightIcon:o.default.createElement(l.ChevronDownIcon,null),bg:"transparent",fontSize:"sm"},n),o.default.createElement(e.MenuList,null,o.default.createElement(e.MenuItem,null,"سلام"),o.default.createElement(e.MenuItem,null,"سلام"),o.default.createElement(e.MenuItem,null,"سلام"))))),o.default.createElement(e.Flex,{display:{md:"none"}},o.default.createElement(e.Avatar,null)));function m(t){var{sidebarSize:l,children:a,to:r}=t,i=u(t,["sidebarSize","children","to"]);return o.default.createElement(n.NavLink,Object.assign({to:r},i,{style:{width:"large"===l?"100%":"initial"}}),(({isActive:t})=>o.default.createElement(e.Box,{p:"3",bg:t?"#1967d21a":"initial",color:t?"#1967D2":"initial",borderRadius:"lg",_hover:{textDecor:"none",color:"#1967D2",bg:"#1967d21a"}},a)))}function f({title:t,icon:l,description:a}){return o.default.createElement(o.default.Fragment,null,o.default.createElement(e.Flex,{pos:"absolute",mt:"calc(100px - 7.5px)",ms:"-10px",zIndex:1e10,width:0,height:0,borderTop:"10px solid transparent",borderBottom:"10px solid transparent",borderLeft:"10px solid #1967d27d"}),o.default.createElement(e.Flex,{h:100,w:"100%",flexDir:"column",alignItems:"center",justify:"center",bg:"#1967d27d",borderRadius:"10px",color:"#fff",textAlign:"center"},o.default.createElement(e.Icon,{as:l,fontSize:"xl",mb:4}),o.default.createElement(e.Heading,{size:"sm",fontWeight:"normal"},t),o.default.createElement(e.Text,{fontSize:"sm"},a)))}const p=({sidebarSize:t,icon:l,title:a,link:n,variant:r})=>{const{isOpen:i,onOpen:u,onClose:c}=e.useDisclosure();return o.default.createElement(e.Flex,{mt:"2",flexDir:"column",w:"100%",alignItems:"small"===t?"center":"flex-start",color:"gray.600",fontSize:"sm"},"sidebar"===r?o.default.createElement(e.Menu,{placement:"start",isOpen:i},o.default.createElement(m,{to:n,sidebarSize:t},o.default.createElement(e.MenuButton,{w:"full",onMouseEnter:u,onMouseLeave:c},o.default.createElement(e.Flex,{align:"center"},o.default.createElement(e.Icon,{as:l,fontSize:"xl"}),o.default.createElement(e.Text,{ms:"5",display:"small"===t?"none":"flex"},a)))),o.default.createElement(e.MenuList,{onMouseEnter:u,onMouseLeave:c,py:"0",w:100,h:100,ms:5},o.default.createElement(f,{title:a,icon:l,description:""}))):o.default.createElement(m,{to:n,sidebarSize:t},o.default.createElement(e.Flex,{align:"center"},o.default.createElement(e.Icon,{as:l,fontSize:"xl"}),o.default.createElement(e.Text,{ms:"5",display:"small"===t?"none":"flex"},a))))},E=({sidebarSize:t,sidebarSizeSetter:l,variant:n,isDrawerOpen:r,drawerOnClose:i,ctx:u,title:c,subTitle:d,avatarSource:s})=>"sidebar"===n?o.default.createElement(e.Flex,{h:"calc(100vh - 100px)",overflowY:"scroll",w:"small"===t?"75px":"350px",ps:"small"===t?"initial":"50px",boxShadow:"lg",flexDir:"column",justifyContent:"space-between",transition:"all 0.5s",zIndex:1},o.default.createElement(e.Flex,{p:"2",flexDir:"column",alignItems:"small"===t?"center":"flex-start",as:"nav"},o.default.createElement(e.IconButton,{"aria-label":"",_hover:{bg:"none"},variant:"outline",icon:"small"===t?o.default.createElement(a.FiChevronLeft,null):o.default.createElement(a.FiChevronRight,null),onClick:()=>l("small"===t?"large":"small"),alignSelf:"small"===t?"center":"end"}),u.map((e=>o.default.createElement(p,{variant:n,key:e.path,icon:e.icon,sidebarSize:t,title:e.title,link:e.path})))),o.default.createElement(e.Flex,{p:"4",flexDirection:"column",w:"100%",alignItems:"small"===t?"center":"flex-start"},o.default.createElement(e.Divider,{display:"small"===t?"none":"flex"}),o.default.createElement(e.Flex,{mt:"4",align:"center"},o.default.createElement(e.Avatar,{src:s},o.default.createElement(e.AvatarBadge,{boxSize:"1.25em",bg:"green.500"})),o.default.createElement(e.Flex,{display:"small"===t?"none":"flex",flexDir:"column",ms:"4"},o.default.createElement(e.Heading,{as:"h3",size:"sm"},c),o.default.createElement(e.Text,{fontSize:"xs"},d))))):o.default.createElement(e.Drawer,{isOpen:r,placement:"right",onClose:i},o.default.createElement(e.DrawerOverlay,null,o.default.createElement(e.DrawerContent,null,o.default.createElement(e.DrawerCloseButton,null),o.default.createElement(e.DrawerHeader,null),o.default.createElement(e.DrawerBody,null,u.map((e=>o.default.createElement(p,{variant:n,key:e.path,icon:e.icon,sidebarSize:t,title:e.title,link:e.path}))))))),x=t=>{var l=u(t,[]);const[a,i]=o.default.useState("large"),c=e.useBreakpointValue({base:{navigation:"drawer",navigationButton:!0},md:{navigation:"sidebar",navigationButton:!1}});let m=n.useLocation();const[f,p]=e.useBoolean();return o.default.createElement(o.default.Fragment,null,o.default.createElement(s,{toggleDrawer:p.on,userName:l.navbarTitle}),o.default.createElement(e.Flex,null,o.default.createElement(E,{ctx:[...l.sidebarRoutes],sidebarSize:a,sidebarSizeSetter:i,isDrawerOpen:f,drawerOnClose:p.off,variant:null==c?void 0:c.navigation,title:l.sidebarTitle,subTitle:l.sidebarSubTitle,avatarSource:l.sidebarAvatarSrc}),o.default.createElement(e.Box,{h:"calc(100vh - 100px)",display:"inline-block",w:"sidebar"===(null==c?void 0:c.navigation)?"small"===a?"calc(100vw - 75px)":"calc(100vw - 350px)":"full",bg:"#f5f7fc",p:{base:"4",md:"6",lg:"12"},overflowY:"scroll"},o.default.createElement(r.ErrorBoundary,{FallbackComponent:d,resetKeys:[m]},o.default.createElement(e.ScaleFade,{key:m.pathname,initialScale:.6,in:!0},o.default.createElement(n.Outlet,null))))))};let b=o.default.createContext(null);function g({children:l,authStatusChecker:a}){let[n,r]=o.default.useState(!1);t.useEffect((()=>{(()=>c(this,void 0,void 0,(function*(){a().then((()=>r(!0))).catch((()=>r(!1)))})))().catch((e=>{console.log(e)}))}),[a]);let i={isAuthenticated:n,signin:(e,t)=>{},signout:e=>{}};return n?o.default.createElement(b.Provider,{value:i},l):o.default.createElement(e.Center,null,"Authenticaing ...")}exports.LayoutRenderer=t=>{var l=u(t,[]);return o.default.createElement(g,{authStatusChecker:l.authStatusChecker},o.default.createElement(n.Routes,null,o.default.createElement(n.Route,{path:"/",element:o.default.createElement(x,Object.assign({},l,{sidebarRoutes:l.routes.filter((e=>e.isInSidebar)).map((e=>({description:e.description,icon:e.icon,path:e.path,title:e.title})))}))},o.default.createElement(n.Route,{index:!0,element:l.indexComponent}),l.routes.filter((e=>!e.isIndex)).map((t=>{var l=t.component;return o.default.createElement(n.Route,{key:t.path,path:t.path,element:o.default.createElement(o.default.Suspense,{fallback:o.default.createElement(e.Center,{w:"full"},o.default.createElement(e.Spinner,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"#1d68d2",size:"xl"}))},o.default.createElement(l,null))})})),o.default.createElement(n.Route,{path:"*",element:o.default.createElement(e.Center,{w:"full"},"404")}))))};
//# sourceMappingURL=index.js.map
