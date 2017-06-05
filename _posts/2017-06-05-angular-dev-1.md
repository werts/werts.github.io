---
layout: post
title: "angular4 dev log 1"
excerpt: "angular4 dev log 1"
category: blog
tip: 解决angular4开发中出现的问题，定位问题出现的解决方案
---

###问题描述

- console error:

```html
Uncaught Error: Can't resolve all parameters for useFactory: (?, ?, ?, ?)
```
- 问题出现原因

  在使用了http自定义拦截器后，需要在module中使用，代码片段：

  ``` javascript
  {
      provide: Http,
      useFactory: (slimLoadingBarService: SlimLoadingBarService,
         toasterService: ToasterService,
         backend: XHRBackend,
         options: RequestOptions) => {
           return new HttpService(slimLoadingBarService, toasterService, backend, options);
         }
   }
  ```

  经过对代码的审查和angular中API的描述，定位问题，缺少依赖描述，加上就对了

  ```javascript
  deps: [SlimLoadingBarService, ToasterService, XHRBackend, RequestOptions]
  ```

- 问题回顾

  经过对API的查看，本问题实际是API没有写全的原因，但是确比较难定位，因此记录，方便有相同问题出现的coder参考。PS:这个问题如果从stackoverflow上查找的话，真的好麻烦的。