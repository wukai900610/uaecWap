<template>
<div>
    <SignIn v-if="$i18n.locale == 'zh'" />
    <SignInEn v-else />
</div>
</template>

<script>
import SignIn from "./SignIn.vue";
import SignInEn from "./SignInEn.vue";

import Util from "@/assets/service/customUtil";

export default {
    components: {
        SignIn,
        SignInEn
    },
    data() {
        return {
        }
    },
    created() {
    },
}
</script>
<style scoped lang="scss">
.router-wrap {
    height: calc(100% - (140px + 357px));
}
</style>
