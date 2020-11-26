(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{388:function(a,t,s){"use strict";s.r(t);var e=s(25),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[a._v("#")]),a._v(" Tomcat")]),a._v(" "),s("h2",{attrs:{id:"docker安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[a._v("#")]),a._v(" docker安装")]),a._v(" "),s("ol",[s("li",[a._v("搜索tomcat镜像")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker search tomcat\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("拉取tomcat镜像")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker pull tomcat\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("创建容器，设置端口映射、目录映射")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在/root目录下创建tomcat目录用于存储tomcat数据信息")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/tomcat\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/tomcat\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run -id --name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("c_tomcat "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v(":/usr/local/tomcat/webapps "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\ntomcat \n")])])]),s("ul",[s("li",[a._v("参数说明：\n"),s("ul",[s("li",[s("p",[a._v("**-p 8080:8080：**将容器的8080端口映射到主机的8080端口")]),a._v(" "),s("p",[a._v("**-v $PWD:/usr/local/tomcat/webapps：**将主机中当前目录挂载到容器的webapps")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);