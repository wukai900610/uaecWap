<template>
<div>
	<van-list :immediate-check="false" v-model="cLoading" :finished="cFinished" finished-text="没有更多了" @load="onLoad">
		<slot :cList="cList">
			<van-cell v-for="(item, index) in cList" :key="index">
				<!-- 默认列表 -->
				<router-link :to="{name:'ListDetailPage',params:{id:item.id}}">{{item.title}}</router-link>
			</van-cell>
		</slot>
	</van-list>
</div>
</template>

<script>
import Util from "@/assets/service/customUtil";

export default {
	props: ['loading', 'finished', 'list', 'onLoad'],
	data() {
		return {
			cList: this.list,
			cLoading: this.loading,
			cFinished: this.finished,
		}
	},
	methods: {
	},
	watch: {
		list(val) {
			this.cList = val
		},
		loading(val) {
			this.cLoading = val
		},
		finished(val) {
			this.cFinished = val
		}
	},
	mounted: function() {
		// console.log(this.$route);
	},
	components: {}
}
</script>
<style scoped lang="scss">
.van-cell {
    line-height: 0.5rem;
    a {
        display: block;
        font-size: 0.28rem;
    }
}
</style>
