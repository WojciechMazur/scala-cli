"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8368],{9705:function(e,t,a){a.d(t,{m:function(){return l},v:function(){return i}});var n=a(7294),s=a(2004);function i(e){var t=e.children;return n.createElement("div",{className:"runnable-command"},t)}function l(e){var t=e.url;return n.createElement(s.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:t})}},7144:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(3117),s=a(102),i=(a(7294),a(3905)),l=a(9705),r=["components"],o={title:"Test",sidebar_position:7},c=void 0,p={unversionedId:"commands/test",id:"commands/test",title:"Test",description:"The test command runs test suites in the test sources.",source:"@site/docs/commands/test.md",sourceDirName:"commands",slug:"/commands/test",permalink:"/docs/commands/test",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/test.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Test",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Run",permalink:"/docs/commands/run"},next:{title:"REPL",permalink:"/docs/commands/repl"}},u={},m=[{value:"Test sources",id:"test-sources",level:2},{value:"Test framework",id:"test-framework",level:2},{value:"Filter test suite",id:"filter-test-suite",level:2},{value:"Filter test case",id:"filter-test-case",level:2},{value:"Munit",id:"munit",level:3},{value:"Test arguments",id:"test-arguments",level:2}],d={toc:m};function k(e){var t=e.components,a=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," command runs test suites in the test sources.\nTest sources are compiled separately (after the 'main' sources), and may use different dependencies, compiler options, and other configurations."),(0,i.kt)("p",null,"By default, all command line options apply to both the main and test sources, so ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/using-directives"},"using directives")," (or ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/configuration#special-imports"},"special imports"),") can be used to provide test-specific configurations."),(0,i.kt)("h2",{id:"test-sources"},"Test sources"),(0,i.kt)("p",null,"A source file is treated as test source if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it contains the ",(0,i.kt)("inlineCode",{parentName:"li"},'//> using target.scope "test"')," directive, or"),(0,i.kt)("li",{parentName:"ul"},"the file name ends with ",(0,i.kt)("inlineCode",{parentName:"li"},".test.scala"),", or"),(0,i.kt)("li",{parentName:"ul"},"the file comes from a directory that is provided as input, and the relative path from that file to its original directory contains a ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," directory")),(0,i.kt)("p",null,"The last rule may sound a bit complicated, so let's explain it using following directory structure:"),(0,i.kt)(l.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tree example\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"example\n\u251c\u2500\u2500 a.scala\n\u251c\u2500\u2500 a.test.scala\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 main\n    \u2502   \u2514\u2500\u2500 scala\n    \u2502       \u2514\u2500\u2500 d.scala\n    \u251c\u2500\u2500 test\n    \u2502   \u2514\u2500\u2500 scala\n    \u2502       \u2514\u2500\u2500 b.scala\n    \u2514\u2500\u2500 test_unit\n        \u2514\u2500\u2500 scala\n            \u2514\u2500\u2500 e.scala\n"))),(0,i.kt)("p",null,"Given that directory structure, let's analyze what file(s) will be treated as tests based on the provided inputs."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli example")," results in the following files being treated as test sources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"a.test.scala"),", since it ends with ",(0,i.kt)("inlineCode",{parentName:"li"},".test.scala")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/test/scala/b.scala"),", since the path to that directory contains a directory named ",(0,i.kt)("inlineCode",{parentName:"li"},"test"))),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"e.scala")," is not treated as a test source since it lacks a parent directory in its relative path that is exactly named ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," (the name",(0,i.kt)("inlineCode",{parentName:"p"},"test_unit")," starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),", but ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," only looks for parent directories on the relative path with the exact name ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),")."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli example/src")," results in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/test/scala/b.scala")," being treated as a test file since its relative path (",(0,i.kt)("inlineCode",{parentName:"p"},"test/scala/b.scala"),") contains a directory named ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,i.kt)("p",null,"Conversely, ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli example/src/test")," results in no test sources, since the relative path to ",(0,i.kt)("inlineCode",{parentName:"p"},"b.scala")," does not contain ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," (the fact that the directory provided as input is named ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," does not make its content a test source)."),(0,i.kt)("p",null,"Directives take precedence over file or path names, so ",(0,i.kt)("inlineCode",{parentName:"p"},"using target main")," can be used to force ",(0,i.kt)("inlineCode",{parentName:"p"},"test/a.scala")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"a.test.scala")," to not be treated as tests."),(0,i.kt)("p",null,"As a rule of thumb, we recommend naming all of your test files with the ",(0,i.kt)("inlineCode",{parentName:"p"},".test.scala")," suffix."),(0,i.kt)("h2",{id:"test-framework"},"Test framework"),(0,i.kt)("p",null,"In order to run tests with a test framework, add the framework dependency to your application.\nSome of the most popular test frameworks in Scala are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://scalameta.org/munit"},"munit"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"org.scalameta::munit::0.7.27")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/com-lihaoyi/utest"},"utest"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"com.lihaoyi::utest::0.7.10")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.scalatest.org"},"ScalaTest"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"org.scalatest::scalatest::3.2.9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://junit.org/junit4"},"JUnit 4"),", which can be used via a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sbt/junit-interface"},"dedicated interface"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"com.github.sbt:junit-interface:0.13.2"))),(0,i.kt)("p",null,"The following example shows how to run an munit-based test suite:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=MyTests.scala",title:"MyTests.scala"},'//> using lib "org.scalameta::munit::0.7.27"\n\nclass MyTests extends munit.FunSuite {\n  test("foo") {\n    assert(2 + 2 == 4)\n  }\n}\n')),(0,i.kt)(l.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli test MyTests.scala\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Compiling project (1 Scala source)\nCompiled project\nMyTests:\n  + foo 0.143s\n"))),(0,i.kt)("h2",{id:"filter-test-suite"},"Filter test suite"),(0,i.kt)("p",null,"Passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--test-only")," option to the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," sub-command filters the test suites to be run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=BarTests.scala",title:"BarTests.scala"},'//> using lib "org.scalameta::munit::0.7.29"\npackage tests.only\n\nclass BarTests extends munit.FunSuite {\n  test("bar") {\n    assert(2 + 3 == 5)\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=HelloTests.scala",title:"HelloTests.scala"},'package tests\n\nclass HelloTests extends munit.FunSuite {\n  test("hello") {\n    assert(2 + 2 == 4)\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli test . --test-only 'tests.only*' \n# tests.only.BarTests:\n#   + bar 0.045s\n")),(0,i.kt)("h2",{id:"filter-test-case"},"Filter test case"),(0,i.kt)("h3",{id:"munit"},"Munit"),(0,i.kt)("p",null,"To run a specific test case inside the unit test suite pass ",(0,i.kt)("inlineCode",{parentName:"p"},"*exact-test-name*")," as an argument to scala-cli:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=BarTests.scala",title:"BarTests.scala"},'//> using lib "org.scalameta::munit::0.7.29"\npackage tests.only\n\nclass Tests extends munit.FunSuite {\n  test("bar") {\n    assert(2 + 2 == 5)\n  }\n  test("foo") {\n    assert(2 + 3 == 5)\n  }\n  test("foo-again") {\n    assert(2 + 3 == 5)\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli test . --test-only 'tests.only*'  -- '*foo*'\n# tests.only.Tests:\n#   + foo 0.045s\n#   + foo-again 0.001s\n")),(0,i.kt)("h2",{id:"test-arguments"},"Test arguments"),(0,i.kt)("p",null,"You can pass test arguments to your test framework by passing them after ",(0,i.kt)("inlineCode",{parentName:"p"},"--"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=MyTests.scala",title:"MyTests.scala"},'//> using lib "org.scalatest::scalatest::3.2.9"\n\nimport org.scalatest._\nimport org.scalatest.flatspec._\nimport org.scalatest.matchers._\n\nclass Tests extends AnyFlatSpec with should.Matchers {\n  "A thing" should "thing" in {\n    assert(2 + 2 == 4)\n  }\n}\n')),(0,i.kt)(l.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli test MyTests.scala -- -oD\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Compiling project (1 Scala source)\nCompiled project\nTests:\nA thing\n- should thing (22 milliseconds)\nRun completed in 359 milliseconds.\nTotal number of tests run: 1\nSuites: completed 1, aborted 0\nTests: succeeded 1, failed 0, canceled 0, ignored 0, pending 0\nAll tests passed.\n"))))}k.isMDXComponent=!0}}]);