<template>
<header class="header">
    <div v-if="isIndex" class="head">
        <slot>
            {{headTitle}}
        </slot>
        <slot name="right"></slot>
    </div>
	<van-nav-bar v-else :title="headTitle" :left-text="$t('header.back')" left-arrow @click-left="onClickLeft" />
</header>
</template>

<script>
import Util from "@/assets/service/customUtil";

export default {
    props: ['isIndex','title','customLeftClick'],
    data() {
        return {
            headTitle: this.title || (this.$i18n.locale == 'zh' ? this.$store.state.app.skin.headTitleZh : this.$store.state.app.skin.headTitle)
        }
    },
	methods: {
		onClickLeft(){
			if(this.customLeftClick){
				this.customLeftClick();
			}else{
                console.log(history.length);
                // if(history.length <=0){
                //     this.$router.push({
                //         name:'home'
                //     });
    			// }else{
    			// }
				this.$router.back();
			}
		}
    },
}
</script>
<style scoped lang="scss">
// .head {
//     .right {
//         position: absolute;
//         right: 0;
//         top: 0;
//         bottom: 0;
//         display: flex;
//         // justify-content: center;
//         // align-items: center;
//         .search {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             padding: 0 0.3rem;
//             height: 100%;
//             color: #fff;
//         }
//     }
// }
</style>
