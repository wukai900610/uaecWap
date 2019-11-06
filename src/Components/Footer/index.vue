<template>
    <div>
        <!-- <div class="footer1 footer" :style="{background:$store.state.app.skin.background}" v-if="$store.state.app.skin.code == 'hn'">
            <Footer-common :lang="lang"/>
        </div>
        <div class="footer2 footer" :style="{background:$store.state.app.skin.background}" v-if="$store.state.app.skin.code == 'nt'">
            <Footer-nt :lang="lang"/>
        </div>
        <div class="footer1 footer" :style="{background:$store.state.app.skin.background}" v-if="$store.state.app.skin.code == 'an'">
            <Footer-an :lang="lang"/>
        </div>
        <div class="footer2 footer" :style="{background:$store.state.app.skin.background}" v-if="$store.state.app.skin.code == 'hc'">
            <Footer-hc :lang="lang"/>
        </div> -->
    </div>
</template>
<script>
import FooterCommon from "./FooterCommon.vue";
import FooterNt from "./FooterNt.vue";
import FooterCc from "./FooterCc.vue";
import FooterAn from "./FooterAn.vue";
import FooterHc from "./FooterHc.vue";

export default {
    props:['lang'],
    data() {
        return {}
    },
    components: {
        FooterCommon,
        FooterNt,
        FooterCc,
        FooterAn,
        FooterHc,
    }
}
</script>
<stylescoped lang='scss'>

</style>
