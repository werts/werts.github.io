---
layout: posts
tags: angular
excerpt: 关于angular中的 `ViewChild` 装饰器
---

### 开始

最近也是在折腾angular，遇到了使用 `ViewChild` 的情况，从中文官网得到关于此装饰器的元信息的以下说明

selector - 用于查询的指令类型或名字。

read - 从查询到的元素中读取另一个令牌。

static - whether or not to resolve query results before change detection runs (i.e. return static results only). If this option is not provided, the compiler will fall back to its default behavior, which is to use query results to determine the timing of query resolution. If any query results are inside a nested view (e.g. *ngIf), the query will be resolved after change detection runs. Otherwise, it will be resolved before change detection runs.

### 问题

问题就在于上面的第二个属性，`read`，说明也不是那么清楚，怎么办呢，通过查询得到以下结论，记录下来

`read` 支持以下令牌

- RenderElement
- ElementRef
- TemplateRef
- ViewContainerRef
- Provider

有了以上的说明，接下来的事情就好办了。该做啥也清楚了。