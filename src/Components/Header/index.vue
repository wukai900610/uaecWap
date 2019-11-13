<template>
<header class="header">
    <div v-if="isIndex" class="head">
        <div class="left">
            <span class="changeLan" @click="popup.show = true">
                <van-icon :name="popup.show ? 'cross' : 'wap-nav'" />
            </span>
        </div>
        <slot>
            {{headTitle}}
        </slot>
        <slot name="right"></slot>
    </div>
    <van-nav-bar v-else :title="headTitle" :left-text="$t('header.back')" left-arrow @click-left="onClickLeft" />
    <van-popup v-model="popup.show" lazy-render round position="left" closeable :style="{width: '35%',height:'85%' }">
        <van-radio-group v-model="$i18n.locale">
            <van-cell-group class="popupRadio">
                <van-cell v-for="(item, index) in popup.lans" :title="item.name" :key="index" clickable @click="changeLan(item)">
                    <van-radio slot="right-icon" :name="item.value" />
                </van-cell>
            </van-cell-group>
        </van-radio-group>
    </van-popup>
</header>
</template>

<script>
import Util from "@/assets/service/customUtil";

export default {
    props: ['isIndex', 'title', 'customLeftClick'],
    data() {
        return {
            headTitle: this.title || (this.$i18n.locale == 'zh' ? this.$store.state.app.skin.headTitleZh : this.$store.state.app.skin.headTitle),
            popup: {
                show: false,
                lans:[{
                    name:'中文',
                    value:'zh'
                },{
                    name:'English',
                    value:'en'
                }]
            }
        }
    },
    methods: {
        changeLan(item) {
            this.popup.show = false
            this.$i18n.locale = item.value
            Util.setsessionStorage('lang',item.value)

            this.headTitle = this.title || (this.$i18n.locale == 'zh' ? this.$store.state.app.skin.headTitleZh : this.$store.state.app.skin.headTitle)
        },
        onClickLeft() {
            // 自定义返回方法
            if (this.customLeftClick) {
                this.customLeftClick()
                return false;
            }
            if (window.history.length <= 1) {
                this.$router.relpace({
                    name: 'home'
                })
            } else {
                this.$router.back(-1)
            }
        }
    },
}
</script>
<style scoped lang="scss">
.popupRadio{
    margin-top: .8rem;
}
.head {
    position: relative;
    padding: 0 0.8rem;
    .left {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        display: flex;
        .changeLan {
            display: flex;
            padding: 0 0.25rem;
            justify-content: center;
            align-items: center;
        }
    }
    // .right {
    //     position: absolute;
    //     right: 0;
    //     top: 0;
    //     bottom: 0;
    //     display: flex;
    //     // justify-content: center;
    //     // align-items: center;
    //     .search {
    //         display: flex;
    //         justify-content: center;
    //         align-items: center;
    //         padding: 0 0.3rem;
    //         height: 100%;
    //         color: #fff;
    //     }
    // }
}
</style>
