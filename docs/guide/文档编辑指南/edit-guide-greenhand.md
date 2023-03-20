---
title: 编辑指南-新手
sidebar_position: 100
last_update:
  author: 蒯美政
---

# 编辑指南-新手

提交文档到 蒯美政，将由知识库管理方进行编辑提交。也可以按照以下教程学习 git 操作提交。

------



## 1、注册 gitlab 账号

将注册好的 gitlab 邮箱账号发送给 蒯美政，然后会拉你进团队。提示：请用公司的 dingtalk 邮箱注册。

## 2、知识库的仓库地址

此时可以查看到知识库 git 仓库地址：

https://gitlab.shushangyun.com/design/ssy-wiki

## 3、新建终端命令窗口

鼠标右键想要存放wiki知识库目录的文件夹，然后选择 `新建位于此文件夹目录的终端窗口`

输入以下命令：

```
git clone https://gitlab.shushangyun.com/design/ssy-wiki
```

输入完成后，按下 `Enter` 回车键，将下载仓库文件到本地。

## 4、初始化 git

```
git init
```

## 5、使用 Typora 编辑

进入到对应的文件，选择 `xx.md` 文件用 Typora 编辑保存。

文档目录在 `/docs` 文件夹下，除了 `/docs` ，其他的文件都不要动。

包含以下内容：

```
/docs
	/guide			知识库指南
	/tools		工具方法
	/industry	行业竞品
	/business	商业研究
	/analysis	需求分析
	/design		需求设计
	/handoff	需求交付
	/develop	开发实现
	/testing	验收测试
	/improve		验证改良
	/linkseeks			瓴犀业务
	/pro-platform		能力中心
```

## 6、本地预览

这一步也可以跳过，如果要使用的话，请先新建位于网站根目录的终端命令窗口，安装 npm 包

```text
npm install 
```

安装完成后，在终端命令窗口输入以下命令，即可本地预览自己更改的线上效果。

本地预览地址：[http://localhost:3000](http://localhost:3000/) 。

```text
yarn start
```

## 7、提交内容到 git

提示：如果你已经运行了本地预览的终端命令窗口，你需要另外新建一个终端命令窗口进行以下操作。

##### 1、拉取代码

即将仓库里的代码更新到本地（新建一个位于文件夹位置的终端窗口进行操作）

```text
git pull origin master
```

##### 2、提交本次更新的目录

```text
git add .
```

##### 3、说明本次修改了什么

```text
git commit -m ‘添加了新内容’
```

##### 4、提交更新

```text
git push origin master
```

## 编辑工具推荐

新手/非技术人员：Typora

技术人员：Visual Studio Code、WebStorm

也可以混合使用，比如在 Typora，然后在 Visual Studio Code 中调试。

## Markdown 文档模版

##### 基础用法

在这里可以查看一些 Markdown 中的基础排版样式用法。

[点击查看文档模版](../文档样式指南/示例基础样式)

##### 高级用法

可以在文档中嵌入很多组件。

[点击查看文档模版](../文档样式指南/通知提醒框)
