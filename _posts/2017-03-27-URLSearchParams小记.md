---
layout: post
title: "URLSearchParams"
excerpt: "URLSearchParams，一个方便的处理URL参数的方法"
date:   2017-03-27 14:32:38 +0800
category: program
---

### 前言
最近在项目里遇到了处理jquery.serialize()后的参数的问题，想把序列化后的参数转换成对象，原来自己写了一个，后来发现竟然有这样一个现成的方法可以用，那就是URLSearchParams()，初步使用了一下，还不错，查询了浏览器的支持情况，还比较少，考虑到用在内部系统，且都是使用现代浏览器，就果断用了。

### 使用
按惯例，先上代码。
```js
var paramStr = 'hello=world&foo=bar';
//构造方法
var params = new URLSearchParams(paramStr);
//追加查询参数  'hello=world&foo=bar&werts=we'
params.append('werts', 'we'); //支持chrome 49以上、火狐、opera

//按键名删除一个参数 'hello=world&foo=bar'
params.delete('werts'); //支持chrome 49以上、火狐、opera

//获取到参数串的所有键值对，返回一个叠代器（iterator），至于什么是iterator，看我另外一遍文章
for(var pair of params.entries()){
	console.log(pair);//["hello", "world"] ["foo", "bar"]
}

//按键名获取，该方向返回匹配到的第一个值
params.get('foo'); //bar

//按键名获取，不过返回所有匹配的值
params.append('foo', 'bar.bak');
params.getAll('foo'); //['bar', 'bar.bak']

//检测某个值是否存在，返回布尔型
params.has('werts'); //false

//返回参数中的所有键, 同样的，也是返回iterator
for (var key of params.keys()){
	console.log(key) // hello foo foo
}

//为某个键设置值，如果有多个相同的键，就删除其它的，如果给的键不存在，将会创建一个
params.set('foo', '123'); //foo:123
params.set('hi', 'world');  //新增bi=world

//转化为URL串
params.toString();

//返回参数中的所有值，同样的，返回也是一个iterator
for (var value of params.values()){
	console.log(value); //world bar bar.bak world
}
```
### 尾巴
URLSearchParams固然强大，但单纯的实现对url查询串的操作的话，原来 不需要这样一个实验性的方法，因为目前在项目中也有实现了的，作为学习，就把URLSearchParams中所支持的操作进行一个记录。