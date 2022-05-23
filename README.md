# 已经实现的接口文档

## 登录接口

url: /api/user/login
method: POST
data: {*username: 用户名, *password: 密码}
response: {tokern, msg}

## 发布心情接口

url: /api/mood/create
method: POST
headers: {
Authorization: token
}
data: {
\*content: 心情的内容，
type: 心情的类型 NICE NORMAL BAD
}

## 查询心情数据的接口

url: /api/mood
method: GET
params: {
content: 心情的内容,
type: 心情的类型,
pageSize: 一页的数据条数
pageIndex: 第几页数据
order: 根据发布事件的排序方式 Descend 降序 Aescend 升序
}

## 查询心情类型的数据

url: /api/mood/type
method: GET

## 点赞和取消点赞

url: /api/mood/givefabulous
method: POST
headers: {
Authorization: token
}
data: {
uid: 当前登录的用户-也可以理解为执行点赞和取消点赞的用户
id: 点赞和取消点赞的心情的 id
}
** 注意：该接口实现了点赞和取消点赞的功能，如果当前用户还没有对该心情点赞，那么该接口的功能为点赞，如果当前用户已经给该心情点赞了，那么该接口执行的效果是取消点赞**

## 评论接口（新增）

url: /api/comment
method: POST
headers: {
Authorization: token
}
data: {
content: 评论内容
mood: 被评论的心情 id
}

## 评论接口（查询）

url: /api/comment
method: GET
headers: {
Authorization: token
}
query: {
mood: 被评论的心情 id
}

## 回复接口（新增）

url: /api/reply
method: POST
headers: {
Authorization: token
}
data: {
content: 评论内容
comment: 被回复的评论的 id
listener: 被回复的人 uid
}

## 回复接口（查询）

url: /api/reply
method: GET
headers: {
Authorization: token
}
data: {
comment: 被回复的评论的 id
}

# 目录结构

/api/proxy.js 线上环境做一个代理
/dist/ 前端打包后生成的静态资源文件
/src 源码目录
api/index.js 所有的接口
assets 静态文件
components 通用组件
pages 路由组件
register 注册组件
login 登录组件
main 主体组件(暂时未用)
mood 心情管理组件
publish 发布心情组件
router 路由配置目录
utils 工具方法目录
request.js 基于 XMLHttpRequest 封装的一个公共的请求方法
storage.js 封装了本地存储相关的操作
App.vue 根组件
main.js 入口文件

## 接口的请求

在开发环境下 在 `vue.config.js`文件中配置的代理
在生产环境下 在 `/api/proxy.js`文件中配置的代理

为什么要配置代理？

vue 项目部署的服务器 和接口部署的服务器不是同一个服务器，会有跨域的影响。

项目的线上地址： https://multiple.vercel.app/mood
