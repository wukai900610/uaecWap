<template>
<div>
    <order v-if="$i18n.locale == 'zh'" />
    <orderEn v-else />
</div>
</template>

<script>
import order from "./order.vue";
import orderEn from "./orderEn.vue";

export default {
    components: {
        order,
        orderEn
    },
    data() {
        return {}
    },
    created() {},
}
</script>
<style scoped lang="scss">
</style>
