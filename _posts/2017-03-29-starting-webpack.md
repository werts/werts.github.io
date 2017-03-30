---
layout: post
title: "Starting webpack"
excerpt: "Get started with webpack"
date:   2017-03-29 11:32:38 +0800
category: program
---

### 前言
一直在使用grunt和gulp，后来发现了webpack，webpack是什么就不在这里描述了，看了下webpack官方的说明，主要是bundle功能，这看起来gulp和grunt都可以实现，但是配合着loader，就可以做好多事情，有人可能会说了，这不是gulp和grunt都能实现么，对，都可以实现，那么问题来了，为什么要选择webpack呢，如果把两个工具的官方文档都看一遍的话，可以发现，gulp更着重于前端工作流的构建，而webpack则偏向于模块处理。公司之前的项目以seajs的cmd模块为主，于是使用了grunt和gulp来处理模块，但是对于模块依赖的处理在看了webpack后感觉就不太满意了。最近一段时间内公司主要在使用mvvm的框架来进行开发，主要使用了angular和vue，由于是单页应用，并且是基于模块化的，另外，vue还使用了es6及单vue文件的开发方式，使用webpack瞬间觉得世界安静了。好，废话说了一大堆，直接进项目。
由于是公司内部项目，源码和项目结构就不拿出来了，以demo为例，如果有不合适或者错误的地方，欢迎心底吐槽（联系不到我的哦   w-w， 我不会说可以通过邮件或者github找到我的）
### 使用
+ 安装webpack
+ 项目结构示意（angular）


### 尾巴