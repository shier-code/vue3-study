
import axios from 'axios';
axios.all([
    axios.get('get', { params: { name: 'shier', age: 19 } }),
    axios.post('post', { data: { name: "shier" } })
]).then(res => {
    console.log(res[0].data, res[1].data);
})
axios.interceptors.request.use(
    (config) => {
        //请求成功
        return config
    },
    (err) => {
        //请求失败
        return err
    }
)

axios.interceptors.response.use(
    (config) => {
        //响应成功
        return config
    },
    (err) => {
        //响应失败
        return err
    }
)
