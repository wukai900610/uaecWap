// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        'autoprefixer': {
            browsers: ['Android >= 4.0', 'iOS >= 7']
        },
        'postcss-pxtorem': {
            rootValue: 55,
            propList: ['*'],
            // selectorBlackList:[
            // 	'van-'
            // ]
        },
        "postcss-import": {},
        "postcss-url": {},
    }
}
