---
layout: post
title: "Get started with typescript"
excerpt: "typescript 小笔记，这里有一个小开始"
date:   2017-04-23 11:32:38 +0800
category: program
---

### 前言
既然最近在写angular2的项目，选择技术的那一天，感觉还是有好多的有意思的地方，angular2官方竟然使用typescript来开发的，考虑到typescript是js的一个超集，并且有了类型，支持静态类型检查、异步功能和Decorators。从此以后，编译时就可以做检查，语法 so easy。
### 使用
#### 接口
- 接口说明
```typescript
interface Square{
	width:number,
	height:number
}
function shape(config: Square) :{width:number, height:number} {
	
}
```
- 可选属性（使用?号）
```typescript
interface Square{
	width?:number
}
```
- 只读属性（使用readonly）
```typescript
interface Square{
	readonly width:number
}
```
-  
#### 泛型
#### 枚举
#### 装饰器
### 尾巴