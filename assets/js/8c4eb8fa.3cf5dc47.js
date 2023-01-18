"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5627],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4210:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],s={title:"PGP",sidebar_position:18},p=void 0,o={unversionedId:"commands/misc/pgp",id:"commands/misc/pgp",title:"PGP",description:"The pgp sub-commands are low-level commands, exposing the PGP capabilities of",source:"@site/docs/commands/misc/pgp.md",sourceDirName:"commands/misc",slug:"/commands/misc/pgp",permalink:"/docs/commands/misc/pgp",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/misc/pgp.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"PGP",sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Default File",permalink:"/docs/commands/misc/default-file"},next:{title:"Shebang",permalink:"/docs/commands/shebang"}},c={},u=[{value:"Create key pairs",id:"create-key-pairs",level:2},{value:"Get the fingerprint of a public key",id:"get-the-fingerprint-of-a-public-key",level:2},{value:"Push public keys to key servers",id:"push-public-keys-to-key-servers",level:2},{value:"Pull public keys from key servers",id:"pull-public-keys-from-key-servers",level:2},{value:"Sign files",id:"sign-files",level:2},{value:"Verify signatures",id:"verify-signatures",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pgp")," sub-commands are low-level commands, exposing the PGP capabilities of\nScala CLI. These capabilities are used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"publish setup")," commands\nin particular."),(0,i.kt)("p",null,"These commands make it possible to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create PGP keys with ",(0,i.kt)("inlineCode",{parentName:"li"},"pgp create")),(0,i.kt)("li",{parentName:"ul"},"get a key fingerprint with ",(0,i.kt)("inlineCode",{parentName:"li"},"pgp key-id")),(0,i.kt)("li",{parentName:"ul"},"push them to / pull them from key servers with ",(0,i.kt)("inlineCode",{parentName:"li"},"pgp push")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"pgp pull")),(0,i.kt)("li",{parentName:"ul"},"sign files with ",(0,i.kt)("inlineCode",{parentName:"li"},"pgp sign")),(0,i.kt)("li",{parentName:"ul"},"verify signatures with ",(0,i.kt)("inlineCode",{parentName:"li"},"pgp verify"))),(0,i.kt)("p",null,"These capabilities rely on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.bouncycastle.org"},"Bouncy Castle library"),".\nNote that sub-commands relying on signing, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"publish"),", also allow signing\nto be handled using ",(0,i.kt)("inlineCode",{parentName:"p"},"gpg"),"."),(0,i.kt)("h2",{id:"create-key-pairs"},"Create key pairs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ scala-cli pgp create --email alex@alex.me --password env:MY_PASSWORD\nWrote public key e259e7e8a23475b3 to key.pub\nWrote secret key to key.skr\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/password-options"},"the dedicated page")," for the various formats\naccepted by the ",(0,i.kt)("inlineCode",{parentName:"p"},"--password")," option."),(0,i.kt)("h2",{id:"get-the-fingerprint-of-a-public-key"},"Get the fingerprint of a public key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ scala-cli pgp key-id ./key.pub\ne259e7e8a23475b3\n")),(0,i.kt)("h2",{id:"push-public-keys-to-key-servers"},"Push public keys to key servers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ scala-cli pgp push key.pub\nKey 0xe259e7e8a23475b3 uploaded to http://keyserver.ubuntu.com:11371\n")),(0,i.kt)("h2",{id:"pull-public-keys-from-key-servers"},"Pull public keys from key servers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ scala-cli pgp pull 0x914d298df8fa4d20\n-----BEGIN PGP PUBLIC KEY BLOCK-----\n\u2026\n-----END PGP PUBLIC KEY BLOCK-----\n")),(0,i.kt)("h2",{id:"sign-files"},"Sign files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ scala-cli pgp sign --secret-key file:./key.skr --password value:1234 ./foo\n$ cat ./foo.asc\n-----BEGIN PGP MESSAGE-----\n\u2026\n-----END PGP MESSAGE-----\n\n$ scala-cli pgp sign --secret-key file:./key.skr --password value:1234 ./foo --stdout\n-----BEGIN PGP MESSAGE-----\n\u2026\n-----END PGP MESSAGE-----\n")),(0,i.kt)("h2",{id:"verify-signatures"},"Verify signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ scala-cli pgp verify --key key.pub foo.asc\nfoo.asc: valid signature\n")))}d.isMDXComponent=!0}}]);