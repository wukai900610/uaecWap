<template>
    <div class="wrap">
        <div class="View">
            <h5>{{lan == 'en' ? 'Choose the Status' : '请选择展会身份'}}</h5>
            <div style="text-align:center;" v-if="lan == 'en'">
                <router-link :to="{'name': 'userEnExhibitors',query:{code:$store.getters.skin.code,isExhibitor:1}}" class="button">
                    <van-button>Exhibitor</van-button>
                </router-link>
                <router-link :to="{'name': 'userEnExhibitors',query:{code:$store.getters.skin.code,isExhibitor:0}}" class="button">
                    <van-button>Visitor</van-button>
                </router-link>
            </div>
            <div style="text-align:center;" v-else>
                <router-link :to="{'name': 'ExhibitorAdd',query:{code:$store.getters.skin.code,isExhibitor:1}}" class="button">
                    <van-button>参展商</van-button>
                </router-link>
                <router-link :to="{'name': 'VisitorAdd',query:{code:$store.getters.skin.code,isExhibitor:0}}" class="button">
                    <van-button>观展商</van-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import customRequest from "@/assets/service/customRequest";
import Util from "@/assets/service/customUtil";

export default {
    data() {
        return {
            lan: Util.getsessionStorage('lang')
        }
    },
    methods: {},
    created() {
        if (this.$store.state.app.token) {
            // 判断是否有订单
            customRequest({
                method: 'get',
                url: '/WebProduct/GetMyList',
            }).then(result => {
                if (result.data.from.length > 0) {
                    this.$router.push({
                        name: 'UserCenter'
                    })
                }
            })
        }
    },
}
</script>

<style scoped lang="scss">
.wrap {
    overflow: auto;
    height: calc(100% - (140px + 357px));
    background: #fff;
    .View {
        h5 {
            text-align: center;
            font-size: 20px;
        }
        padding-bottom: 30px;
        .button {
            padding: 0 10px;
        }
    }
}
</style>
