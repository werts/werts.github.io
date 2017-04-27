---
layout: post
title: "Css Layout: flex and grid"
excerpt: "css layout: flex and grid"
date:   2017-04-27 15:30:38 +0800
category: program
---

### 前言
曾有java的同事抱怨说，css真复杂，复杂到想扔键盘。尤其是布局。布局，一个css重要的概念，为了布局，想了各种方法，比如经典的上下左右居中就有几种实现方式，可是，还是不怎么完美。那么随着代码的发展，css布局有没有更新的进展呢，答案是肯定的，最近也正好在折腾，所以总结下flex和grid布局。移动大潮拯救了前端，再也不用担心像IE一样的浏览器了。
### 使用
- flex
	flex：意思是弹性布局。为了实现flex，就像block一样，首先肯定是要转换盒子模型。
```css
.box{
	display:flex;
	display:-webkit-flex;
	display:-ms-flexbox;
}
```

	当然也可以转换为行内flex，只需要加上inline前缀就可以了，感觉好简单的样子。
	上面的操作就把box转换为了flex容器，有了容器，现在是放子元素。flex容器都支持哪些属性呢。

	- flex-direction

	- flex-wrap
	- flex-flow
	- justify-content
	- align-items
	- align-content


- grid
### 尾巴
最近赶上事情相对较少，开始折腾下博客，一直用oneNote做笔记。