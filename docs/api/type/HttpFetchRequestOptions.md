用于HTTP发送外部请求时提供的参数

## 属性
- <docs-icon icon="property">timeout</docs-icon>?: <docs-def>number</docs-def> 选填，超时时间；若请求所需时间超过此值，请求会被终止（类似于你访问一些网站时显示 xxx 的响应时间过长。）
- <docs-icon icon="property">method</docs-icon>?: `#!javascript 'OPTIONS'` | `#!javascript 'GET'` | `#!javascript 'HEAD'` | `#!javascript 'PUT'` | `#!javascript 'POST'` | `#!javascript 'DELETE'` | `#!javascript 'PATCH'` 请求方式
- <docs-icon icon="property">headers</docs-icon>?: <docs-def>GameHttpFetchHeaders</docs-def> 请求头
- <docs-icon icon="property">body</docs-icon>?: <docs-def>string</docs-def> | <docs-def>ArrayBuffer</docs-def> 请求内容