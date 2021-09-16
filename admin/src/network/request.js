import axios from 'axios'
// export function request(config){
//   // 创建axios实例
//   const instance = axios.create({
//     baseURL:'http://localhost:3000/admin/api',
//     timeout:5000
//   })
//   instance.interceptors.request.use(config=>{
//     console.log(config);
//     return 
//   },error=>{
//     return Promise.reject(error);
//   })
//   instance.interceptors.response.use(res=>{
//     return res.data
//   })
//   return instance(config)
// }
const http = axios.create({
  baseURL:'http://localhost:3000/admin/api',
  timeout:5000
});
export default http