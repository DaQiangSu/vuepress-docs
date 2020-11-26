(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{392:function(s,a,e){"use strict";e.r(a);var t=e(25),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" Redis")]),s._v(" "),e("h2",{attrs:{id:"linux安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux安装"}},[s._v("#")]),s._v(" Linux安装")]),s._v(" "),e("p",[s._v("设置"),e("a",{attrs:{href:"http://lib.csdn.net/base/redis",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis"),e("OutboundLink")],1),s._v("的仓库地址")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release\n")])])]),e("p",[s._v("安装redis")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis\n")])])]),e("p",[s._v("修改配置文件，监听所有的IP地址")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/redis.conf\n找到下面这一行\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#bind 127.0.0.1")]),s._v("\n修改为\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1（不能被外网访问）\n修改为\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" 本机固定IP地址（可以被外网访问）\n")])])]),e("p",[s._v("如果需要设置开机自动启动")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" redis\n")])])]),e("p",[s._v("开启防火墙")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("firewall-cmd --zone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp --permanent\nfirewall-cmd --reload\n")])])]),e("p",[s._v("启动redis")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("systemctl start redis\n")])])]),e("h2",{attrs:{id:"window安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window安装"}},[s._v("#")]),s._v(" Window安装")]),s._v(" "),e("h2",{attrs:{id:"docker安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" docker安装")]),s._v(" "),e("ol",[e("li",[s._v("搜索redis镜像")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker search redis\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("拉取redis镜像")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker pull redis:5.0\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("创建容器，设置端口映射")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run -id --name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c_redis -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 redis:5.0\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("使用外部机器连接redis")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("./redis-cli.exe -h "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".149.135 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);