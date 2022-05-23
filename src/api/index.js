// const host = process.env.NODE_ENV === 'development' ? '' : 'https://8.140.36.65:5008'; // 如果是线上的话，用http://8.140.36.65:5006/  如果是本地的话就用 空字符串
const host = '';
const API = {
  loginApi: "/api/user/login",  //登录接口
  moodApi: '/api/mood',   //查询心情数据的接口
  moodTypeApi: '/api/mood/type', //查询心情类型的数据
  moodCreate: '/api/mood/create', //发布心情接口
  moodGiveFabulous: '/api/mood/givefabulous', //点赞和取消点赞
  commentApi: '/api/comment', //评论接口(查询和新增)
  replyApi: '/api/reply' //回复接口（查询和新增）
};
Object.keys(API).forEach(key => API[key] = host + API[key]);
export default API;


