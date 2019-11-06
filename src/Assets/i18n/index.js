// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'vant/lib/locale/lang/en-US';
import zhLocale from 'vant/lib/locale/lang/zh-CN';
import esLocale from 'vant/lib/locale/lang/es-ES';

import en from './en';
import zh from './zh';
import es from './es';

const messages = {
    en: {
        ...enLocale,
        ...en
    },
    zh: {
        ...zhLocale,
        ...zh
    },
    es: {
        ...esLocale,
        ...es
    }
}
export {messages};
