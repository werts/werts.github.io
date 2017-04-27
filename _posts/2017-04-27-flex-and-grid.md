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
		支持四个值：row;row-reverse;column;column-reverse;这个很好理解，就是子元素的排列方向。
	- flex-wrap
		支持四个属性：wrap;no-wrap;wrap-reverse;用来声明子元素的排列，如果一行放不下，使用了wrap属性，将会换行。同样的，nowrap就是不换行。wrap-reverse也就很好理解了，换行后在第一行在上方。
	- flex-flow
		就是flex-direction和flex-wrap的简写。
	- justify-content
		支持五个属性，设置横向对齐方式。center（居中对齐）; flex-end（右对齐）; flex-start（左对齐）; space-around（两端对齐）; space-between（子元素左右间距相等）;
	- align-items
		支持五个属性,设置纵向对齐方式。flex-start（顶部对齐）; flex-end（底部对齐）  center （垂直居中）; baseline(子元素的文字第一行对齐);stretch（如果没有设置高度，将会使用这个值，也就是auto，纵向拉伸）
	- align-content
		支持六个属性。flex-end;center;flex-start;space-around;space-between;stretch。

	定义完容器，看一下子元素的定义。
	- order
		用以声明子元素排序，越小越靠前，默认是0.
	- flex-grow
		声明子元素的放大比例，默认是0，如果能设置为1，则均分。
	- flex-shrink
		子元素既然有放大，就有缩小。默认是1，不支持负值。
	- flex-basis
		子元素占据的空间。
	- flex
		flex-grow、flex-shrink、flex-basis的简写。
	- align-self
		定义自身的对齐，可以覆盖align-items。
- grid
	既然上面提到了flex，最近又发现了一个东西：grid，而且网上教程也很多，但那有啥用呢，我自己要记录下来，同样的，和flex一样，也有两个概念，为了和网上的一致呢，我也把子元素叫项目，谁叫英文叫item呢。grid也有两个东西，容器和项目。同样的，首先定义容器为grid。
```css
.box{
	display:grid;
}
```
	这样一来，所有的子元素就变为了网格元素。

### 尾巴
最近赶上事情相对较少，开始折腾下博客，一直用oneNote做笔记，现在开始同时记录下博客。有了flex，感觉要实现上下左右居中、布局网格so easy。