import axios from 'axios'
import { Toast } from 'vant'
import store from '../../store'
import Util from "@/assets/service/customUtil";
import {
    messages
}
from "../api/i18n/";
// 创建axios实例
const service = axios.create({
    baseURL: '/api', // api的base_url
    withCredentials: true,
    timeout: 100000 // 请求超时时间
})

service.interceptors.request.use(config => {
    if (Util.getsessionStorage('token')) {
        config.headers['Authorization'] = Util.getsessionStorage('token')
    }
    if (config.method == 'post') {
        config.data = {
            ...config.data,
            code: store.getters.skin.code
        }
    } else if (config.method == 'get') {
        config.params = {
            code: store.getters.skin.code,
            ...config.params
        }
    } else if (config.method == 'put') {
        config.data = {
            ...config.data,
            code: store.getters.skin.code
        }
    }
    return config
}, error => {
    // console.log(error)
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    result => {
        let lang = Util.getsessionStorage('lang')
        const res = result.data
        if (res.code.toString().indexOf('2') != 0) {
            if (res.code === 503 || res.code === 50012 || res.code === 50014) {
                store.dispatch('out_login').then(() => {
                    location.reload() // 为了重新实例化vue-router对象 避免bug
                })

            } else {
                if (messages[lang || 'en'].errorTips[res.code]) {
                    // MessageBox.confirm(messages[lang || 'en'].errorTips[res.code], messages[lang || 'en'].prompt.prompt, {
                    //     confirmButtonText: messages[lang || 'en'].prompt.determine,
                    //     cancelButtonText: messages[lang || 'en'].prompt.cancel,
                    //     type: 'warning'
                    // })

                    Dialog.alert({
                        title: messages[lang || 'en'].errorTips[res.code],
                        message: messages[lang || 'en'].prompt.prompt,
                        confirmButtonText: messages[lang || 'en'].prompt.determine,
                        cancelButtonText: messages[lang || 'en'].prompt.cancel,
                    })
                } else {
                    Toast.fail(res.msg)
                    // Message({
                    //     message: res.msg,
                    //     type: 'error',
                    //     duration: 5 * 1000
                    // })
                }
            }
            return Promise.reject(res)
        } else {
            if (messages[lang || 'en'].sTips[res.code]) {
                return Dialog.alert({
                    title: messages[lang || 'en'].sTips[res.code],
                    message: messages[lang || 'en'].prompt.prompt,
                    confirmButtonText: messages[lang || 'en'].prompt.determine,
                    cancelButtonText: messages[lang || 'en'].prompt.cancel,
                }).then(() => {
                        if (res.code == '242' || res.code == 212 || res.code == 222 || res.code == 232) {
                            location.reload()
                        } else {
                            return res
                        }
                    })
                    .catch(_ => {
                        if (res.code == '242' || res.code == 212 || res.code == 222 || res.code == 232) {
                            location.reload()
                        } else {
                            return res
                        }
                    })
            } else {
                return res
            }
        }
    },
    error => {
        // console.log('err' + error)
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
