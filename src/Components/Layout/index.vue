<template>
<div class="layout">
    <slot name="header">
        <Header :class="headerCss" :isIndex="isIndex" :title="title" :customLeftClick="customLeftClick" />
    </slot>

    <!-- <van-skeleton title avatar :row="3" :loading="loading">
        <slot />
    </van-skeleton> -->
    <div class="flexWrap">
        <slot />
    </div>

</div>
</template>
<script>
import Util from "@/assets/service/customUtil";
import customRequest from "../../assets/service/customRequest";

import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export default {
    props: ['exhibitionName', 'isIndex', 'headerCss', 'title', 'customLeftClick'],
    components: {
        Header,
        // Footer
    },
    data() {
        return {
            loading: true,
            show: false
            // lan: Util.getsessionStorage('lang')
        }
    },
    methods: {
        setTitle() {
            if (this.$i18n.locale == 'zh') {
                document.title = this.$store.state.app.skin.headTitleZh;
            } else {
                document.title = this.$store.state.app.skin.headTitle;
            }
        },
        changeLang(lang) {
            this.$i18n.locale = lang;
            Util.setsessionStorage('lang', lang)
        }
    },
    created() {
        this.setTitle();
    },
    mounted(){
        // setTimeout(function () {
        //     this.loading = false
        // }.bind(this), 1000);
    },
    watch: {
        "$i18n.locale"() {
            this.lan = Util.getsessionStorage('lang');
            this.setTitle();
        }
    },
};
</script>
<style scoped lang="scss">
    .flexWrap{
        flex:1;
        overflow: auto;
    }
</style>
