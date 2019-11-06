<template>
<div class="iframe wrap">
    <iframe v-if="iframe" :src="iframe">

    </iframe>
</div>
</template>

<script>
import Util from "@/assets/service/customUtil";

export default {
    name: "iframe",
    data() {
        return {
            iframe: ''
        }
    },
    created() {
        this.iframe = this.$route.query.iframe
    },
    watch: {
        '$route'() {
            if (this.$route.query.iframe) {
                this.iframe = this.$route.query.iframe
            } else {
                if (Util.getsessionStorage('lang') == 'zh') {
                    this.iframe = '/Users/AbroadSelf.aspx'
                } else {
                    this.iframe = '/Users/AbroadSelfEn.aspx'
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
.iframe {
    width: 100%;
    overflow: hidden;
    iframe {
        width: 100%;
        min-height: 900px;
    }
}
</style>
