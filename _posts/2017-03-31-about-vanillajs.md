---
layout: post
title: "About Vanillajs"
excerpt: "what is vanillajs,and how to use it"
date:   2017-03-31 11:32:38 +0800
category: program
---

### 前言
无意中看到一个叫vanilla的框架，什么？又有一个框架，经过查询，好像还不是全新的，那么问题来了，这是个啥框架呢。官网：[vanillajs](http://vanilla-js.com/),一时好奇，还去wipedia找了一圈，看了描述，果断进入官网。官网这么描述：
    Vanilla JS is a fast, lightweight, cross-platform framework for building incredible, powerful JavaScript applications.

### 使用

+ 安装
进入官网，首先找到download，随便勾选了几个模块，what a fuck，未压缩版本大小是0kb，gipped是5b，![vanillals](/assets/img/vanilla.png);
先不管，还好没有什么使用包管理器来安装的，管他的，勾选几个，点击download，好了，确实还有个文件存在，打开一看，整个人瞬间不舒服了，这不就一空白文件么。
+ 文档
好吧，文件是空白就先不管了，看看document总可以吧，点击document竟然去了mozila，好，我现在知道他的文档在哪里了。那就算是原生的方法嘛，这个我还说服不了自己。
+ ？
官网竟然还有与其它框架的对比，什么鬼，看了一圈代码，就是原生的js，那么问题来了，这个框架到底想要做啥，还是说就是来逗的。还有一堆的性能比较，代码example。最喜剧是，在官网的最后，有这样一排字：
    or try out one of the many Vanilla JS [plugins](http://en.wikipedia.org/wiki/Comparison_of_JavaScript_frameworks).
### 尾巴
想来想去，我觉得还是要写这篇文章，而且放在了program这个栏目里，标题也是about vanilla，那么这个“框架”真的就是我们前端需要的吗？答案是肯定的，从一开始写前端的document.getElementById到后来的jquery的简单便捷的$，觉得jquery真的很方便，无论兼容还是方便性，都很不错，但是，后来，也就是这个时代，一大堆mv*框架诞生，在我的多个项目里，已经再难看到jquery的身影。曾经看到一篇文章，你也许并不需要jquery。看了过后很有感触，在现代浏览器里，我们享受了便捷的api，我们已经不需要jquery的一层层封装，但是，还有一个问题，我们还需要复杂的dom操作，怎么办呢？框架来了。想起之前做的h5的项目，除了引用了一个dom和一个手势的库之外，全部使用原生的js来书写，觉得世界好清静。