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
    *content: 心情的内容，
    type: 心情的类型  NICE NORMAL BAD
}


## 查询心情数据的接口

url: /api/mood
method: GET
params: {
    content: 心情的内容,
    type: 心情的类型,
    pageSize: 一页的数据条数
    pageIndex: 第几页数据
    order: 根据发布事件的排序方式 Descend 降序  Aescend 升序
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
    id: 点赞和取消点赞的心情的id
}
** 注意：该接口实现了点赞和取消点赞的功能，如果当前用户还没有对该心情点赞，那么该接口的功能为点赞，如果当前用户已经给该心情点赞了，那么该接口执行的效果是取消点赞**
