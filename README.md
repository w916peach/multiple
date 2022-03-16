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