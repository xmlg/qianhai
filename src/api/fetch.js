import axios from 'axios'

/**
 * 简单封装请求方法
 *
 * @export
 * @param {any} opt
 * @returns {Promise}
 */

// const serviceHttp = axios.create({
//     baseURL: process.env.API_ROOT, // 接口的域名地址
//     // timeout: 5000,
//     withCredentials: true,
//     headers: { 'Content-Type': 'application/json;charset=utf-8' }
// })

// 添加一个请求拦截器 一般用于验证是否登陆
axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    // Do something with response error
    return Promise.reject(error);
});


axios.interceptors.response.use((response) => {
    return response;
}, function(error) {
    return Promise.reject(error);
});

export default function fetchUtil(opt) {

    const { method = 'get', params, url } = opt
    const param = method === 'get' ? {
        params
    } : params
    return new Promise((resolve, reject) =>
        axios[method](url, param)
        .then(({ data }) => {
            console.log(data, '回来的手机')
            if (data.ISSUCCESS == "false") { //重定向
                window.location = '/login'
            }
            resolve(data)
        })
        // .catch(error => reject(error)))
        .catch(error => {
            console.log(error)
            reject(error)
        }))
}