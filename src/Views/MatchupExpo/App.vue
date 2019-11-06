<template>
<Layout>
    <div class="container">
        <router-view></router-view>
    </div>
</Layout>
</template>

<script>
import Layout from "@/components/Layout";

export default {
    data() {
        return {}
    },
    components: {
        Layout,
    }
}
</script>
