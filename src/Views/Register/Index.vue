<template>
<div>
    <SignUp v-if="$i18n.locale == 'zh'" />
    <SignUpEn v-else />
</div>
</template>

<script>
import SignUp from "./SignUp.vue";
import SignUpEn from "./SignUpEn.vue";

import Util from "@/assets/service/customUtil";

export default {
    components:{
        SignUp,
        SignUpEn
    },
    data() {
        return {
        }
    },
}
</script>
<style scoped lang="scss">
    .router-wrap{
        height: calc(100% - (140px + 357px));
    }
</style>
