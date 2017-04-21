---
layout: post
title: "angular2 component communication"
excerpt: "最近在做一个后台管理系统,使用了angular2，组件化的设计就必然带来了组件间通信的问题，现在学习到组件通信，记录一下。"
date:   2017-04-21 11:32:38 +0800
category: program
tags: 'angular2'
---

### 前言
最近在做一个后台管理系统,使用了angular2，组件化的设计就必然带来了组件间通信的问题，文中主要有父子组件间的通信，非直接父子组件关系的通信。
- [通过输入型属性将数据从父组件传递到子组件](#p2c)
- [使用输入赋值来拦截属性变化](#setter)
- [使用ngOnChanges()拦截变化](#ngonchanges)
- [使用服务进行通信](#service)
- [在父组件中使用@viewChild](#viewchild)
- [父组件调用子组件的事件](#pec)
- [父组件和子组件通过本地变量互动](#plocalc)
### 使用
<a name="p2c"></a>
#### 通过输入型属性将数据从父组件传递到子组件
<a name="setter"></a>
#### 使用输入赋值来拦截属性变化
<a name="ngonchanges"></a>
#### 使用ngOnChanges()拦截变化
<a name="service"></a>
#### 使用服务进行通信
<a name="viewchild"></a>
#### 在父组件中使用@viewChild
<a name="pec"></a>
#### 父组件调用子组件的事件
<a name="plocalc"></a>
#### 父组件和子组件通过本地变量互动
### 尾巴
