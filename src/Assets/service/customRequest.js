import axios from 'axios'
import Qs from 'qs'
import { Toast } from 'vant'
import Util from "@/assets/service/customUtil";
import store from '../../store'
import {
    messages
}
from "@/assets/i18n/";
// 创建axios实例
const service = axios.create({
    baseURL: '/api', // api的base_url
    withCredentials: true,
    // responseType: 'json',
    // transformRequest: [function(data) {
    //     data = Qs.stringify(data);
    //     return data;
    // }],
    timeout: 300000 // 请求超时时间
})

service.interceptors.request.use(config => {
    let lang = Util.getsessionStorage('lang')
    if (Util.getsessionStorage('token')) {
        config.headers['Authorization'] = Util.getsessionStorage('token')
    }
    if (config.method == 'post') {
        config.data = {
            code: store.getters.skin.code,
            ...config.data,
            lan: lang
        }
    } else if (config.method == 'get') {
        config.params = {
            code: store.getters.skin.code,
            ...config.params,
            lan: lang
        }
    } else if (config.method == 'put') {
        config.data = {
            code: store.getters.skin.code,
            ...config.data,
            lan: lang
        }
    }
    return config
}, error => {
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    result => {
        let lang = Util.getsessionStorage('lang')
        const res = result.data
        // 前中后英
        let msgs = res.msg.split('::')
        // 263:消息管理页面标记消息已读未读
        // 243:展会管理页面提交信息
        if (res.code == 200 || res.code == 263 || res.code == 243) { //正常
            return Promise.resolve(res);
        } else {
            Toast.fail(lang == 'en' ? (msgs[1] || res.msg) : (msgs[0] || res.msg))
        }

        return Promise.reject();
    },
    error => {
        // 连接失败
        Toast.fail(messages[lang || 'en'].errorTips['other'])

        return Promise.reject(error)
    }
)
service.addornUrl = (actionName) => {
    return process.env.API_URL + actionName;
}

service.buildPdf = () => {
    return process.env.API_URL + 'company/buildPdf';
}

export default service
