NPM 使用介绍

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

允许用户从NPM服务器下载别人编写的第三方包到本地使用。
允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

npm -v 

####使用 npm 命令安装模块

npm 安装 Node.js 模块语法格式如下：

> npm install <Module Name>

####全局安装与本地安装

npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如

>npm install express          # 本地安装
 npm install express -g   # 全局安装
 
 如果出现以下错误：
> npm err! Error: connect ECONNREFUSED 127.0.0.1:8087 
 解决办法为：
> npm config set proxy null

####本地安装
1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
2. 可以通过 require() 来引入本地安装的包。

####全局安装
1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
2. 可以直接在命令行里使用。

####你可以使用以下命令来查看所有全局安装的模块：

> npm ls -g

####卸载模块
>npm uninstall express
>npm ls

####更新模块

>npm update express

####搜索模块

>npm search express

####版本号

使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码，这里简单介绍一下。
语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

 * 如果只是修复bug，需要更新Z位。
* 如果是新增了功能，但是向下兼容，需要更新Y位。
* 如果有大变动，向下不兼容，需要更新X位。

版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如"argv": "0.0.x"表示依赖于0.0.x系列的最新版argv。

####NPM 常用命令

>NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
 使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
 在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
 使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
 使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
 使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
 使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。
 
 ####使用淘宝 NPM 镜像
 
 大家都知道国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。
 淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。
 你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
 
 >npm install -g cnpm --registry=https://registry.npm.taobao.org
 
 这样就可以使用 cnpm 命令来安装模块了：
 
 > cnpm install [name]