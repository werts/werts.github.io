---
layout: post
title: "angular 子组件通知父组件undefined问题"
excerpt: "解决angular子组件通知父组件时，使用事件机制，父组件获取到的值为undefined的问题"
category: blog
tip: 解决angular子组件通知父组件时，使用事件机制，父组件获取到的值为undefined的问题
---

###问题描述
- 在子组件中使用下面的方法向父组件 通知时，预期输出id
```typescript
this.onQuery.emit(id);
```
- 组件中本以为在方法里使用id就可以了，但实际上由于id未定义，导致报错undefined，通过对文档的查看，发现，可以在组件中使用$event来实现，代码如下
```html
<component (onQuery)="onQuery($event)"></component>
```
- 在父组件中，onQuery就可以正常拿到id的值了
### 小结
使用typescript开发angular应用真的非常有趣，适合用于开发大型的应用，而且在未来进行升级和换代也是个非常不错的选择。未来的文章可能还会涉及到在angular应用中的总结的分享