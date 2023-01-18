"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8119],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=a.createContext({}),o=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(r.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),k=o(t),d=l,c=k["".concat(r,".").concat(d)]||k[d]||m[d]||i;return t?a.createElement(c,p(p({ref:n},u),{},{components:t})):a.createElement(c,p({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,p=new Array(i);p[0]=k;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s.mdxType="string"==typeof e?e:l,p[1]=s;for(var o=2;o<i;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5933:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return m}});var a=t(3117),l=t(102),i=(t(7294),t(3905)),p=["components"],s={title:"Directives",sidebar_position:2},r=void 0,o={unversionedId:"reference/directives",id:"reference/directives",title:"Directives",description:"using directives",source:"@site/docs/reference/directives.md",sourceDirName:"reference",slug:"/reference/directives",permalink:"/docs/reference/directives",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/reference/directives.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Directives",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Command-line options",permalink:"/docs/reference/cli-options"},next:{title:"Commands",permalink:"/docs/reference/commands"}},u={},m=[{value:"using directives",id:"using-directives",level:2},{value:"Compiler options",id:"compiler-options",level:3},{value:"Examples",id:"examples",level:4},{value:"Compiler plugins",id:"compiler-plugins",level:3},{value:"Examples",id:"examples-1",level:4},{value:"Custom JAR",id:"custom-jar",level:3},{value:"Examples",id:"examples-2",level:4},{value:"Custom sources",id:"custom-sources",level:3},{value:"Examples",id:"examples-3",level:4},{value:"Dependency",id:"dependency",level:3},{value:"Examples",id:"examples-4",level:4},{value:"JVM version",id:"jvm-version",level:3},{value:"Examples",id:"examples-5",level:4},{value:"Java home",id:"java-home",level:3},{value:"Examples",id:"examples-6",level:4},{value:"Java options",id:"java-options",level:3},{value:"Examples",id:"examples-7",level:4},{value:"Java properties",id:"java-properties",level:3},{value:"Examples",id:"examples-8",level:4},{value:"Javac options",id:"javac-options",level:3},{value:"Examples",id:"examples-9",level:4},{value:"Main class",id:"main-class",level:3},{value:"Examples",id:"examples-10",level:4},{value:"Packaging",id:"packaging",level:3},{value:"Examples",id:"examples-11",level:4},{value:"Platform",id:"platform",level:3},{value:"Examples",id:"examples-12",level:4},{value:"Publish",id:"publish",level:3},{value:"Examples",id:"examples-13",level:4},{value:"Publish (CI)",id:"publish-ci",level:3},{value:"Examples",id:"examples-14",level:4},{value:"Publish (contextual)",id:"publish-contextual",level:3},{value:"Examples",id:"examples-15",level:4},{value:"Python",id:"python",level:3},{value:"Examples",id:"examples-16",level:4},{value:"Repository",id:"repository",level:3},{value:"Examples",id:"examples-17",level:4},{value:"Resource directories",id:"resource-directories",level:3},{value:"Examples",id:"examples-18",level:4},{value:"Scala Native options",id:"scala-native-options",level:3},{value:"Examples",id:"examples-19",level:4},{value:"Scala version",id:"scala-version",level:3},{value:"Examples",id:"examples-20",level:4},{value:"Scala.js options",id:"scalajs-options",level:3},{value:"Examples",id:"examples-21",level:4},{value:"Test framework",id:"test-framework",level:3},{value:"Examples",id:"examples-22",level:4},{value:"Toolkit",id:"toolkit",level:3},{value:"Examples",id:"examples-23",level:4},{value:"target directives",id:"target-directives",level:2},{value:"Platform",id:"platform-1",level:3},{value:"Examples",id:"examples-24",level:4},{value:"Scala version",id:"scala-version-1",level:3},{value:"Examples",id:"examples-25",level:4},{value:"Scala version bounds",id:"scala-version-bounds",level:3},{value:"Examples",id:"examples-26",level:4},{value:"Scope",id:"scope",level:3},{value:"Examples",id:"examples-27",level:4}],k={toc:m};function d(e){var n=e.components,t=(0,l.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"using-directives"},"using directives"),(0,i.kt)("h3",{id:"compiler-options"},"Compiler options"),(0,i.kt)("p",null,"Add Scala compiler options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using option "),(0,i.kt)("em",{parentName:"p"},"option")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using options "),(0,i.kt)("em",{parentName:"p"},"option1"),", ",(0,i.kt)("em",{parentName:"p"},"option2")," \u2026"),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using option "-Xasync"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using options "-Xasync", "-Xfatal-warnings"')),(0,i.kt)("h3",{id:"compiler-plugins"},"Compiler plugins"),(0,i.kt)("p",null,"Adds compiler plugins"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using plugin "),(0,i.kt)("em",{parentName:"p"},"org"),(0,i.kt)("inlineCode",{parentName:"p"},":"),"name",(0,i.kt)("inlineCode",{parentName:"p"},":"),"ver"),(0,i.kt)("h4",{id:"examples-1"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using plugin "org.typelevel:::kind-projector:0.13.2"')),(0,i.kt)("h3",{id:"custom-jar"},"Custom JAR"),(0,i.kt)("p",null,"Manually add JAR(s) to the class path"),(0,i.kt)("p",null,"//> using jar ",(0,i.kt)("em",{parentName:"p"},"path")),(0,i.kt)("p",null,"//> using jars ",(0,i.kt)("em",{parentName:"p"},"path1"),", ",(0,i.kt)("em",{parentName:"p"},"path2")," \u2026"),(0,i.kt)("h4",{id:"examples-2"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using jar "/Users/alexandre/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/com/chuusai/shapeless_2.13/2.3.7/shapeless_2.13-2.3.7.jar"')),(0,i.kt)("h3",{id:"custom-sources"},"Custom sources"),(0,i.kt)("p",null,"Manually add sources to the project"),(0,i.kt)("p",null,"//> using file hello.sc"),(0,i.kt)("p",null,"//> using files Utils.scala, Helper.scala \u2026"),(0,i.kt)("h4",{id:"examples-3"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using file "utils.scala"')),(0,i.kt)("h3",{id:"dependency"},"Dependency"),(0,i.kt)("p",null,"Add dependencies"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using lib "'),(0,i.kt)("em",{parentName:"p"},"org"),(0,i.kt)("inlineCode",{parentName:"p"},":"),"name",(0,i.kt)("inlineCode",{parentName:"p"},":"),'ver"'),(0,i.kt)("h4",{id:"examples-4"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using lib "org.scalatest::scalatest:3.2.10"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using lib "org.scalameta::munit:0.7.29"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using lib "tabby:tabby:0.2.3,url=https://github.com/bjornregnell/tabby/releases/download/v0.2.3/tabby_3-0.2.3.jar"')),(0,i.kt)("h3",{id:"jvm-version"},"JVM version"),(0,i.kt)("p",null,"Use a specific JVM, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"14"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"adopt:11"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"graalvm:21"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"system")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jvm")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("h4",{id:"examples-5"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using jvm "11"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using jvm "adopt:11"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using jvm "graalvm:21"')),(0,i.kt)("h3",{id:"java-home"},"Java home"),(0,i.kt)("p",null,"Sets Java home used to run your application or tests"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using java-home "),(0,i.kt)("em",{parentName:"p"},"path")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using javaHome "),(0,i.kt)("em",{parentName:"p"},"path")),(0,i.kt)("h4",{id:"examples-6"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using java-home "/Users/Me/jdks/11"')),(0,i.kt)("h3",{id:"java-options"},"Java options"),(0,i.kt)("p",null,"Add Java options which will be passed when running an application."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using java-opt "),(0,i.kt)("em",{parentName:"p"},"options")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using javaOpt "),(0,i.kt)("em",{parentName:"p"},"options")),(0,i.kt)("h4",{id:"examples-7"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using javaOpt "-Xmx2g", "-Dsomething=a"')),(0,i.kt)("h3",{id:"java-properties"},"Java properties"),(0,i.kt)("p",null,"Add Java properties"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using javaProp "),(0,i.kt)("em",{parentName:"p"},"key=value"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"//> using javaProp "),(0,i.kt)("em",{parentName:"p"},"key")),(0,i.kt)("h4",{id:"examples-8"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using javaProp "foo1=bar", "foo2"')),(0,i.kt)("h3",{id:"javac-options"},"Javac options"),(0,i.kt)("p",null,"Add Javac options which will be passed when compiling sources."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using javac-opt "),(0,i.kt)("em",{parentName:"p"},"options")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using javacOpt "),(0,i.kt)("em",{parentName:"p"},"options")),(0,i.kt)("h4",{id:"examples-9"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using javacOpt "source", "1.8", "target", "1.8"')),(0,i.kt)("h3",{id:"main-class"},"Main class"),(0,i.kt)("p",null,"Specify default main class"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using main-class "),(0,i.kt)("em",{parentName:"p"},"main class")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using mainClass "),(0,i.kt)("em",{parentName:"p"},"main class")),(0,i.kt)("h4",{id:"examples-10"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using main-class "helloWorld"')),(0,i.kt)("h3",{id:"packaging"},"Packaging"),(0,i.kt)("p",null,"Set parameters for packaging"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using packaging.packageType "),'"package type"'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using packaging.output "),'"destination path"'),(0,i.kt)("h4",{id:"examples-11"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using packaging.packageType "assembly"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using packaging.output "foo"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using packaging.provided "org.apache.spark::spark-sql"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using packaging.dockerFrom "openjdk:11"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using packaging.graalvmArgs "--no-fallback"')),(0,i.kt)("h3",{id:"platform"},"Platform"),(0,i.kt)("p",null,"Set the default platform to Scala.js or Scala Native"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using platform "),"(",(0,i.kt)("inlineCode",{parentName:"p"},"jvm"),"|",(0,i.kt)("inlineCode",{parentName:"p"},"scala-js"),"|",(0,i.kt)("inlineCode",{parentName:"p"},"scala-native"),")+"),(0,i.kt)("h4",{id:"examples-12"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using platform "scala-js"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using platform "jvm", "scala-native"')),(0,i.kt)("h3",{id:"publish"},"Publish"),(0,i.kt)("p",null,"Set parameters for publishing"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using publish.organization "),'"value"\n',(0,i.kt)("inlineCode",{parentName:"p"},"//> using publish.name "),'"value"\n',(0,i.kt)("inlineCode",{parentName:"p"},"//> using publish.version "),'"value"'),(0,i.kt)("h4",{id:"examples-13"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using publish.organization "io.github.myself"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using publish.name "my-library"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using publish.version "0.1.1"')),(0,i.kt)("h3",{id:"publish-ci"},"Publish (CI)"),(0,i.kt)("p",null,"Set CI parameters for publishing"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using publish.ci.computeVersion "),'"value"\n',(0,i.kt)("inlineCode",{parentName:"p"},"//> using publish.ci.repository "),'"value"\n',(0,i.kt)("inlineCode",{parentName:"p"},"//> using publish.ci.secretKey "),'"value"'),(0,i.kt)("h4",{id:"examples-14"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using publish.ci.computeVersion "git:tag"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using publish.ci.repository "central-s01"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using publish.ci.secretKey "env:PUBLISH_SECRET_KEY"')),(0,i.kt)("h3",{id:"publish-contextual"},"Publish (contextual)"),(0,i.kt)("p",null,"Set contextual parameters for publishing"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using publish.computeVersion "),'"value"\n',(0,i.kt)("inlineCode",{parentName:"p"},"//> using publish.repository "),'"value"\n',(0,i.kt)("inlineCode",{parentName:"p"},"//> using publish.secretKey "),'"value"'),(0,i.kt)("h4",{id:"examples-15"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using publish.computeVersion "git:tag"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using publish.repository "central-s01"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using publish.secretKey "env:PUBLISH_SECRET_KEY"')),(0,i.kt)("h3",{id:"python"},"Python"),(0,i.kt)("p",null,"Enable Python support"),(0,i.kt)("p",null,"`//> using python"),(0,i.kt)("h4",{id:"examples-16"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using python")),(0,i.kt)("h3",{id:"repository"},"Repository"),(0,i.kt)("p",null,"Add a repository for dependency resolution"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using repository "),(0,i.kt)("em",{parentName:"p"},"repository")),(0,i.kt)("h4",{id:"examples-17"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using repository "jitpack"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using repository "sonatype:snapshots"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using repository "https://maven-central.storage-download.googleapis.com/maven2"')),(0,i.kt)("h3",{id:"resource-directories"},"Resource directories"),(0,i.kt)("p",null,"Manually add a resource directory to the class path"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using resourceDir "),(0,i.kt)("em",{parentName:"p"},"path")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using resourceDirs "),(0,i.kt)("em",{parentName:"p"},"path1"),", ",(0,i.kt)("em",{parentName:"p"},"path2")," \u2026"),(0,i.kt)("h4",{id:"examples-18"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using resourceDir "./resources"')),(0,i.kt)("h3",{id:"scala-native-options"},"Scala Native options"),(0,i.kt)("p",null,"Add Scala Native options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeGc")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeMode")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeVersion")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeCompile")," ",(0,i.kt)("em",{parentName:"p"},"value1"),", ",(0,i.kt)("em",{parentName:"p"},"value2")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeLinking")," ",(0,i.kt)("em",{parentName:"p"},"value1"),", ",(0,i.kt)("em",{parentName:"p"},"value2")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeClang")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeClangPP")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using nativeEmbedResources")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("h4",{id:"examples-19"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using nativeVersion "0.4.0"')),(0,i.kt)("h3",{id:"scala-version"},"Scala version"),(0,i.kt)("p",null,"Set the default Scala version"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using scala "),(0,i.kt)("em",{parentName:"p"},"version"),"+"),(0,i.kt)("h4",{id:"examples-20"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using scala "3.0.2"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using scala "2.13"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using scala "2"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using scala "2.13.6", "2.12.16"')),(0,i.kt)("h3",{id:"scalajs-options"},"Scala.js options"),(0,i.kt)("p",null,"Add Scala.js options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsVersion")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsMode")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsModuleKind")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsSmallModuleForPackage")," ",(0,i.kt)("em",{parentName:"p"},"value1"),", ",(0,i.kt)("em",{parentName:"p"},"value2")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsCheckIr")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsEmitSourceMaps")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsDom")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsHeader")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsAllowBigIntsForLongs")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsAvoidClasses")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsAvoidLetsAndConsts")," ",(0,i.kt)("em",{parentName:"p"},"true|false")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsModuleSplitStyleStr")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using jsEsVersionStr")," ",(0,i.kt)("em",{parentName:"p"},"value")),(0,i.kt)("h4",{id:"examples-21"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using jsModuleKind "common"')),(0,i.kt)("h3",{id:"test-framework"},"Test framework"),(0,i.kt)("p",null,"Set the test framework"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using testFramework "),(0,i.kt)("em",{parentName:"p"},"class_name")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"//> using `test-framework` "),(0,i.kt)("em",{parentName:"p"},"class_name")),(0,i.kt)("h4",{id:"examples-22"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using testFramework "utest.runner.Framework"')),(0,i.kt)("h3",{id:"toolkit"},"Toolkit"),(0,i.kt)("p",null,"Use a toolkit as dependency"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using toolkit")," ",(0,i.kt)("em",{parentName:"p"},"version")),(0,i.kt)("h4",{id:"examples-23"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using toolkit "0.1.0"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using toolkit "latest"')),(0,i.kt)("h2",{id:"target-directives"},"target directives"),(0,i.kt)("h3",{id:"platform-1"},"Platform"),(0,i.kt)("p",null,"Require a Scala platform for the current file"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using target.platform "),(0,i.kt)("em",{parentName:"p"},"platform")),(0,i.kt)("h4",{id:"examples-24"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using target.platform "scala-js"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using target.platform "scala-js", "scala-native"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using target.platform "jvm"')),(0,i.kt)("h3",{id:"scala-version-1"},"Scala version"),(0,i.kt)("p",null,"Require a Scala version for the current file"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using target.scala "),(0,i.kt)("em",{parentName:"p"},"version")),(0,i.kt)("h4",{id:"examples-25"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using target.scala "3"')),(0,i.kt)("h3",{id:"scala-version-bounds"},"Scala version bounds"),(0,i.kt)("p",null,"Require a Scala version for the current file"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using target.scala.>= "),(0,i.kt)("em",{parentName:"p"},"version")),(0,i.kt)("h4",{id:"examples-26"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using target.scala.>= "2.13"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using target.scala.< "3.0.2"')),(0,i.kt)("h3",{id:"scope"},"Scope"),(0,i.kt)("p",null,"Require a scope for the current file"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"//> using target.scope "),(0,i.kt)("em",{parentName:"p"},"scope")),(0,i.kt)("h4",{id:"examples-27"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'//> using target.scope "test"')))}d.isMDXComponent=!0}}]);