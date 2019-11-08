import router from '@/router'
import store from '../../store'

let util = {}

util.domain = '';

util.title = function(title) {
    title = title ?
        title + ' - 联亚国际' :
        '联亚国际';
    window.document.title = title;
};

// newObj
util.getNewObj = function(obj) {
    return JSON.parse(JSON.stringify(obj));
}

//本地存储
util.setlocalStorage = function(key, value) {
    window.localStorage.setItem(key, window.JSON.stringify(value));
}
util.getlocalStorage = function(key) {
    return window.JSON.parse(window.localStorage.getItem(key));
}
util.removelocalStorage = function(key) {
    window.localStorage.removeItem(key);
}

//session本地存储
util.setsessionStorage = function(key, value) {
    window.sessionStorage.setItem(key, window.JSON.stringify(value));
}
util.getsessionStorage = function(key) {
    return window.JSON.parse(window.sessionStorage.getItem(key));
}
util.removesessionStorage = function(key) {
    window.sessionStorage.removeItem(key);
}

//cookie 设置
util.setCookie = function(name, value, Hours) {
    if (Hours == null || Hours == '') {
        Hours = 0.5;
    }
    var exp = new Date();
    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(window.JSON.stringify(value)) + "; path=/;expires=" + exp.toGMTString();
}

util.getCookie = function(name) {
    var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return window.JSON.parse(unescape(arr[2]));
    else
        return null;
}

util.removeCookie = function(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + "; path=/;expires=" + exp.toGMTString();
}

util.doLogin = (result,url) => {
    store.dispatch('set_token', result.data).then(() => {
        if(url){
            // 防止页面登陆成功后 进入子页面无法后退
            router.push({name:'home'}, () => {
                router.push(url)
            })
        }else{
            router.push({
                name: 'UserCenter'
            })
        }

    })
}

util.isNiCode = () => {
    // 尼日利亚
    let codes = ['an', 'nt', 'hn']
    let compire = codes.some(item => {
        return item == store.getters.skin.code
    });
    return compire
}

util.setContentHeight = () => {
    let cRight = document.getElementsByClassName('user-router')[0]
    let visiableHieght = window.innerHeight - 140 - 355

    if(visiableHieght > parseInt(cRight.offsetHeight) + 10){
        return visiableHieght + 'px'
    }
}

util.getCurrentHostInfo = () => {
    let currentInfo;
    for(var i in store.state.app.host){
        let item = store.state.app.host[i]
        if(item.code == store.state.app.skin.code){
            currentInfo = item
        }
    }

    return currentInfo
}

util.disableChineseRule = (value,callback,fieldTip) => {
    if (!value) {
        return callback(new Error(fieldTip));
    }else{
        // if(Util.getsessionStorage('lang') == 'zh'){
        //     if (escape(value).indexOf( "%u" ) < 0){
        //         // 没有包含中文
        //         return callback();
        //     } else {
        //         // alert( "包含中文" );
        //         return callback(new Error('字段内容不可以包含中文'));
        //     }
        // }else{
        //     return callback();
        // }
        return callback();
    }
},

util.rules = (_this) => {
    return {
        Name: [{
            validator: (rule, value, callback) => {
                util.disableChineseRule(value,callback,_this.$t('text.input') + _this.$t('form.CompanyName') + _this.$t('text.here'))
            },
            trigger: ['change','blur']
        }],
        Code: [{
            required: true,
            message: _this.$t('text.input') + _this.$t('form.ChooseFair') + _this.$t('text.here'),
            trigger: 'change'
        }],
        ManName: [{
            validator: (rule, value, callback) => {
                util.disableChineseRule(value,callback,_this.$t('text.input') + _this.$t('form.ContactPerson') + _this.$t('text.here'))
            },
            trigger: ['change','blur']
        }],
        ManPhone: [{
            validator: (rule, value, callback) => {
                if (!_this.form.ManPhoneCountryCode) {
                    callback(new Error(_this.$t('text.input') + _this.$t('form.CountryCode') + _this.$t('text.here')));
                } else if (!_this.form.ManPhone) {
                    callback(new Error(_this.$t('text.input') + _this.$t('form.Telephone') + _this.$t('text.here')));
                } else {
                    callback();
                }
            },
            trigger: ['change']
        }],
        WebSite: [{
            required: true,
            message: _this.$t('text.input') + _this.$t('form.Website') + _this.$t('text.here'),
            trigger: 'change'
        }],
        Description: [{
            validator: (rule, value, callback) => {
                util.disableChineseRule(value,callback,_this.$t('text.input') + _this.$t('form.CompanyDescription') + _this.$t('text.here'))
            },
            trigger: ['change','blur']
        }],
        Summary: [{
            validator: (rule, value, callback) => {
                util.disableChineseRule(value,callback,_this.$t('text.input') + _this.$t('form.CompanyDescription') + _this.$t('text.here'))
            },
            trigger: ['change','blur']
        }]
    }
}

//日期
Date.prototype.format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

export default util;
