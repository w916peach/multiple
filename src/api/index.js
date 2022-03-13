const host = process.env.NODE_ENV === 'development' ? '' : 'https://multiple.vercel.app'; // 如果是线上的话，用https://multiple.vercel.app/  如果是本地的话就用 空字符串
const API = {
  loginApi: "/api/user/login",
  moodApi: '/api/mood',
  moodTypeApi: '/api/mood/type',
  moodCreate:'/api/mood/create'
};
Object.keys(API).forEach(key => API[key] = host+API[key]);
export default API;


